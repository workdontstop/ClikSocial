import React from "react";
import { animated, useSpring } from "react-spring";
import { Grid, DialogContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import { matchPc } from "../DetectDevice";
import "../log/logCss.css";

interface ISuperCheckFeedBack {
  Feedbackshow: boolean;
  setFeedbackshow: (Feedbackshow: boolean) => void;
  FeedBackData: string;
  rememberTimer: React.MutableRefObject<NodeJS.Timeout | null>;
  rememberMeType: string;
}

function DiscussionFeedBackx({
  Feedbackshow,
  setFeedbackshow,
  FeedBackData,
  CommentTimer,
}: any) {
  var inputNotAllowed = "";
  var inputLimit = "";

  var rememberMeType = "session";

  var feedtext = "";
  if (FeedBackData === 1) {
    feedtext = "input not allowed";
    inputNotAllowed = "inline";
    inputLimit = "none";
  } else if (FeedBackData === 2) {
    feedtext = "input too long";
    inputNotAllowed = "none";
    inputLimit = "inline";
  } else {
  }

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
  ///USE SLIDE DOWN ANIMATION FROM REACT SPRING SERVER ERROR
  const feedbackAnimation = useSpring({
    config: {
      duration: 500,
    },
    opacity: Feedbackshow ? "1" : "0",
    transform: Feedbackshow ? `translateY(0%)` : `translateY(-100%)`,
  });

  var ErrorColor = "";

  var Backtype = "";
  var textback = "";

  var severerrorData = "";
  var severerrorEmoji = "";
  var severerrorEmojiLeft = "";

  ///
  ///
  ///
  ///CONDITIONAL STATEMENT DEVICE TYPE
  if (matchPc) {
    severerrorData = "1.25vw";
    severerrorEmoji = "1.6vw";
    severerrorEmojiLeft = "";
  } else {
    severerrorData = "2.2vh";
    severerrorEmoji = "2.7vh";
    severerrorEmojiLeft = "4vw";
  }

  ErrorColor = "rgb(34, 34, 34, 0.05)";

  ///
  ///
  ///
  ///CONDITIONAL STATEMENT DARKMODE
  if (darkmodeReducer) {
    textback = "caption-dark";
    ErrorColor = "rgb(34, 34, 34, 0.05)";
  } else {
    ErrorColor = "rgb(238, 238, 238 0.09)";
    textback = "caption-light";
  }

  darkmodeReducer
    ? (Backtype = "error-background-dark")
    : (Backtype = "error-background-light");

  ///
  ///
  ///
  ///CLOSE FEEDBACK
  const closefeedbackShow = () => {
    if (CommentTimer.current) {
      clearTimeout(CommentTimer.current);
    }
    setFeedbackshow(false);
  };

  return (
    <>
      {Feedbackshow ? (
        <DialogContent
          style={{ cursor: "pointer" }}
          onClick={() => {
            closefeedbackShow();
          }}
          className={`dontallowhighlighting ${Backtype} server-error`}
        >
          <animated.div style={feedbackAnimation}>
            <Grid
              container
              className="server-error-container"
              style={{
                backgroundColor: ErrorColor,
              }}
            >
              <Grid item xs={12} className="server-error-inner" style={{}}>
                <Grid
                  item
                  className=""
                  style={{ fontSize: severerrorData, paddingLeft: "1px" }}
                  xs={11}
                  sm={10}
                >
                  <span
                    style={{
                      color: darkmodeReducer ? "#ffffff" : "#0b1728",
                    }}
                    className={textback}
                  >
                    {feedtext}
                  </span>
                </Grid>
                <Grid item xs={1}>
                  <span
                    className="server-error-emoji-span"
                    style={{
                      fontSize: severerrorEmoji,
                      marginLeft: severerrorEmojiLeft,
                    }}
                  >
                    <span style={{ display: inputNotAllowed }}> &#128721;</span>
                    <span style={{ display: inputLimit }}> &#9981; </span>
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </animated.div>
        </DialogContent>
      ) : null}
    </>
  );
}

export const DiscussionFeedBack = React.memo(DiscussionFeedBackx);
