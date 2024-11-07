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






function TaskbarSuperphotoImageViewx({ ratiox, Dimension, ActiveSlide, callDrawSlider, setShowText, ratio, seeOriginal, AddMainImageRef, index, MainImageFiltersRef, finalImage, ray, Originalray, setOriginalRay, setactiveItem }: any): JSX.Element {


    const [fade, setfade] = useState(false);



    const [Big, setBig] = useState(false);

    useEffect(() => {

        setfade(true)

        setTimeout(() => {
            setfade(false)
        }, 3000);



    }, [MainImageFiltersRef.current])

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



    const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);


    const [bot1, setbot1] = useState('70vh');
    const [bot2, setbot2] = useState('60vh');
    const [bot3, setbot3] = useState('50vh');
    const [bot4, setbot4] = useState('40vh');
    const [bleft, setbleft] = useState('64%');



    useEffect(() => {
        if (ratio === 1) {
            setbot1('70vh');
            setbot2('60vh');
            setbot3('50vh');
            setbot4('40vh');
            setbleft('64%');
        } else if (ratio === 2) {
            setbot1('55vh');
            setbot2('45vh');
            setbot3('35vh');
            setbot4('25vh');
            setbleft('64%');
        }
        else if (ratio === 3) {
            setbot1('45vh');
            setbot2('35vh');
            setbot3('25vh');
            setbot4('15vh');
            setbleft('64%');
        }
        else if (ratio === 4) {

            setbot1('40vh');
            setbot2('30vh');
            setbot3('20vh');
            setbot4('10vh');
            setbleft('64%');
        }
        else {
            setbot1('34vh');
            setbot2('24vh');
            setbot3('14vh');
            setbot4('6vh');
            setbleft('64%');
        }



    }, [ratio])

    return (
        <>


            <Grid container>

                <Grid item xs={12} style={{
                    cursor: 'pointer',


                }}>


                    <img
                        onClick={() => { seeOriginal(index) }}
                        className={ray[index] === 1 ? 'fadeboyinFilter' : ""} ref={AddMainImageRef} style={{ cursor: 'pointer', width: '100%', }} src={
                            MainImageFiltersRef.current[index] && Originalray && Dimension
                                ? MainImageFiltersRef.current[index].src
                                : null
                        }
                        alt={`Image ${index}`} />





                    <TouchAppIcon
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            fontSize: '2.5vw',
                            position: 'relative',
                            bottom: ratiox === 1 ? '45%' : '35%',
                            left: '88%',
                            borderRadius: '50%',
                            zIndex: 2000,
                            transition: "transform 0.1s",
                            cursor: 'pointer',
                            opacity: '0.7',
                            display: 'block'


                        }}
                    />




                    <InsertPhotoIcon
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            fontSize: '2.5vw',
                            position: 'relative',
                            bottom: ratiox === 1 ? '60%' : '55%',
                            left: '88%',
                            borderRadius: '50%',
                            zIndex: 2000,
                            transition: "transform 0.1s",
                            cursor: 'pointer',
                            opacity: '0.7', display: 'block'


                        }}
                    />

                    <TitleIcon
                        onClick={() => {

                            callDrawSlider(ActiveSlide, 1); setShowText(true); setactiveItem(index)
                        }}
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            fontSize: '2.5vw',
                            position: 'relative',
                            bottom: '75%',
                            left: '88%',
                            borderRadius: '50%',
                            zIndex: 2000,
                            transition: "transform 0.1s",
                            cursor: 'pointer',
                            opacity: '0.7', display: 'block'


                        }}
                    />





                    <RestoreIcon
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            fontSize: '3.5vw',
                            position: 'relative',
                            bottom: bot4,
                            left: '52.5%',
                            borderRadius: '50%',
                            zIndex: 2000,
                            transition: "transform 0.1s",
                            cursor: 'pointer',
                            opacity: '0.7',
                            display: 'none'

                        }}
                    />






                </Grid>
            </Grid>





        </>
    );
}

export const TaskbarSuperphotoImageView = React.memo(TaskbarSuperphotoImageViewx);
