import React, { useRef, useState, useEffect, useCallback } from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSpring, animated, useTransition } from "react-spring";
import Crop54Icon from "@mui/icons-material/Crop54";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import CropIcon from "@mui/icons-material/Crop";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import AspectRatioTwoToneIcon from "@mui/icons-material/AspectRatioTwoTone";
import StarIcon from "@mui/icons-material/Star";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import AlbumIcon from "@mui/icons-material/Album";
import CheckIcon from "@mui/icons-material/Check";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import BentoIcon from "@mui/icons-material/Bento";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import BackspaceIcon from '@material-ui/icons/Backspace';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PanoramaIcon from '@material-ui/icons/Panorama';
import AddIcon from "@mui/icons-material/Add";
import Slider from "@material-ui/core/Slider";
import {
    UpdateLoader,
    UpdateHistory,
    UpdateCommentHistory,
    UpdatePostFromCom,
    UpdateReactType, Updatepagenum
} from ".././GlobalActions";

import { useInView } from "react-intersection-observer";

function InteractMenuxx({
    stickerOPtionsDefault,
    setcropInitialIn,
    setcropInitialIn2,
    index,
    moveCordinatesMultiple,
    showBorder,
    setshowBorder,
    canxxtim,
    canxxTime,
    valuex,
    valuex2,
    handleChange,
    adjustinteract1,
    adjustinteract2,
    interactContent,
    interactContent2,
    setadjustinteract1,
    setadjustinteract2,
    mobilefont,
    pcfont,
    handleChange2x,
    colorx,
    callDelInteract,
    percentageCoveragex,
    interactContenttype,
    interactContentvideo,
    interactContenttype2,
    interactContentvideo2,
    ratiox
}: any) {

    ///
    ///
    ///DARKMODE FROM REDUX
    interface RootStateGlobalReducer {
        GlobalReducer: {
            darkmode: boolean;
        };
    }
    const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
        ...state.GlobalReducer,
    }));

    //alert('jj');
    const darkmodeReducer = darkmode;

    const [AllowDel, setAllowDel] = useState(false);
    const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);


    const [AllowDel2, setAllowDel2] = useState(false);
    const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);


    const videoRefjj = useRef<HTMLVideoElement>(null);

    const videoRefjja = useRef<HTMLVideoElement>(null);

    const [Pop, setPop] = useState(false);


    const [HideIcon, setHideIcon] = useState(false);


    useEffect(() => {

        if (stickerOPtionsDefault === 4) {



            setPop(true);


            setTimeout(() => {

                setPop(false);
            }, 4000)

        }

    }, [stickerOPtionsDefault]);




    return (

        <div>

            {adjustinteract1 || adjustinteract2 ? <Grid
                className={
                    darkmodeReducer
                        ? "mobileTextfield-backplateColorDark"
                        : "mobileTextfield-backplateColorLight"
                }
                item
                xs={12}
                style={{
                    width: "100%",
                    padding: "0px",
                    position: "absolute",
                    top: ratiox >= 3 ? '-15vh' : "-5vh",
                    right: "0px",
                    height: "0vh",
                    zIndex: 20,
                    display: stickerOPtionsDefault === 4 ? "block" : "none",
                }}
            >
                <Grid
                    item
                    xs={12}
                    onClick={() => {
                        if (adjustinteract1) {
                            setcropInitialIn((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn = {
                                    x: newArray[index].x,
                                    y: newArray[index].y - moveCordinatesMultiple,
                                };
                                newArray[index] = updatedCropInitialIn;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }

                        if (adjustinteract2) {
                            setcropInitialIn2((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn2 = {
                                    x: newArray[index].x,
                                    y: newArray[index].y - moveCordinatesMultiple,
                                };
                                newArray[index] = updatedCropInitialIn2;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                    }}
                    style={{
                        top: "64vh",
                        width: "60px",
                        left: '28vw',
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "60px",
                        margin: "auto",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
                        display: HideIcon ? 'none' : 'block'
                    }}
                ></Grid>

                <Grid
                    item
                    xs={12}
                    onClick={() => {
                        //alert('jj');
                        if (adjustinteract1) {
                            setcropInitialIn((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn = {
                                    x: newArray[index].x - moveCordinatesMultiple,
                                    y: newArray[index].y,
                                };
                                newArray[index] = updatedCropInitialIn;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                        if (adjustinteract2) {
                            setcropInitialIn2((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn2 = {
                                    x: newArray[index].x - moveCordinatesMultiple,
                                    y: newArray[index].y,
                                };
                                newArray[index] = updatedCropInitialIn2;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                    }}
                    style={{
                        top: "63.5vh",
                        width: "60px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "60px",
                        left: "57vw",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
                        display: HideIcon ? 'none' : 'block'
                    }}
                ></Grid>

                <Grid
                    item
                    xs={12}
                    onClick={() => {
                        if (adjustinteract1) {
                            setcropInitialIn((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn = {
                                    x: newArray[index].x + moveCordinatesMultiple,
                                    y: newArray[index].y,
                                };
                                newArray[index] = updatedCropInitialIn;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                        if (adjustinteract2) {
                            setcropInitialIn2((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn2 = {
                                    x: newArray[index].x + moveCordinatesMultiple,
                                    y: newArray[index].y,
                                };
                                newArray[index] = updatedCropInitialIn2;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                    }
                    }
                    style={{
                        top: "55vh",
                        width: "60px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "60px",
                        left: "85vw",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
                        display: HideIcon ? 'none' : 'block'
                    }}
                ></Grid>

                <Grid
                    item
                    className={"shake"}
                    xs={12}
                    onClick={() => {

                        if (adjustinteract1) {
                            setcropInitialIn((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn = {
                                    x: newArray[index].x,
                                    y: newArray[index].y + moveCordinatesMultiple,
                                };
                                newArray[index] = updatedCropInitialIn;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }


                        if (adjustinteract2) {
                            setcropInitialIn2((prevArray: any) => {
                                const newArray = [...prevArray];
                                const updatedCropInitialIn2 = {
                                    x: newArray[index].x,
                                    y: newArray[index].y + moveCordinatesMultiple,
                                };
                                newArray[index] = updatedCropInitialIn2;

                                if (showBorder) {
                                } else {
                                    setshowBorder(true);
                                }
                                if (canxxtim.current) {
                                    clearTimeout(canxxtim.current);
                                }
                                canxxtim.current = setTimeout(() => {
                                    setshowBorder(false);
                                }, canxxTime);

                                return newArray;
                            });
                        }
                    }}
                    style={{
                        top: "55vh",
                        width: "60px",
                        left: '28vw',
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "60px",
                        borderRadius: "50%",
                        margin: "auto",
                        position: "relative",
                        cursor: "pointer",
                        display: HideIcon ? 'none' : 'block'
                    }}
                ></Grid>

                <Grid
                    item
                    xs={6}
                    style={{
                        position: "fixed",
                        width: '100%',
                        top: "4vh",
                        margin: "auto",
                        left: '25vw',
                        display: HideIcon ? 'none' : 'block'
                    }}
                >

                    {adjustinteract1 ? <Slider
                        value={valuex}
                        onChange={handleChange}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        marks
                        min={2}
                        step={0.5}
                        max={300}
                    /> : null}


                    {adjustinteract2 ? <Slider
                        value={valuex2}
                        onChange={handleChange2x}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        marks
                        min={2}
                        step={0.5}
                        max={300}
                    /> : null}
                </Grid>

                <Grid
                    item
                    xs={12}
                    style={{
                        width: "100%",
                        position: "relative",
                        top: "14vh",
                        margin: "auto",
                        textAlign: "center",
                        justifyContent: "center",

                    }}
                >
                    {adjustinteract1 && interactContent ?

                        interactContenttype === 1 ?
                            <video
                                controls playsInline muted autoPlay
                                src={interactContentvideo ? URL.createObjectURL(interactContentvideo) : ''}   // Using the blob URL from interactContentvideo
                                style={{
                                    width: "10%", // Set thevideo width to 100%
                                    height: "auto",
                                    display: HideIcon ? 'none' : 'block',
                                    margin: "0 auto", // Center the video
                                    cursor: 'pointer',
                                    top: '4vh',
                                    left: '90vw',
                                    position: 'fixed'
                                }}
                            // Add if you want video controls like play, pause, etc.
                            /> :
                            <img
                                src={interactContent}
                                style={{
                                    width: "10%",
                                    height: "auto",
                                    position: 'fixed',
                                    top: '0vh',
                                    left: '90vw',
                                    display: HideIcon ? 'none' : 'block'
                                }}
                            />
                        : null}

                    {adjustinteract2 && interactContent2 ? (



                        interactContenttype2 === 1 ?
                            <video
                                controls playsInline muted autoPlay
                                src={interactContentvideo2 ? URL.createObjectURL(interactContentvideo2) : ''}   // Using the blob URL from interactContentvideo
                                style={{
                                    width: "10%", // Set thevideo width to 100%
                                    height: "auto",
                                    display: HideIcon ? 'none' : 'block',
                                    margin: "0 auto", // Center the video
                                    cursor: 'pointer',
                                    top: '4vh',
                                    left: '90vw',
                                    position: 'fixed'
                                }}
                            // Add if you want video controls like play, pause, etc.
                            /> :
                            <img
                                src={interactContent2}
                                style={{
                                    width: "10%",
                                    height: "auto",
                                    position: 'fixed',
                                    top: '0vh',
                                    left: '90vw',
                                    display: HideIcon ? 'none' : 'block'
                                }}
                            />
                    ) : null}




                    <ExpandLessIcon
                        onClick={() => {
                            setHideIcon(!HideIcon);
                        }}
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            margin: "auto",
                            color: "#ffffff",
                            fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                            position: "fixed",
                            bottom: HideIcon ?
                                '27vh'
                                : ratiox >= 3 ? '77vh' : "47.5vh",
                            textAlign: "center",
                            left: "7vw",
                        }}
                    />


                    <CheckIcon
                        onClick={() => {
                            setadjustinteract1(false);
                            setadjustinteract2(false);
                        }}
                        className={
                            darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                            margin: "auto",
                            color: "#ffffff",
                            fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                            position: "fixed",
                            bottom: ratiox >= 3 ? '37vh' : "18.5vh",
                            textAlign: "center",
                            left: "7vw",
                            display: HideIcon ? 'none' : 'block'
                        }}
                    />
                </Grid>
            </Grid> :
                <Grid
                    className={
                        darkmodeReducer
                            ? "mobileTextfield-backplateColorDark"
                            : "mobileTextfield-backplateColorLight"
                    }
                    item
                    xs={12}
                    style={{
                        width: "100%",
                        padding: "0px",
                        position: "absolute",
                        top: "0vh",
                        right: "0px",
                        height: "0vh",
                        zIndex: 20,
                        display: stickerOPtionsDefault === 4 ? "block" : "none",
                    }}
                >




                    {interactContenttype === 1 ?
                        ////////////////////////////////////////////////VIDEO////////////////////////////////////////////////
                        <>
                            < Grid container>
                                <Grid item xs={2}>
                                    <video ref={videoRefjj}
                                        controls playsInline
                                        onClick={(e: any) => {
                                            setadjustinteract1(true);
                                            if (videoRefjj.current) {
                                                videoRefjj.current.muted = !videoRefjj.current.muted; // Toggle mute
                                            }
                                        }}
                                        src={interactContentvideo ? URL.createObjectURL(interactContentvideo) : ''}    // Using the blob URL from interactContentvideo
                                        style={{
                                            width: "100%", // Set the video width to 100%
                                            height: "auto",
                                            display: "block", // Ensure proper rendering in some browsers
                                            margin: "0 auto", // Center the video
                                            cursor: 'pointer'
                                        }}
                                    // Add if you want video controls like play, pause, etc.
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item xs={12} style={{ position: 'relative', textAlign: 'center', marginTop: '4vh' }}>



                                        {AllowDel ?
                                            <DeleteForeverIcon
                                                onClick={() => {
                                                    callDelInteract(true);
                                                }}
                                                className={
                                                    darkmodeReducer
                                                        ? " dontallowhighlighting zuperkingIcon "
                                                        : " dontallowhighlighting zuperkingIcon  "
                                                }
                                                style={{
                                                    margin: "auto",
                                                    color: colorx,
                                                    fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                    position: "absolute",
                                                    bottom: "-6vh",
                                                    textAlign: "center",
                                                    cursor: 'pointer'

                                                }}
                                            />
                                            :
                                            <BackspaceIcon
                                                onClick={() => {

                                                    setAllowDel(true);

                                                    if (Timer.current) {
                                                        clearTimeout(Timer.current);
                                                    }
                                                    Timer.current = setTimeout(() => {
                                                        setAllowDel(false);
                                                    }, 2500)

                                                }}
                                                className={
                                                    darkmodeReducer
                                                        ? " dontallowhighlighting zuperkingIcon "
                                                        : " dontallowhighlighting zuperkingIcon  "
                                                }
                                                style={{
                                                    margin: "auto",
                                                    color: "#ffffff",
                                                    fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                    position: "absolute",
                                                    bottom: "-6vh",
                                                    textAlign: "center",
                                                    cursor: 'pointer'

                                                }}
                                            />}
                                    </Grid>
                                </Grid>  </Grid>
                        </>

                        ////////////////////////////////////////////////VIDEO////////////////////////////////////////////////

                        :
                        ////////////////////////////////////////////////IMAGE////////////////////////////////////////////////

                        interactContent.length > 0 ?
                            interactContent[index] === '' ?
                                null :
                                < Grid container>
                                    <Grid item xs={2}>
                                        <img
                                            onClick={
                                                () => {
                                                    setadjustinteract1(true);
                                                }
                                            }
                                            src={interactContent[index]}
                                            style={{
                                                width: "100%", // Set the image width to 100%
                                                height: "auto",
                                                display: "block", // Ensure proper rendering in some browsers
                                                margin: "0 auto", // Center the image
                                                cursor: 'pointer',



                                            }}
                                            alt="Interact Content"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid item xs={12} style={{ position: 'relative', textAlign: 'center', marginTop: '4vh' }}>



                                            {AllowDel ?
                                                <DeleteForeverIcon
                                                    onClick={() => {
                                                        callDelInteract(true);
                                                    }}
                                                    className={
                                                        darkmodeReducer
                                                            ? " dontallowhighlighting zuperkingIcon "
                                                            : " dontallowhighlighting zuperkingIcon  "
                                                    }
                                                    style={{
                                                        margin: "auto",
                                                        color: colorx,
                                                        fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                        position: "absolute",
                                                        bottom: "-6vh",
                                                        textAlign: "center",
                                                        cursor: 'pointer'

                                                    }}
                                                />
                                                :
                                                <BackspaceIcon
                                                    onClick={() => {

                                                        setAllowDel(true);

                                                        if (Timer.current) {
                                                            clearTimeout(Timer.current);
                                                        }
                                                        Timer.current = setTimeout(() => {
                                                            setAllowDel(false);
                                                        }, 2500)

                                                    }}
                                                    className={
                                                        darkmodeReducer
                                                            ? " dontallowhighlighting zuperkingIcon "
                                                            : " dontallowhighlighting zuperkingIcon  "
                                                    }
                                                    style={{
                                                        margin: "auto",
                                                        color: "#ffffff",
                                                        fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                        position: "absolute",
                                                        bottom: "-6vh",
                                                        textAlign: "center",
                                                        cursor: 'pointer'

                                                    }}
                                                />}
                                        </Grid>
                                    </Grid>
                                </Grid>

                            : null
                        ////////////////////////////////////////////////IMAGE////////////////////////////////////////////////
                    }





                    {



                        interactContenttype2 === 1 ?
                            < Grid container>
                                <Grid item xs={2}>
                                    <video ref={videoRefjja}
                                        controls playsInline
                                        onClick={(e: any) => {
                                            setadjustinteract2(true);
                                            if (videoRefjja.current) {
                                                videoRefjja.current.muted = !videoRefjja.current.muted; // Toggle mute
                                            }
                                        }}
                                        src={interactContentvideo2 ? URL.createObjectURL(interactContentvideo2) : ''}    // Using the blob URL from interactContentvideo
                                        style={{
                                            width: "100%", // Set the video width to 100%
                                            height: "auto",
                                            display: "block", // Ensure proper rendering in some browsers
                                            margin: "0 auto", // Center the video
                                            cursor: 'pointer'
                                        }}
                                    // Add if you want video controls like play, pause, etc.
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{ position: "relative", textAlign: "center", marginTop: "4vh" }}
                                    >
                                        {AllowDel2 ? (
                                            <DeleteForeverIcon
                                                onClick={() => {
                                                    callDelInteract(false);
                                                }}
                                                className={
                                                    darkmodeReducer
                                                        ? " dontallowhighlighting zuperkingIcon "
                                                        : " dontallowhighlighting zuperkingIcon  "
                                                }
                                                style={{
                                                    margin: "auto",
                                                    color: colorx,
                                                    fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                    position: "absolute",
                                                    bottom: "-6vh",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        ) : (
                                            <BackspaceIcon
                                                onClick={() => {
                                                    setAllowDel2(true);

                                                    if (Timer2.current) {
                                                        clearTimeout(Timer2.current);
                                                    }
                                                    Timer2.current = setTimeout(() => {
                                                        setAllowDel2(false);
                                                    }, 2500);
                                                }}
                                                className={
                                                    darkmodeReducer
                                                        ? " dontallowhighlighting zuperkingIcon "
                                                        : " dontallowhighlighting zuperkingIcon  "
                                                }
                                                style={{
                                                    margin: "auto",
                                                    color: "#ffffff",
                                                    fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                    position: "absolute",
                                                    bottom: "-6vh",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        )}
                                    </Grid>
                                </Grid></Grid>
                            :


                            interactContent2.length > 0 ?




                                interactContent2[index] === "" ? (
                                    null
                                ) : (
                                    <Grid container>
                                        <Grid item xs={2} className="zuperxy">
                                            <img
                                                onClick={() => {
                                                    setadjustinteract2(true);
                                                }}
                                                src={interactContent2[index]}
                                                style={{
                                                    width: "100%", // Set the image width to 100%
                                                    height: "auto",
                                                    display: "block", // Ensure proper rendering in some browsers
                                                    margin: "0 auto", // Center the image
                                                    cursor: 'pointer',



                                                }}
                                                alt="Interact Content"
                                            />
                                        </Grid>
                                        <Grid item xs={6} className="zuperxy">
                                            <Grid
                                                item
                                                xs={12}
                                                style={{ position: "relative", textAlign: "center", marginTop: "4vh" }}
                                            >
                                                {AllowDel2 ? (
                                                    <DeleteForeverIcon
                                                        onClick={() => {
                                                            callDelInteract(false);
                                                        }}
                                                        className={
                                                            darkmodeReducer
                                                                ? " dontallowhighlighting zuperkingIcon "
                                                                : " dontallowhighlighting zuperkingIcon  "
                                                        }
                                                        style={{
                                                            margin: "auto",
                                                            color: colorx,
                                                            fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                            position: "absolute",
                                                            bottom: "-6vh",
                                                            textAlign: "center",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                ) : (
                                                    <BackspaceIcon
                                                        onClick={() => {
                                                            setAllowDel2(true);

                                                            if (Timer2.current) {
                                                                clearTimeout(Timer2.current);
                                                            }
                                                            Timer2.current = setTimeout(() => {
                                                                setAllowDel2(false);
                                                            }, 2500);
                                                        }}
                                                        className={
                                                            darkmodeReducer
                                                                ? " dontallowhighlighting zuperkingIcon "
                                                                : " dontallowhighlighting zuperkingIcon  "
                                                        }
                                                        style={{
                                                            margin: "auto",
                                                            color: "#ffffff",
                                                            fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont}vw`,
                                                            position: "absolute",
                                                            bottom: "-6vh",
                                                            textAlign: "center",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ) :
                                null}


                    <Grid item xs={12} style={{ bottom: '-20vh', position: 'relative', display: Pop ? 'block' : 'none' }}>
                        <Grid item xs={12} sm={3} style={{
                            height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                            fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? '#ffffff' : '#000000'
                        }}>
                            Click On Image
                        </Grid>

                    </Grid>



                </Grid>}


        </div >
    )

}

export const InteractMenux = React.memo(InteractMenuxx);
