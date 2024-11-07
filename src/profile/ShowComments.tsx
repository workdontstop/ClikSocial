import React, { useRef, useState, useCallback, useEffect } from "react";
import { Ispinnerinterface, IFormHolder } from "../log/log-Interfaces";
import Axios from "axios";
import SuperstarzIconLight from "./../images/ssmall.png";
import SuperstarzIconDark from "./../images/sdsmall.png";
import { TextFieldLogin } from "../log/TextFieldLogin";
import { TextFieldSignup } from "../log/TextFieldSignup";
import { ModalFormSignupError } from "../log/ModalFormSignupError";
import { ModalFormLoginError } from "../log/ModalFormLoginError";
import { Button, Grid } from "@material-ui/core";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { IsLoggedAction } from "../log/actions/IsLoggedAction";
import { UserdataAction } from "../log/actions/UserdataAction";
import { ActivateLoaderAction, HideLoaderAction } from "../GlobalActions";
//////import { useHistory } from "react-router-dom";
import { PasswordCheck } from "../log/PasswordCheck";
import { UpdateColorAction } from "../GlobalActions";
import { UserInfoUpdateAction } from "../log/actions/UserdataAction";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import BackspaceIcon from '@material-ui/icons/Backspace';
import { ICommentTemplate, IGrid } from "../log/log-Interfaces";
import CircleIcon from "@mui/icons-material/Circle";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { DialogContent } from "@material-ui/core";
import { animated } from "react-spring";
import AddIcon from "@mui/icons-material/Add";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import { UpdateLoader, Updatepagenum } from ".././GlobalActions";
import { Connect } from "./Connect";

import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from './utils'; // Ensure this is the correct path to your utils


///Axios.defaults.withCredentials = true;

function ShowCommentsx({
  i,
  zoomedModal,
  wideImage,
  post,
  AddRef,
  length,
  callObserver,
  scrollLocation,
  postData,
  DiscussionImagex,
  CommentPostid,
  originalData,
  paperPostScrollRefxx,
  profileDataHold
}: any) {
  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_APPX_STATE } = process.env;

  const dispatch = useDispatch();

  const [showdelete, setshowdelete] = useState(false);


  const location = useLocation();

  const navigate = useNavigate();


  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      username: string;
      image: string;
      imageThumb: string;
      id: number;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }

  const { image, imageThumb, id, memeberPageid, MemberProfileData, username } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));
  const imageReducer = image;
  const imageReducerThumb = imageThumb;
  const idReducer = id;
  const memeberPageidReducer = memeberPageid;
  const MemberProfileDataReducer = MemberProfileData;
  const usernameReducer = username;

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      historyscroll: number;
      comId: [];
      DiscussionImage: [];
      PostDataFromComment: [];
      CommentData: [];
      CommentScroll: 0;
      pagenum: 0;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const {
    screenHeight,
    darkmode,
    snapStart,
    activateLoader,
    historyscroll,
    comId,
    DiscussionImage,
    PostDataFromComment,
    CommentData,
    CommentScroll,
    pagenum
  } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;
  const activateLoaderReducer = activateLoader;
  const historyscrollReducer = historyscroll;
  var PostDataFromCommentReducer = PostDataFromComment;
  var comIdReducer = comId;
  var DiscussionImageReducer = DiscussionImage;
  var CommentDataReducer = CommentData;
  var CommentScrollReducer = CommentScroll;
  const pagenumReducer = pagenum;
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (i + 1 === length) {
      callObserver();
    }
  }, [i]);

  useEffect(() => { }, [CommentDataReducer]);

  var optionsClass = "";
  var fontOptions = "";

  if (matchPc) {
    optionsClass = "post-optionsImagePc";
    fontOptions = "1.2vw";
  } else if (matchTablet) {
    optionsClass = "profile-optionsImageTablet";
    fontOptions = "5rem";
  } else {
    optionsClass = "profile-optionsImageMobile";
    fontOptions = "1.9rem";
  }

  const [Added, setAdded] = useState(100);

  useEffect(() => {
    if (post !== null) setAdded(post.favCount);
  }, [post]);



  const GoToMember = () => {

    const id = post.comUserId; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id);


    // Update the current URL with the scroll position and page number
    //updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    dispatch(UserInfoUpdateMEMBER(post.comUserId));
    /// setIdReactRouterAsInt(0);
    ///setScrollReactRouter(0);
  };




  const GoToMemberjjj = useCallback(() => {






    if (MemberProfileDataReducer.id === post.comUserId) {
      dispatch(UpdateLoader(false));
    } else {

      dispatch(Updatepagenum(0));


      var n, d;

      ///console.log(CommentDataReducer);

      var tt = paperPostScrollRefxx.current.scrollTop;

      if (memeberPageidReducer === 0) {
        n = usernameReducer;
        d = {
          type: 5,
          id: 0,
          index: historyscrollReducer,
          data: PostDataFromCommentReducer,
          pagenumReducer: pagenumReducer,
          AllMemberData: 0,
          innerid: 0,
          comid: comIdReducer,
          DiscussionImage: DiscussionImageReducer,
          comOriginalData: CommentDataReducer,
          comScroll: tt,
          dataPageNumberState: 0,
          dataAll: postData,
          profileDataAll: profileDataHold,

          ProfileLocal: 1,
          PostLocal: 1
        };
      } else {
        n = MemberProfileDataReducer.username;
        d = {
          type: 6,
          id: memeberPageidReducer,
          index: historyscrollReducer,
          data: PostDataFromCommentReducer,
          pagenumReducer: pagenumReducer,
          AllMemberData: MemberProfileDataReducer,
          innerid: 0,
          comid: comIdReducer,
          DiscussionImage: DiscussionImageReducer,
          comOriginalData: CommentDataReducer,
          comScroll: tt,
          dataPageNumberState: 0,
          dataAll: postData,
          profileDataAll: profileDataHold,

          ProfileLocal: 1,
          PostLocal: 1
        };
      }

      window.history.replaceState(d, "", `${n}`);

      var dd = {
        type: 1,
        id: post.comUserId,
        innerid: 0,
        pagenumReducer: pagenumReducer,


        index: historyscrollReducer,
        data: PostDataFromCommentReducer,
        AllMemberData: MemberProfileDataReducer,
        comid: comIdReducer,
        DiscussionImage: DiscussionImageReducer,
        comOriginalData: CommentDataReducer,
        comScroll: tt,
        dataPageNumberState: 0,
        dataAll: postData,
        profileDataAll: profileDataHold,

        ProfileLocal: 0,
        PostLocal: 0
      };
      window.history.pushState(dd, "", `${post.username}`);
      dispatch(UserInfoUpdateMEMBER(post.comUserId));
    }
  }, [
    DiscussionImage,
    CommentPostid,
    scrollLocation,
    post,
    idReducer,
    memeberPageidReducer,
    MemberProfileDataReducer,
    postData,
    usernameReducer,
    historyscrollReducer,
    comIdReducer,
    DiscussionImageReducer,
    PostDataFromCommentReducer,
    CommentDataReducer,
    pagenumReducer,
    profileDataHold
  ]);

  const GoToMemberLoaderUp = () => {
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (MemberProfileDataReducer.id === post.comUserId) {
      dispatch(UpdateLoader(false));
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMember();
    }, 100);
  };



  const DelCo = useCallback(() => {

    var colorboy = {
      id: post.id,
    };

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/delcomments`,
      { values: colorboy },

    )
      .then((response) => {
        if (response.data.message === "deleted") {

          window.history.back();

        }
      })
      .catch(function (error) {
        /////alert(error);
      });

  }, [post]);



  return (
    <>
      {showdelete ? <>

        <Grid
          item
          xs={12}
          style={{
            position: "absolute",
            height: "100%",
            padding: '0px',
            width: '100%',
            top: '-3vh',
            backgroundColor: darkmodeReducer ? 'rgb(10,10,10,0.8)' : 'rgb(255,255,255,0.6)',
            color: darkmodeReducer ? '#dddddd' : '#444444',
            zIndex: '200',
            fontFamily: 'sans-serif'

          }}
        >




          <Grid
            item
            xs={12}
            style={{
              position: "relative",
              padding: '0px',

              top: '5vh',
              margin: 'auto',
              textAlign: 'center',
              fontWeight: 'bolder',
              opacity: 0.9

            }}
          >
            Confirm  Delete

          </Grid>

          <Grid
            item

            xs={12}
            style={{
              position: "relative",

              padding: '0px',
              top: '20vh',
              margin: 'auto',
              textAlign: 'center'

            }}
          >
            <span onClick={() => {

              DelCo();
            }} className={
              darkmodeReducer
                ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
            } style={{ padding: '4vh' }}>Yes</span>

          </Grid>


          <Grid
            item
            xs={12}
            style={{
              position: "relative",

              padding: '0px',
              top: '48vh',
              margin: 'auto',
              textAlign: 'center'

            }}
          >

            <span onClick={() => { setshowdelete(false) }} className={
              darkmodeReducer
                ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
            } style={{ padding: '4vh' }}>No</span>
          </Grid>
        </Grid ></> : null}
      <Grid
        item
        xs={12}
        style={{
          position: "relative",
          height: "auto",
          color: darkmodeReducer ? "#ffffff" : "#000000",
          fontFamily: "Arial, Helvetica, sans-seri",
          padding: "0px",
          paddingRight: matchMobile ? '0px' : zoomedModal ? "0vh" : "2vh",
          paddingLeft: matchMobile ? '0px' : zoomedModal ? "0vh" : "2vh",
          paddingBottom: zoomedModal ? "4.2vh" : "4.3vh",
        }}
      >
        <span> </span>
        <span style={{ display: "flex", alignItems: "center", marginLeft: matchMobile ? '-2vh' : '0px' }}>
          <Connect
            GoToMember={GoToMember}
            Added={Added}
            setAdded={setAdded}
            zoomedModal={zoomedModal}
            PostCon={0}
            Comment={1}
            Reaction={0}
            Profile={0}
            Mini={0}
            post={post}
            wideImage={wideImage}
          />{" "}
          <span style={{ width: matchMobile ? '68%' : "80%", backgroundColor: '', textAlign: 'left', marginLeft: matchMobile ? '4vw' : '0px' }}>
            {" "}
            <span
              onClick={() => {
                GoToMemberLoaderUp();

              }}
              style={{
                cursor: "pointer",
                opacity: 0.9,
                display: "block",
                fontWeight: "bold",
                fontSize: matchMobile ? '2vh' : zoomedModal ? "0.7vw" : "0.9vw",
                paddingLeft: matchMobile ? '0px' : "1.3vh",

              }}
            >
              {post.username}
            </span>
            <span style={{ marginLeft: matchMobile ? '0px' : "0.8vw" }}>
              {" "}
              <CircleIcon
                style={{
                  fontSize: matchMobile ? '1vh' : "0.5vw",
                  color: post.color1,
                }}
              />{" "}
            </span>
            <span
              style={{
                fontSize: matchMobile ? '2vh' : zoomedModal ? "1.1vw" : "0.9vw",
                opacity: 0.7,
              }}
            >
              {" "}
              {post.com}
            </span>
          </span>{" "}

          {post.comUserId === idReducer ? < BackspaceIcon

            onClick={() => {
              setshowdelete(true)
            }}
            className={
              darkmodeReducer
                ? ` zuperkingIconPostLight`
                : `zuperkingIconPostDark`
            }
            style={{
              cursor: 'pointer',
              top: "0vh",
              color: post.color1,
              position: "relative",
              fontSize: matchMobile ? '3.6vh' : "1.5vw",
              opacity: 0.32,
              left: matchMobile ? '-1vw' : zoomedModal ? "-4vw" : "0px",
            }}
          /> : null}

        </span>
      </Grid>
    </>
    /*MOBILE  MOBILE  MOBILE  MOBILE  SIGNUP MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE*/
  );
}

export const ShowComments = React.memo(ShowCommentsx);
