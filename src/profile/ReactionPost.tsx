import React, { useRef, useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { Slider } from "./Slider";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import { matchMobile, matchPc, matchTablet } from "../DetectDevice";

import FavoriteIcon from '@material-ui/icons/Favorite';
import MoodIcon from '@material-ui/icons/Mood';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";


function ReactionPostx({ Ein,
    setZoom3,
    setZoomBigEmo3,
    Zoom3,
    ClickLove,
    ShowAudioIcon,
    Spincare,
    Emo3Num,
    ClickLike,
    setZoom4,
    setZoomBigEmo4,
    Zoom4,
    Spinfun,
    Emo4Num,
    setShowAudioIcon,
    minimise,
    colorx,
    EinReaction

}: any) {



    const [Zoom, setZoom] = useState(false);



    useEffect(() => {
        if (Zoom) {
            setTimeout(() => { setZoom(false) }, 4000)
        }

        if (Zoom3) {
            setTimeout(() => { setZoom3(false) }, 4000)
        }

        if (Zoom4) {
            setTimeout(() => { setZoom4(false) }, 4000)
        }


    }, [Zoom3, Zoom4, Zoom])




    interface RootStateGlobalReducer {
        GlobalReducer: {
            snapStart: boolean;
            darkmode: boolean;
            screenHeight: number;
            activateLoader: boolean;
            historyscroll: number;
            x: any;
            interact: boolean;
            MenuData: String;
            pagenum: number;
            SignIn: boolean,
            Guest: number,
            muteaudio: boolean,
            ActiveAudioIndex: number,
        };
    }



    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interact, MenuData, pagenum, SignIn, Guest, muteaudio, ActiveAudioIndex } =
        useSelector((state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        }));
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;
    const snapStartReducer = snapStart;
    const activateLoaderReducer = activateLoader;
    const historyscrollReducer = historyscroll;
    const interactReducer = interact;

    const ActiveAudioIndexReducer = ActiveAudioIndex;

    const MenuDataReducer = MenuData
    const pagenumReducer = pagenum;
    const SignInReducer = SignIn;
    const GuestReducer = Guest;
    const muteaudioReducer = muteaudio;


    var mobileemoTop = '16vh';

    var mobileTop = '8vh';




    return (
        <>


            <div style={{
                marginTop: matchMobile ? minimise ? '-1vh' : '0px' : minimise ? '0px' : '0px',
                display: minimise ? 'none' : 'block',

            }}>


                <span
                    onClick={() => {
                        ClickLove();
                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }
                    style={{
                        color: darkmodeReducer ? "#ffffff" : "#000000",
                        transform: Zoom3 ? "scale(2)" : "scale(1.25)",
                        transition: "transform 0.1s",
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '89vw' : '46.5vw',
                        cursor: "pointer",
                        bottom: matchMobile ? mobileemoTop : "0px",
                        top: matchMobile ? '' : "50vh",
                        /// backgroundColor: "red",
                        backgroundColor: colorx,
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "2.8rem",
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "0px",
                        height: '0px',
                        display: ShowAudioIcon ? "inline" : "inline",
                    }}
                >
                    <FavoriteIcon
                        onMouseEnter={(e: any) => {
                            setZoom3(true);
                            setZoomBigEmo3(true);
                        }}
                        onMouseLeave={(e: any) => {
                            setZoom3(false);
                            setZoomBigEmo3(false);
                        }}


                        onClick={() => {
                            ClickLove();

                        }}
                        className={
                            "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                        }

                        style={{
                            opacity: EinReaction === 3 ? 0.25 : 1,
                            color: '#000000',
                            backgroundColor: colorx,
                            fontFamily: "Arial, Helvetica, sans-serif",
                            padding: "2px",

                        }}
                    />



                    <span
                        onMouseEnter={(e: any) => {
                            setZoom3(true);
                            setZoomBigEmo3(true);
                        }}
                        onMouseLeave={(e: any) => {
                            setZoom3(false);
                            setZoomBigEmo3(false);
                        }}


                        onClick={() => {
                            ClickLove();
                        }}

                        style={{
                            right: matchMobile ? '-7.2vw' : "-1.65vw",
                            fontSize: matchMobile ? '2.4rem' : " ",
                            position: 'absolute',
                            transform: "scale(0.4)",
                            transition: "transform 0.1s",
                            top: matchMobile ? '-1.3vh' : '-1.3vh',
                            color: '#ffffff',
                            backgroundColor: 'rgb(5,5,5,0.0)',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {Emo3Num === 0 ? "" : Emo3Num}
                    </span>
                    {/* Red Circle */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: matchMobile ? '-8.5vh' : "-7.7vh", // Adjust to position the circle below the icon
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "10px", // Diameter of the circle
                            height: "10px",
                            backgroundColor: colorx,
                            borderRadius: "50%",
                            display: EinReaction === 3 ? 'block' : 'none',
                            zIndex: 1, // Ensure it appears below the icon
                        }}
                    ></div>
                </span>





                <MoodIcon

                    onMouseEnter={(e: any) => {
                        setZoom(true);

                    }}
                    onMouseLeave={(e: any) => {
                        setZoom(false);

                    }}


                    onClick={() => {
                        setShowAudioIcon(true);
                    }}
                    className={
                        "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight"
                    }

                    style={{
                        transform: Zoom ? "scale(1.6)" : "scale(0.8)",
                        transition: "transform 0.1s",
                        color: "#ffffff",
                        position: "absolute",
                        zIndex: 30,
                        left: matchMobile ? '87vw' : '45.6vw',
                        cursor: "pointer",
                        bottom: matchMobile ? '2vh' : "0px",
                        top: matchMobile ? '' : "62vh",

                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: '2.8rem',
                        fontWeight: "bolder",
                        opacity: 1,
                        padding: "2px",
                        display: ShowAudioIcon ? 'none' : 'none',

                    }}
                />

            </div>
        </>


    );
}


export const ReactionPost = React.memo(ReactionPostx);
