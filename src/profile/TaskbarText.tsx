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
import { TaskbarCrop } from "./TaskbarCrop";
import set from "date-fns/set/index.js";
import TitleIcon from '@mui/icons-material/Title';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import RestoreIcon from '@material-ui/icons/Restore';
import LayersIcon from '@material-ui/icons/Layers';
import TextFieldsIcon from '@material-ui/icons/TextFields';








function TaskbarTextx({ ShowText, setShowText, activeItem, setactiveItem, MainImageFiltersRef, Dimensionx, Originalray }: any): JSX.Element {





    const TextCanvasRef: any = useRef(null);

    const canvasRefdummy: any = useRef(null);

    const [textContent, setTextContent] = useState('ClikBate');


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


    const [CropImageHolder, setCropImageHolder] = useState<any>(null);

    const [Wi, setWi] = useState(0)

    const [ShowIcon, setShowIcon] = useState(false)


    const [Dimension, setDimension] = useState<any>(900);

    const [imageHeight, setimageHeight] = useState(0);
    const [imageWidth, setimageWidth] = useState(0);

    const GiveImageSpecificDimensions = (Newcropimage: any) => {

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
    }


    useLayoutEffect(() => {
        if (ShowText) {

            setTimeout(() => {

                const Newcropimage: any = new Image();
                Newcropimage.src = Originalray[activeItem];
                Newcropimage.onload = function () {

                    //////////////
                    setCropImageHolder(Newcropimage);


                }
            }, 300)


        }
    }, [Originalray, Dimension, ShowText, Dimensionx]);



    const callCanvas = useCallback(() => {
        if (CropImageHolder) {

            const ctx = TextCanvasRef.current.getContext("2d");

            ctx.clearRect(0, 0, TextCanvasRef.current.width, TextCanvasRef.current.height);

            const w = imageWidth;
            const h = imageHeight;

            TextCanvasRef.current.width = CropImageHolder.naturalWidth;
            TextCanvasRef.current.height = CropImageHolder.naturalHeight;


            /// setProcessingRay(updatedProcessingRay);
            ////////////////////////////////

            requestAnimationFrame(async () => {
                try {


                    ctx.drawImage(CropImageHolder, 0, 0);


                    // Draw the text box
                    const textWidth = ctx.measureText(textContent).width;
                    const paddingx = 120;
                    const padding = 50;
                    const fontSize = Math.min(TextCanvasRef.current.width, TextCanvasRef.current.height) * 0.05; // Adjust the font size as desired
                    const rectWidth = textWidth + 2 * paddingx + fontSize; // Increase rectWidth to accommodate the larger font
                    const rectHeight = fontSize + 2 * padding;
                    const rectX = (TextCanvasRef.current.width - rectWidth) / 2;
                    const rectY = TextCanvasRef.current.height - rectHeight - 20;



                    ctx.fillStyle = "#555555"; // Set the color of the square
                    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

                    // Draw the text
                    ctx.font = `${fontSize}px Arial`; // Set the font size and family
                    ctx.fillStyle = 'white'; // Set the text color
                    ctx.textAlign = 'center'; // Set the text alignment
                    ctx.textBaseline = 'middle'; // Set the vertical alignment to middle
                    ctx.fillText(
                        textContent,
                        rectX + rectWidth / 2,
                        rectY + rectHeight / 2
                    );




                    const aspectRatio = TextCanvasRef.current.width / TextCanvasRef.current.height;
                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;

                    // Calculate new dimensions while maintaining aspect ratio
                    let newWidth, newHeight;
                    if (screenWidth / screenHeight > aspectRatio) {
                        newHeight = screenHeight;
                        newWidth = newHeight * aspectRatio;
                    } else {
                        newWidth = screenWidth;
                        newHeight = newWidth / aspectRatio;
                    }

                    TextCanvasRef.current.style.width = `${newWidth}px`;
                    TextCanvasRef.current.style.height = `${newHeight}px`;


                    setWi(newWidth / 2.8);
                    setShowIcon(true)
                }
                catch (e: any) {
                    ///alert(e);
                    console.log(e)
                }
            });

        }
    }, [CropImageHolder, TextCanvasRef, imageHeight, imageWidth])




    useLayoutEffect(() => {
        callCanvas();
    }, [CropImageHolder, MainImageFiltersRef, imageHeight, imageWidth])





    return (
        <>
            <Grid container>

                <Grid onClick={() => { setShowText(false) }} item xs={12} style={{

                    height: '100vh', width: '100%', position: 'fixed', top: '0vh', zIndex: 9000, backgroundColor: darkmodeReducer
                        ? "rgb(2,2,2,0.82)"
                        : "rgb(255,255,255,0.8)", cursor: 'pointer'
                }}>



                </Grid>

                <LayersIcon
                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                        fontSize: '7vh',
                        color: '#ffffff',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '10vh',
                        left: '50%',
                        marginLeft: `${Wi}px`,
                        zIndex: 90019,
                        transition: "transform 0.1s",
                        cursor: 'pointer',
                        display: ShowIcon ? 'block' : 'none'

                    }}
                />


                <TextFieldsIcon
                    className={
                        darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                    }
                    style={{
                        fontSize: '7vh',
                        color: '#ffffff',
                        borderRadius: '50%',
                        position: 'fixed',
                        top: '25vh',
                        left: '50%',
                        marginLeft: `${Wi}px`,
                        zIndex: 90019,
                        transition: "transform 0.1s",
                        cursor: 'pointer',
                        display: ShowIcon ? 'block' : 'none'
                    }}
                />

                <Grid item xs={12} style={{
                    position: 'fixed',
                    top: "0vh",
                    zIndex: 90009,
                    textAlign: 'center',
                    width: '100%',
                    height: '0px'

                }}>

                    <canvas
                        ref={TextCanvasRef}
                        style={{
                            padding: "0px",
                            margin: "auto",
                            cursor: "pointer",


                        }} />





                </Grid>

            </Grid >

        </>
    );
}

export const TaskbarText = React.memo(TaskbarTextx);
