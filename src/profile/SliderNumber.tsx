import React, { useEffect, useRef, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { Grid, Switch, DialogContent } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import { matchMobile } from "../DetectDevice";
import { Loader } from "./Loader";
import TheatersIcon from '@material-ui/icons/Theaters';

import MusicOffIcon from '@material-ui/icons/MusicOff';

function SliderNumberx({
  activeSlide,
  total,
  pey,
  itemCLICKED,
  stopSlider,
  ActiveAutoPlay,
  startSlider,
  postDatainnerInteraction1,
  postDatainnerInteraction2,
  HasInteractivity,
  startInteractivity,
  post,
  ActiveCanvas, showSpin, setshowSpin,
  autoSlideDisplay,
  sliderLoader,
  minimise
}: any): JSX.Element {




  const startplay = () => {
    if (ActiveAutoPlay[pey]) {
      startSlider(0);
    } else {
      stopSlider(0);
    }
  };




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




  const sc = useRef<ReturnType<typeof setTimeout> | null>(null);



  useEffect(() => {
    if (itemCLICKED[pey] && ActiveCanvas === pey) {



      setshowSpin(true);
      if (sc.current) {
        clearTimeout(sc.current);
      }


    }

  }, [itemCLICKED, ActiveCanvas, pey]);



  var RandomColor = '#00ccff';


  return (
    <>





      {

        showSpin && sliderLoader ?
          <Loader
            minimise={minimise}
            RandomColor={RandomColor}
            post={post}
            autoSlideDisplay={autoSlideDisplay}
            sliderLoader={sliderLoader}
          />
          :

          null
      }



      {
        (
          <>
            {" "}
            {post.interacttype1 === 1 || post.interacttype2 === 1 ?
              <VideocamIcon
                onClick={() => {


                }}
                className={HasInteractivity ? darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight heartbeat"
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark heartbeat " :
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                    : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "}

                style={{
                  color: darkmodeReducer
                    ? "#ffffff" : '#000000',
                  transform: matchMobile ? 'scale(0.4)' : 'scale(0.75)',
                  position: "absolute",
                  zIndex: 30,
                  backgroundColor: darkmodeReducer
                    ? "rgba(41,41,41,0.86)"
                    : "rgba(205,205,205,0.9) ",
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  padding: "2px",
                  display: minimise ? 'none' : 'none'
                }}
              /> :
              <div
                onClick={() => {
                  ///startplay();
                }}
                style={{
                  position: "absolute",
                  zIndex: 30,
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  height: "0px",
                  padding: "0px",
                }}
              >

                <span
                  className={HasInteractivity ? "zuperkingtur heartbeat" : darkmodeReducer ? "turx" : "turdark"}
                  style={{
                    padding: "7px",
                    paddingLeft: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    paddingRight: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    backgroundColor: post.color1,
                    borderRadius: "50%",
                    fontSize: "0.92vw",
                    display: total === 1 ? HasInteractivity ? minimise ? 'none' : 'none' : 'none' : 'none',
                    color: darkmodeReducer ? "#ffffff" : "#000000",
                    transform: matchMobile ? 'scale(0.15)' : 'scale(0.3)',

                  }
                  }
                >
                  <span style={{ opacity: HasInteractivity && total === 1 ? 0 : 1 }}>{total}</span>
                </span>
              </div>}



          </>
        )
      }

      {
        itemCLICKED[pey] ? (
          total === 0 ? null : (
            <>
              {" "}
              <div
                onClick={startplay}
                style={{
                  position: "absolute",
                  zIndex: 30,
                  left: 30,
                  cursor: "pointer",
                  top: "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: "0.9",
                  height: "0px",
                  padding: "0px",
                }}
              >
                <span
                  className={HasInteractivity ? darkmodeReducer ? "turx heartbeat" : "turdark heartbeat" : darkmodeReducer ? "turx" : "turdark"}
                  style={{
                    padding: "7px",
                    paddingLeft: HasInteractivity ? "0.9vw" : '10px',
                    paddingRight: HasInteractivity ? "0.9vw" : '10px',
                    backgroundColor: darkmodeReducer
                      ? "rgba(41,41,41,0.86)"
                      : "rgba(205,205,205,0.9) ",
                    borderRadius: "50%",
                    fontSize: "0.92vw",
                    display: total === 1 ? HasInteractivity ? 'none' : 'none' : 'block',
                    visibility: startInteractivity && HasInteractivity ? 'hidden' : 'visible',
                    color: darkmodeReducer ? "#ffffff" : "#000000",
                  }
                  }
                >
                  <span style={{ opacity: HasInteractivity && total === 1 ? 0 : 1 }}>

                    {activeSlide + 1}
                  </span>
                </span>
              </div>


            </>
          )
        ) : null
      }
    </>
  );
}

export const SliderNumber = React.memo(SliderNumberx);
