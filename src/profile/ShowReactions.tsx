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
import { matchPc, matchTablet } from "../DetectDevice";
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
import { ICommentTemplate, IGrid } from "../log/log-Interfaces";
import CircleIcon from "@mui/icons-material/Circle";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { DialogContent } from "@material-ui/core";
import { animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import AddIcon from "@mui/icons-material/Add";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import { UpdateLoader, Updatepagenum } from ".././GlobalActions";

import { Connect } from "./Connect";

import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from './utils'; // Ensure this is the correct path to your utils



///Axios.defaults.withCredentials = true;

function ShowReactionsx({
  i,
  zoomedModal,
  wideImage,
  post,
  AddRef,
  length,
  callObserver,
  scrollLocation,
  postData,
  CommentPostid,
  paperPostScrollRefxx,
  connectTemplateGo,
  profileDataHold,
}: any) {

  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  const dispatch = useDispatch();

  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();

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
      reactionType: 0;
      pagenum: 0
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
    reactionType,
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
  var reactionTypeReducer = reactionType;
  const pagenumReducer = pagenum;

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

  const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
  const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);

  useEffect(() => {
    if (i + 1 === length) {
      callObserver();
    }
  }, [i]);

  const [clicked, setclicked] = useState<boolean>(false);

  const flipper = () => {
    setclicked(true);

    setTimeout(() => {
      setclicked(false);
    }, 15000);
  };

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



    const id = post.reactId; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id);


    // Update the current URL with the scroll position and page number
    //updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    dispatch(UserInfoUpdateMEMBER(post.reactId));
    /// setIdReactRouterAsInt(0);
    ///setScrollReactRouter(0);
  };





  const GoToMemberhhh = useCallback(() => {


    if (MemberProfileDataReducer.id === post.reactId) {
      dispatch(UpdateLoader(false));
    } else {

      /// alert('kk')
      dispatch(Updatepagenum(0));
      var n, d;

      ///console.log(CommentDataReducer);

      var tt = paperPostScrollRefxx.current.scrollTop;

      if (memeberPageidReducer === 0) {
        n = usernameReducer;
        d = {
          type: connectTemplateGo ? 9 : 7,
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
          reactType: reactionTypeReducer,
          dataPageNumberState: 0,
          dataAll: postData,
          profileDataAll: profileDataHold,

          ProfileLocal: 1,
          PostLocal: 1
        };
      } else {
        n = MemberProfileDataReducer.username;
        d = {
          type: connectTemplateGo ? 10 : 8,
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
          reactType: reactionTypeReducer,
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
        id: post.reactId,
        innerid: 0,

        pagenumReducer: pagenumReducer,
        index: historyscrollReducer,
        data: PostDataFromCommentReducer,
        AllMemberData: MemberProfileDataReducer,
        comid: comIdReducer,
        DiscussionImage: DiscussionImageReducer,
        comOriginalData: CommentDataReducer,
        comScroll: tt,
        reactType: reactionTypeReducer,
        dataPageNumberState: 0,
        dataAll: postData,
        profileDataAll: profileDataHold,

        ProfileLocal: 0,
        PostLocal: 0
      };
      window.history.pushState(dd, "", `${post.username}`);
      dispatch(UserInfoUpdateMEMBER(post.reactId));
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
    reactionTypeReducer,
    connectTemplateGo,
    pagenumReducer,
    MemberProfileDataReducer,
    profileDataHold,
  ]);

  const GoToMemberLoaderUp = () => {


    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    if (MemberProfileDataReducer.id === post.reactId) {
      dispatch(UpdateLoader(false));
    } else {
      dispatch(UpdateLoader(true));
    }
    Timervv.current = setTimeout(function () {
      GoToMember();
    }, 1000);
  };

  return (
    <>
      {clicked ? (
        <>
          {" "}
          <div
            style={{
              textAlign: "center",
              fontSize: "1.7vh",
              marginTop: "-16px",
            }}
          >
            <Connect
              GoToMember={GoToMember}
              Added={Added}
              setAdded={setAdded}
              zoomedModal={zoomedModal}
              PostCon={0}
              Comment={0}
              Reaction={1}
              Profile={0}
              Mini={0}
              post={post}
              wideImage={wideImage}
            />

            <span
              onClick={GoToMemberLoaderUp}
              className=""
              style={{
                cursor: "pointer",
                display: "block",
                paddingTop: "10px",
                fontWeight: "bold",
                fontFamily: "Arial, Helvetica, sans-seri",
                color: darkmodeReducer ? "#ffffff" : "#000000",
              }}
            >
              {post.username}
            </span>
            <div style={{ height: "10px" }}></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <span
            style={{
              textAlign: "left",
              marginTop: "5px",
              fontSize: "1.7vh",

            }}
          >
            <img
              title={post.username}
              onClick={() => {
                flipper();
              }}
              className={
                darkmodeReducer
                  ? `turprofileDark image-gray-on-click `
                  : ` turprofileLight image-gray-on-click`
              }
              style={{
                display: "block",
                zIndex: 2,
                borderRadius: "0%",
                cursor: "pointer",
                position: "relative",
                padding: "0px",
                margin: "auto",
                objectFit: "contain",
                width: "100%",
              }}

              src={`${REACT_APP_CLOUNDFRONT}${post.profile_image}`}
              alt="Superstarz Billboard "
            />

            <span
              onClick={GoToMemberLoaderUp}
              className=""
              style={{
                cursor: "pointer",
                paddingLeft: "15px",
                padding: '5px',
                display: "block",
                marginTop: "2px",
                fontFamily: "Arial, Helvetica, sans-seri",
                color: darkmodeReducer ? "#ffffff" : "#000000",
                fontWeight: 'bold',
                overflow: 'hidden',
                width: '95%',
              }}
            >
              {post.username}
            </span>
          </span>
        </>
      )}
    </>
    /*MOBILE  MOBILE  MOBILE  MOBILE  SIGNUP MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILEMOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE  MOBILE*/
  );
}

export const ShowReactions = React.memo(ShowReactionsx);
