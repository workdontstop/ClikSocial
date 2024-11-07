import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowBillboard } from "./ArrowBillboard";
import { matchMobile, matchPc } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { useSelector } from "react-redux";
import { DotsBillboard } from "./DotsBillboard";
import { ShowReactions } from "./ShowReactions";

function MiniFormReactionx({
  containerHeight,
  blinkenx,
  showCommentLoader,
  Datax,
  zoomedModal,
  wideImage,
  commentDatax,
  callObserver,
  commentData,
  lastItemElement,
  showComment2,
  commentData2,
  showComment3,
  commentData3,
  ModalImageRef,
  CommentPostid,
  scrollLocation,
  paperPostScrollRef,
  postData,
  originalData,
  paperPostScrollRefxx,
  connectTemplateGo,
  mobileZoom,
  profileDataHold
}: any): JSX.Element {
  const { REACT_APP_APPX_STATE } = process.env;




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
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;

  const [heightxx, setheightxx] = useState(0);

  return (
    <>
      <Grid
        ref={paperPostScrollRefxx}
        xs={12}
        item
        className={
          matchPc
            ? darkmodeReducer
              ? "postscroll-darkHiddenScrollRedesign"
              : "postscroll-darkHiddenScrollRedesign"
            : darkmodeReducer
              ? "postscroll-darkm"
              : "postscroll-lightm"
        }
        style={{
          padding: "0vh",
          position: "relative",
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: `auto`,
          paddingBottom: "40vh",
          paddingRight: zoomedModal
            ? wideImage
              ? "5.6vw"
              : "8.3vw"
            : wideImage
              ? "4.1vw"
              : "4.8vw",
          display: "grid",
          gridGap: "0px",
          gridAutoFlow: "row",
          gridTemplateColumns: matchMobile ? mobileZoom ? "35.5% 35.5% 35.5%" : "26.5% 26.5% 26.5% 26.5%" : zoomedModal ? "25% 25% 25% 25% 25%" : "25% 25% 25% 25% 25%",
          width: "auto",
          height: zoomedModal
            ? wideImage
              ? "68vh"
              : "75vh"
            : wideImage
              ? "46vh"
              : "76vh",
        }}
      >
        {commentDatax
          ? commentDatax.map((post: any, i: any) => (
            <>
              <ShowReactions
                profileDataHold={profileDataHold}
                connectTemplateGo={connectTemplateGo}
                paperPostScrollRefxx={paperPostScrollRefxx}
                originalData={originalData}
                CommentPostid={CommentPostid}
                scrollLocation={scrollLocation}
                postData={postData}
                callObserver={callObserver}
                length={commentDatax.length}
                AddRef={lastItemElement}
                post={post}
                i={i}
                zoomedModal={zoomedModal}
                wideImage={wideImage}
              />
            </>
          ))
          : null}
        {commentData
          ? commentData.map((post: any, i: any) => (
            <>
              <div style={{}}>
                <ShowReactions
                  connectTemplateGo={connectTemplateGo}
                  paperPostScrollRefxx={paperPostScrollRefxx}
                  originalData={originalData}
                  CommentPostid={CommentPostid}
                  scrollLocation={scrollLocation}
                  postData={postData}
                  callObserver={callObserver}
                  length={commentData.length}
                  AddRef={lastItemElement}
                  post={post}
                  i={i}
                  zoomedModal={zoomedModal}
                  wideImage={wideImage}
                />
              </div>
            </>
          ))
          : null}

        {showComment2
          ? commentData2
            ? commentData2.map((post: any, i: any) => (
              <>
                <ShowReactions
                  connectTemplateGo={connectTemplateGo}
                  paperPostScrollRefxx={paperPostScrollRefxx}
                  originalData={originalData}
                  CommentPostid={CommentPostid}
                  scrollLocation={scrollLocation}
                  postData={postData}
                  callObserver={callObserver}
                  length={commentData2.length}
                  AddRef={lastItemElement}
                  post={post}
                  i={i}
                  zoomedModal={zoomedModal}
                  wideImage={wideImage}
                />
              </>
            ))
            : null
          : null}
        {showComment3
          ? commentData3
            ? commentData3.map((post: any, i: any) => (
              <>
                <ShowReactions
                  connectTemplateGo={connectTemplateGo}
                  paperPostScrollRefxx={paperPostScrollRefxx}
                  originalData={originalData}
                  CommentPostid={CommentPostid}
                  scrollLocation={scrollLocation}
                  postData={postData}
                  callObserver={callObserver}
                  length={commentData3.length}
                  AddRef={lastItemElement}
                  post={post}
                  i={i}
                  zoomedModal={zoomedModal}
                  wideImage={wideImage}
                />
              </>
            ))
            : null
          : null}
        <>
          <Grid
            item
            xs={12}
            ref={lastItemElement}
            style={{
              marginTop: "20px",
              height: "10px",
            }}
          ></Grid>
        </>
      </Grid >
    </>
  );
}

export const MiniFormReaction = React.memo(MiniFormReactionx);
