import React, { useState, useEffect, useRef, useCallback } from "react";

import { animated } from "react-spring";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import Axios from "axios";
import { Scrollbars } from "react-custom-scrollbars-2";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from './utils'; // Ensure this is the correct path to your utils

import { AboutColor } from "./AboutColor";

import { CommentFormHolder } from "./CommentFormHolder";

import { ServerError } from "../log/ServerError";

import {
  UpdateLoader,
  Updatepagenum
} from ".././GlobalActions";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";


import "./../log/logCss.css";

import { DialogContent, Paper, Grid } from "@material-ui/core";
import { transcode } from "buffer";

function ModalCommentLayoutx({
  slidingImageWidth,
  opacitySlidingModalImage,
  zIndexModalImageZoom,
  ModalBackgroundRef,
  onBackgroundFocus,
  modalanimation,
  modalanimationTwo,
  ModalSlidingImageRef,
  zoomlogmodal,
  onimageload,
  borderGrid,
  imageReal,
  GridHolderA,
  zIndexModalImageSmall,
  zoomedModal,
  opacityFixedModalImage,
  formtype,
  GridHolderB,
  WidthHolder,
  checkSignupPasswordACTIVATE,
  setcheckSignupPasswordACTIVATE,
  imagescrollRef,
  clickMobileZoom,
  mobileImageOnLoad,
  mobileLogmodalanimation,
  mobileZoom,
  slide,
  contentScrollRef,
  showimage,
  setMobileZoom,
  setZoomedModal,
  profilex,
  showModalForm,
  setcheckIfColorChanged,
  imageHeightoverflow,
  onimageloadx,
  ModalImageRef,
  MiniLayoutOverFlow,
  wideImage,
  setFeedBackData,
  setFeedbackshow,
  CommentTimer,
  CommentPostid,
  containerHeight,

  connectTemplateGo,
  typeEmo,
  postData,
  scrollLocation,
  commentHistoryScroll,
  CommentHistoryData,
  setcommentHistoryScroll,
  setCommentHistoryData,
  showComAddBack,
  setshowComAddBack,
  keypost,
  profileDataHold,
  DiscussionImage,

  reactionTemplateGo,
  commentTemp,
  connectTemplateGox,
  PostOwner,
  CommentPostAll

}: any): JSX.Element {
  ///alert(containerHeight);
  ///
  ///
  ///
  /// SENDING LOGIN  DATA TO SERVER SIDE
  const [serverErrorData, setServerErrorData] = useState<string | null>(null);
  const [serverErrorDisplay, setServerErrorDisplay] = useState<number>(4);
  const [serverEmojiplain, setserverEmojiplain] = useState<boolean>(true);


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sex, setsex] = useState<any>(null);

  ///
  ///
  ///FORCE ABOUT PAGE INITIAL ZOOME STATE BASED ON DEVICE TYPE
  useEffect(() => {
    setMobileZoom(true);
    setZoomedModal(false);
  }, []);

  ///
  ///
  ///CALL THIS ON MOBILE ZOOM CHANGE
  useEffect(() => {
    if (mobileZoom) {
      setshowlogo(false);
    } else {
      setshowlogo(false);
      setTimeout(function () {
        setshowlogo(true);
      }, 1000);
    }
  }, [mobileZoom]);

  ///
  ///
  ///FADE SLIDING IMAGE
  var fadeSlidingimage = "fadermodal-imageslider";
  if (opacitySlidingModalImage === "0") {
    fadeSlidingimage = "";
  } else {
    fadeSlidingimage = "fadermodal-imageslider-zoomload";
    setTimeout(function () {
      fadeSlidingimage = "fadermodal-imageslider";
    }, 1600);
  }

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
  /// GET DARKMODE FROM REDUX STORE
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;

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


  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      username: string;
      imageThumb: string;
      id: number;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }
  const { username, image, imageThumb, id, memeberPageid, MemberProfileData } = useSelector(
    (state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    })
  );
  const usernameReducer = username;
  const imageReducer = image;
  const imageReducerThumb = imageThumb;
  const idReducer = id;
  const memeberPageidReducer = memeberPageid;
  const MemberProfileDataReducer = MemberProfileData;




  const [showlogo, setshowlogo] = useState<boolean>(true);

  const reft: any = useRef(null);

  ///
  ///
  ///
  /// MUI PAPER STYLES FROM REDUX
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );

  var PaperStyleReducer = " ";
  var textback = "";

  ///
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DARKMODE
  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
    textback = "caption-dark";
  } else {
    PaperStyleReducer = PaperStyleLight;
    textback = "caption-light";
  }

  //////////////   CONDITIONAL STATEMENT FOR DEVICE TYPES
  var formHolder = "";

  var EditIconTop = "";
  var EditIconRight = "";
  var EditIconLeft = "";
  var aboutInfoFont = "";

  if (matchTablet) {
    formHolder = "formholderTablet";

    EditIconTop = "4vh";
    EditIconLeft = "4vw";
    EditIconRight = "";
    aboutInfoFont = "3.5vh";
  } else {
    formHolder = "formholder";

    if (matchMobile) {
      EditIconTop = "8vh";
      EditIconRight = "4vw";
      EditIconLeft = "4vh";
      aboutInfoFont = "2.6vh";
    }
  }
  //////////////   CONDITIONAL STATEMENT FOR DEVICE TYPES

  const click = (event: any) => {
    event.target.value = null;
  };

  const Interceptzoomlogmodal = () => {
    if (showComAddBack) {
      setshowComAddBack(false);
    } else {
      zoomlogmodal();
    }
  };



  const [showdelete, setshowdelete] = useState(false);



  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);




  const GoToMemberP = () => {


    dispatch(UserInfoUpdateMEMBER(-1));
    const id = idReducer; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());

    // Update the current URL with the scroll position
    //updateCurrentURLWithScrollPosition();
    // Update the current URL with the scroll position


    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);


    dispatch(UserInfoUpdateMEMBER(idReducer));
    ///setIdReactRouterAsInt(idReducer);
    //setScrollReactRouter(0)

  };


  const GoToMemberLoaderUpP = () => {
    ///setshowModalFormMenu(false);
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    dispatch(UpdateLoader(true));
    Timervv.current = setTimeout(function () {
      GoToMemberP();
    }, 100);
  };



  const DelPost = useCallback(() => {

    var colorboy = {
      id: CommentPostid,
      post: CommentPostAll
    };



    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/delPost`,
      { values: colorboy },

    )
      .then((response) => {
        if (response.data.message === "deleted post") {

          //window.location.reload();

          window.history.back();


          ///GoToMemberLoaderUpP();


        }
      })
      .catch(function (error) {
        alert(error);
      });

  }, [CommentPostid, CommentPostAll]);


  const [showDeleteButton, setshowDeleteButton] = useState(false);

  useEffect(() => {

    if (reactionTemplateGo || connectTemplateGox) {

      setshowDeleteButton(false);


    } else {



      if (commentTemp) {


        if (PostOwner === idReducer) {
          setshowDeleteButton(true);
        }


      }
    }




  }, [reactionTemplateGo, connectTemplateGox, commentTemp, PostOwner, idReducer])

  return (
    <>
      {
        matchPc /*PC PC PC PC PC PC PC PC PPC PC PC PC PC PC PC PC PC PC PC PC
      PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC C */ ? (
            <DialogContent
              style={{
                position: "relative",
                paddingLeft: "0px",
                height: "100%",
                zIndex: 100,
              }}
            >
              <ServerError
                device="pc"
                serverEmojiplain={serverEmojiplain}
                setServerErrorData={setServerErrorData}
                serverErrorDisplay={serverErrorDisplay}
                serverErrorData={serverErrorData}
              />

              {

                showDeleteButton ? <DeleteOutlineIcon
                  onClick={() => {

                    setshowdelete(true)
                  }}
                  className={
                    darkmodeReducer
                      ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                      : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                  }
                  style={{
                    color: "#ffffff",
                    fontSize: "2.9vw",
                    position: "fixed",
                    opacity: zoomedModal ? 0.4 : 0.5,
                    top: zoomedModal ? "3vh" : "4vh",
                    left: "1.8vw",
                    zIndex: 200,

                  }}
                /> : null}


              <DialogContent
                className={`${fadeSlidingimage} modalImageCustomSlider FormDialog-containerx dontallowhighlighting`}
                onClick={onBackgroundFocus}
                style={{
                  overflow: "auto",
                  cursor: "pointer",
                  height: "101%",
                  padding: "0px",
                  width: slidingImageWidth,
                  opacity: opacitySlidingModalImage,
                  zIndex: zIndexModalImageZoom,
                }}
                ref={ModalBackgroundRef}
              >
                {" "}
                <Scrollbars>
                  <animated.div style={modalanimationTwo}>
                    <img
                      ref={ModalSlidingImageRef}
                      onClick={Interceptzoomlogmodal}
                      onLoad={onimageload}
                      src={`${REACT_APP_CLOUNDFRONT}${DiscussionImage}`

                      }
                      className="modalImageStylex"
                      style={{
                        opacity: opacitySlidingModalImage,
                      }}
                      alt="Logzoom"
                    />
                  </animated.div>
                </Scrollbars>
              </DialogContent>

              <DialogContent
                className={
                  darkmodeReducer
                    ? "fadermodal FormDialog-container modal-containerDark dontallowhighlighting"
                    : "fadermodal FormDialog-container modal-containerLight dontallowhighlighting"
                }
                onClick={onBackgroundFocus}
                style={{ overflow: "hidden", cursor: "pointer", height: "101%" }}
                ref={ModalBackgroundRef}
              >
                <animated.div style={modalanimation}>
                  <Paper
                    style={{
                      backgroundImage: PaperStyleReducer,
                      borderRadius: borderGrid,
                      cursor: "default",
                    }}
                  >
                    <Grid
                      container
                      className="containerStyle"
                      style={{
                        width: imageReal,
                        borderRadius: borderGrid,
                      }}
                    >
                      <Grid
                        item
                        xs={GridHolderA}
                        style={{ zIndex: zIndexModalImageSmall }}
                      >
                        <img
                          ref={ModalImageRef}
                          onClick={Interceptzoomlogmodal}
                          onLoad={onimageloadx}

                          src={
                            `${REACT_APP_CLOUNDFRONT}${DiscussionImage}`
                          }
                          className="modalImageStyle"
                          style={{
                            opacity: opacityFixedModalImage,
                            borderTopLeftRadius: borderGrid,
                            borderBottomLeftRadius: borderGrid,
                          }}
                          alt="Logsmall"
                        />
                      </Grid>

                      <Grid item xs={GridHolderB} style={{}}>
                        <Grid xs={12} item className="">
                          <Grid
                            item
                            xs={12}
                            style={{
                              padding: "0px",
                            }}
                          >
                            <CommentFormHolder
                              profileDataHold={profileDataHold}
                              mobileZoom={mobileZoom}
                              setcommentHistoryScroll={setcommentHistoryScroll}
                              setCommentHistoryData={setCommentHistoryData}
                              commentHistoryScroll={commentHistoryScroll}
                              CommentHistoryData={CommentHistoryData}
                              DiscussionImage={DiscussionImage}
                              postData={postData}
                              scrollLocation={scrollLocation}
                              typeEmo={typeEmo}
                              connectTemplateGo={connectTemplateGo}
                              ModalImageRef={ModalImageRef}
                              reactionTemplateGo={reactionTemplateGo}
                              containerHeight={containerHeight}
                              CommentPostid={CommentPostid}
                              CommentTimer={CommentTimer}
                              setFeedbackshow={setFeedbackshow}
                              setFeedBackData={setFeedBackData}
                              showComAddBack={showComAddBack}
                              setshowComAddBack={setshowComAddBack}
                              wideImage={wideImage}
                              MiniLayoutOverFlow={MiniLayoutOverFlow}
                              zoomedModal={zoomedModal}
                              WidthHolder={WidthHolder}
                              loginForm={false}
                              setServerErrorData={setServerErrorData}
                              setServerErrorDisplay={setServerErrorDisplay}
                              setserverEmojiplain={setserverEmojiplain}
                              checkSignupPasswordACTIVATE={
                                checkSignupPasswordACTIVATE
                              }
                              setcheckSignupPasswordACTIVATE={
                                setcheckSignupPasswordACTIVATE
                              }
                              imageHeightoverflow={imageHeightoverflow}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </animated.div>
              </DialogContent>
            </DialogContent>
          ) : (
            /*PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC PC
        PC PC PC PC PC PC PC PC PC PC PC PC */ /*MOBILE MOBILE MOBILE MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    MOBILE MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        MOBILE MOBILE MOBILE*/
            <DialogContent
              className="Hide-mobile-Scrollbar  fadermodal FormDialog-container-mobile dontallowhighlighting"
              ref={imagescrollRef}
              style={{
                overflow: "auto",
                cursor: "pointer",
                padding: "0px",
                zIndex: 100,
                height: '101vh',
                backgroundImage: PaperStyleReducer,
              }}
            >

              <animated.div style={modalanimation}>
                <Paper
                  style={{
                    cursor: "default",
                    backgroundColor: "rgba(0,0,0,0.0)",
                  }}
                >
                  <Grid container>





                    <Grid
                      item
                      xs={12}
                      className="yyy"
                      style={{
                        marginTop: "0.5px",
                        height: "auto",
                      }}
                    >
                      <animated.img
                        onClick={clickMobileZoom}
                        onLoad={mobileImageOnLoad}
                        src={
                          `${REACT_APP_CLOUNDFRONT}${DiscussionImage}`

                        }
                        className="modalMobileImageStyle slow-Div-Change"
                        alt="SuperstarZ"
                        style={mobileLogmodalanimation}
                      />


                      {showDeleteButton ? <DeleteOutlineIcon
                        onClick={() => {

                          setshowdelete(true)
                        }}
                        className={
                          darkmodeReducer
                            ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                            : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
                        }
                        style={{
                          color: "#ffffff",
                          fontSize: "6vh",
                          position: "fixed",
                          opacity: mobileZoom ? 0.6 : 1,
                          top: zoomedModal ? "0vh" : "3vh",
                          left: "3.8vw",
                          zIndex: 200,

                        }}
                      /> : null}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className={mobileZoom ? "zoomMobile" : "smallMobile"}
                    >
                      {" "}
                      <Paper
                        className="Hide-mobile-Scrollbar "
                        ///  onScroll={slide}
                        ref={contentScrollRef}
                        style={{
                          overflow: "auto",
                          backgroundColor: "rgba(0,0,0,0.0)",
                          cursor: "default",
                          height: "95vh",
                          borderRadius: "0px",
                          marginTop: "-1.9px",
                        }}
                      >

                        <Grid item xs={12} style={{ height: "6vh" }}></Grid>{" "}
                        <Grid xs={12} item className={formHolder}>

                          <Grid
                            item
                            xs={12}
                            style={{
                              padding: "0px",
                            }}
                          >
                            <CommentFormHolder
                              mobileZoom={mobileZoom}
                              setcommentHistoryScroll={setcommentHistoryScroll}
                              setCommentHistoryData={setCommentHistoryData}
                              commentHistoryScroll={commentHistoryScroll}
                              CommentHistoryData={CommentHistoryData}
                              DiscussionImage={DiscussionImage}
                              postData={postData}
                              scrollLocation={scrollLocation}
                              typeEmo={typeEmo}
                              connectTemplateGo={connectTemplateGo}
                              ModalImageRef={ModalImageRef}
                              reactionTemplateGo={reactionTemplateGo}
                              containerHeight={containerHeight}
                              CommentPostid={CommentPostid}
                              CommentTimer={CommentTimer}
                              setFeedbackshow={setFeedbackshow}
                              setFeedBackData={setFeedBackData}
                              showComAddBack={showComAddBack}
                              setshowComAddBack={setshowComAddBack}
                              wideImage={wideImage}
                              MiniLayoutOverFlow={MiniLayoutOverFlow}
                              zoomedModal={zoomedModal}
                              WidthHolder={WidthHolder}
                              loginForm={false}
                              setServerErrorData={setServerErrorData}
                              setServerErrorDisplay={setServerErrorDisplay}
                              setserverEmojiplain={setserverEmojiplain}
                              checkSignupPasswordACTIVATE={
                                checkSignupPasswordACTIVATE
                              }
                              setcheckSignupPasswordACTIVATE={
                                setcheckSignupPasswordACTIVATE
                              }
                              imageHeightoverflow={imageHeightoverflow}
                            />
                          </Grid>

                        </Grid>
                        <Grid item xs={12} style={{ height: "60vh" }}></Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </animated.div>
            </DialogContent>
          ) /*MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE
      MOBILEMOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILEMOBILE MOBILE MOBILE
      MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE MOBILE*/
      }


      {showdelete ? <>

        <Grid
          item
          xs={12}
          style={{
            position: "fixed",
            height: "110%",
            padding: '0px',
            width: '100%',
            top: '-3vh',
            backgroundColor: darkmodeReducer ? 'rgb(10,10,10,0.8)' : 'rgb(255,255,255,0.6)',
            color: darkmodeReducer ? '#dddddd' : '#444444',
            zIndex: '2000',
            fontFamily: 'sans-serif'

          }}
        >




          <Grid
            item
            xs={12}
            style={{
              position: "relative",
              padding: '0px',
              fontSize: '4vh',
              top: '5vh',
              margin: 'auto',
              textAlign: 'center',
              fontWeight: 'bolder',
              opacity: 0.9

            }}
          >
            Delete This Post    <span style={{ color: 'red', fontSize: '1rem', }}> !Important</span>

          </Grid>

          <Grid
            item

            xs={12}
            style={{
              position: "relative",

              padding: '0px',
              top: '30vh',
              margin: 'auto',
              textAlign: 'center'

            }}
          >
            <span onClick={() => {

              DelPost();
            }} className={
              darkmodeReducer
                ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
            } style={{
              borderRadius: '20%', padding: '4vh',
              color: darkmodeReducer ? '#000000' : '#ffffff',
              backgroundColor: darkmodeReducer ? '#ffffff' : '#000000'
            }}>Yes</span>

          </Grid>


          <Grid
            item
            xs={12}
            style={{
              position: "relative",

              padding: '0px',
              top: '58vh',
              margin: 'auto',
              textAlign: 'center'

            }}
          >

            <span onClick={() => { setshowdelete(false) }} className={
              darkmodeReducer
                ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
            } style={{
              borderRadius: '20%', padding: '4vh',
              color: darkmodeReducer ? '#000000' : '#ffffff',
              backgroundColor: darkmodeReducer ? '#ffffff' : '#000000'
            }}>No</span>
          </Grid>
        </Grid ></> : null}
    </>
  );
}

export const ModalCommentLayout = React.memo(ModalCommentLayoutx);
