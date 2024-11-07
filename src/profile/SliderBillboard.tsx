import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowBillboard } from "./ArrowBillboard";
import { matchPc } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { useSelector } from "react-redux";
import { DotsBillboard } from "./DotsBillboard";

function SliderBillboardx({
  slidesthumb,
  slides,
  billboardDynamicHeight,
  ClickBillboardClose,
  ShowBillboard,
  billboardserverswitch,
  sliderIndex,
  setSliderIndex,
  billboardBlank,
  billboardBlankthumb
}: any): JSX.Element {


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;


  var allow4dev = "";



  const [allowAutoPlay, setAllowAutoPlay] = useState(true);

  const [sliderDuration, setsliderDuration] = useState(2000);
  const [autoSlideDuration] = useState(3000);

  /// const getWidth = () => window.innerWidth;
  ///var newGetWidth = getWidth() * slides.length;

  const handleTouchMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const cancelAutoBillboardTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const changeBillboardAutoSlideDurationTimer = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const autoPlayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const SlideimageRef = useRef<HTMLImageElement>(null);
  const SlideimageRefthumb = useRef<HTMLImageElement>(null);
  const SlideRef = useRef<HTMLDivElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

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
      billboard2: string;
      MemberProfileData: any;
    };
  }
  const { billboard2, MemberProfileData } = useSelector(
    (state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    })
  );

  const billboard2Reducer = billboard2;

  const MemberProfileDataReducer = MemberProfileData;

  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX
  const transitions = useTransition(sliderIndex, {
    key: sliderIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: sliderDuration - 50 },
  });

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM IMAGE
  const sliderFirstImageOnLoad = (item: number) => {
    if (item === 0) {
      if (SlideimageRef.current && SlideimageRef.current.clientHeight) {
        setImageHeight(SlideimageRef.current.clientHeight);
      }
    }
  };

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM IMAGE THUMBS IF IMAGE DOES NOT LOAD
  const sliderFirstImageOnLoadthumb = (item: number) => {
    if (item === 0 && imageHeight === 0) {
      if (
        SlideimageRefthumb.current &&
        SlideimageRefthumb.current.clientHeight
      ) {
        setImageHeight(SlideimageRefthumb.current.clientHeight);
      }
    }
  };

  ///
  ///
  ///
  /// HANDLE TOUCH START EVENT
  const handleTouchStart = (e: any) => {
    ////onMouseDown onMouseMove
    ////touchDown = e.clientX
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  ///
  ///
  ///
  /// HANDLE TOUCH MOVE EVENT
  const handleTouchMove = (e: any) => {
    if (handleTouchMoveTimer.current) {
      clearTimeout(handleTouchMoveTimer.current);
    }
    handleTouchMoveTimer.current = setTimeout(function () {
      const touchDown = touchPosition;

      if (touchDown === null) {
        return;
      }
      ////currentTouch = e.clientX
      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;

      if (diff > 40) {
        nextSlide();
      } else if (diff < -40) {
        prevSlide();
      } else {
      }

      setTouchPosition(null);
      return false;
    }, 200);

    return false;
  };

  ///
  ///
  ///
  /// NEXT SLIDE
  const nextSlide = () => {
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }

    ///set((state) => (state + 1) % slides.length);
    if (sliderIndex === slides.length - 1) {
      setSliderIndex((sliderIndex: any) => 0);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex + 1);
    }
  };

  ///
  ///
  ///
  /// PREV SLIDE
  const prevSlide = () => {
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }

    if (sliderIndex === 0) {
      setSliderIndex((sliderIndex: any) => slides.length - 1);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex - 1);
    }
  };

  ///
  ///
  ///
  /// AUTO PLAY SLIDER DEPENDENT FUNCTION
  const startSlider = () => {
    setAllowAutoPlay(false);

    autoPlayTimer.current = setInterval(function () {
      setSliderIndex((state: any) => (state + 1) % slides.length);
    }, autoSlideDuration);
  };

  ///
  ///
  ///
  /// AUTO PLAY SLIDER START
  const SliderAutoPlay = () => {
    if (allowAutoPlay) {
      startSlider();
    } else {
      setAllowAutoPlay(true);

      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    }
  };

  ///
  ///
  ///
  /// UPDATE AUTO  PLAY  DURATION  AFTER INITIAL QUICK SLIDE

  const callNewAutoBillboard = useCallback(() => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    autoPlayTimer.current = setInterval(function () {
      if (ShowBillboard) {
        if (autoPlayTimer.current) {
          clearInterval(autoPlayTimer.current);
        }
      } else {
        setSliderIndex((state: any) => (state + 1) % slides.length);
      }
    }, 12000);

    if (cancelAutoBillboardTimer.current) {
      clearTimeout(cancelAutoBillboardTimer.current);
    }
    cancelAutoBillboardTimer.current = setTimeout(function () {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    }, 240000);
  }, [ShowBillboard, autoPlayTimer]);

  ///
  ///
  ///START AUTOPLAY ON PAGE LOAD
  useEffect(() => {
    var f;
    if (MemberProfileDataReducer === 0) {
      f = 9000;
    } else {
      f = 9000;
    }
    if (slides[1]) {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }

      SliderAutoPlay();
      changeBillboardAutoSlideDurationTimer.current = setTimeout(function () {
        setsliderDuration(2000);
        callNewAutoBillboard();
      }, f);
    }
  }, [slides, MemberProfileDataReducer]);

  useEffect(() => {
    if (slides[1]) {
      setSliderIndex((state: any) => 1 % slides.length);
    }
  }, [billboard2Reducer]);

  ///
  ///
  /// WATCH FOR CHANGE IN [ShowBillboard] AND USE THAT CONTROL SLIDER DURATION(ON VIEW) AND CLEAR AUTOPLAY TIMER
  useEffect(() => {
    if (ShowBillboard) {
      setsliderDuration(2000);
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    } else {
    }
  }, [ShowBillboard]);

  useEffect(() => {
    if (SlideRef.current) {
      SlideRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [SlideRef]);

  ///
  ///
  ///  CHANGE [showBillboard == close]  EXTEND SLIDER DURATION(ON VIEW) AND  START AUTOPLAY
  const ClickBillboardCloseStart = () => {
    ClickBillboardClose();
    setsliderDuration(2000);
    if (allowAutoPlay) {
    } else {
      callNewAutoBillboard();
    }
  };

  ///
  ///
  ///
  /// CHANGE SLIDER CONTENT USING  DOTS
  const GotoDots = (clickedDot: number) => {
    setSliderIndex((sliderIndex: any) => clickedDot);
  };

  ///
  ///
  ///
  return (
    <Grid
      item
      ref={SlideRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      xs={12}
      style={{
        position: "relative",
        height: `${imageHeight}px`,
        opacity: imageHeight === 0 ? 0 : 1,
      }}
    >
      {slides[1] === null || slides[1] === "" ? null : (
        <ArrowBillboard
          ShowBillboard={ShowBillboard}
          direction="left"
          clickSlideprev={prevSlide}
          clickSlidenext={nextSlide}
          imageHeight={imageHeight}
        />
      )}
      {transitions((style, i) => (
        <Grid key={i} xs={12} item>
          <animated.img
            ref={SlideimageRef}
            onClick={ClickBillboardCloseStart}
            onLoad={() => {
              sliderFirstImageOnLoad(i);
            }}
            style={{
              ...style,
              cursor: "pointer",
              width: "100%",
              objectFit: "cover",
              position: "absolute",
              height: billboardDynamicHeight,
              borderRadius: "0px",
              borderBottomLeftRadius: ShowBillboard
                ? "0px"
                : matchPc
                  ? "7px"
                  : "0px",
              borderBottomRightRadius: ShowBillboard
                ? "0px"
                : matchPc
                  ? "7px"
                  : "0px",
              left: "0",
              zIndex: 1,
              filter: "blur(0px)",
            }}




            src={slidesthumb[i] ? `${REACT_APP_CLOUNDFRONT}${slidesthumb[i]}` :

              `${REACT_APP_CLOUNDFRONT}${billboardBlankthumb[i]}`}


          />
          <animated.img
            ref={SlideimageRef}
            onClick={ClickBillboardCloseStart}
            onLoad={() => {
              sliderFirstImageOnLoad(i);
            }}
            style={{
              ...style,
              cursor: "pointer",
              width: "100%",
              objectFit: "cover",
              position: "absolute",
              height: billboardDynamicHeight,
              borderRadius: "0px",
              borderBottomLeftRadius: ShowBillboard
                ? "0px"
                : matchPc
                  ? "20px"
                  : "0px",
              borderBottomRightRadius: ShowBillboard
                ? "0px"
                : matchPc
                  ? "20px"
                  : "0px",
              left: "0",
              zIndex: 2,
            }}


            src={slides[i] ? `${REACT_APP_CLOUNDFRONT}${slides[i]}` :

              `${REACT_APP_CLOUNDFRONT}${billboardBlankthumb[i]}`}



          />
        </Grid>
      ))}{" "}
      {slides[1] === null || slides[1] === "" ? null : (
        <DotsBillboard
          ShowBillboard={ShowBillboard}
          GotoDots={GotoDots}
          slides={slides}
          activeSlide={sliderIndex}
        />
      )}
    </Grid>
  );
}

export const SliderBillboard = React.memo(SliderBillboardx);
