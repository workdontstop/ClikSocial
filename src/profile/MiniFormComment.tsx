import React, { useState, useRef, useEffect, useCallback } from "react";
import { ArrowBillboard } from "./ArrowBillboard";
import { matchPc } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { useSelector } from "react-redux";
import { DotsBillboard } from "./DotsBillboard";
import { ShowComments } from "./ShowComments";

function MiniFormCommentx({
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
  DiscussionImage,
  commentData2,
  showComment3,
  commentData3,
  CommentPostid,
  scrollLocation,
  paperPostScrollRef,
  postData,
  originalData,
  paperPostScrollRefxx,
  mobileZoom,
  profileDataHold
}: any): JSX.Element {
  const { REACT_APP_APPX_STATE } = process.env;

  ///
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

  return (
    <Grid
      ref={paperPostScrollRefxx}
      xs={12}
      item
      className={
        matchPc
          ? darkmodeReducer
            ? "postscroll-dark"
            : "postscroll-light"
          : darkmodeReducer
            ? "postscroll-darkm"
            : "postscroll-lightm"
      }
      style={{
        height: `${containerHeight - 79}px`,
        paddingLeft: mobileZoom ? "1vh" : '0vh',
        paddingRight: mobileZoom ? "1vh" : '0vh',
        position: "relative",
        overflowY: "auto",
        overflowX: `hidden`,
        paddingBottom: "0vh",
        paddingTop: "10px",
      }}
    >
      <Grid
        xs={12}
        item
        className={blinkenx ? "blinken" : ""}
        style={{
          height: "0px",
          padding: "0vh",
          display: showCommentLoader ? "inline" : "none",
        }}
      >
        {" "}
        <ShowComments
          profileDataHold={profileDataHold}
          paperPostScrollRefxx={paperPostScrollRefxx}
          originalData={originalData}
          CommentPostid={CommentPostid}
          DiscussionImage={DiscussionImage}
          scrollLocation={scrollLocation}
          postData={postData}
          paperPostScrollRef={paperPostScrollRef}
          callObserver={null}
          length={0}
          ref={null}
          post={Datax}
          i={0}
          zoomedModal={zoomedModal}
          wideImage={wideImage}
        />
      </Grid>
      {commentDatax
        ? commentDatax.map((post: any, i: any) => (
          <>
            <ShowComments
              paperPostScrollRefxx={paperPostScrollRefxx}
              originalData={originalData}
              CommentPostid={CommentPostid}
              DiscussionImage={DiscussionImage}
              scrollLocation={scrollLocation}
              postData={postData}
              paperPostScrollRef={paperPostScrollRef}
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
            <ShowComments
              paperPostScrollRefxx={paperPostScrollRefxx}
              originalData={originalData}
              CommentPostid={CommentPostid}
              DiscussionImage={DiscussionImage}
              scrollLocation={scrollLocation}
              postData={postData}
              paperPostScrollRef={paperPostScrollRef}
              callObserver={callObserver}
              length={commentData.length}
              AddRef={lastItemElement}
              post={post}
              i={i}
              zoomedModal={zoomedModal}
              wideImage={wideImage}
            />
          </>
        ))
        : null}
      {showComment2
        ? commentData2
          ? commentData2.map((post: any, i: any) => (
            <>
              <ShowComments
                paperPostScrollRefxx={paperPostScrollRefxx}
                originalData={originalData}
                CommentPostid={CommentPostid}
                DiscussionImage={DiscussionImage}
                scrollLocation={scrollLocation}
                postData={postData}
                paperPostScrollRef={paperPostScrollRef}
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
              <ShowComments
                paperPostScrollRefxx={paperPostScrollRefxx}
                originalData={originalData}
                CommentPostid={CommentPostid}
                DiscussionImage={DiscussionImage}
                scrollLocation={scrollLocation}
                postData={postData}
                paperPostScrollRef={paperPostScrollRef}
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
            marginTop: "200px",
            height: "10px",
          }}
        ></Grid>
      </>
    </Grid>
  );
}

export const MiniFormComment = React.memo(MiniFormCommentx);
