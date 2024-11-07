import React, {
    useRef,
    useEffect,
    useCallback,
    useState,
    useLayoutEffect,
} from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { Grid, Switch, DialogContent } from "@material-ui/core";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { useSpring, animated } from "react-spring";
import { OptionsSlider } from "../profile/OptionsSlider";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import Axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import date from "date-and-time";
import { UserInfoUpdatePROFILE } from "../log/actions/UserdataAction";
import { UserInfoUpdateBILLBOARD } from "../log/actions/UserdataAction";
import { usePalette } from "react-palette";
import { UpdateColorAction } from "../GlobalActions";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { UpdateUploadData } from "../GlobalActions";
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from "@mui/icons-material/Circle";
import CropIcon from '@mui/icons-material/Crop';
import Slider from "@material-ui/core/Slider";
import { TaskbarSuperphotoImageView } from "./TaskbarSuperphotoImageView";
import { FilterThumb } from "./FilterThumb";
import { TaskbarText } from "./TaskbarText";
import set from "date-fns/set/index.js";
import { Hidden } from "@mui/material";
import TitleIcon from '@mui/icons-material/Title';
import TouchAppIcon from '@mui/icons-material/TouchApp';









function TaskbarSuperphotox({
    finalImage, getSliderWidth, ratiox, hidecropper, itemUploadRefThumb }: any): JSX.Element {

    const [ray, setRay] = useState([]);

    const [Originalray, setOriginalRay] = useState([]);

    const [prevSlider, setprevSlider] = useState(0);


    const [rayFinal, setRayFinal] = useState([]);


    const [Processing, setProcessing] = useState(false);


    const [ActiveFilter, setActiveFilter] = useState('');

    const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const Timer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const TimerSee = useRef<ReturnType<typeof setTimeout> | null>(null);

    const imageFiltersRef = useRef<any>([]);

    const MainImageFiltersRef = useRef<any>([]);


    const [BigCircle, setBigCircle] = useState(false);

    const [BigCircle2, setBigCircle2] = useState(false);

    const [BigCircle3, setBigCircle3] = useState(false);

    const [showFilterAdjust, setshowFilterAdjust] = useState(false);

    const [imageHeight, setimageHeight] = useState(1300);
    const [imageWidth, setimageWidth] = useState(1300);



    const dispatch = useDispatch();


    const [filtercolorMode, setfiltercolorMode] = useState(1);


    const [canvasData, setcanvasData] = useState<any>(null);

    const [MarginTopFilters, setMarginTopFilters] = useState('');

    const [FilterThumbGo, setFilterThumbGo] = useState(false);

    const [filterType, setfilterType] = useState('normal');
    const [filtenumm, setfiltenumm] = useState(0);
    const [filtemode, setfiltemode] = useState(0);



    const [activeItem, setactiveItem] = useState(0);




    const [CropImageHolder, setCropImageHolder] = useState<any>(null);




    const [Dimension, setDimension] = useState<any>(300);


    const [showAll, setshowAll] = useState(false);

    const [activetimer, setactivetimer] = useState<boolean>(false);

    const Timerkk = useRef<ReturnType<typeof setTimeout> | null>(null);

    const Timerkk2 = useRef<ReturnType<typeof setTimeout> | null>(null);


    const [ShowText, setShowText] = useState(false);


    ///
    ///
    /// GET COLOR FROM REDUX STORE
    interface RootStateReducerColor {
        GlobalReducerColor: {
            color: string;
            colordark: string;
            colortype: number;
        };
    }
    const { color, colordark, colortype } = useSelector(
        (state: RootStateReducerColor) => ({
            ...state.GlobalReducerColor,
        })
    );
    const colorReducer = color;
    const colorReducerdark = colordark;



    useEffect(() => {
        var cc = ratiox === 1 ? '2vh' : ratiox === 2 ? '-5vh' : '-17vh';
        setMarginTopFilters('-47vh');
    }, [ratiox]);


    const updatedRay: any = [...ray];
    const updatedOriginalRay: any = [...Originalray];


    useEffect(() => {
        /// setFilterThumbGo(false);
        if (hidecropper) {



            for (let i = 0; i < finalImage.length; i++) {
                updatedRay[i] = 0;


                if (i === finalImage.length - 1) {
                    setRay(updatedRay);
                    /// setProcessingRay(updatedProcessingRay)
                }
            }

            setfiltemode(0)
            setfiltenumm(0)
            setfilterType('normal')
            setfiltercolorMode(1)
            setFilterThumbGo(true);

            setTimeout(() => {
                setcanvasData([]);
                setcanvasData(finalImage[0]);

                // setDimension(200);

                setfiltenumm(0);
                setfiltemode(1);
                setfilterType(UploadFilterNameData[0]);


            }, 1000)

            setcanvasData(finalImage[0]);

        } else { setfiltenumm(0); }
    }, [hidecropper]);





    const AddMainImageRef = (imageRef: any) => {
        if (imageRef && !MainImageFiltersRef.current.includes(imageRef)) {
            MainImageFiltersRef.current.push(imageRef);
        }
    }


    const addimageFiltersRef = (imageRef: any) => {
        if (imageRef && !imageFiltersRef.current.includes(imageRef)) {
            imageFiltersRef.current.push(imageRef);
        }
    }



    const callMain = (ty: number, HD: number) => {

        if (HD === 1) { setDimension(800); } else { setDimension(450); }

        ///setProcessing(true);

        const ctx = canvasRefdummy.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRefdummy.current.width, canvasRefdummy.current.height);



        setfilterType(UploadFilterNameData[ty]);
        setfiltenumm(0);
        setfiltemode(0);

        setcanvasData([]);
        setcanvasData(finalImage[0]);


    }







    const convertColor = (color: string, filtercolorMode: any): string => {
        // Step 1: Convert hexadecimal color code to RGB representation
        const hexToRgb = (hex: string): number[] => {
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : [0, 0, 0];
        };


        var x: number;

        if (filtercolorMode === 0) { x = 0.3 } else if (filtercolorMode === 1) { x = 0.5 } else { x = 0.7 }

        // Step 2: Reduce intensity of each RGB component by multiplying it by 0.8
        const reduceIntensity = (rgb: number[]): number[] => {
            return rgb.map((value) => Math.round(value * x));
        };

        // Step 3: Convert modified RGB values back to hexadecimal
        const rgbToHex = (rgb: number[]): string => {
            return '#' + rgb.map((value) => {
                const hex = value.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        };

        const rgbColor = hexToRgb(color);
        const reducedRgb = reduceIntensity(rgbColor);
        const reducedHex = rgbToHex(reducedRgb);

        return reducedHex;
    };








    const Draw = (type: any, typeNum: number, mode: number, ctx: any, w: any, h: any, method: any, Adjust: any) => {

        if (type === "lift") {
            ctx.filter =
                "contrast(1.05) brightness(0.99) blur(0px) saturate(126%)";
        } else if (type === "sahara") {
            ctx.filter = "contrast(1) brightness(0.97) saturate(104%)";
        } else if (type === "jentle") {
            ctx.filter =
                "contrast(0.9) brightness(0.8) hue-rotate(20deg) saturate(90%) ";
        } else if (type === "mint") {
            ctx.filter = "contrast(1) brightness(1.1)  saturate(155%)  ";
        } else if (type === "nebula") {
            ctx.filter = "contrast(1) brightness(1.2)";
        } else if (type === "juice") {
            if (method === "thumb" && matchMobile) {
                ctx.filter =
                    "contrast(1.17) brightness(0.99) saturate(185%) blur(0px)";
            } else {
                ctx.filter =
                    "contrast(1) brightness(1) saturate(185%) blur(0.55px)";
            }
        } else if (type === "rainbow") {
            ctx.filter = "contrast(1) brightness(0.94) saturate(145%) ";
        } else if (type === "superstar") {
            ctx.filter =
                "contrast(1) brightness(0.93) saturate(130%)  hue-rotate(1.4deg)";
        } else if (type === "fog") {
            ctx.filter = "contrast(1) brightness(1.1) saturate(137%)";
        } else if (type === "moonshine") {
            ctx.filter =
                "contrast(0.85) brightness(1.05) saturate(45%) blur(0px)";
        } else if (type === "vintage") {
            ctx.filter = " contrast(0.9)  brightness(0.82)  saturate(20%)";
        } else {
        }

        ctx.drawImage(CropImageHolder, 0, 0, w, h);

        //////////////////////VIGNETTE
        var width = w;
        var height = h;
        if (type === "sahara") {
            var gradient = ctx.createLinearGradient(
                w / 2.7,
                h / 2,
                0,
                w / 4.8,
                h / 2,
                w * 8.65
            );

            gradient.addColorStop(0, "rgba(80, 111, 32, 0.01)");
            gradient.addColorStop(1, "rgba(10,10,10,0.001)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "mint") {
            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.65
            );

            gradient.addColorStop(0, "rgba(255, 255, 255,0.01)");
            gradient.addColorStop(1, "rgba(0,0,0,0.001)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "lift" || type === "juice") {
            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 3,
                0,
                w / 2,
                h / 3,
                w * 0.66
            );

            gradient.addColorStop(0, "rgba(255, 255, 255,0.01)");
            gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "moonshine") {
            var gradient = ctx.createLinearGradient(
                w / 2,
                h / 3,
                0,
                w / 2,
                h / 3,
                w * 0.4
            );

            gradient.addColorStop(0, " rgba(255, 255, 255,0.001)");
            gradient.addColorStop(1, "#403d6149");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.3
            );

            gradient.addColorStop(0, "rgba(0,0,0,0.02)");
            gradient.addColorStop(1, " rgba(255, 255, 255,0.001)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "vintage") {

        } else if (type === "nebula") {
            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.65
            );

            gradient.addColorStop(0, "rgba(255, 255, 255, 0.006)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.08)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "rainbow") {
            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.68
            );

            gradient.addColorStop(0, "rgb(163, 218, 37,0.004)");
            gradient.addColorStop(1, "rgb(27, 194, 236,0.004)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === "fog") {
            var gradient = ctx.createLinearGradient(
                w / 2,
                h / 71,
                0,
                w / 19,
                h / 2,
                w * 0.4
            );

            gradient.addColorStop(0, "rgba(255, 255, 255,0)");
            gradient.addColorStop(1, "#20422e5a");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else {
        }
        //////////////////////VIGNETTE

        //////////////////////GRADIENT BRIGHTNESS

        if (type === "normal") {
        } else {
            var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.6
            );
            if (type === "lift") {
                gradient.addColorStop(0, "#dcecdf16");
                gradient.addColorStop(1, "#dceaec1a");
            } else if (type === "fog") {
                gradient.addColorStop(0, "#c9d6df11");
                gradient.addColorStop(1, "#bef0ce13");
            } else if (type === "jentle") {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.001)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");
            } else if (type === "vintage") {

            } else if (
                type === "superstar" ||
                type === "rainbow" ||
                type === "sahara" ||
                type === "mint"
            ) {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.002)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");
            } else {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.002)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        //////////////////////GRADIENT BRIGHTNESS

        ////////////////// /////// GLOBALCOMPOSITEOPERATION
        if (type === "sahara") {
            ////////////composition
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#a58e89cc";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#a58e89cc";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "jentle") {
            ////////////composition
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#d3b5b5";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#d3b5b5";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "mint") {
            ////////////composition
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#25302f18";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#25302f18";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "nebula") {
            ////////////composition
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#6e6b72cc";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#6c6971cc";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "moonshine") {
            ////////////composition
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#77479f68";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#77479f68";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#77479f68";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#69359368";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "juice") {
            ////////////composition
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#5b6c7014";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#5b6c7014";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#5b6c7014";
            ctx.fillRect(0, 0, width, height);
            ////////////composition
        } else if (type === "rainbow") {
            ////////////composition
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#3950681f";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#42806c1f";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "superstar") {
            ////////////composition
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#69758113";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#69758113";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "fog") {
            ////////////composition
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#2c2b2937";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "soft-light";
            ctx.fillStyle = "#2c2b2937";
            ctx.fillRect(0, 0, width, height);

            ////////////composition
        } else if (type === "vintage") {
            ////////////composition

            ctx.globalCompositeOperation = "overlay";
            ctx.fillStyle = "#8888b14e";
            ctx.fillRect(0, 0, width, height);
            ////////////composition
            ////////////composition
        } else {
        }
        ////////////////// /////// GLOBALCOMPOSITEOPERATION

        ////////////////////GRADIENT BLENDING
        if (
            type === "jentle" ||
            type === "mint" ||
            type === "nebula" ||
            type === "juice" ||
            type === "rainbow" ||
            type === "superstar" ||
            type === "fog" ||
            type === "moonshine" ||
            type === "vintage" ||
            type === "sahara"
        ) {
            var gradient = FilterGradient(width, height, type);
            var screen = blend(
                ctx,
                gradient,
                width,
                height,
                function (bottomPixel: any, topPixel: any) {
                    return 255 - ((255 - topPixel) * (255 - bottomPixel)) / 255;
                }
            );
            ctx.putImageData(screen, 0, 0);
        }


        const dataUrl = cropCanvasRef.current.toDataURL('image/png');







        if (mode === 0) {


            ////  setProcessingRay(updatedProcessingRay);

            ///////////CREATES A FADE IN AND FADEOUT EFFECT
            updatedRay[typeNum] = 1;
            setRay(updatedRay);
            ////////////////////////
            var hh = typeNum * 1000;
            if (Timer.current) {
                clearTimeout(Timer.current);
            }
            Timer.current = setTimeout(() => {
                updatedRay[typeNum] = 0;
                setRay(updatedRay);
            }, hh)


            setActiveFilter(filterType);


            updatedOriginalRay[typeNum] = dataUrl;
            setOriginalRay(updatedOriginalRay);






            //setDimension(600);

            if (finalImage.length - 1 === typeNum) {

                MainImageFiltersRef.current[typeNum].src = dataUrl;


                setProcessing(false);

                if (Timer3.current) {
                    clearTimeout(Timer3.current);
                }
                setshowFilterAdjust(true);

                Timer3.current = setTimeout(() => { setshowFilterAdjust(false) }, 7000)

            }
            else if (typeNum === 0) {

                MainImageFiltersRef.current[typeNum].src = dataUrl;

                setfilterType(type);
                setfiltenumm(1);
                setfiltemode(0);

                setcanvasData(finalImage[1]);


                //// callCanvas(type, 1, 0);
            } else {

                MainImageFiltersRef.current[typeNum].src = dataUrl;

                setfilterType(type);
                setfiltenumm(2);
                setfiltemode(0);


                setcanvasData(finalImage[2]);
                /// callCanvas(type, 2, 0);


            }



        }
        else {


            var pp = typeNum + 1;

            if (UploadFilterNameData.length - 1 === typeNum) {

                imageFiltersRef.current[typeNum].src = dataUrl;




                setTimeout(() => {
                    setshowAll(true);
                    callMain(0, 0);
                }, 2000)



            }
            else {

                imageFiltersRef.current[typeNum].src = dataUrl;
                // setDimension(200);
                const ctx = canvasRefdummy.current.getContext("2d");
                ctx.clearRect(0, 0, canvasRefdummy.current.width, canvasRefdummy.current.height);
                setcanvasData([]);
                setcanvasData(finalImage[0]);

                setfilterType(UploadFilterNameData[pp]);
                setfiltenumm(pp);
                setfiltemode(1);

            }




        }




        const ctxx = cropCanvasRef.current.getContext("2d");
        ctxx.clearRect(0, 0, cropCanvasRef.current.width, cropCanvasRef.current.height);




        ////////////////////GRADIENT BLENDING
    }


    const GiveImageSpecificDimensions = useCallback((Newcropimage: any) => {
        let newWidth = Dimension;
        let newHeight = Dimension;
        const aspectRatio = Newcropimage.naturalWidth / Newcropimage.naturalHeight;

        if (newWidth / newHeight > aspectRatio) {
            newWidth = newHeight * aspectRatio;
        } else {
            newHeight = newWidth / aspectRatio;
        }


        setimageHeight(newHeight);
        setimageWidth(newWidth);


    }, [Dimension])



    useLayoutEffect(() => {
        if (canvasData) {
            const ctx = cropCanvasRef.current.getContext("2d");
            ctx.clearRect(0, 0, cropCanvasRef.current.width, cropCanvasRef.current.height);

            const Newcropimage: any = new Image();
            Newcropimage.src = canvasData;
            Newcropimage.onload = function () {
                if (CropImageHolder === Newcropimage) {
                } else {

                    //////////////
                    setCropImageHolder(Newcropimage);


                    GiveImageSpecificDimensions(Newcropimage);


                }


            }
        }
    }, [canvasData, Dimension]);




    const cropCanvasRef: any = useRef(null);

    const canvasRefdummy: any = useRef(null);

    var filz = 'superstar';

    var filll = 'lift';

    var filj = 'juice';

    var filf = 'rainbow';

    var filt = 'fog';

    var filff = 'sahara';

    var filn = 'nebula';

    var filjjj = 'jentle';

    var film = 'mint';

    var films = 'moonshine';

    var fil = 'vintage';



    const callCanvas = useCallback(() => {
        if (CropImageHolder) {

            GiveImageSpecificDimensions(CropImageHolder);

            const ctx = cropCanvasRef.current.getContext("2d");

            ctx.clearRect(0, 0, cropCanvasRef.current.width, cropCanvasRef.current.height);

            const w = imageWidth;
            const h = imageHeight;

            cropCanvasRef.current.width = w;
            cropCanvasRef.current.height = h;


            /// setProcessingRay(updatedProcessingRay);
            ////////////////////////////////

            requestAnimationFrame(async () => {
                try {
                    Draw(filterType, filtenumm, filtemode, ctx, w, h, '', filtercolorMode);

                }
                catch (e: any) {
                    alert(e);
                    console.log(e)
                }
            });

        }
    }, [CropImageHolder, cropCanvasRef, imageHeight, imageWidth, filterType, filtenumm, filtemode, filtercolorMode, Dimension])




    useLayoutEffect(() => {
        ///  FilterThumb();




        callCanvas();

    }, [CropImageHolder, imageHeight, imageWidth])







    function blend(
        background: any,
        foreground: any,
        width: any,
        height: any,
        transform: any
    ) {
        var bottom = background.getImageData(0, 0, width, height);
        var top = foreground.getImageData(0, 0, width, height);

        for (var i = 0, size = top.data.length; i < size; i += 4) {
            // red
            top.data[i + 0] = transform(bottom.data[i + 0], top.data[i + 0]);
            // green
            top.data[i + 1] = transform(bottom.data[i + 1], top.data[i + 1]);
            // blue
            top.data[i + 2] = transform(bottom.data[i + 2], top.data[i + 2]);
            // the fourth slot is alpha. We don't need that (so skip by 4)
        }

        return top;
    }







    function FilterGradient(width: any, height: any, type: string) {
        var ctx = canvasRefdummy.current.getContext("2d");
        canvasRefdummy.current.height = height;
        canvasRefdummy.current.width = width;

        if (type === "jentle") {
            var gradient = ctx.createLinearGradient(
                width / 73.6,
                height / 33.4,
                0,
                width / 2,
                height / 2,
                width * 0.6
            );
        } else if (type === "mint" || type === "sahara") {
            var gradient = ctx.createLinearGradient(
                width / 73.6,
                height / 33.4,
                0,
                width / 2,
                height / 2,
                width * 0.6
            );
        } else if (type === "fog") {
            var gradient = ctx.createLinearGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                width * 0.6
            );
        } else if (type === "nebula") {
            var gradient = ctx.createLinearGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                width * 0.6
            );
        } else if (type === "juice") {
            var gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                width * 0.7
            );
        } else if (type === "moonshine") {
            var gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                width * 0.7
            );
        } else if (type === "vintage") {
            var gradient = ctx.createRadialGradient(
                width / 2,
                height / 3,
                0,
                width / 2,
                height / 2,
                width * 0.66
            );
        } else if (type === "rainbow" || type === "superstar") {
            var gradient = ctx.createLinearGradient(
                width / 73.6,
                height / 33.4,
                0,
                width / 2,
                height / 2,
                width * 0.6
            );
        } else {
        }

        if (type === "jentle") {
            const reducedColor1 = convertColor('#2c1f1f', filtercolorMode);
            const reducedColor2 = convertColor('#41243c', filtercolorMode);
            const reducedColor3 = convertColor('#272122', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(0.4, reducedColor2);
            gradient.addColorStop(1, reducedColor3);
        } else if (type === "mint") {
            const reducedColor1 = convertColor('#2c3431', filtercolorMode);
            const reducedColor2 = convertColor('#26483e', filtercolorMode);
            const reducedColor3 = convertColor('#232831', filtercolorMode);
            const reducedColor4 = convertColor('#273131', filtercolorMode);
            gradient.addColorStop(0.25, reducedColor1);
            gradient.addColorStop(0.5, reducedColor2);
            gradient.addColorStop(0.75, reducedColor3);
            gradient.addColorStop(1, reducedColor4);
        } else if (type === "nebula") {
            const reducedColor1 = convertColor('#3b1858', filtercolorMode);
            const reducedColor2 = convertColor('#151569', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(1, reducedColor2);
        } else if (type === "juice") {
            const reducedColor1 = convertColor('#242424', filtercolorMode);
            const reducedColor2 = convertColor('#313131', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(1, reducedColor2);
        } else if (type === "moonshine") {
            const reducedColor1 = convertColor('#4d3017', filtercolorMode);
            const reducedColor2 = convertColor('#4d3017', filtercolorMode);
            const reducedColor3 = convertColor('#4d3017', filtercolorMode);
            const reducedColor4 = convertColor('#4d3017', filtercolorMode);
            gradient.addColorStop(0.25, reducedColor1);
            gradient.addColorStop(0.5, reducedColor2);
            gradient.addColorStop(0.75, reducedColor3);
            gradient.addColorStop(1, reducedColor4);
        } else if (type === "rainbow") {
            const reducedColor1 = convertColor('#5c384c', filtercolorMode);
            const reducedColor2 = convertColor('#5c384c', filtercolorMode);
            const reducedColor3 = convertColor('#3e452f', filtercolorMode);
            const reducedColor4 = convertColor('#2e3c3f', filtercolorMode);
            gradient.addColorStop(0.25, reducedColor1);
            gradient.addColorStop(0.5, reducedColor2);
            gradient.addColorStop(0.75, reducedColor3);
            gradient.addColorStop(1, reducedColor4);
        } else if (type === "superstar") {
            const reducedColor1 = convertColor('#244a82', filtercolorMode);
            const reducedColor2 = convertColor('#4d3017', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(1, reducedColor2);
        } else if (type === "fog") {
            const reducedColor1 = convertColor('#293746', filtercolorMode);
            const reducedColor2 = convertColor('#3a2922', filtercolorMode);
            const reducedColor3 = convertColor('#3b355d', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(0.6, reducedColor2);
            gradient.addColorStop(1, reducedColor3);
        } else if (type === "vintage") {
            const reducedColor1 = convertColor('#2f3340', filtercolorMode);
            const reducedColor2 = convertColor('#3d4358', filtercolorMode);
            const reducedColor3 = convertColor('#3d4358', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(0.6, reducedColor2);
            gradient.addColorStop(1, reducedColor3);
        } else if (type === "sahara") {
            const reducedColor1 = convertColor('#3b5910', filtercolorMode);
            const reducedColor2 = convertColor('#191d1b', filtercolorMode);
            gradient.addColorStop(0, reducedColor1);
            gradient.addColorStop(1, reducedColor2);
        } else {
        }

        ctx.fillStyle = gradient;

        ctx.fillRect(0, 0, width, height);

        return ctx;
    }




    const [Pad, setPad] = useState('0px');











    useEffect(() => {
        let zz = '0px';

        if (ratiox === 1) {
            if (finalImage.length === 2) {
                zz = '35.5vh'
            } else {
                zz = '60.5vh'
            }
        }
        else if (ratiox === 2) {
            if (finalImage.length === 3) {
                zz = '5.5vh'
            }
            else if (finalImage.length === 2) {
                zz = '25.5vh'
            } else {
                zz = '57.5vh'
            }
        }
        else if (ratiox === 3) {
            if (finalImage.length === 3) {
                zz = '4.5vh'
            }
            else if (finalImage.length === 2) {
                zz = '22.5vh'
            } else {
                zz = '47.5vh'
            }
        }
        else if (ratiox === 4) {
            if (finalImage.length === 3) {
                zz = '2.5vh'
            }
            else if (finalImage.length === 2) {
                zz = '12.5vh'
            } else {
                zz = '47.5vh'
            }
        }
        else if (ratiox === 5) {
            if (finalImage.length === 3) {
                zz = '0vh'
            }
            else if (finalImage.length === 2) {
                zz = '3.5vh'
            } else {
                zz = '42.5vh'
            }
        }
        else { }


        setPad(zz);


    }, [finalImage, ratiox])



    ///
    ///
    ///
    /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            darkmode: boolean;
            screenHeight: number;
        };
    }

    ///
    ///
    ///
    /// GET DARKMODE FROM REDUX STORE
    const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
        ...state.GlobalReducer,
    }));
    const darkmodeReducer = darkmode;


    var ShowHideNegativeVal = '-';




    const [ActiveSlide, setActiveSlide] = useState(0);

    const [translate, setTranslate] = useState(0);



    var pxx = (2 * window.innerWidth) / 100;

    const [getSliderWidthx, setgetSliderWidthx] = useState(getSliderWidth + pxx);
    ///
    ///
    ///
    ///CREATE OPTIONS SLIDER ANIMATION WITH  REACT SPRING
    const modalanimation = useSpring({
        config: {
            mass: 1,
            tension: 250,
            friction: 12,
        },
        transform: `translateX(${ShowHideNegativeVal}${translate}px)`,
        height: "auto",
        display: "flex",
        width: `auto`,
        padding: "0px",
        margin: "auto",
        zIndex: 200000,

    });







    const optionsImages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];


    var UploadFilterNameData = [
        "normal",
        "lift",
        "juice",
        "superstar",
        "rainbow",
        "fog",
        "sahara",
        "nebula",
        "jentle",
        "mint",
        "moonshine",
        "vintage",
        "normal",
    ];



    const seeOriginal = (i: any) => {

        if (TimerSee.current) {
            clearTimeout(TimerSee.current);
        }

        if (MainImageFiltersRef.current[i].src === finalImage[i]) {
            MainImageFiltersRef.current[i].src = Originalray[i]
        } else { MainImageFiltersRef.current[i].src = finalImage[i] }




        TimerSee.current = setTimeout(() => { MainImageFiltersRef.current[i].src = Originalray[i]; }, 3000)
    }

    const callDrawSlider = useCallback((i: any, d: any) => {
        if (Processing) { } else {
            setProcessing(true);

            callMain(i, d);
        }
    }, [])


    const slider = useCallback((i: any) => {
        if (i > ActiveSlide) {
            if (i <= 2) { } else {
                if (translate <= getSliderWidthx * 6) {
                    setTranslate((translate) => translate + getSliderWidthx);
                }
            }

            setActiveSlide(i);
        } else if (i < ActiveSlide) {
            if (translate > 1) {
                ///setpixels((pixels) => pixels - (2 * window.innerWidth) / 100);
                setTranslate((translate) => translate - getSliderWidthx);
            }
            setActiveSlide(i);
        }


        if (Timer2.current) {
            clearTimeout(Timer2.current);
        }
        Timer2.current = setTimeout(() => {
            callDrawSlider(i, 0);
        }, 2400)
        //alert(translate)
    }, [ActiveSlide, getSliderWidthx, translate]);





    const sliderLeft = useCallback(() => {

        if (translate > 1) {
            ///setpixels((pixels) => pixels - (2 * window.innerWidth) / 100);
            setTranslate((translate) => translate - getSliderWidthx);
        }
        setActiveSlide((ActiveSlide) => ActiveSlide - 1);
    }, [ActiveSlide, getSliderWidthx, translate]);




    const sliderRight = useCallback(() => {
        if (translate <= getSliderWidthx * 5) {
            setTranslate((translate) => translate + getSliderWidthx);
        }
        setActiveSlide((ActiveSlide) => ActiveSlide + 1);

    }, [ActiveSlide, getSliderWidthx, translate]);






    return (
        <>

            <div style={{ filter: showAll ? ShowText ? 'blur(14px)' : 'blur(0px)' : 'blur(40px)', height: '100vh', overflow: 'hidden' }}>




                {finalImage.length > 0 ? <><Masonry
                    columns={finalImage.length}
                    spacing={0}
                    style={{
                        padding: "0px",
                        paddingLeft: finalImage.length === 3 && ratiox === 1 ? '0px' : Pad,
                        paddingRight: finalImage.length === 3 && ratiox === 1 ? '0px' : Pad,
                        overflow: 'hidden',
                        height: '76vh',
                    }}
                >


                    {finalImage.map((picture: any, index: any) => (



                        <TaskbarSuperphotoImageView
                            ratiox={ratiox}
                            Dimension={Dimension}
                            ActiveSlide={ActiveSlide}
                            callDrawSlider={callDrawSlider}
                            ShowText={ShowText}
                            activeItem={activeItem}
                            setactiveItem={setactiveItem}
                            setShowText={setShowText}
                            ratio={ratiox}
                            seeOriginal={seeOriginal}
                            Originalray={Originalray}
                            setOriginalRay={setOriginalRay}
                            ray={ray}
                            finalImage={finalImage} AddMainImageRef={AddMainImageRef} index={index} MainImageFiltersRef={MainImageFiltersRef} />

                    ))}




                </Masonry ></> : null
                }



                <Grid item xs={12} style={{
                    height: '100%', padding: '0px', overflow: 'hidden', width: '70vw', marginLeft: '12vw', marginTop: '2vh'
                }}>

                    <FilterThumb UploadFilterNameData={UploadFilterNameData} modalanimation={modalanimation} optionsImages={optionsImages} ActiveSlide={ActiveSlide} callDrawSlider={callDrawSlider}
                        slider={slider} MarginTopFilters={MarginTopFilters} imageFiltersRef={imageFiltersRef} addimageFiltersRef={addimageFiltersRef}
                        getSliderWidth={getSliderWidth} />


                </Grid>

                <CircleIcon
                    onClick={sliderLeft}
                    onMouseOver={() => {
                        setBigCircle(true);
                    }}
                    onMouseOut={() => {
                        setBigCircle(false);
                    }}


                    style={{
                        fontSize: '3vh',
                        color: '#00ccff',
                        position: 'absolute',
                        bottom: '2vh',
                        left: '12px',
                        zIndex: 2000,
                        transform: BigCircle ? "scale(2.8)" : "scale(1)",
                        transition: "transform 0.1s",
                        cursor: 'pointer',
                        display: 'none'

                    }}
                />

                <CircleIcon
                    onClick={sliderRight}
                    onMouseOver={() => {
                        setBigCircle2(true);
                    }}
                    onMouseOut={() => {
                        setBigCircle2(false);
                    }}

                    className="zuperkingtur btn"
                    style={{
                        fontSize: '3vh',
                        color: '#00ccff',
                        position: 'absolute',
                        bottom: '2vh',
                        right: '12px',
                        zIndex: 2000,
                        transform: BigCircle2 ? "scale(2.8)" : "scale(1)",
                        transition: "transform 0.05s",
                        cursor: 'pointer',
                        display: 'none'

                    }}
                />








                <Grid item xs={12} style={{
                    cursor: 'pointer',
                    textAlign: 'center', margin: 'auto',
                    visibility: 'visible',
                    position: 'fixed',
                    bottom: '32vh',
                    width: '1000',
                    height: '0vh',
                    zIndex: 2000,
                    backgroundColor: '#00ccff',
                    display: showFilterAdjust ? 'block' : 'none'

                }}>
                    <Grid item xs={12} style={{
                        cursor: 'pointer',
                        height: '0px',
                        width: '40%',
                        marginLeft: '37.5vw',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'red'
                    }}>


                        <CircleIcon
                            className={darkmodeReducer
                                ? "postscroll-dark modal-containerDarkx zuperkinginfo "
                                : "postscroll-light modal-containerLightx zuperkinginfo"}
                            onClick={() => {

                                if (Timer3.current) {
                                    clearTimeout(Timer3.current);
                                }


                                setfiltercolorMode(0);
                                callMain(ActiveSlide, 0);
                            }}
                            onMouseOver={() => {
                                setBigCircle(true);
                            }}
                            onMouseOut={() => {
                                setBigCircle(false);
                            }}



                            style={{
                                fontSize: '3vh',
                                marginLeft: '14%',
                                color: filtercolorMode === 0 ? colorReducer : darkmodeReducer ? 'rgb(100, 100, 100, 0.97)' : 'rgb(120, 130, 140, 0.979)',
                                transform: BigCircle ? "scale(2.8)" : "scale(1.2)",
                                transition: "transform 0.05s",
                                cursor: 'pointer',


                            }}
                        />



                        <CircleIcon
                            className={darkmodeReducer
                                ? "postscroll-dark modal-containerDarkx zuperkinginfo "
                                : "postscroll-light modal-containerLightx zuperkinginfo"}
                            onClick={() => {

                                if (Timer3.current) {
                                    clearTimeout(Timer3.current);
                                }



                                setfiltercolorMode(1);
                                callMain(ActiveSlide, 0);
                            }}
                            onMouseOver={() => {
                                setBigCircle2(true);
                            }}
                            onMouseOut={() => {
                                setBigCircle2(false);
                            }}


                            style={{
                                fontSize: '3vh',
                                marginLeft: '30%',
                                color: filtercolorMode === 1 ? colorReducer : darkmodeReducer ? 'rgb(100, 100, 100, 0.97)' : 'rgb(120, 130, 140, 0.979)',
                                transform: BigCircle2 ? "scale(3.2)" : "scale(1.6)",
                                transition: "transform 0.05s",
                                cursor: 'pointer',


                            }}
                        />




                        <CircleIcon
                            className={darkmodeReducer
                                ? "postscroll-dark modal-containerDarkx zuperkinginfo "
                                : "postscroll-light modal-containerLightx zuperkinginfo"}
                            onClick={() => {

                                if (Timer3.current) {
                                    clearTimeout(Timer3.current);
                                }

                                setfiltercolorMode(2);
                                callMain(ActiveSlide, 0);
                            }}
                            onMouseOver={() => {
                                setBigCircle3(true);
                            }}
                            onMouseOut={() => {
                                setBigCircle3(false);
                            }}


                            style={{
                                fontSize: '3vh',
                                marginLeft: '30%',
                                color: filtercolorMode === 2 ? colorReducer : darkmodeReducer ? 'rgb(100, 100, 100, 0.97)' : 'rgb(120, 130, 140, 0.979)',
                                transform: BigCircle3 ? "scale(3.6)" : "scale(2)",
                                transition: "transform 0.1s",
                                cursor: 'pointer',


                            }}
                        />






                    </Grid>



                </Grid>




                <canvas
                    ref={cropCanvasRef}
                    style={{
                        padding: "0px",
                        margin: "auto",
                        cursor: "pointer",
                        overflow: 'hidden',
                        position: 'fixed',
                        top: "-400%",
                        zIndex: 0,
                        visibility: "hidden",
                        width: '30%'

                    }} />


                <canvas
                    ref={canvasRefdummy}
                    style={{
                        padding: "0px",
                        display: "none",
                        position: "fixed",
                        top: "-400%",
                        zIndex: 0,
                        visibility: "hidden",
                    }}
                />

            </div>




            {ShowText ? <TaskbarText
                Originalray={Originalray}
                Dimensionx={Dimension}
                ShowText={ShowText} activeItem={activeItem} MainImageFiltersRef={MainImageFiltersRef}
                setactiveItem={setactiveItem} setShowText={setShowText} />
                : null}






        </>
    );
}

export const TaskbarSuperphoto = React.memo(TaskbarSuperphotox);
