import React, { useState, useRef, useCallback, useEffect } from "react";
import { Arrow } from "./Arrow";
import { Dots } from "./Dots";
import { SliderNumber } from "./SliderNumber";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { RootStateOrAny, useSelector } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { Minimize } from "@mui/icons-material";

function LoaderPostx({ sliderLoader, autoSlideDisplay, post, RandomColor, minimise }: any): JSX.Element {
    ///
    ///
    ///
    /// GET DARKMODE FROM REDUX STORE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            darkmode: boolean;
        };
    }
    const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
        ...state.GlobalReducer,
    }));
    const darkmodeReducer = darkmode;




    ///
    ///
    ///
    /// GET LOGGED USER DATA FROM REDUX STORE
    interface RootStateReducerImage {
        UserdataReducer: {

            id: number;

            memeberPageid: number;


        };
    }
    const { id, memeberPageid, } =
        useSelector((state: RootStateReducerImage) => ({
            ...state.UserdataReducer,
        }));



    const idReducer = id;
    const memeberPageidReducer = memeberPageid;




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

    return (
        <>
            <Grid
                item
                xs={12}

                className={
                    darkmodeReducer
                        ? `${sliderLoader} turLight`
                        : `${sliderLoader} turlight`
                }
                style={{
                    backgroundImage: post ?
                        idReducer === memeberPageidReducer ? `linear-gradient(45deg, ${RandomColor}, ${colorReducer})` :

                            `linear-gradient(45deg, ${colorReducer}, ${post.color1})` :
                        `linear-gradient(45deg, ${RandomColor}, ${colorReducer})`,
                    height: "1.7vh",
                    position: "absolute",
                    display: autoSlideDisplay,
                    zIndex: 100000,
                    top: "0em",
                    width: 'auto',


                }}
            ></Grid>

        </>
    );
}

export const LoaderPost = React.memo(LoaderPostx);
