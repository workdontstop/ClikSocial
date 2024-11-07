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
import { OptionsSlider } from "./OptionsSlider";
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
import { TaskbarText } from "./TaskbarText";
import set from "date-fns/set/index.js";
import { Hidden } from "@mui/material";
import TitleIcon from '@mui/icons-material/Title';
import TouchAppIcon from '@mui/icons-material/TouchApp';






function FilterThumbx({ UploadFilterNameData, modalanimation, optionsImages, ActiveSlide, callDrawSlider, slider, MarginTopFilters, imageFiltersRef, addimageFiltersRef,
    getSliderWidth }: any): JSX.Element {


    const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);


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




    return (<>


        <animated.div style={modalanimation}>
            {optionsImages.map((im: any, i: any) => (
                <Grid onClick={() => {
                    ////

                    if (ActiveSlide === i) {
                        if (Timer2.current) {
                            clearTimeout(Timer2.current);
                        }
                        callDrawSlider(i, 0);

                        //////
                    } else {
                        slider(i)
                    }

                }} key={i} item xs={12} style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    margin: 'auto',
                    visibility: imageFiltersRef.current[i] ? 'visible' : 'hidden'

                }}>
                    <img

                        ref={addimageFiltersRef}
                        className={darkmodeReducer ? 'turpostLightx' : "turpostDarkx"}
                        style={{
                            boxShadow: ActiveSlide === i ? `0 0 6px ${colorReducer}` : ``,
                            cursor: 'pointer',
                            borderRadius: "50%",
                            padding: "0px",
                            border: ActiveSlide === i ? `1.5px solid ${colorReducer}` : ``,
                            objectFit: "cover",
                            marginLeft: "2vw",
                            width: getSliderWidth,
                            height: getSliderWidth,

                        }}
                        src={
                            imageFiltersRef.current[i]
                                ? imageFiltersRef.current[i].src
                                : null
                        }
                    />
                    <span className='zuperxy' style={{ visibility: ActiveSlide === i ? 'visible' : `hidden`, fontWeight: 'bold', marginLeft: "2vw", fontSize: '2.6vh', color: darkmodeReducer ? '#ffffff' : '#003300', fontFamily: "Roboto Condensed" }}> {UploadFilterNameData[i]} </span>
                </Grid>
            ))}


        </animated.div >


    </>);
}

export const FilterThumb = React.memo(FilterThumbx);
