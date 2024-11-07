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
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { UpdateUploadData } from "../GlobalActions";
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CircleIcon from "@mui/icons-material/Circle";
import CropIcon from '@mui/icons-material/Crop';
import Slider from "@material-ui/core/Slider";
import { UpdateNavFilterReducer } from "../GlobalActions";
import Cropper from "react-easy-crop";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { Point, Area } from "react-easy-crop/types";





function TaskbarCropx({
    showModalUploadTask,
    uploadClose,
    setfinalimage,
    finalImage,
    setHidecropper,
    hideCrop,
    sethideCrop,
    ratiox,
    setratiox,
    itemUploadRefThumb,
    itemUploadRefSD,
    itemUploadRef

}: any): JSX.Element {
    const dispatch = useDispatch();


    const canRef: any = useRef(null);

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


    const { activatefilterImage, activatecropImage, selectedImage, cropimage } = useSelector(
        (state: RootStateOrAny) => ({
            ...state.GlobalNavuploadReducer,
        })
    );
    const activatefilterImageReducer = activatefilterImage;
    const activatecropImageReducer = activatecropImage;
    const selectedImageReducer = selectedImage;
    const cropimageReducer = cropimage;



    const cropCanvasRef: any = useRef(null);

    const cropCanvasRefx: any = useRef(null);

    const navRef: any = useRef(null);

    const IconRef: any = useRef(null);

    const IconRef2: any = useRef(null);

    const [allowCropAllCanvas, setallowCropAllCanvas] = useState<boolean>(true);

    const [CropImageHolder, setCropImageHolder] = useState<any>(null);

    const [FinalCropImageHolder, setFinalCropImageHolder] = useState<any>(null);

    const [imageHeight, setimageHeight] = useState(0);
    const [imageWidth, setimageWidth] = useState(0);

    const [Box, setBox] = useState<boolean>(false);

    const [final, setFinal] = useState<boolean>(false);


    const [cropInitial, setcropInitial] = useState<any>({ x: 0, y: 0 });

    const [cropInitialx, setcropInitialx] = useState<any>({ x: 0, y: 0 });

    const [cropOffset, setcropOffset] = useState<any>({ x: 0, y: 0 });

    const [Drag, setDrag] = useState<boolean>(false);



    const [cropx, setcropx] = useState<any>({ x: 0, y: 0 });

    const allowscrolltimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    var extendxy = 3.3;

    const [allowOverflow, setallowOverflow] = useState<boolean>(false);

    const [optionscropshow, setoptionscropshow] = useState<boolean>(true);

    const [optionscropshow2, setoptionscropshow2] = useState<boolean>(true);

    const [SaveCropData, setSaveCropData] = useState<boolean>(false);

    const [hide, sethide] = useState<boolean>(true);

    const [CropImage, setcropImage] = useState<any>(null);

    const [multiPost, setmultiPost] = useState(false);

    const [showIcon] = useState(false);

    const [prevImage, setprevimage] = useState([]);

    const menuTimer5 = useRef<ReturnType<typeof setTimeout> | null>(null);


    const [NewCanH, setNewCanH] = useState(0);

    const [NewCanW, setNewCanW] = useState(0);




    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [crop2, setCrop2] = useState<Point>({ x: 0, y: 0 });
    const [crop3, setCrop3] = useState<Point>({ x: 0, y: 0 });

    const [zoom, setZoom] = useState(1);

    const [count, setcount] = useState(0);




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
    const colortypeReducer = colortype;




    useEffect(() => {


        setprevimage(selectedImageReducer);
        setcropImage(selectedImageReducer[0])
        sethideCrop(false);
        setRay([]);
        setcount(0);
        setfinalimage([])

        sethide(true)
        setTimeout(() => { sethide(false) }, 1000)

    }, [selectedImageReducer, showModalUploadTask]);





    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const cropperRef = useRef<Cropper | any>(null);
    const [ray, setRay] = useState([]);



    const onCropComplete = useCallback((_, croppedAreaPixels) => {
        const canvas = document.createElement('canvas');
        const canvas2 = document.createElement('canvas');
        const canvas3 = document.createElement('canvas');


        const imageRef = document.createElement('img');
        imageRef.src = CropImage;

        const scaleX = imageRef.naturalWidth / imageRef.width;
        const scaleY = imageRef.naturalHeight / imageRef.height;

        // Set the desired lower resolution
        const lowerResolutionWidth = 1300; // Set your desired width
        const lowerResolutionHeight = 1300; // Set your desired height
        // Calculate the scale factor based on the longer side of the cropped area
        const longerSide = Math.max(croppedAreaPixels.width, croppedAreaPixels.height);
        const scale = longerSide / Math.max(lowerResolutionWidth, lowerResolutionHeight);
        // Calculate the adjusted dimensions
        const adjustedWidth = croppedAreaPixels.width / scale;
        const adjustedHeight = croppedAreaPixels.height / scale;

        // Set the desired lower resolution
        const lowerResolutionWidth2 = 1300; // Set your desired width
        const lowerResolutionHeight2 = 1300; // Set your desired height
        // Calculate the scale factor based on the longer side of the cropped area
        const longerSide2 = Math.max(croppedAreaPixels.width, croppedAreaPixels.height);
        const scale2 = longerSide2 / Math.max(lowerResolutionWidth2, lowerResolutionHeight2);
        // Calculate the adjusted dimensions
        const adjustedWidth2 = croppedAreaPixels.width / scale2;
        const adjustedHeight2 = croppedAreaPixels.height / scale2;

        // Set the desired lower resolution
        const lowerResolutionWidth3 = 160; // Set your desired width
        const lowerResolutionHeight3 = 160; // Set your desired height
        // Calculate the scale factor based on the longer side of the cropped area
        const longerSide3 = Math.max(croppedAreaPixels.width, croppedAreaPixels.height);
        const scale3 = longerSide3 / Math.max(lowerResolutionWidth3, lowerResolutionHeight3);
        // Calculate the adjusted dimensions
        const adjustedWidth3 = croppedAreaPixels.width / scale3;
        const adjustedHeight3 = croppedAreaPixels.height / scale3;

        canvas.width = adjustedWidth;
        canvas.height = adjustedHeight;
        const ctx = canvas.getContext('2d');

        canvas2.width = adjustedWidth2;
        canvas2.height = adjustedHeight2;
        const ctx2 = canvas2.getContext('2d');

        canvas3.width = adjustedWidth3;
        canvas3.height = adjustedHeight3;
        const ctx3 = canvas3.getContext('2d');

        if (ctx && ctx2 && ctx3) {
            imageRef.onload = () => {
                requestAnimationFrame(async () => {
                    try {

                        ctx.drawImage(
                            imageRef,
                            croppedAreaPixels.x * scaleX,
                            croppedAreaPixels.y * scaleY,
                            croppedAreaPixels.width * scaleX,
                            croppedAreaPixels.height * scaleY,
                            0,
                            0,
                            adjustedWidth,
                            adjustedHeight
                        );

                        ctx2.drawImage(
                            imageRef,
                            croppedAreaPixels.x * scaleX,
                            croppedAreaPixels.y * scaleY,
                            croppedAreaPixels.width * scaleX,
                            croppedAreaPixels.height * scaleY,
                            0,
                            0,
                            adjustedWidth2,
                            adjustedHeight2
                        );
                        ctx3.drawImage(
                            imageRef,
                            croppedAreaPixels.x * scaleX,
                            croppedAreaPixels.y * scaleY,
                            croppedAreaPixels.width * scaleX,
                            croppedAreaPixels.height * scaleY,
                            0,
                            0,
                            adjustedWidth3,
                            adjustedHeight3
                        );

                        if (count > 0 && SaveCropData) {
                            const dataUrl = canvas.toDataURL('image/png');
                            const dataUrl2 = canvas2.toDataURL('image/png');
                            const dataUrl3 = canvas3.toDataURL('image/png');
                            const g = count - 1;

                            if (ray[g]) {
                                // alert('kj')
                            } else {
                                const updatedRay: any = [...ray];
                                updatedRay[g] = dataUrl;


                                itemUploadRef.current[g].src = dataUrl;
                                itemUploadRefSD.current[g].src = dataUrl2;
                                itemUploadRefThumb.current[g].src = dataUrl3;




                                if (selectedImageReducer.length === count) {
                                    setfinalimage(updatedRay);
                                    setHidecropper(true);
                                    dispatch(UpdateNavFilterReducer(true));
                                    console.log(itemUploadRefThumb.current);
                                } else if (count === 1) {
                                    setRay(updatedRay);
                                    setTimeout(() => {
                                        setcount(2);
                                        setcropImage(selectedImageReducer[1]);
                                    }, 100);
                                } else {
                                    setRay(updatedRay);
                                    setTimeout(() => {
                                        setcount(3);
                                        setcropImage(selectedImageReducer[2]);
                                    }, 100);
                                }
                            }
                        }
                    } catch (error) {
                        // alert(error)
                        console.error('Error while cropping the image:', error);
                    }
                });
            };
        }
    }, [CropImage, count, SaveCropData, ray, itemUploadRefThumb]);






    const [ratio, setratio] = useState(2);

    const [ShowNumber, setShowNumber] = useState<boolean>(false);


    const add = useCallback(() => {
        setratiox(ratiox + 1);
        setShowNumber(true)


        if (allowscrolltimer.current) {
            clearTimeout(allowscrolltimer.current);
        }

        allowscrolltimer.current = setTimeout(() => {
            setShowNumber(false);
        }, 1000)



        setratio(ratio + 0.5);
        if (ratio >= 4) {
            setratio(2);
            setratiox(1);
        }
    }, [ratio, ratiox])









    return (
        <>



            <Grid className="dontallowhighlighting"
                container
                style={{
                    padding: "0px", width: '100%', height: "100%",

                }}>



                <Grid className="zuperxyinfo"
                    item
                    xs={12}
                    style={{
                        height: '0px',
                        fontFamily: ' Arial, Helvetica, sans- serif', fontWeight: 'bold', opacity: 0.96, display: SaveCropData ? 'block' : 'none',
                        padding: "0px", position: 'fixed', top: '42vh', zIndex: 200000000, left: '47.5%'
                    }}>


                    <CircleIcon
                        className={SaveCropData ? "dontallowhighlighting  blinken zuperkingIcon" : ' '}
                        style={{
                            fontSize: '5vw',
                            color: colorReducer,
                            position: 'absolute'
                        }}
                    />
                </Grid>








                <Grid className="zuperxyinfo"
                    item
                    xs={12}
                    style={{
                        height: '0px',
                        display: ShowNumber ? 'block' : 'none',
                        fontFamily: ' Arial, Helvetica, sans- serif', fontWeight: 'bold', opacity: 0.65,
                        padding: "0px", position: 'fixed', top: '40vh', fontSize: '15vh', zIndex: 20000000, left: matchMobile ? '40%' : '47.5%'
                    }}>
                    {ratiox}
                </Grid>



                <Grid ref={navRef}
                    item
                    xs={12}
                    style={{
                        padding: "0px", width: '94%', height: multiPost ? "80%" : '100%', position: 'fixed', top: '-20000000000px',
                    }}>

                </Grid>



                {croppedImage && (
                    <img src={croppedImage} alt="Cropped Image" style={{ position: 'fixed', top: '20vh', zIndex: 30000000, width: '20%' }} />
                )}






                <Grid
                    item
                    xs={12}
                    style={{
                        padding: "0px",
                        filter: hideCrop ? SaveCropData ? 'brightness(0.8) blur(8px)' : 'brightness(1) blur(0px)' : 'brightness(0.8) blur(8px)'

                    }}>

                    <TouchAppIcon
                        className={
                            darkmodeReducer
                                ? " dontallowhighlighting zuperkingIcon "
                                : " dontallowhighlighting zuperkingIcon  "
                        }


                        style={{
                            fontSize: "5vw",
                            position: "fixed",
                            opacity: optionscropshow2 ? 0.73 : 0,
                            borderRadius: '70%',
                            color: colorReducer,
                            top: '2vh',
                            left: '2vw',
                            zIndex: 2000,
                            display: hideCrop ? 'block' : 'none'
                        }}
                    />



                    {prevImage.length > 1 ? <><Masonry
                        columns={2}
                        spacing={0}
                        style={{
                            padding: "0px",
                            overflow: 'hidden',

                        }}
                    >

                        {prevImage.map((picture: any, index: any) => (
                            <>




                                <img onClick={() => {

                                    ///setcount(index + 1);
                                    navRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                    setcropImage(picture)
                                    sethideCrop(false)
                                }}

                                    key={index} style={{ cursor: 'pointer', }} src={picture} alt={`Image ${index}`} />



                            </>

                        ))}

                    </Masonry ></> : null}

                </Grid>


                <div className="">




                    <canvas
                        ref={canRef}
                        style={{
                            padding: "0px",
                            display: "none",
                            position: "fixed",
                            top: "-400%",
                            zIndex: 0,
                            visibility: "hidden",
                        }}
                    />


                    <div style={{ display: hideCrop ? 'none' : 'block', visibility: SaveCropData ? 'hidden' : 'visible' }}>
                        <Cropper
                            ref={cropperRef}
                            image={CropImage}
                            crop={crop}
                            zoom={zoom}
                            aspect={ratio / 2.8}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}

                        />

                    </div>

                </div>


                {selectedImageReducer.length > 1 ? <ExpandMoreIcon
                    onClick={() => {
                        sethideCrop(true);
                    }}

                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{

                        color: "#ffffff",
                        fontSize: matchMobile ? '6vh' : "3.8vw",
                        position: "absolute",
                        opacity: optionscropshow2 ? 0.94 : 0,
                        borderRadius: '70%',
                        top: '3.8vh',
                        left: '2%',
                        right: "",
                        display: optionscropshow ? hideCrop ? 'none' : SaveCropData ? 'none' : hide ? 'none' : 'block' : 'none'
                    }}
                />

                    : null}


                <AspectRatioIcon
                    onClick={() => {
                        add();
                    }}

                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                        color: "#ffffff",
                        fontSize: matchMobile ? '6vh' : "3.8vw",
                        position: "absolute",
                        opacity: optionscropshow2 ? 0.94 : 0,
                        borderRadius: '70%',
                        top: '3.8vh',
                        left: matchMobile ? '43%' : '48%',
                        right: "",
                        display: optionscropshow ? hideCrop ? 'none' : SaveCropData ? 'none' : hide ? 'none' : 'block' : 'none'
                    }}
                />


                <DoneOutlineIcon
                    onClick={() => {
                        setcropImage([]);
                        setSaveCropData(true);
                        setTimeout(() => {

                            setcount(1);
                            setcropImage(selectedImageReducer[0])
                        }, 100)
                    }}

                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{

                        color: "#ffffff",
                        fontSize: matchMobile ? '6vh' : "3.8vw",
                        position: "absolute",
                        opacity: optionscropshow2 ? 0.94 : 0,
                        borderRadius: '70%',
                        top: '3.8vh',
                        left: matchMobile ? '83%' : '94%',
                        right: "",
                        display: optionscropshow ? hideCrop ? 'none' : SaveCropData ? 'none' : hide ? 'none' : 'block' : 'none'
                    }}
                />

            </Grid >






        </>
    );
}

export const TaskbarCrop = React.memo(TaskbarCropx);
