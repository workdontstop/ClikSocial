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

function InteractMenux({
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

    const darkmodeReducer = darkmode;

    const [AllowDel, setAllowDel] = useState(false);
    const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);


    const [AllowDel2, setAllowDel2] = useState(false);
    const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);


    const videoRefjj = useRef<HTMLVideoElement>(null);

    const videoRefjja = useRef<HTMLVideoElement>(null);



    const [Pop, setPop] = useState(false);



    useEffect(() => {

        if (stickerOPtionsDefault === 4) {



            setPop(true);


            setTimeout(() => {

                setPop(false);
            }, 8000)

        }

    }, [stickerOPtionsDefault])


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
                    width: "26%",
                    padding: "0px",
                    position: "absolute",
                    top: "0vh",
                    right: "0px",
                    height: "100vh",
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
                        top: "4vh",
                        width: "50px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "50px",
                        margin: "auto",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
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
                        top: "5vh",
                        width: "50px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "50px",
                        left: "8vw",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
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
                        top: "-1vh",
                        width: "50px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "50px",
                        left: "15vw",
                        borderRadius: "50%",
                        position: "relative",
                        cursor: "pointer",
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
                        top: "-0vh",
                        width: "50px",
                        backgroundColor: "",
                        border: darkmodeReducer ? "solid #ffffff" : "solid #000000",
                        height: "50px",
                        borderRadius: "50%",
                        margin: "auto",
                        position: "relative",
                        cursor: "pointer",
                    }}
                ></Grid>

                <Grid
                    item
                    xs={6}
                    style={{
                        position: "relative",
                        top: "9vh",
                        margin: "auto",
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
                                src={interactContentvideo ? URL.createObjectURL(interactContentvideo) : ''}   // Using the blob URL from interactContentvideo
                                style={{
                                    width: "100%", // Set thevideo width to 100%
                                    height: "auto",
                                    display: "block", // Ensure proper rendering in some browsers
                                    margin: "0 auto", // Center the video
                                    cursor: 'pointer'
                                }}
                            // Add if you want video controls like play, pause, etc.
                            /> :
                            <img
                                src={interactContent}
                                style={{
                                    width: "40%",
                                    height: "auto",
                                }}
                            />
                        : null}

                    {adjustinteract2 && interactContent2 ? (



                        interactContenttype2 === 1 ?
                            <video
                                src={interactContentvideo2 ? URL.createObjectURL(interactContentvideo2) : ''}   // Using the blob URL from interactContentvideo
                                style={{
                                    width: "100%", // Set thevideo width to 100%
                                    height: "auto",
                                    display: "block", // Ensure proper rendering in some browsers
                                    margin: "0 auto", // Center the video
                                    cursor: 'pointer'
                                }}
                            // Add if you want video controls like play, pause, etc.
                            /> :
                            <img
                                src={interactContent2}
                                style={{
                                    width: "40%",
                                    height: "auto",
                                }}
                            />
                    ) : null}

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
                            position: "absolute",
                            bottom: "-12vh",
                            textAlign: "center",
                            left: "12vw",
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
                        width: "26%",
                        padding: "0px",
                        position: "absolute",
                        top: "0vh",
                        right: "0px",
                        height: "100vh",
                        zIndex: 20,
                        display: stickerOPtionsDefault === 4 ? "block" : "none",
                    }}
                >




                    {interactContenttype === 1 ?
                        ////////////////////////////////////////////////VIDEO////////////////////////////////////////////////
                        <>
                            < Grid container>
                                <Grid item xs={6}>
                                    <video ref={videoRefjj}
                                        controls
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
                                <Grid container style={{ paddingTop: '5vh' }}>
                                    <Grid item xs={3}
                                    ></Grid>

                                    <Grid item xs={6}
                                        style={{
                                            textAlign: "center",
                                            height: '20vh'

                                        }}>
                                        <PanoramaIcon
                                            className={
                                                darkmodeReducer
                                                    ? " dontallowhighlighting zuperkingIcon "
                                                    : " dontallowhighlighting zuperkingIcon  "
                                            }
                                            style={{
                                                color: darkmodeReducer ? '#ffffff' : '#000000',
                                                margin: "auto",
                                                marginTop: '4vh',
                                                fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont + 2}vw`,
                                                textAlign: "center",
                                                opacity: '0.1'

                                            }}
                                        />
                                    </Grid>

                                </Grid> :
                                < Grid container>
                                    <Grid item xs={6}>
                                        <img
                                            onClick={
                                                () => {
                                                    setadjustinteract1(true);
                                                }
                                            }
                                            src={interactContent[index]}
                                            style={{
                                                width: "80%", // Set the image width to 100%
                                                height: "auto",
                                                display: "block", // Ensure proper rendering in some browsers
                                                margin: "0 auto", // Center the image
                                                cursor: 'pointer'
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
                                <Grid item xs={6}>
                                    <video ref={videoRefjja}
                                        controls
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
                                    <Grid container>
                                        <Grid item xs={3}></Grid>
                                        <Grid
                                            item
                                            xs={6}
                                            style={{
                                                textAlign: "center",
                                                height: "20px",
                                            }}
                                        >
                                            <PanoramaIcon
                                                className={
                                                    darkmodeReducer
                                                        ? " dontallowhighlighting zuperkingIcon "
                                                        : " dontallowhighlighting zuperkingIcon  "
                                                }
                                                style={{
                                                    margin: "auto",
                                                    marginTop: "4vh",
                                                    color: darkmodeReducer ? '#ffffff' : '#000000',
                                                    fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont + 2}vw`,
                                                    textAlign: "center",
                                                    opacity: "0.1",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <img
                                                onClick={() => {
                                                    setadjustinteract2(true);
                                                }}
                                                src={interactContent2[index]}
                                                style={{
                                                    width: "80%", // Set the image width to 100%
                                                    height: "auto",
                                                    display: "block", // Ensure proper rendering in some browsers
                                                    margin: "0 auto", // Center the image
                                                    cursor: 'pointer'
                                                }}
                                                alt="Interact Content"
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
                                        </Grid>
                                    </Grid>
                                ) :
                                <Grid container>
                                    <Grid item xs={3}
                                    ></Grid>
                                    <Grid item xs={6}
                                        style={{
                                            textAlign: "center",
                                            height: '20px'

                                        }}>
                                        <PanoramaIcon
                                            className={
                                                darkmodeReducer
                                                    ? " dontallowhighlighting zuperkingIcon "
                                                    : " dontallowhighlighting zuperkingIcon  "
                                            }
                                            style={{
                                                margin: "auto",
                                                marginTop: '4vh',
                                                color: darkmodeReducer ? '#ffffff' : '#000000',
                                                fontSize: matchMobile ? `${mobilefont}vh` : `${pcfont + 2}vw`,
                                                textAlign: "center",
                                                opacity: '0.1'

                                            }}
                                        />
                                    </Grid>
                                </Grid>}


                    <Grid item xs={12} style={{ bottom: '-20vh', position: 'relative', }}>
                        <Grid item xs={12} sm={12} style={{
                            height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                            fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? '#ffffff' : '#000000'
                        }}>
                            {Pop ? 'Click On Image' : 'BOP'}
                        </Grid>

                    </Grid>



                </Grid>}


        </div >
    )

}

export const InteractMenu = React.memo(InteractMenux);
