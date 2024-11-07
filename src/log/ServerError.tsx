import React, { useRef, useState, useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Grid, DialogContent, Box } from "@material-ui/core";
import { IServerError } from "./log-Interfaces";
import { useSelector, useDispatch } from "react-redux";
import { UpdateAlertReducer } from ".././GlobalActions";

import "./logCss.css";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";

function ServerErrorx({
  device,
  setServerErrorData,
  serverErrorDisplay,
  WebsiteMode
}: any) {
  /////////////////////////////////////////////





  ///
  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
      AlertData: "";
      AlertEmojiType: number;
      Guest: number
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, AlertData, AlertEmojiType, Guest } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const AlertDataReducer = AlertData;
  const AlertEmojiTypeReducer = AlertEmojiType;
  const GuestReducer = Guest;

  ///
  ///
  ///
  ///USE SLIDE DOWN ANIMATION FROM REACT SPRING SERVER ERROR
  const serverErrorAnimation = useSpring({
    config: {
      duration: 500,
    },
    opacity: 1,
    transform: AlertDataReducer ? `translateY(0%)` : `translateY(-100%)`,
  });

  const tim = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dispatch = useDispatch();

  var ErrorColor = "";

  var Backtype = "";
  var textback = "";

  var severerrorData = "";
  var severerrorEmoji = "";
  var severerrorEmojiLeft = "";


  if (matchMobile) {
    severerrorData = WebsiteMode ? "2.22vh" : '2vh';
    severerrorEmoji = "2.7vh";
    severerrorEmojiLeft = "4vw";
  } else {
    severerrorData = "1.15vw";
    severerrorEmoji = "1.6vw";
    severerrorEmojiLeft = "";
  }


  if (darkmodeReducer) {
    ErrorColor = "rgb(34, 34, 34, 0.05)";
    textback = "caption-dark";
  } else {
    ErrorColor = "rgb(238, 238, 238 0.09)";
    textback = "caption-light";
  }

  darkmodeReducer
    ? (Backtype = "post-background-darkx")
    : (Backtype = "post-background-lightx");

  useEffect(() => {
    if (tim.current) {
      clearTimeout(tim.current);
    }
    tim.current = setTimeout(() => {
      if (AlertDataReducer) {
        dispatch(UpdateAlertReducer(null, 0));
      }
    }, 8000);
  }, [AlertDataReducer]);

  return (
    <>
      {AlertDataReducer ? (
        <>
          {" "}
          <DialogContent
            onClick={() => {
              dispatch(UpdateAlertReducer(null, 0));
            }}
            style={{ height: "20%", padding: "0px", cursor: 'pointer', }}
            className={
              AlertDataReducer
                ? ` dontallowhighlighting ${Backtype} server-error`
                : `display-off`
            }
          >
            <animated.div style={serverErrorAnimation}>
              <Grid
                container
                className="server-error-container"
                style={{
                  backgroundColor: ErrorColor,
                }}
              >
                <Grid
                  item
                  xs={12}
                  className="server-error-inner"
                  style={{ paddingTop: "30px" }}
                >

                  <Grid

                    xs={false}
                    sm={false}

                    style={{
                      fontSize: severerrorData,
                      height: '0px',
                      padding: "0px",
                    }}
                  >

                  </Grid>
                  <Grid
                    item
                    className="sever-error-data"
                    style={{
                      fontSize: severerrorData,
                      lineHeight: '4vh',
                      paddingLeft: "3vw",
                    }}
                    xs={11}
                    sm={11}
                  >
                    <span
                      style={{
                        color: darkmodeReducer ? "#ffffff" : "#0b1728",
                      }}
                      className={textback}
                    >
                      {AlertDataReducer}
                    </span>
                  </Grid>
                  <Grid item xs={1} style={{ display: "none" }}>
                    <span
                      className="server-error-emoji-span"
                      style={{
                        fontSize: severerrorEmoji,
                        marginLeft: severerrorEmojiLeft,
                      }}
                    >
                      &#128517;
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      display: AlertEmojiTypeReducer === 0 ? "block" : "none",
                    }}
                  >
                    <span
                      className="server-error-emoji-span"
                      style={{
                        fontSize: severerrorEmoji,
                        marginLeft: severerrorEmojiLeft,
                      }}
                    >
                      &#128517;
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      display: AlertEmojiTypeReducer === 1 ? "block" : "none",
                    }}
                  >
                    <span
                      className="server-error-emoji-span"
                      style={{
                        fontSize: severerrorEmoji,
                        marginLeft: severerrorEmojiLeft,
                      }}
                    >
                      &#9989;
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      display: AlertEmojiTypeReducer === 2 ? "block" : "none",
                    }}
                  >
                    <span
                      className="server-error-emoji-span"
                      style={{
                        fontSize: severerrorEmoji,
                        marginLeft: severerrorEmojiLeft,
                      }}
                    >
                      &#128721;
                    </span>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    style={{
                      display: AlertEmojiTypeReducer === 3 ? "block" : "none",
                    }}
                  >
                    <span
                      className="server-error-emoji-span"
                      style={{
                        fontSize: severerrorEmoji,
                        marginLeft: severerrorEmojiLeft,
                      }}
                    >
                      &#128150;
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </animated.div>
          </DialogContent>
        </>
      ) : null
      }
    </>
  );
}

export const ServerError = React.memo(ServerErrorx);
