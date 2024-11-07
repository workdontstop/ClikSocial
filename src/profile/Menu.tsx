import React, { useRef, useState, useEffect, useCallback } from "react";
import { Grid, Box } from "@material-ui/core";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AllOutIcon from "@mui/icons-material/AllOut";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import CircleIcon from "@mui/icons-material/Circle";
import { OptionsSlider } from "./OptionsSlider";
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";
import { UpdateOptionsTop, SnapToggleAction } from ".././GlobalActions";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import SubjectIcon from '@material-ui/icons/Subject';
import LanguageIcon from '@material-ui/icons/Language';
import { UpdateSign } from "../GlobalActions";

import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from './utils'; // Ensure this is the correct path to your utils
import { useLocation } from 'react-router-dom';



import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';

import {
  UpdateLoader,
  Updatepagenum
} from ".././GlobalActions";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';



import AdjustIcon from '@material-ui/icons/Adjust';


import { UpdateMenuNav } from "../GlobalActions";
import { setTimeout } from "timers";

function Menux({
  paperPostScrollRef,
  getSliderWidth,
  OpenUploadModal,
  showModalUpload,
  HidePostDataOnScroll,
  setsuperSettings,
  setx,
  x,
  setSliderIndexMini,
  setzoomClickedIndex,
  setminiProfile,
  miniProfile,
  selectedImage,
  setselectedImage,
  postData,
  callfeeds,
  setShowModalFormMenu,
  ShowBigPlay,
  showModalFormMenu,
  shownav,
  setShownav,
  showModalForm,
  WebsiteMode,

  setUploadGPT,
  RandomColor,


  pagenumReducer,
  setuptype,
  ActualpostDataAll,
  profileDataHold,

  setminimise,
  minimise,

  setIdReactRouterAsInt,
  setScrollReactRouter,

  PostPagenumPusher,
  ScrollIndexPusher,
  CurrentPage,

  setZoomedModal,
  setMobileZoom,
  zoomedModal,
  mobileZoom,
  FeedType,
  AutoGo,
  setAutoGo,



  localPostId,
  setlocalPostId,
  localProfileId,
  setlocalProfileId,





}: any) {

  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  ///
  ///
  ///
  /// USE DISPATCH
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();



  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;




  const [shownavTop, setShownavTop] = useState<boolean>(true);

  const [haltedTop, sethaltedTop] = useState<boolean>(false);

  const [HideClickOnce, setHideClickOnce] = useState(true);


  const [startPostScroll, setstartPostScroll] = useState<number>(0);
  const [callstartonce, setcallstartonce] = useState<boolean>(false);
  const [callstartoncex, setcallstartoncex] = useState<boolean>(false);
  const [callendonce, setcallendonce] = useState<boolean>(false);
  const [endPostScroll, setendPostScroll] = useState<number>(0);
  const menuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer4 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer5 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuTimer2x = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);



  const [holdpaper, setholdpaper] = useState(0);


  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      MenuData: String;
      Guest: number,

    };
  }
  const { darkmode, MenuData, Guest } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const MenuDataReducer = MenuData;

  const GuestReducer = Guest;



  //
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      imageThumb: string;
      id: number;
      username: string;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }
  const { username, image, imageThumb, id, memeberPageid, MemberProfileData } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));

  const imageReducer = image;
  const idReducer = id;
  const usernameReducer = username;
  const memeberPageidReducer = memeberPageid;
  const MemberProfileDataReducer = MemberProfileData;


  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  const textArray = ['All Posts', '', '', 'Poll IT'];




  const updateCurrentURLWithScrollPosition = useCallback(() => {
    var indexplus1 = ScrollIndexPusher + 1;

    const currentPath = location.pathname.split('/');
    const currentIdRoute1 = currentPath[currentPath.length - 4]; // Assuming idRoute1 is the fourth last segment
    const currentIdRoute2 = currentPath[currentPath.length - 3]; // Assuming idRoute2 is the third last segment
    const currentIdRoute3 = currentPath[currentPath.length - 2]; // Assuming idRoute3 is the second last segment
    const currentIdRoute4 = currentPath[currentPath.length - 1]; // Assuming idRoute4 is the last segment

    const encodedScrollIndex = encodeBase64(indexplus1.toString());
    const encodedPageNumber = encodeBase64(PostPagenumPusher.toString());
    const encodedFeedtype = encodeBase64(FeedType.toString());

    navigate(`/Feeds/${currentIdRoute1}/${encodedScrollIndex}/${encodedPageNumber}/${encodedFeedtype}`, { replace: true });
  }, [FeedType, PostPagenumPusher, ScrollIndexPusher]);







  const GoToMemberF = () => {
    dispatch(UserInfoUpdateMEMBER(-1));
    const id = 0; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());


    if (CurrentPage === 'feeds') {
      updateCurrentURLWithScrollPosition();
    }

    setTimeout(() => {

      // Navigate to the new URL with the new ID
      navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}}`);
      dispatch(UserInfoUpdateMEMBER(0));
      setIdReactRouterAsInt(0);
      setScrollReactRouter(0)
    }, 400)


  };

  const GoToMemberFg = useCallback(() => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));


    var tt = paperPostScrollRef.current.scrollTop;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
      pagenumReducer: 0,
      dataPageNumberState: 0,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 1,
      PostLocal: 1
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: 0,
      innerid: 0,
      pagenumReducer: 0,

      data: postData,
      dataPageNumberState: 0,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 0,
      PostLocal: 0
    };





    window.history.pushState(dd, "", modalName);
    dispatch(UserInfoUpdateMEMBER(0));
    //


  }, [pagenumReducer, memeberPageidReducer, idReducer, MemberProfileDataReducer, usernameReducer, setuptype, ActualpostDataAll, profileDataHold,]);


  const GoToMemberP = () => {

    dispatch(UpdateSign(true));




    dispatch(UserInfoUpdateMEMBER(-1));
    const id = idReducer; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());

    // Update the current URL with the scroll position
    //updateCurrentURLWithScrollPosition();
    // Update the current URL with the scroll position

    if (CurrentPage === 'feeds') {
      updateCurrentURLWithScrollPosition();
    }


    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}}`);

    dispatch(UserInfoUpdateMEMBER(idReducer));
    setIdReactRouterAsInt(idReducer);
    setScrollReactRouter(0)

  };

  const GoToMemberPn = useCallback(() => {
    dispatch(Updatepagenum(0));
    dispatch(UserInfoUpdateMEMBER(-1));



    var tt = paperPostScrollRef.current.scrollTop;

    var n, d;



    n = MemberProfileDataReducer.username;
    d = {
      type: 1,
      id: memeberPageidReducer,
      index: tt,
      data: postData,
      innerid: 0,
      pagenumReducer: pagenumReducer,
      dataPageNumberState: setuptype,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 1,
      PostLocal: 1
    };


    window.history.replaceState(d, "", `${n}`);

    let modalName = `${usernameReducer}`;

    var dd = {
      type: 1,
      id: idReducer,
      innerid: 0,
      pagenumReducer: pagenumReducer,

      data: postData,

      dataPageNumberState: setuptype,
      dataAll: ActualpostDataAll,
      profileDataAll: profileDataHold,

      ProfileLocal: 0,
      PostLocal: 0
    };





    window.history.pushState(dd, "", modalName);
    dispatch(UserInfoUpdateMEMBER(idReducer));

    //


  }, [pagenumReducer, memeberPageidReducer, idReducer, MemberProfileDataReducer, usernameReducer, setuptype, ActualpostDataAll, profileDataHold]);


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


  const GoToMemberLoaderUpF = () => {
    ///setshowModalFormMenu(false);
    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }
    dispatch(UpdateLoader(true));

    Timervv.current = setTimeout(function () {
      GoToMemberF();
    }, 200);
  };




  ///
  ///
  ///
  ///DARKMODE FROM REDUX
  interface RootoptinstopshowingReducer {
    OptionsTopShowReducer: {
      optinstopshowing: boolean;
    };
  }
  const { optinstopshowing } = useSelector(
    (state: RootoptinstopshowingReducer) => ({
      ...state.OptionsTopShowReducer,
    })
  );
  const optinstopshowingReducer = optinstopshowing;
  ///
  ///
  ///
  ///


  const [isSafariaa, setisSafariaa] = useState(false);
  useEffect(() => {

    if (isSafari) { setisSafariaa(true) } else { setisSafariaa(false) }
  }, [isSafari])

  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);





  //
  //
  //isSafari
  //USE SLIDE DOWN ANIMATION FROM REACT SPRING


  const [shownav2, setshownav2] = useState(false);

  const [halt, sethalt] = useState(false);

  useEffect(() => {


    if (menuTimer3.current) {
      clearTimeout(menuTimer3.current);
    }
    if (shownav) {
      setshownav2(true);
    } else {

      menuTimer3.current = setTimeout(() => { setshownav2(false); }, 1700)
    }
  }, [shownav])


  const animationmenu = useSpring({
    config: {
      duration: 150,
    },
    ///opacity: shownav ? 1 : 0,
    ///marginTop: shownav ? `0vh` : `15vh`,

    opacity: shownav ? 1 : 1,
    marginTop: shownav ? `0vh` : `0vh`,

  });


  const [allow, setallow] = useState(true);


  const jayme = useCallback((e: any) => {


    if (shownav) {


      if (allow) {

      } else {


        menuTimer2.current = setTimeout(function () {
          setShownav(false);

          //  alert('2');
        }, 3000);
      }


    } else {
      if (allow) {
        setShownav(true);
        setallow(false);
      } else {

      }


    }


    if (menuTimer5.current) {

      clearTimeout(menuTimer5.current);
    }



    menuTimer5.current = setTimeout(function () {


      if (ShowBigPlay) { } else {
        ///dispatch(UpdateMenuNav(true));
        setShownav(false);


        setallow(true);
        /// dispatch(SnapToggleAction(false))
      }

    }, 2000);







  }, [ShowBigPlay, shownav, allow]);



  ///



  useEffect(() => {
    const handleScroll = (e: any) => {
      //jayme(e); // Call your jayme function here
    };

    const paperPostScrollRefCurrent = paperPostScrollRef.current;
    if (paperPostScrollRefCurrent) {
      paperPostScrollRefCurrent.addEventListener("scroll", handleScroll);

      return () => {
        paperPostScrollRefCurrent.removeEventListener("scroll", handleScroll);
      };
    }
  }, [paperPostScrollRef, jayme]);





  const [Signup, setSignup] = useState(false);

  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {


    if (idReducer === GuestReducer) {

      if (Timer.current) {
        clearTimeout(Timer.current);
      }

      Timer.current = setTimeout(() => {
        setSignup(true)
      }, 10000);

    } else {
      setSignup(false)
    }

  }, [MenuDataReducer, idReducer])



  var superFont = "";

  if (matchPc) {
    superFont = "super-starz-text-Pcx";

    ///
  } else if (matchTablet) {
    superFont = "super-starz-text-Tabletx";

    ///
  } else {
    superFont = "super-starz-text-Mobilex";
  }


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


  const [Zoom1, setZoom1] = useState(false);
  const [Zoom2, setZoom2] = useState(false);
  const [Zoom3, setZoom3] = useState(false);
  const [Zoom3x, setZoom3x] = useState(false);
  const [Zoom4, setZoom4] = useState(false);
  const [Zoom5, setZoom5] = useState(false);



  function hexToRgb(hex: any) {
    hex = hex.replace('#', '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
  }

  function rgbToHex(r: any, g: any, b: any) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }

  function blendColors(color1: any, color2: any) {
    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);
    var blendedRgb = [
      Math.round((rgb1[0] + rgb2[0]) / 2),
      Math.round((rgb1[1] + rgb2[1]) / 2),
      Math.round((rgb1[2] + rgb2[2]) / 2)
    ];
    return rgbToHex(blendedRgb[0], blendedRgb[1], blendedRgb[2]);
  }




  var color1 = RandomColor;
  var color2 = colorReducer;
  var blendedColor = blendColors(color1, color2);




  return (
    <>
      {shownavTop ? (
        <>

          <>
            {showModalFormMenu ? null :
              ShowBigPlay ? null : <Grid
                container
                style={{

                }}
              >
                {" "}



                <Grid

                  item
                  xs={12}

                  style={{
                    height: matchMobile ? '8vh' : "6vh",

                  }}
                >

                  <animated.div
                    className={
                      darkmodeReducer
                        ? `menutopdarkx ${superFont} turdark zupermenudark  dontallowhighlighting zuperkingIconPostLight `
                        : `menutoplightx ${superFont} turlight zupermenulight  dontallowhighlighting zuperkingIconPostLightx`
                    } style={{ ...animationmenu, height: matchMobile ? '8vh' : '6vh', }}>



                    <Grid
                      container

                      style={{}}
                    >

                      <Grid
                        item
                        xs={2}
                        style={{
                          backgroundColor: '',
                          height: '5vh',
                          textAlign: 'center',
                        }}
                      >
                        {memeberPageidReducer === 0 || CurrentPage === 'commentTemplate'
                          ? <img

                            onMouseEnter={(e) => {
                              setZoom1(true);
                            }}
                            onMouseLeave={(e) => {
                              setZoom1(false);
                            }}
                            src={`${REACT_APP_CLOUNDFRONT}${image}`}
                            title={username}
                            onClick={() => {
                              ///GoToMemberLoaderUpP();

                              if (idReducer === GuestReducer) {
                                dispatch(UpdateSign(true));

                              }
                              if (CurrentPage === 'feeds') {
                                ///  paperPostScrollRef.current.scrollTop = 0;
                                ///setZoom1(false);

                                GoToMemberLoaderUpP();

                              } else {
                                GoToMemberLoaderUpP();
                              }


                            }}
                            style={{
                              transform: Zoom1 ? "scale(1.5)" : "scale(1)",
                              cursor: 'pointer',
                              transition: "transform 0.1s",
                              width: matchMobile ? '5.5vh' : '2.9vw',
                              height: matchMobile ? '5.5vh' : '2.9vw',
                              borderRadius: '50%',
                              marginTop: matchMobile ? '1vh' : '0px',
                              border: memeberPageidReducer === idReducer ? `2px solid ${blendedColor}` :
                                Zoom1 ? `2px solid ${blendedColor}` :
                                  `0px solid ${blendedColor}`, // Add this line for a round border
                            }}
                          /> :
                          <img

                            onMouseEnter={(e) => {
                              setZoom1(true);
                            }}
                            onMouseLeave={(e) => {

                              setZoom1(false);
                            }}
                            src={`${REACT_APP_CLOUNDFRONT}${MemberProfileDataReducer.userimage}`}
                            title={MemberProfileDataReducer.username}
                            onClick={() => {

                              if (idReducer === GuestReducer) {
                                dispatch(UpdateSign(true));
                              }
                              else {
                                if (CurrentPage === 'feeds') {
                                  paperPostScrollRef.current.scrollTop = 0;


                                  if (menuTimer2x.current) {
                                    clearTimeout(menuTimer2x.current);
                                  }

                                  menuTimer2x.current = setTimeout(() => {
                                    setZoom1(false);
                                  }, 1500)

                                } else {
                                  GoToMemberLoaderUpP();
                                }
                              }
                            }}
                            style={{
                              transform: Zoom1 ? "scale(1.8)" : "scale(1.5)",
                              cursor: 'pointer',
                              transition: "transform 0.1s",
                              width: matchMobile ? '5.5vh' : '2.9vw',
                              height: matchMobile ? '5.5vh' : '2.9vw',
                              marginLeft: matchMobile ? memeberPageidReducer === 0 ? '' : '1.5vh' : memeberPageidReducer === 0 ? '' : '',
                              borderRadius: '50%',
                              marginTop: matchMobile ? '1.2vh' : '-1vh',
                              border: `0.5px solid ${blendedColor}`, // Add this line for a round border
                            }}
                          />}


                      </Grid>


                      <Grid
                        item
                        xs={3}
                        style={{
                          backgroundColor: '',
                          height: '5vh',
                          textAlign: 'center'
                        }}
                      >

                        <BlurCircularIcon
                          onMouseEnter={(e: any) => {
                            setZoom2(true);
                          }}
                          onMouseLeave={(e: any) => {
                            setZoom2(false);
                          }}
                          onClick=
                          {() => {
                            setShowModalFormMenu(true);
                            setZoom2(false);


                          }}
                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-lightCrop dontallowhighlighting "
                              : "make-small-icons-clickable-darkCrop dontallowhighlighting  "
                          }
                          style={{
                            transform: matchMobile ? Zoom2 ? "scale(3)" : "scale(3)" :
                              Zoom2 ? "scale(6)" : "scale(3.7)",
                            fontSize: matchMobile ? Zoom2 ? '2rem' : '' : Zoom2 ? '' : '',
                            transition: "transform 0.1s",
                            color: Zoom2 ? blendedColor : darkmodeReducer
                              ? "#ffffff"
                              : "#000000",
                            zIndex: 30,
                            backgroundColor: darkmodeReducer
                              ? "rgba(41,41,41,0)"
                              : "rgba(205,205,205,0) ",
                            cursor: "pointer",
                            fontFamily: "Arial, Helvetica, sans-serif",
                            fontWeight: "bolder",
                            opacity: 1,
                            padding: "4px",
                            marginTop: matchMobile ? '2.1vh' : '0px',

                          }}
                        />

                      </Grid>


                      <Grid
                        item
                        xs={2}
                        style={{
                          backgroundColor: '',
                          height: '5vh',
                          textAlign: 'center'
                        }}
                      >

                        {AutoGo ?


                          < PauseCircleOutlineIcon

                            onMouseEnter={(e: any) => {
                              setZoom3x(true);
                            }}
                            onMouseLeave={(e: any) => {
                              setZoom3x(false);
                            }}



                            onClick=
                            {() => {



                              setAutoGo(false);




                            }}


                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop dontallowhighlighting blinken "
                                : "make-small-icons-clickable-darkCrop dontallowhighlighting  blinken "
                            }
                            style={{
                              transform: matchMobile ? Zoom3x ? "scale(3)" : "scale(3)" :
                                Zoom3x ? "scale(6)" : "scale(3.7)",
                              fontSize: matchMobile ? Zoom3x ? '2rem' : '' : Zoom3x ? '' : '',
                              transition: "transform 0.1s",
                              color: Zoom3x ? blendedColor : darkmodeReducer
                                ? "#ffffff"
                                : "#000000",
                              zIndex: 30,
                              backgroundColor: darkmodeReducer
                                ? "rgba(41,41,41,0)"
                                : "rgba(205,205,205,0) ",
                              cursor: "pointer",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bolder",
                              opacity: 1,
                              padding: "4px",
                              marginTop: matchMobile ? '2.1vh' : '0px',

                            }} /> : <AdjustIcon
                            onMouseEnter={(e: any) => {
                              setZoom3(true);
                            }}
                            onMouseLeave={(e: any) => {
                              setZoom3(false);
                            }}

                            onClick=
                            {() => {

                              setZoom3(false);



                              setUploadGPT(true);


                            }}


                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop dontallowhighlighting "
                                : "make-small-icons-clickable-darkCrop dontallowhighlighting  "
                            }
                            style={{
                              transform: matchMobile ? Zoom3 ? "scale(3)" : "scale(3)" :
                                Zoom3 ? "scale(6)" : "scale(3.7)",
                              fontSize: matchMobile ? Zoom3 ? '2rem' : '' : Zoom3 ? '' : '',
                              transition: "transform 0.1s",
                              color: Zoom3 ? blendedColor : darkmodeReducer
                                ? "#ffffff"
                                : "#000000",
                              zIndex: 30,
                              backgroundColor: darkmodeReducer
                                ? "rgba(41,41,41,0)"
                                : "rgba(205,205,205,0) ",
                              cursor: "pointer",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bolder",
                              opacity: 1,
                              padding: "4px",
                              marginTop: matchMobile ? '2.1vh' : '0px',

                            }}
                          />
                        }

                      </Grid>


                      <Grid
                        item

                        onClick={() => {

                          if (holdpaper === 0) {

                            var tt = paperPostScrollRef.current.scrollTop;
                            paperPostScrollRef.current.scrollTop = 0;
                            setholdpaper(tt);

                          } else {

                            paperPostScrollRef.current.scrollTop = holdpaper;
                            setholdpaper(0);

                          }



                        }}
                        xs={3}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: '',
                          height: '5vh',
                          textAlign: 'center',
                          marginTop: matchMobile ? memeberPageid === 0 ? '1.5vh' : '' : memeberPageid === 0 ? '' : '',
                        }}
                      >


                        {memeberPageid === 0 ?
                          <span className={'textx'} style={{
                            fontSize: matchMobile ? '1.1rem' : '1.42rem',

                            color: darkmodeReducer ? '#ffffff' : '#000000',
                          }}>

                            {
                              FeedType === 1 ?
                                <>
                                  <span style={{
                                    fontSize: matchMobile ? '1.1rem' : '',
                                    color: darkmodeReducer ? '#ffffff' : '#000000'
                                  }}>
                                    Clik
                                  </span>

                                  <span style={{ visibility: 'hidden' }}>
                                    .
                                  </span>

                                  <span style={{
                                    fontSize: matchMobile ? '1.1rem' : '',
                                    color: darkmodeReducer ? "#ffe680" : "#ffcc00",
                                  }}>
                                    Bate
                                  </span> </> :

                                FeedType === 2 ?
                                  <>
                                    <span style={{
                                      fontSize: matchMobile ? '1rem' : '',
                                      color: darkmodeReducer ? '#ffffff' : '#000000'
                                    }}>
                                      Explain
                                    </span>

                                    <span style={{ visibility: 'hidden' }}>
                                      ..
                                    </span>

                                    <span style={{ color: '#00ccff', fontSize: '1rem' }}>
                                      IT
                                    </span> </> : textArray[FeedType]
                            }




                          </span>

                          :
                          <HorizontalSplitIcon

                            onMouseEnter={(e: any) => {
                              setZoom4(true);
                            }}
                            onMouseLeave={(e: any) => {
                              setZoom4(false);
                            }}

                            onClick={() => {
                              setZoom4(false);
                              GoToMemberLoaderUpF();

                            }}


                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop dontallowhighlighting "
                                : "make-small-icons-clickable-darkCrop dontallowhighlighting  "
                            }
                            style={{
                              transform: matchMobile ? Zoom4 ? "scale(3)" : "scale(3)" :
                                Zoom4 ? "scale(3.7)" : "scale(3.7)",
                              fontSize: matchMobile ? Zoom4 ? '2rem' : '' : Zoom4 ? '' : '',

                              transition: "transform 0.1s",
                              color:
                                darkmodeReducer
                                  ? "#ffffff"
                                  : "#000000",
                              zIndex: 30,
                              backgroundColor: darkmodeReducer
                                ? "rgba(41,41,41,0)"
                                : "rgba(205,205,205,0) ",
                              cursor: "pointer",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontWeight: "bolder",
                              opacity: 1,
                              padding: "4px",
                              marginTop: matchMobile ? '2.1vh' : '0px',



                            }}
                          />

                        }
                      </Grid>

                      <Grid
                        item
                        xs={2}
                        style={{
                          backgroundColor: '',
                          height: '5vh',
                          textAlign: 'center'
                        }}
                      >

                        <AllOutIcon
                          onMouseEnter={(e: any) => {
                            setZoom5(true);
                          }}
                          onMouseLeave={(e: any) => {
                            setZoom5(false);
                          }}


                          onClick={() => {

                            if (CurrentPage === 'commentTemplate') {



                              if (matchMobile) {

                                setMobileZoom(!mobileZoom);

                              }
                              else {

                                let toggleZoomedModal = !zoomedModal;
                                setZoomedModal(!zoomedModal);
                                /// hideLogo();
                                //LOCALSTORAGE ZOOMED STATES  FOR PC
                                localStorage.setItem("PcZoom", toggleZoomedModal.toString());

                              }


                            } else {

                              if (minimise) { setminimise(false); } else { setminimise(true); }
                            }






                            setZoom5(false);

                          }}

                          className={
                            darkmodeReducer
                              ? "make-small-icons-clickable-lightCrop dontallowhighlighting "
                              : "make-small-icons-clickable-darkCrop dontallowhighlighting  "
                          }
                          style={{
                            transform: matchMobile ? Zoom5 ? "scale(3)" : "scale(3)" :
                              Zoom5 ? "scale(6)" : "scale(3.7)",
                            fontSize: matchMobile ? Zoom5 ? '2rem' : '' : Zoom5 ? '' : '',
                            transition: "transform 0.1s",
                            color: Zoom5 ? blendedColor : darkmodeReducer
                              ? "#ffffff"
                              : "#000000",
                            zIndex: 30,
                            backgroundColor: darkmodeReducer
                              ? "rgba(41,41,41,0)"
                              : "rgba(205,205,205,0) ",
                            cursor: "pointer",
                            fontFamily: "Arial, Helvetica, sans-serif",
                            fontWeight: "bolder",
                            opacity: 1,
                            padding: "4px",
                            marginTop: matchMobile ? '2.1vh' : '0px',

                          }}
                        />
                      </Grid>


                    </Grid>

                  </animated.div>

                </Grid>{" "}
              </Grid>
            }

          </>

        </>
      ) : null
      }
    </>
  );
}

export const Menu = React.memo(Menux);
