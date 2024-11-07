import React, { useRef, useState, useEffect, useCallback } from "react";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";



import { Menu } from "./Menu";
import { Billboard } from "./Billboard";
import "./profile.css";
import { Connect } from "./Connect";
import { ProfileSetup } from "./ProfileSetup";
import { GenerateAndUpload } from "./GenerateAndUpload";
import { ActualMenu } from "./ActualMenu";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { decodeBase64, encodeBase64 } from './utils';






import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from "axios";


import { CommentTemplate } from "../CommentTemplate";
import { ProfileGate } from "./ProfileGate";

import { Upload } from "../upload/Upload";
import { UploadProfilePic } from "../upload/UploadProfilePic";

import AddIcon from "@mui/icons-material/Add";
import { OptionsSlider } from "./OptionsSlider";
import { UpdateNavFilterReducer, UpdateSign } from "../GlobalActions";
import { UpdateNavCropReducer } from "../GlobalActions";

import { UpdateUploadData } from "../GlobalActions";

import LogoutIcon from "@mui/icons-material/Logout";
import PublicIcon from '@material-ui/icons/Public';

import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import { DarkmodeToggleAction } from ".././GlobalActions";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { ServerError } from "../log/ServerError";
import { UserInfoUpdateMEMBERDATA } from "../log/actions/UserdataAction";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import { Loader } from "./Loader";
import { UpdateLoader, UpdateMenuData, Updatepagenum } from ".././GlobalActions";
import { Taskbar } from "./Taskbar";
import { UpdateInteract, UpdateAlertReducer } from ".././GlobalActions";
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import { UserdataReg } from "../log/actions/UserdataAction";

import { UpdateTutorials } from "../GlobalActions";
import SuperstarzIconLight from "../images/s.png";
import SuperstarzIconDark from "../images/sd.png";

import M1 from "../images/m1.jpg";
import M2 from "../images/m2.jpg";
import M3 from "../images/m3.jpg";

import { LoginButtons } from "../log/LogButtons";

import ProtectedRoute from "./ProtectedRoute";




import {
  Paper,
  Grid,
  Switch,
  Typography,
  createTheme,
  MuiThemeProvider,
  Box,
} from "@material-ui/core";









function ProfileOutter({ CallLoggedProfile }: any) {


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;


  var AiLock = false;


  const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);


  const dispatch = useDispatch();


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
      interactContent: any;
      interact: number;
      MenuData: String;
      pagenum: number;
      SignIn: boolean,
      Guest: number
    };
  }


  const [shownav, setShownav] = useState<boolean>(true);


  const [CurrentPage, setCurrentPage] = useState('');





  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, snapStart, activateLoader, historyscroll, interactContent, interact, MenuData, pagenum, SignIn, Guest } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;
  const activateLoaderReducer = activateLoader;
  const historyscrollReducer = historyscroll;
  const interactContentReducer: any = interactContent;
  const interactReducer = interact;
  const MenuDataReducer = MenuData
  const pagenumReducer = pagenum;
  const SignInReducer = SignIn;
  const GuestReducer = Guest;


  ///
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
      reg: number
    };
  }
  const { username, image, imageThumb, id, memeberPageid, MemberProfileData, reg } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));



  const idReducer = id;
  const memeberPageidReducer = memeberPageid;
  const usernameReducer = username;
  const MemberProfileDataReducer = MemberProfileData;
  const regReducer = reg;



  const [inputId, setInputId] = useState('fileoo'); // Initial id value
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



  //
  ///
  ///TYPES FOR ISLOGGEDIN
  interface RootStateIsLogged {
    IsLoggedReducer: {
      loggedIn: boolean;
    };
  }

  ///
  ///LOGGED IN DATA FROM REDUX
  const { loggedIn } = useSelector((state: RootStateIsLogged) => ({
    ...state.IsLoggedReducer,
  }));
  const loggedInReducer = loggedIn;




  var toggleDarkMode: boolean = false;

  const switchThemes = () => {
    if (darkmodeReducer) {
      toggleDarkMode = false;
    } else {
      toggleDarkMode = true;
    }
    dispatch(DarkmodeToggleAction());
    ////ACESSING LOCALSTORAGE
    localStorage.setItem("darkmode", toggleDarkMode.toString());
  };



  const [RandomColor, setRandomColor] = useState('');

  useEffect(() => {
    const genRandom = () => {
      // Generate random color code
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Generate a random color
    const rand = genRandom();

    // Set the random color in the state
    setRandomColor(rand);

  }, []); // Assuming postData is a dependency for your useEffect



  ///
  ///
  ///
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );
  var PaperStyleReducer = "";

  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
  } else {
    PaperStyleReducer = PaperStyleLight;
  }


  interface IappVariables {
    shade: string;
    shade2: string;
    shade2num: string;
    shade2nump: string;
    secondarymaincolor: string;
    maincolor: string;
    shade2nump22: string;
    littleTextColor: string;
  }

  var appVariables: IappVariables = {
    shade: "",
    shade2: "",
    shade2num: "",
    shade2nump: "",
    secondarymaincolor: "",
    maincolor: "",
    shade2nump22: "",
    littleTextColor: "",
  };

  var appVariablesDARK: IappVariables = {
    shade: "#cccccc",
    shade2: "#ffffff",
    shade2num: "1.1",
    shade2nump: "1.8",
    secondarymaincolor: "#dddddd",
    maincolor: "#dddddd",
    shade2nump22: "5.5",
    littleTextColor: "#dddddd",
  };

  var appVariablesLIGHT: IappVariables = {
    shade: "#0b111b",
    shade2: "#0b111b",
    shade2num: "1.5",
    shade2nump: "1.5",
    secondarymaincolor: "#0b111b",
    maincolor: "#0b111b",
    shade2nump22: "8",
    littleTextColor: "#0b111b",
  };

  ///
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DARKMODE
  if (darkmodeReducer) {
    appVariables = appVariablesDARK;
  } else {
    appVariables = appVariablesLIGHT;
  }

  ///
  ///
  ///
  ///MATERIAL UI  THEME CUSTOMIZATAION
  let themeGeneralSettings = createTheme({
    palette: {
      primary: {
        main: `${appVariables.secondarymaincolor}`,
      },
      secondary: {
        main: `${appVariables.secondarymaincolor}`,
      },
      type: darkmodeReducer ? "dark" : "light",
    },
    overrides: {
      MuiSlider: {
        thumb: {
          height: "4vh",
          width: "4vh",
          marginTop: "-1.8vh",
          boxShadow: darkmodeReducer ? "0 0 5.5px#dddddd" : " 0 0 3.1px#444444",
          color: colorReducer,
        },
        track: {
          color: colorReducer,
          height: "4px",
        },
        rail: {
          boxShadow: darkmodeReducer ? "0 0 5.5px#dddddd" : " 0 0 3.1px#444444",
          color: darkmodeReducer ? "black" : "white",
          height: "4px",
        },
      },
    },
  });




  const handleInputClick = (e: any) => {
    e.target.value = ""; // Reset the value before clicking
  };


  const paperPostScrollRef = useRef<any>(null);
  const [minimise, setminimise] = useState(false);


  ////true stops snap
  const [snapallow, setsnapallow] = useState(false);





  const [rand1, setrand1] = useState('');
  const [rand2, setrand2] = useState('');
  const [rand3, setrand3] = useState('');
  const [rand4, setrand4] = useState('');




  const [stopBodyScroll, setStopBodyScroll] = useState<boolean>(false);
  const [showThisComponenet, setshowThisComponenet] = useState<boolean>(false);
  const [superSettings, setsuperSettings] = useState<boolean>(false);
  const [serverErrorData, setServerErrorData] = useState<string | null>(null);
  const [serverErrorDisplay, setServerErrorDisplay] = useState<number>(4);
  const [serverEmojiplain, setserverEmojiplain] = useState<boolean>(true);
  const [WebsiteMode, setWebsiteMode] = useState<boolean>(true);
  const [zoomedModal, setZoomedModal] = useState<boolean>(false);
  const [mobileZoom, setMobileZoom] = useState<boolean>(false);

  const [mono, setmono] = useState(true);

  const [AutoGo, setAutoGo] = useState(false);

  const [ExtendBill, setExtendBill] = useState(false);



  const [postData, setPostData] = useState<Array<any>>([]);
  const [profileDataHold, setprofileDataHold] = useState<Array<any>>([]);
  const [dontallowspring, setdontallowspring] = useState<boolean>(false);
  const [scrollLocation, setscrollLocation] = useState<number>(0);
  const [CommentHistoryData, setCommentHistoryData] = useState<Array<any>>([]);
  const [commentHistoryScroll, setcommentHistoryScroll] = useState<number>(0);
  const [ActualpostDataAll, setActualPostDataAll] = useState<Array<any>>([]);
  const [keypost, setkeypost] = useState(0);
  const [aboutTemplateGo, setaboutTemplateGo] = useState<boolean>(false);
  const [commentTemplateGo, setcommentTemplateGo] = useState<boolean>(false);
  const [reactionTemplateGo, setreactionTemplateGo] = useState<boolean>(false);
  const [connectTemplateGo, setconnectTemplateGo] = useState<number>(0);
  const [typeEmo, settypeEmo] = useState<number>(0);
  const [CommentPostid, setCommentPostid] = useState<Array<any>>([]);
  const [formtype, setFormtype] = useState<boolean>(true);
  const [DiscussionImage, setDiscussionImage] = useState<Array<any>>([]);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [checkIfColorChanged, setcheckIfColorChanged] = useState<boolean>(false);
  const [getSliderWidth, setgetSliderWidth] = useState(0);
  const getSliderWidthRef = useRef<HTMLDivElement>(null);
  const [showProfiileData, setshowProfiileData] = useState<boolean>(false);

  const [PCZOOM, setPCZOOM] = useState<boolean>(true);


  const [selectedImage, setselectedImage] = useState<Array<any>>([]);
  const [showModalUploadTask, setShowModalUploadTask] =
    useState<boolean>(false);
  const [showModalUpload, setShowModalUpload] = useState<boolean>(false);
  const [UploadGPT, setUploadGPT] = useState(false);
  const [showModalFormMenu, setShowModalFormMenu] = useState<boolean>(false);
  const [ShowBigPlay, setShowBigPlay] = useState(false);
  const [x, setx] = useState<boolean>(false);
  const [miniProfile, setminiProfile] = useState<boolean>(false);
  const [sliderIndexMini, setSliderIndexMini] = useState<number>(0);
  const [zoomClickedIndex, setzoomClickedIndex] = useState(0);
  const [Loaderx, setLoaderx] = useState(false);
  const [ShowInstallHelp, setShowInstallHelp] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [haltDownload, sethaltDownload] = useState(false);


  const [IdReactRouterAsInt, setIdReactRouterAsInt] = useState(0);
  const [ScrollReactRouter, setScrollReactRouter] = useState(0);
  const [PagenumReactRouter, setPagenumReactRouter] = useState(0);

  const [PostPagenumPusher, setPostPagenumPusher] = useState(0);
  const [ScrollIndexPusher, setScrollIndexPusher] = useState(0)

  const [FeedType, setFeedType] = useState(0);


  const [localPostId, setlocalPostId] = useState(0);
  const [localProfileId, setlocalProfileId] = useState(0);












  const [sliderIndex, setSliderIndex] = useState(1);
  var billdefaultbill =
    "https://superstarz-data-tank.s3.eu-west-2.amazonaws.com/fc284f4924c7405bb44ab8e2c3f05891";///not used
  const [profileimageSource, setprofileimageSource] = useState<any>([]);
  const [cropimageProfile, setcropimageProfile] = useState<any>(null);
  const [showModalUploadProfile, setShowModalUploadProfile] =
    useState<boolean>(false);
  const [typex, settypex] = useState<any>(null);





  const [ShowImageSlider, setShowImageSlider] = useState<boolean>(true);



  useEffect(() => {
    const handlePopstate = () => {

      uploadClose(1);

      setShowModalUploadProfile(false);

    };

    // Add an event listener for the popstate event
    window.addEventListener('popstate', handlePopstate);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []); // This effect should only run once, so it has an empty dependency array





  const uploadClose = (DeviceBackButtonClicked: number) => {
    //alert(DeviceBackButtonClicked);

    if (DeviceBackButtonClicked > 0) {


      setShowModalUploadTask(false);
      dispatch(UpdateNavFilterReducer(false));
      dispatch(UpdateNavCropReducer(false));
      setStopBodyScroll(false);
      setShowModalUpload(false);


    }
  };




  const [postDataxx, setPostDataxx] = useState<Array<any>>([]);




  const OpenUploadModalTaskbar = useCallback(
    () => {
      setStopBodyScroll(true);
      setShowModalUploadTask(true);
      //pushstate add enteries to your history
      uploadClose(0);

      var dd = {
        type: 0, id: 0, innerid: 0, pagenumReducer: pagenumReducer,

        data: postDataxx,
        dataPageNumberState: 0,
        dataAll: postDataxx,
        profileDataAll: postDataxx,

        ProfileLocal: 0,
        PostLocal: 0
      };

      window.history.pushState(dd, "", "");


    },
    [showModalUploadTask, pagenumReducer]
  );


  ///OPEN MODAL THEN CALL CLOSEMODAL FUNCTION WHICH WAITS FOR A POP EVENT(for closing modal)
  const OpenUploadModal = useCallback((t: number) => {
    if (t === 0) {
      setStopBodyScroll(true);
      setShowModalUpload(true);
      //pushstate add enteries to your history
      var dd = {
        type: 0, id: 0, innerid: 0, pagenumReducer: pagenumReducer,

        data: postDataxx,
        dataPageNumberState: 0,
        dataAll: postDataxx,
        profileDataAll: postDataxx,

        ProfileLocal: 0,
        PostLocal: 0
      };
      window.history.pushState(dd, "", "");
    }

    else {

      OpenUploadModalTaskbar();
    }
  }, [showModalUpload, pagenumReducer]);




  const rememberUser = () => {
    // alert('kk');
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/keepmeloggedin`,
      {
        values: "logout",
      },
      { withCredentials: true }
    )
      .then((response) => {
        if (response.data.message === "cookie") {
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log("Connection failure ");
      });
  };




  const OpenUploadModalProfile = useCallback(
    (type: any) => {
      setStopBodyScroll(true);
      setShowModalUploadProfile(true);
      //pushstate add enteries to your history
      // uploadClose(1);

      var dd = {
        type: 0, id: 0, innerid: 0, pagenumReducer: pagenumReducer,

        data: postDataxx,
        dataPageNumberState: 0,
        dataAll: postDataxx,
        profileDataAll: postDataxx,

        ProfileLocal: 0,
        PostLocal: 0

      };

      if (type === 1) {
        window.history.pushState(dd, "", "");
      } else {
        window.history.pushState(dd, "", "");
      }
    },
    [showModalUploadProfile, pagenumReducer]
  );



  const [ShowmaxPost, setShowmaxPost] = useState<boolean>(false);



  const profilex = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const FileArray = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      if (e.target.files.length > 1) {
        setShowmaxPost(true);
        setTimeout(function () {
          setShowmaxPost(false);
        }, 3000);
      } else {
        settypex("Profile");
        setprofileimageSource([]);
        setprofileimageSource((prevImages: any) =>
          prevImages.concat(FileArray)
        );
        setcropimageProfile(FileArray[0]);
        OpenUploadModalProfile(1);
      }

      //const formData = new FormData();
      ///for (let i = 0; i < e.target.files.length; i++) {
      //formData.append("superImages", e.target.files[i]);}
      ////

      ///dispatch(UpdateNavCropReducer(true));
    }
  };



  const CloseModalForm = useCallback(
    (DeviceBackButtonClicked: number, type: any) => { }, []);

  var colorboy: any = { color1: "", color2: "", colortype: 0, id: idReducer, };

  const updateColor = useCallback(() => {
  }, [
    checkIfColorChanged, REACT_APP_SUPERSTARZ_URL, colorReducer, colorboy, colortypeReducer, idReducer,
  ]);




  ///
  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (getSliderWidthRef.current && getSliderWidthRef.current.clientWidth) {
      setgetSliderWidth(getSliderWidthRef.current.clientWidth);
    }
  }, [showProfiileData]);




  const OpenModalForm = useCallback(
    (type: any) => {

    },
    [showModalForm, pagenumReducer]
  );




  const scrollToRef = useCallback(() => {


  }, [postData, miniProfile]);




  const CommentPage = () => {
    /// const { commentId, postId, userId } = useParams();

    return (
      <Grid
        item
        style={{
          height: "0px",
          zIndex: 100,
        }}
      >
        <div
          className="zuperxyinfo"
          style={{
            position: "fixed",
            top: "19vh",
            width: "100%",
            height: "0px",
            zIndex: 60000,
            fontFamily: "Arial, Helvetica, sans-seri",
          }}
        >
          <ServerError
            WebsiteMode={WebsiteMode}
            device="pc"
            serverEmojiplain={serverEmojiplain}
            setServerErrorData={setServerErrorData}
            serverErrorDisplay={serverErrorDisplay}
            serverErrorData={serverErrorData}
          />
        </div>

      </Grid>
    );

  }
  const [showNavbar, setShowNavbar] = useState(false); // State to show/hide the navbar
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to manage scroll timeout

  // React Spring animation for fade in and fade out
  const fadeStyles = useSpring({
    opacity: CurrentPage === 'feeds' ? showNavbar ? 1 : ExtendBill ? 1 : 0 : 1, // Fade in when showNavbar is true, fade out when false
    config: { duration: 300 }, // Animation duration (300ms)
  });

  // Debounced scroll handler
  const handleScroll = () => {
    setShowNavbar(true); // Show navbar when user scrolls

    // Clear any existing timeout
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Hide navbar after 3 seconds of no scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      setShowNavbar(false);
    }, 3000); // 3 seconds
  };

  useEffect(() => {
    const scrollElement = paperPostScrollRef.current; // Reference to the scrollable div
    if (scrollElement) {
      const debouncedScroll = () => {
        handleScroll(); // Handle scroll after debouncing
      };

      scrollElement.addEventListener('scroll', debouncedScroll); // Attach scroll event listener

      return () => {
        scrollElement.removeEventListener('scroll', debouncedScroll); // Cleanup on unmount
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current); // Cleanup timeout
      };
    }
  }, [paperPostScrollRef]);


  return (
    <>




      {loggedInReducer ? (
        <>
          <Paper


            ref={paperPostScrollRef}
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
              scrollSnapType: snapallow ? 'none' : 'y mandatory',

              backgroundImage: PaperStyleReducer,
              borderRadius: "0px",
              height: "100vh",
              width: "100%",
              overflowY:
                stopBodyScroll
                  ? "hidden"
                  : "auto",
              overflowX: "hidden",

            }}
          >
            <MuiThemeProvider theme={themeGeneralSettings}  >




              {/* ////////////////////////////////////////////////////////////  ROUTER START //////////////////////////////////////////////////////*/}
              <Router>
                <div>

                  {/* MENU lOGins ,NavBar */}
                  {
                    showModalFormMenu ? <Grid
                      item
                      style={{
                        height: "0px",
                        zIndex: 500,
                        position: 'fixed',
                        top: '0vh',
                        backgroundColor: ''
                      }}
                    >
                      <ActualMenu


                        setAutoGo={setAutoGo}
                        AutoGo={AutoGo}


                        localPostId={localPostId}
                        setlocalPostId={setlocalPostId}
                        localProfileId={localProfileId}
                        setlocalProfileId={setlocalProfileId}


                        FeedType={FeedType}
                        CurrentPage={CurrentPage}

                        ScrollIndexPusher={ScrollIndexPusher}
                        PostPagenumPusher={PostPagenumPusher}

                        setIdReactRouterAsInt={setIdReactRouterAsInt}
                        setScrollReactRouter={setScrollReactRouter}

                        profileDataHold={profileDataHold}
                        setUploadGPT={setUploadGPT}
                        paperPostScrollRef={paperPostScrollRef}
                        setuptype={1}
                        ActualpostDataAll={ActualpostDataAll}
                        setShowInstallHelp={setShowInstallHelp}
                        setDeferredPrompt={setDeferredPrompt}
                        deferredPrompt={deferredPrompt}
                        haltDownload={haltDownload}
                        sethaltDownload={sethaltDownload}
                        RandomColor={RandomColor}
                        WebsiteMode={WebsiteMode}
                        scrollToRef={scrollToRef}
                        setsuperSettings={setsuperSettings}
                        postData={postData}
                        showModalFormMenu={showModalFormMenu}
                        setshowModalFormMenu={setShowModalFormMenu} />

                    </Grid> : null
                  }


                  {/* Menu component fixed at the bottom */}
                  <Grid
                    item
                    style={{
                      height: "auto",
                      bottom: matchMobile ? '0vh' : "0vh",
                      position: "fixed",
                      width: "100%",
                      opacity: "1",
                      zIndex: 50000,
                      display: 'block'
                    }}
                  >
                    <animated.div style={fadeStyles}>

                      <Menu


                        localPostId={localPostId}
                        setlocalPostId={setlocalPostId}
                        localProfileId={localProfileId}
                        setlocalProfileId={setlocalProfileId}


                        setAutoGo={setAutoGo}
                        AutoGo={AutoGo}
                        FeedType={FeedType}
                        zoomedModal={zoomedModal}
                        mobileZoom={mobileZoom}
                        setZoomedModal={setZoomedModal}
                        setMobileZoom={setMobileZoom}


                        CurrentPage={CurrentPage}
                        ScrollIndexPusher={ScrollIndexPusher}
                        PostPagenumPusher={PostPagenumPusher}


                        setIdReactRouterAsInt={setIdReactRouterAsInt}
                        setScrollReactRouter={setScrollReactRouter}

                        minimise={minimise}
                        setminimise={setminimise}
                        pagenumReducer={pagenumReducer}
                        setuptype={1}
                        ActualpostDataAll={ActualpostDataAll}
                        profileDataHold={profileDataHold}
                        RandomColor={RandomColor}
                        setUploadGPT={setUploadGPT}
                        WebsiteMode={WebsiteMode}
                        showModalForm={showModalForm}
                        shownav={shownav}
                        setShownav={setShownav}
                        showModalFormMenu={showModalFormMenu}
                        ShowBigPlay={ShowBigPlay}
                        setShowModalFormMenu={setShowModalFormMenu}
                        postData={postData}
                        selectedImage={selectedImage}
                        setselectedImage={setselectedImage}
                        x={x}
                        miniProfile={miniProfile}
                        setminiProfile={setminiProfile}
                        setzoomClickedIndex={setzoomClickedIndex}
                        setSliderIndexMini={setSliderIndexMini}
                        setx={setx}
                        setsuperSettings={setsuperSettings}
                        showModalUpload={showModalUpload}
                        OpenUploadModal={OpenUploadModal}
                        getSliderWidth={getSliderWidth}
                        paperPostScrollRef={paperPostScrollRef}
                      />

                    </animated.div>
                  </Grid>

                  {
                    matchMobile ?
                      <Grid
                        item
                        onClick={() => {
                          dispatch(UpdateSign(false));

                        }}
                        style={{
                          height: "39vh",
                          width: '100%',
                          marginLeft: '0px',
                          zIndex: 600,
                          position: 'fixed',
                          transition: 'ease-in',
                          cursor: 'pointer',
                          paddingTop: '4.5vh',
                          bottom: '0vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(50,50,50,0.85)"
                            : "rgba(240,240,240,0.75)",


                          display: idReducer === GuestReducer ? SignInReducer ? 'block' : 'none' : 'none',

                        }}
                      >
                        <LoginButtons
                          setCurrentPage={setCurrentPage} OpenModalForm={OpenModalForm} type={1} setScrollReactRouter={setScrollReactRouter}
                          setFormtype={setFormtype} />
                      </Grid>
                      :

                      <Grid
                        item
                        onClick={() => {
                          dispatch(UpdateSign(false));

                        }}
                        style={{
                          height: "35vh",
                          width: '60%',
                          marginLeft: '20%',
                          zIndex: 600,
                          position: 'fixed',
                          borderRadius: '3.5vw',
                          cursor: 'pointer',
                          bottom: '38vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(20,20,20,0.84)"
                            : "rgba(250,250,250,0.91)",

                          display: idReducer === GuestReducer ? SignInReducer ? 'block' : 'none' : 'none',

                        }}
                      >

                        <LoginButtons setCurrentPage={setCurrentPage}
                          OpenModalForm={OpenModalForm} setScrollReactRouter={setScrollReactRouter}
                          setFormtype={setFormtype} />
                      </Grid>
                  }
                  {/* MENU lOGins ,NavBar */}



                  {/* Upload Components */}
                  <Grid item style={{
                    height: "0px",
                    zIndex: 50000,
                    position: 'fixed',
                    top: '0vh'
                  }}
                  > <UploadProfilePic
                      sliderIndex={sliderIndex}
                      billdefaultbill={billdefaultbill}
                      uploadClose={uploadClose}
                      profileimageSource={profileimageSource}
                      cropimageProfile={cropimageProfile}
                      showModalUploadProfile={showModalUploadProfile}
                      typex={typex}
                    />
                  </Grid>
                  {showModalUploadTask ? <Grid item style={{
                    height: "0px",
                    zIndex: 50000,
                    position: 'fixed',
                    top: '0vh'
                  }}
                  ><Taskbar
                      getSliderWidth={getSliderWidth}
                      uploadClose={uploadClose}
                      showModalUploadTask={showModalUploadTask}
                    />
                  </Grid>
                    :
                    null}
                  <Upload


                    selectedImage={selectedImage}
                    setselectedImage={setselectedImage}
                    setShowModalUpload={setShowModalUpload}
                    setStopBodyScroll={setStopBodyScroll}
                    closeUploadModal={uploadClose}
                    showModalUpload={showModalUpload}
                    OpenUploadModal={OpenUploadModal}
                    getSliderWidth={getSliderWidth}
                  />
                  {/* Upload Components */}



                  {/* Define your routes */}
                  <Routes>
                    <Route element={<ProtectedRoute />}>
                      <Route
                        path="/Feeds/:idRoute1/:idRoute2/:idRoute3/:idRoute4/"
                        element={


                          <ProfileGate

                            mono={mono}
                            setmono={setmono}

                            setExtendBill={setExtendBill}
                            ExtendBill={ExtendBill}

                            rand1={rand1}
                            setrand1={setrand1}
                            rand2={rand2}
                            setrand2={setrand2}
                            rand3={rand3}
                            setrand3={setrand3}
                            rand4={rand4}
                            setrand4={setrand4}

                            localPostId={localPostId}
                            setlocalPostId={setlocalPostId}
                            localProfileId={localProfileId}
                            setlocalProfileId={setlocalProfileId}



                            setAutoGo={setAutoGo}
                            AutoGo={AutoGo}
                            PCZOOM={PCZOOM}
                            setPCZOOM={setPCZOOM}

                            AiLock={AiLock}
                            setFeedType={setFeedType}
                            FeedType={FeedType}

                            setShowImageSlider={setShowImageSlider}
                            ShowImageSlider={ShowImageSlider}
                            setUploadGPT={setUploadGPT}


                            OpenUploadModalProfile={OpenUploadModalProfile}
                            setShowmaxPost={setShowmaxPost}
                            ShowmaxPost={ShowmaxPost}

                            settypex={settypex}
                            setprofileimageSource={setprofileimageSource}
                            setcropimageProfile={setcropimageProfile}
                            setShowModalUploadProfile={setShowModalUploadProfile}
                            showModalUploadProfile={showModalUploadProfile}
                            sliderIndex={sliderIndex}
                            setSliderIndex={setSliderIndex}
                            billdefaultbill={billdefaultbill}


                            setsnapallow={setsnapallow}
                            snapallow={snapallow}

                            RandomColor={RandomColor}
                            setCurrentPage={setCurrentPage}
                            ScrollIndexPusher={ScrollIndexPusher}
                            setScrollIndexPusher={setScrollIndexPusher}
                            PagenumReactRouter={PagenumReactRouter}
                            setPostPagenumPusher={setPostPagenumPusher}
                            PostPagenumPusher={PostPagenumPusher}
                            setPagenumReactRouter={setPagenumReactRouter}
                            setIdReactRouterAsInt={setIdReactRouterAsInt}
                            setScrollReactRouter={setScrollReactRouter}
                            IdReactRouterAsInt={IdReactRouterAsInt}
                            ScrollReactRouter={ScrollReactRouter}
                            paperPostScrollRef={paperPostScrollRef}
                            stopBodyScroll={stopBodyScroll}
                            setminimise={setminimise}
                            minimise={minimise}
                            setStopBodyScroll={setStopBodyScroll}
                            setsuperSettings={setsuperSettings}
                            WebsiteMode={WebsiteMode}
                            setWebsiteMode={setWebsiteMode}
                            showProfiileData={showProfiileData}
                            setshowProfiileData={setshowProfiileData}
                            getSliderWidth={getSliderWidth}
                            setselectedImage={setselectedImage}
                            selectedImage={selectedImage}
                            getSliderWidthRef={getSliderWidthRef}
                          />}
                      />

                      <Route

                        path="/Discussions/:idRoute1/:idRoute2/:idRoute3/:idRoute4"
                        element={
                          <CommentTemplate
                            RandomColor={RandomColor}
                            zoomedModal={zoomedModal}
                            mobileZoom={mobileZoom}
                            setZoomedModal={setZoomedModal}
                            setMobileZoom={setMobileZoom}


                            setCurrentPage={setCurrentPage}

                            setScrollReactRouter={setScrollReactRouter}
                            setPagenumReactRouter={setPagenumReactRouter}
                            paperPostScrollRef={paperPostScrollRef}

                            profileDataHold={profileDataHold}
                            dontallowspring={dontallowspring}
                            setcommentHistoryScroll={setcommentHistoryScroll}
                            setCommentHistoryData={setCommentHistoryData}
                            commentHistoryScroll={commentHistoryScroll}
                            CommentHistoryData={CommentHistoryData}
                            postData={ActualpostDataAll}
                            keypost={keypost}
                            scrollLocation={scrollLocation}

                            connectTemplateGo={false}
                            reactionTemplateGo={false}
                            aboutTemp={false}
                            commentTemp={true}


                            profilex={profilex}
                            formtype={formtype}
                            showModalForm={true}
                            CloseModalForm={CloseModalForm}

                            updateColor={updateColor}
                            checkIfColorChanged={checkIfColorChanged}
                            setcheckIfColorChanged={setcheckIfColorChanged}
                          />}
                      />


                      <Route
                        path="/Reactions/:idRoute1/:idRoute2/:idRoute3/:idRoute4"
                        element={
                          <CommentTemplate
                            RandomColor={RandomColor}
                            zoomedModal={zoomedModal}
                            mobileZoom={mobileZoom}
                            setZoomedModal={setZoomedModal}
                            setMobileZoom={setMobileZoom}

                            setCurrentPage={setCurrentPage}

                            setScrollReactRouter={setScrollReactRouter}
                            setPagenumReactRouter={setPagenumReactRouter}
                            paperPostScrollRef={paperPostScrollRef}

                            profileDataHold={profileDataHold}
                            dontallowspring={dontallowspring}
                            setcommentHistoryScroll={setcommentHistoryScroll}
                            setCommentHistoryData={setCommentHistoryData}
                            commentHistoryScroll={commentHistoryScroll}
                            CommentHistoryData={CommentHistoryData}
                            postData={ActualpostDataAll}
                            keypost={keypost}
                            scrollLocation={scrollLocation}

                            connectTemplateGo={false}
                            reactionTemplateGo={true}
                            commentTemp={true}
                            aboutTemp={false}

                            profilex={profilex}
                            formtype={formtype}
                            showModalForm={true}
                            CloseModalForm={CloseModalForm}




                            updateColor={updateColor}
                            checkIfColorChanged={checkIfColorChanged}
                            setcheckIfColorChanged={setcheckIfColorChanged}
                          />}
                      />

                      <Route
                        path="/Connections/:idRoute1/:idRoute2/:idRoute3/:idRoute4"
                        element={
                          <CommentTemplate
                            RandomColor={RandomColor}
                            zoomedModal={zoomedModal}
                            mobileZoom={mobileZoom}
                            setZoomedModal={setZoomedModal}
                            setMobileZoom={setMobileZoom}


                            setCurrentPage={setCurrentPage}

                            setScrollReactRouter={setScrollReactRouter}
                            setPagenumReactRouter={setPagenumReactRouter}
                            paperPostScrollRef={paperPostScrollRef}

                            profileDataHold={profileDataHold}
                            dontallowspring={dontallowspring}
                            setcommentHistoryScroll={setcommentHistoryScroll}
                            setCommentHistoryData={setCommentHistoryData}
                            commentHistoryScroll={commentHistoryScroll}
                            CommentHistoryData={CommentHistoryData}
                            postData={ActualpostDataAll}
                            keypost={keypost}
                            scrollLocation={scrollLocation}

                            connectTemplateGox={true}
                            reactionTemplateGo={true}
                            commentTemp={true}
                            aboutTemp={false}

                            profilex={profilex}
                            formtype={formtype}
                            showModalForm={true}
                            CloseModalForm={CloseModalForm}




                            updateColor={updateColor}
                            checkIfColorChanged={checkIfColorChanged}
                            setcheckIfColorChanged={setcheckIfColorChanged}
                          />}
                      />


                      <Route
                        path="/Biography/:idRoute1/:idRoute2/:idRoute3/:idRoute4"
                        element={
                          <CommentTemplate
                            RandomColor={RandomColor}
                            zoomedModal={zoomedModal}
                            mobileZoom={mobileZoom}
                            setZoomedModal={setZoomedModal}
                            setMobileZoom={setMobileZoom}


                            setCurrentPage={setCurrentPage}

                            setScrollReactRouter={setScrollReactRouter}
                            setPagenumReactRouter={setPagenumReactRouter}
                            paperPostScrollRef={paperPostScrollRef}

                            profileDataHold={profileDataHold}
                            dontallowspring={dontallowspring}
                            setcommentHistoryScroll={setcommentHistoryScroll}
                            setCommentHistoryData={setCommentHistoryData}
                            commentHistoryScroll={commentHistoryScroll}
                            CommentHistoryData={CommentHistoryData}
                            postData={ActualpostDataAll}
                            keypost={keypost}
                            scrollLocation={scrollLocation}

                            connectTemplateGox={false}
                            reactionTemplateGo={false}
                            commentTemp={false}
                            aboutTemp={true}

                            profilex={profilex}
                            formtype={formtype}
                            showModalForm={true}
                            CloseModalForm={CloseModalForm}




                            updateColor={updateColor}
                            checkIfColorChanged={checkIfColorChanged}
                            setcheckIfColorChanged={setcheckIfColorChanged}
                          />}
                      />

                      <Route
                        path="/Login/:idRoute1/:idRoute2/:idRoute3/:idRoute4"
                        element={
                          <CommentTemplate
                            RandomColor={RandomColor}
                            zoomedModal={zoomedModal}
                            mobileZoom={mobileZoom}
                            setZoomedModal={setZoomedModal}
                            setMobileZoom={setMobileZoom}


                            setCurrentPage={setCurrentPage}

                            formtype={formtype}
                            setScrollReactRouter={setScrollReactRouter}
                            setPagenumReactRouter={setPagenumReactRouter}
                            paperPostScrollRef={paperPostScrollRef}

                            profileDataHold={profileDataHold}
                            dontallowspring={dontallowspring}
                            setcommentHistoryScroll={setcommentHistoryScroll}
                            setCommentHistoryData={setCommentHistoryData}
                            commentHistoryScroll={commentHistoryScroll}
                            CommentHistoryData={CommentHistoryData}
                            postData={ActualpostDataAll}
                            keypost={keypost}
                            scrollLocation={scrollLocation}

                            connectTemplateGo={false}
                            reactionTemplateGo={false}
                            commentTemp={false}
                            aboutTemp={false}

                            profilex={profilex}

                            showModalForm={true}
                            CloseModalForm={CloseModalForm}


                            updateColor={updateColor}
                            checkIfColorChanged={checkIfColorChanged}
                            setcheckIfColorChanged={setcheckIfColorChanged}
                          />}
                      />
                    </Route>

                    <Route
                      path="/"
                      element={<Navigate to={`/Feeds/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`} />}
                    />
                  </Routes>
                </div>
              </Router>
              {/* ////////////////////////////////////////////////////////////  ROUTER END //////////////////////////////////////////////////////*/}












              <Grid container className="dontallowhighlighting" style={{}}>
                {showThisComponenet ? (
                  <>
                    {" "}
                    <Grid
                      item
                      xs={12}
                      style={{
                        position: "fixed",
                        width: "100%",
                        padding: "0px",
                        height: "100vh",
                        backgroundColor: darkmodeReducer
                          ? "rgba(30,20,30, 0.33)"
                          : "rgba(210,210,200, 0.28)",
                        top: "0vh",
                        zIndex: "1000",
                      }}
                    ></Grid>{" "}
                  </>
                ) : null}






                <Grid
                  item
                  xs={12}
                  style={{
                    height: "700px",
                  }}
                ></Grid>

                {
                  superSettings ? (
                    <>
                      <Grid
                        container
                        style={{
                          position: "fixed",
                          top: "0vh",
                          width: "100%",
                          height: "100%",
                          zIndex: 10,
                        }}
                      >
                        <Grid
                          container
                          onClick={() => {
                            setsuperSettings(false);
                          }}
                          style={{
                            backgroundColor: darkmodeReducer
                              ? "rgba(50,50,50,0.25)"
                              : "rgba(250,250,250,0.25)",
                            position: "fixed",
                            top: "0vh",
                            width: "100%",
                            height: "100%",
                            zIndex: 8,
                            cursor: 'pointer',
                          }}
                        ></Grid>{" "}
                        <Grid
                          xs={4}
                          style={{
                            padding: "0px",
                            backgroundColor: darkmodeReducer
                              ? "rgba(50,50,50,0.85)"
                              : "rgba(210,210,210,0.86)",
                            height: matchMobile ? "53%" : '64.5%',
                            marginTop: "0vh",
                            textAlign: "center",
                            justifyContent: "center",
                            display: "grid",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <HelpIcon
                            onClick={() => {


                              if (idReducer === GuestReducer) {
                                ///do nothing
                              } else {
                                for (let type = 1; type <= 6; type++) {
                                  dispatch(UpdateTutorials(type, true));

                                }
                                dispatch(UserdataReg(1));

                              }




                            }}
                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                            }
                            style={{
                              margin: "auto",
                              color: regReducer === 1 ? colorReducer : '',
                              fontSize:
                                matchTablet || matchMobile ? "4.8vh" : "2.9vw",
                            }}
                          />
                          <Grid
                            item
                            xs={12}
                            style={{
                              fontSize: matchPc
                                ? "1.1vw"
                                : matchTablet
                                  ? "2vh"
                                  : "1.9vh",
                              fontWeight: "bolder",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              color: darkmodeReducer ? "#dddddd" : "#0b111b",
                            }}
                          >
                            {regReducer === 1 ? 'Reset Tutorial' : 'Tutorial'}
                          </Grid>
                        </Grid>





                        <Grid
                          xs={4}
                          style={{
                            padding: "0px",
                            backgroundColor: darkmodeReducer
                              ? "rgba(50,50,50,0.85)"
                              : "rgba(210,210,210,0.86)",
                            height: matchMobile ? "53%" : '64.5%',
                            marginTop: "0vh",
                            textAlign: "center",
                            justifyContent: "center",
                            display: "grid",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <Switch
                            size="medium"
                            checked={darkmodeReducer}
                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCroptheme  "
                                : "make-small-icons-clickable-darkCroptheme    "
                            }
                            style={{
                              fontSize:
                                matchTablet || matchMobile ? "2.8vh" : "2.9vw",
                            }}
                            onChange={() => {
                              switchThemes();
                            }}
                          />
                          <Grid
                            item
                            xs={12}
                            style={{
                              fontSize: matchPc
                                ? "1.1vw"
                                : matchTablet
                                  ? "2vh"
                                  : "1.9vh",
                              fontWeight: "bolder",
                              fontFamily: "Arial, Helvetica, sans-serif",

                              color: darkmodeReducer ? "#dddddd" : "#0b111b",
                            }}
                          >
                            Theme
                          </Grid>
                        </Grid>
                        <Grid
                          xs={4}
                          style={{
                            padding: "0px",
                            backgroundColor: darkmodeReducer
                              ? "rgba(50,50,50,0.85)"
                              : "rgba(210,210,210,0.86)",
                            height: matchMobile ? "53%" : '64.5%',
                            marginTop: "0vh",
                            textAlign: "center",
                            justifyContent: "center",
                            display: "grid",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <LogoutIcon
                            onClick={rememberUser}
                            className={
                              darkmodeReducer
                                ? "make-small-icons-clickable-lightCrop turdark dontallowhighlighting zuperkingIcon "
                                : "make-small-icons-clickable-darkCrop  turdark dontallowhighlighting zuperkingIcon  "
                            }
                            style={{
                              margin: "auto",

                              fontSize:
                                matchTablet || matchMobile ? "4.8vh" : "2.9vw",
                            }}
                          />
                          <Grid
                            item
                            xs={12}
                            style={{
                              fontSize: matchPc
                                ? "1.1vw"
                                : matchTablet
                                  ? "2vh"
                                  : "1.9vh",
                              fontWeight: "bolder",
                              fontFamily: "Arial, Helvetica, sans-serif",
                              color: darkmodeReducer ? "#dddddd" : "#0b111b",
                            }}
                          >
                            Log Out
                          </Grid>
                        </Grid>





                      </Grid>{" "}
                    </>
                  ) : null
                }




                <Grid
                  className="dontallowhighlighting"
                  item
                  onClick={() => {
                    dispatch(UpdateInteract('', 0));
                  }}
                  style={{
                    cursor: 'pointer',
                    height: "100vh",
                    position: 'fixed',
                    top: '0vh',
                    width: '100vw',
                    zIndex: 3000000,
                    textAlign: 'center',
                    backgroundColor: darkmodeReducer
                      ? "rgb(20,20,20,0.52)"
                      : "rgb(210,210,210,0.45)",
                    display: interactReducer === 1 ? 'block' : 'none',
                    alignItems: 'center',


                  }}
                >
                  {matchMobile ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
                    <img
                      onClick={() => {
                        dispatch(UpdateInteract('', 0));


                      }}
                      className="dontallowhighlighting"

                      src={`${REACT_APP_CLOUNDFRONT}${interactContentReducer}`}
                      style={{
                        cursor: 'pointer',
                        height: 'auto',
                        width: '100vw',
                        maxWidth: '100%',
                        margin: 'auto',
                        position: 'relative',
                      }}
                      alt="Your Alt Text"
                    />
                  </div>
                    : <img onClick={() => {
                      dispatch(UpdateInteract('', 0));
                    }}
                      className="dontallowhighlighting"
                      src={`${REACT_APP_CLOUNDFRONT}${interactContentReducer}`}

                      style={{
                        cursor: 'pointer', margin: 'auto', height: '100vh',
                        width: 'auto'
                      }} />
                  }

                </Grid>







                {
                  UploadGPT ? matchMobile ?

                    <>
                      <Grid
                        onClick={() => {
                          if (Loaderx) { } else {
                            setUploadGPT(false)
                          }
                        }}
                        item
                        style={{
                          cursor: 'pointer',
                          height: "100vh",
                          width: '100%',
                          zIndex: 4,
                          position: 'fixed',
                          top: '0vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(50,50,50,0.65)"
                            : "rgba(130,130,130,0.55)",

                        }}
                      >
                      </Grid>

                      <Grid
                        item
                        style={{
                          height: "64vh",
                          width: '100%',
                          marginLeft: '0vw',
                          zIndex: 5,
                          position: 'fixed',
                          top: '0vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(50,50,50,0.95)"
                            : "rgba(250,250,250,0.9)",

                          borderRadius: '5vh',
                          borderTopLeftRadius: '0vh',
                          borderTopRightRadius: '0vh',
                          borderBottomLeftRadius: '5vh',
                          borderBottomRightRadius: '5vh',




                        }}
                      >
                        <GenerateAndUpload




                          AiLock={AiLock}
                          fileoo={inputId}
                          setUploadGPT={setUploadGPT}
                          Loader={Loaderx}
                          setLoader={setLoaderx}
                          OpenUploadModal={OpenUploadModal} />
                      </Grid>

                    </> :

                    <>
                      <Grid
                        item
                        onClick={() => {
                          if (Loaderx) { } else {
                            setUploadGPT(false)
                          }
                        }}
                        style={{
                          cursor: 'pointer',
                          height: "100vh",
                          width: '100%',
                          zIndex: 4,
                          position: 'fixed',
                          top: '0vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(50,50,50,0.65)"
                            : "rgba(130,130,130,0.55)",
                          display: 'block',
                        }}
                      >
                      </Grid>

                      <Grid
                        item
                        style={{
                          height: "80vh",
                          width: '50%',
                          marginLeft: '25vw',
                          zIndex: 5,
                          position: 'fixed',
                          top: '10vh',
                          backgroundColor: darkmodeReducer
                            ? "rgba(50,50,50,0.95)"
                            : "rgba(220,220,220,0.9)",
                          borderRadius: '5vh',
                          display: 'block',
                        }}
                      >

                        <GenerateAndUpload
                          AiLock={AiLock}
                          fileoo={inputId}
                          setUploadGPT={setUploadGPT}
                          Loader={Loaderx}
                          setLoader={setLoaderx}
                          OpenUploadModal={OpenUploadModal} />
                      </Grid>

                    </>
                    : null
                }



                {
                  WebsiteMode ? <Grid
                    className="dontallowhighlighting"
                    item
                    onClick={() => {
                      setShowInstallHelp(false)
                    }}
                    style={{

                      height: "100vh",
                      position: 'fixed',
                      top: '0vh',
                      width: '100vw',
                      zIndex: 3000000,
                      textAlign: 'center',
                      backgroundColor: darkmodeReducer
                        ? "rgb(20,20,20,0.72)"
                        : "rgb(210,210,210,0.65)",
                      display: ShowInstallHelp ? 'block' : 'none',
                      alignItems: 'center',
                      cursor: 'default',


                    }}
                  >
                    {matchMobile ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
                      <img
                        onClick={() => {
                          setShowInstallHelp(false)
                        }}
                        className="dontallowhighlighting"

                        src={isAppleDevice ? `${REACT_APP_CLOUNDFRONT}Scroll Down.png` : `${REACT_APP_CLOUNDFRONT}Untitled designmjjjj.png`}
                        style={{
                          cursor: 'pointer',
                          height: 'auto',
                          width: '100vw',
                          maxWidth: '100%',
                          margin: 'auto',
                          position: 'relative',

                        }}
                        alt="Your Alt Text"
                      />
                    </div>
                      : <img onClick={() => {
                        setShowInstallHelp(false)
                      }}
                        className="dontallowhighlighting"
                        src={isAppleDevice ? `${REACT_APP_CLOUNDFRONT}Untitled design.png`
                          : `${REACT_APP_CLOUNDFRONT}Untitled design.png`}

                        style={{
                          cursor: 'pointer', margin: 'auto', height: '70vh', marginTop: '30vh',
                          width: 'auto',

                        }} />
                    }

                  </Grid> : null
                }




              </Grid>





            </MuiThemeProvider>
          </Paper>
        </>
      ) : null
      }
    </>
  );
}

export default ProfileOutter;
