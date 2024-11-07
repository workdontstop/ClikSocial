import React, { useState, useCallback, useEffect, useRef } from "react";

import Axios from "axios";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
/// USE DISPATCH
import { useSelector, useDispatch } from "react-redux";
import Palette, { usePalette } from "react-palette";
import CheckIcon from "@mui/icons-material/Check";
import { Grid } from "@material-ui/core";
import { matchPc, matchTablet } from "../DetectDevice";
import { UpdateColorAction } from "../GlobalActions";
import { useSpring, animated } from "react-spring";
import CircleIcon from "@mui/icons-material/Circle";

function AboutColorx({
  zoomed,
  showModalForm,
  setcheckIfColorChanged,
}: any): JSX.Element {
  var data = "";
  const dispatch = useDispatch();
  ///

  const getSliderWidthRef = useRef<HTMLDivElement>(null);

  const [ActiveSlide, setActiveSlide] = useState(0);

  const [stalestate] = useState(1);

  const [getSliderWidth, setgetSliderWidth] = useState(0);

  const [se, setse] = useState<any>(null);

  const [translate, setTranslate] = useState(0);

  const [ShowHideNegativeValue, setShowHideNegativeValue] = useState("-");

  const [Showgood, setShowgood] = useState<Array<any>>([]);

  const [ColorData, setColorData] = useState<Array<any>>([
    "#00FFFF",
    "#0080FF",
    "#217ca3",
    "#00FF00",
    "#00FF7F",
    "#96a321",
    "#FF0000",
    "#a3213f",
    "#a33221",
    "#FFA500",
    "#a36b21",
    "#FFFF00",
    "#DFFF00",
    "#8F00FF",
    "#6203fc",
    "#FF00FF",
    "#9221a3",
    "#FF007F",
  ]);


  ///
  ///
  ///
  ///GET color SLIDER WIDTH
  useEffect(() => {
    if (getSliderWidthRef.current && getSliderWidthRef.current.clientWidth) {
      var xx = 9 / 100;
      var tt = document.documentElement.clientHeight * xx * 2;
      setgetSliderWidth(tt);
    }
  }, []);

  const tempcolorz: any = [];
  ///
  ///
  ///
  ///GET color SLIDER WIDTH
  useEffect(() => {
    ColorData.map((obj: any, index: any) => {
      if (colortypeReducer === index) {
        tempcolorz[index] = 1;
      } else {
        tempcolorz[index] = 0;
      }

      if (ColorData.length - 1 === index) {
        setShowgood(tempcolorz);
      }
    });
  }, []);

  const optionsCollectImageRef = useRef<HTMLDivElement>(null);

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

  var colorReducerdark = "#00FFFF";
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
  colorReducerdark = colordark;
  const colortypeReducer = colortype;

  var showCheck1: any = "hidden";
  var showCheck2: any = "hidden";
  var showCheck3: any = "hidden";
  var showCheck4: any = "hidden";
  var showCheck5: any = "hidden";

  if (colortypeReducer === 0) {
    showCheck1 = "visible";
  } else if (colortypeReducer === 1) {
    showCheck2 = "visible";
  } else if (colortypeReducer === 2) {
    showCheck3 = "visible";
  } else if (colortypeReducer === 3) {
    showCheck4 = "visible";
  } else {
    showCheck5 = "visible";
  }
  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      id: number;
    };
  }
  const { id } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));
  const idReducer = id;

  ///
  ///
  ///
  ///DISPATCH

  ///
  ///
  ///
  ///DOT ENV DATA
  const { REACT_APP_SUPERSTARZ_URL } = process.env;

  var colorboy: any = {
    color1: "",
    color2: "",
    colortype: 0,
    id: idReducer,
  };

  const updateColor = useCallback(

    (type: number) => {

      setcheckIfColorChanged(false);
      colorboy = {
        color1: ColorData[type],
        color2: "",
        colortype: type,
        id: idReducer,
      };

      dispatch(UpdateColorAction(colorboy, 2));

      setcheckIfColorChanged(true);
    },
    [dispatch, colorboy]
  );

  const tempc: any = [];
  ///
  ///
  ///
  useEffect(() => {
    if (colorReducerdark === null || colorReducerdark === "") {
    } else {
      ColorData.map((obj: any, index: any) => {
        if (index === 0) {
          tempc[index] = colorReducerdark;
        } else {
          tempc[index] = ColorData[index];
        }

        if (ColorData.length - 1 === index) {
          setColorData(tempc);
        }
      });
    }
  }, [colorReducerdark, showModalForm]);

  const updatecolor2 = (i: any) => {
    ColorData.map((obj: any, index: any) => {
      if (i === index) {
        tempcolorz[index] = 1;
      } else {
        tempcolorz[index] = 0;
      }

      if (ColorData.length - 1 === index) {
        setShowgood(tempcolorz);
      }

      updateColor(i);
    });
  };

  const initialRawSignValue = {
    inputedEmail: "",
    inputedUsername: "",
    inputedPassword: "",
  };
  const initialErrorSignValue = {
    inputedEmail: 0,
    inputedUsername: 0,
    inputedPassword: 0,
  };

  const [rawSignupValues, setRawSignupValues] = useState(initialRawSignValue);
  const [errorsSignupValues, setErrorsSignupValues] = useState(
    initialErrorSignValue
  );

  const UsernameCheckingTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const clickcolortimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (clickcolortimer.current) {
    clearTimeout(clickcolortimer.current);
  }
  clickcolortimer.current = setTimeout(() => { }, 3000);

  const updateTextFeildValues = useCallback(() => { }, [
    REACT_APP_SUPERSTARZ_URL,
    dispatch,
    colorboy,
  ]);

  ///
  ///
  ///
  ///CREATE OPTIONS SLIDER ANIMATION WITH  REACT SPRING
  const modalanimation = useSpring({
    config: {
      mass: 0.09,
      tension: 50,
      friction: 1.5,
    },
    transform: `translateX(${ShowHideNegativeValue}${translate}px)`,
    height: "auto",
    display: "flex",
    width: `auto`,
    padding: "0px",
    margin: "auto",
  });

  ///
  ///
  ///
  /// NEXT SLIDE  FOR PC
  const nextSlidePc = () => {
    var i = ActiveSlide + 1;
    setShowHideNegativeValue("-");
    ///set((state) => (state + 1) % slides.length)
    var ff = ColorData.length - 1;

    if (ActiveSlide >= ff / 2) {
      setTranslate(0);
      setActiveSlide(0);
    } else {
      setTranslate((translate) => translate + getSliderWidth);
      setActiveSlide(i);
    }
  };

  ///
  ///
  ///
  /// PREV SLIDE  FOR PC
  const prevSlidePc = () => {
    var i = ActiveSlide - 1;
    setShowHideNegativeValue("-");
    ///set((state) => (state + 1) % slides.length)

    if (ActiveSlide === 0) {
      setTranslate(getSliderWidth * 9);
      setActiveSlide(9);
    } else {
      setTranslate((translate) => translate - getSliderWidth);
      setActiveSlide(i);
    }
  };

  var shadow4color = darkmodeReducer ? "#444444" : "#cccccc";

  return (
    <>
      <Grid
        container
        style={{
          zIndex: 1,
          paddingLeft: "0px",
          paddingRight: "0px",
          top: "0vh",
          position: "relative",
          margin: "0 auto",
          overflow: "hidden",
          left: "0px",
          height: "23vh",
          paddingBottom: "0vh",
        }}
      >
        <Grid
          item
          style={{
            margin: "auto",
            textAlign: "center",
            position: "absolute",
            top: "8vh",
            left: "0.2vw",
            opacity: darkmodeReducer ? 1 : 0.3,
          }}
        >
          <CircleIcon
            onClick={() => {
              prevSlidePc();
            }}
            className="buttonshake"
            style={{
              fontSize: "1.3vw",
              cursor: "pointer",
              color: darkmodeReducer
                ? "rgba(200, 200, 200, 0.1)"
                : "rgba(005, 005, 005, 0.2)",
              display: matchPc ? "block" : "none",
            }}
          />
        </Grid>
        <animated.div ref={optionsCollectImageRef} style={modalanimation}>
          {ColorData.map((im: any, i: any) => (
            <Grid key={i} item xs={12}>
              <div
                style={{
                  width: "9vh",
                  margin: "auto",
                  textAlign: "center",
                  top: matchPc ? (zoomed ? "2.8vh" : "1.8vh") : "0.54em",
                  marginLeft: "50%",
                  visibility: Showgood[i] === 0 ? "hidden" : "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: matchPc ? "1.1vw" : "2.08vh",
                    fontWeight: "bolder",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    color: darkmodeReducer ? "#dddddd" : "#0b111b",
                  }}
                >
                  <CheckIcon />
                </div>
              </div>
              <Grid
                ref={i === 0 ? getSliderWidthRef : null}
                onClick={() => {
                  updatecolor2(i);
                }}
                item
                xs={2}
                style={{
                  width: `9vh`,
                  height: `9vh`,
                  position: "absolute",
                  backgroundColor: ColorData[i],
                  filter: `drop-shadow(4.2px 2.1px 2.92px ${shadow4color})`,
                  borderRadius: "50%",
                  zIndex: 0,
                  marginTop: "-0px",
                  marginLeft: "3%",
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              >
                {" "}
              </Grid>
            </Grid>
          ))}
        </animated.div>
        <Grid
          item
          style={{
            margin: "auto",
            textAlign: "center",
            position: "absolute",
            top: "8vh",
            right: "0.2vw",
            opacity: darkmodeReducer ? 1 : 0.3,
          }}
        >
          <CircleIcon
            onClick={() => {
              nextSlidePc();
            }}
            className="buttonshake"
            style={{
              fontSize: "1.3vw",
              cursor: "pointer",
              color: darkmodeReducer
                ? "rgba(200, 200, 200, 0.1)"
                : "rgba(005, 005, 005, 0.2)",
              display: matchPc ? "block" : "none",
            }}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            marginTop: zoomed ? "6.5vh" : "5vh",
            padding: "0px",
            marginLeft: zoomed ? "9.4vw" : "2.3vw",
            zIndex: 6,
          }}
        ></Grid>{" "}
      </Grid>
    </>
  );
}

export const AboutColor = React.memo(AboutColorx);
