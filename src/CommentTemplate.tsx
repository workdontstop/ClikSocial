import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSpring } from "react-spring";

import { matchTablet, matchPc, matchMobile } from "./DetectDevice";
import Axios from "axios";

import "./log/logCss.css";
import { ICommentTemplate, IGrid } from "./log/log-Interfaces";
import { useSelector } from "react-redux";
import { DiscussionFeedBack } from "./profile/DiscussionFeedBack";
import image1 from "./log/images/modalpic1.png";
import image2 from "./log/images/modalpic2.png";
import image3 from "./log/images/modalpic3.png";
import image4 from "./log/images/modalpic4.png";
import image5 from "./log/images/modalpic5.png";
import image6 from "./log/images/modalpic6.png";
import { ModalLogLayout } from "./log/ModalLogLayout";
import { ModalAboutLayout } from "./profile/ModalAboutLayout";
import { ModalCommentLayout } from "./profile/ModalCommentLayout";
import { Button, Grid } from "@material-ui/core";
import { animated } from "react-spring";
import { DialogContent } from "@material-ui/core";

import { RootStateOrAny, useDispatch } from "react-redux";

import { UpdateLoader, UpdateMenuData, Updatepagenum } from "./GlobalActions";

import { LoaderPost } from "./profile/LoaderPost";


import { decodeBase64, encodeBase64 } from './profile/utils';

import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

function CommentTemplatex({
  formtype,
  CloseModalForm,
  showModalForm,
  aboutTemp,
  commentTemp,
  updateColor,
  profilex,
  checkIfColorChanged,
  setcheckIfColorChanged,
  RandomColor,

  reactionTemplateGo,
  connectTemplateGox,
  scrollLocation,
  postData,
  commentHistoryScroll,
  CommentHistoryData,
  setcommentHistoryScroll,
  setCommentHistoryData,
  dontallowspring,
  keypost,
  profileDataHold,


  setScrollReactRouter,
  setPagenumReactRouter,
  paperPostScrollRef,

  setCurrentPage,

  setZoomedModal,
  setMobileZoom,
  zoomedModal,
  mobileZoom,





}: any): JSX.Element {



  const location = useLocation();





  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  const dispatch = useDispatch();


  const [IdReactRouterAsInt, setIdReactRouterAsInt] = useState(0);

  const [typeEmo, settypeEmo] = useState(0);

  const [connectTemplateGo, setconnectTemplateGo] = useState(0);



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


  const { idRoute1, idRoute2, idRoute3, idRoute4 } = useParams();
  let idReactRouter: string | undefined;
  let PagenumRouter: string | undefined;
  let scrollRouter: string | undefined;


  useEffect(() => {
    const handlePopstate = () => {
      // Extract IDs from the pathname
      const pathSegments = window.location.pathname.split('/');
      const idRoute1 = pathSegments[pathSegments.length - 4]; // Adjust index based on your route structure
      const idRoute2 = pathSegments[pathSegments.length - 3]; // Adjust index based on your route structure
      const idRoute3 = pathSegments[pathSegments.length - 2]; // Adjust index based on your route structure
      const idRoute4 = pathSegments[pathSegments.length - 1]; // Adjust index based on your route structure


      if (idRoute1) {
        const decodedId1 = decodeBase64(idRoute1);
        if (decodedId1) {
          const parsedInt1 = parseInt(decodedId1, 10);
          if (!isNaN(parsedInt1)) {
            setIdReactRouterAsInt(parsedInt1);
          }
        }
      }

      if (idRoute2) {
        const decodedId2 = decodeBase64(idRoute2);
        if (decodedId2) {
          const parsedInt2 = parseInt(decodedId2, 10);
          if (!isNaN(parsedInt2)) {
            setScrollReactRouter(parsedInt2);
            // paperPostScrollRef.current.scrollTop = parsedInt2;
          }
        }
      }

      if (idRoute3) {
        const decodedId3 = decodeBase64(idRoute3);
        if (decodedId3) {
          const parsedInt3 = parseInt(decodedId3, 10);
          if (!isNaN(parsedInt3)) {
            setPagenumReactRouter(parsedInt3);
          }
        }
      }

      if (idRoute4) {
        const decodedId4 = decodeBase64(idRoute4);
        if (decodedId4) {
          const parsedInt4 = parseInt(decodedId4, 10);
          if (!isNaN(parsedInt4)) {
            settypeEmo(parsedInt4);
          }
        }
      }


    };

    // Add an event listener for the popstate event
    window.addEventListener('popstate', handlePopstate);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []); // This effect should only run once, so it has an empty dependency array



  const [ShowLoader2, setShowLoader2] = useState(false);

  ///////////////////////////////////////////////////Loader

  var autoSlideDisplay = "none";
  var sliderLoader = "";

  if (activateLoader || ShowLoader2) {
    autoSlideDisplay = "block";
    sliderLoader = "superloaderAutoSliderFast";
  } else {
    autoSlideDisplay = "none";
    sliderLoader = "";
  }

  //////////////////////////////////////////////

  useEffect(() => {
    if (idRoute1) {
      const decodedId1 = decodeBase64(idRoute1);
      if (decodedId1) {
        const parsedInt1 = parseInt(decodedId1, 10);
        if (!isNaN(parsedInt1)) {
          setIdReactRouterAsInt(parsedInt1);
          //alert(parsedInt1)
        }
      }
    }

    if (idRoute2) {
      const decodedId2 = decodeBase64(idRoute2);
      if (decodedId2) {
        const parsedInt2 = parseInt(decodedId2, 10);
        if (!isNaN(parsedInt2)) {
          setScrollReactRouter(parsedInt2);
          //paperPostScrollRef.current.scrollTop = parsedInt2;
        }
      }
    }

    if (idRoute3) {
      const decodedId3 = decodeBase64(idRoute3);
      if (decodedId3) {
        const parsedInt3 = parseInt(decodedId3, 10);
        if (!isNaN(parsedInt3)) {
          setPagenumReactRouter(parsedInt3);

        }
      }
    }


    if (idRoute4) {
      const decodedId4 = decodeBase64(idRoute4);
      if (decodedId4) {
        const parsedInt4 = parseInt(decodedId4, 10);
        if (!isNaN(parsedInt4)) {
          settypeEmo(parsedInt4);

        }
      }
    }

  }, [idRoute1, idRoute2, idRoute3, idRoute4, location.pathname]);

  ///alert(idReactRouterAsInt);



  const [DiscussionImage, setDiscussionImage] = useState('');
  const [PostOwner, setPostOwner] = useState(0);
  const [CommentPostAll, setCommentPostAll] = useState<Array<any>>([]);


  const [Bio, setBio] = useState('');
  const [BioUser, setBioUser] = useState('');


  var disboyx: any = {
    commentId: IdReactRouterAsInt,
    id: idReducer,
  };

  const callDiscussionImageConnect = () => {
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/connect_image`,
      { values: disboyx },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "fetched") {
          var postdataRep = response.data.payload;

          /// alert(IdReactRouterAsInt);
          setDiscussionImage(postdataRep[0].profile_image);

          setBio(postdataRep[0].biography);

          setBioUser(postdataRep[0].username);


          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          console.log("Connection malfunction modalcommentlayout");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction modalcommentlayout");
      });
  };



  const callDiscussionImage = () => {
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/comments_image`,
      { values: disboyx },
      {
        withCredentials: true,
      }
    )
      .then((response) => {
        if (response.data.message === "fetched") {
          var postdataRep = response.data.payload;

          setDiscussionImage(postdataRep[0].item2)
          setPostOwner(postdataRep[0].sender);
          setCommentPostAll(postdataRep[0]);


          ///setshowProfiileData(true);
        } else if (response.data.message === "error in fetching feeds") {
          console.log("Connection malfunction modalcommentlayout");
        }
      })
      .catch(function (error) {
        console.log("Connection malfunction modalcommentlayout");
      });
  };



  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);




  useEffect(() => {

    setCurrentPage('commentTemplate');

    if (IdReactRouterAsInt === 0) { }

    else {

      dispatch(UpdateLoader(true));
      setTimeout(() => {
        dispatch(UpdateLoader(false));
      }, 1500);




      if (connectTemplateGox) { }

      else {

        if (reactionTemplateGo || commentTemp) {


          if (Timervv.current) {
            clearTimeout(Timervv.current);
          }

          callDiscussionImage();
          //alert(IdReactRouterAsInt)
        }
      }
    }
  }, [IdReactRouterAsInt, reactionTemplateGo, commentTemp, connectTemplateGox]);





  useEffect(() => {

    setCurrentPage('commentTemplate');

    if (IdReactRouterAsInt === 0) { }

    else {
      dispatch(UpdateLoader(true));
      setTimeout(() => {
        dispatch(UpdateLoader(false));
      }, 1500);


      if (connectTemplateGox || aboutTemp) {

        ///alert(typeEmo);

        setconnectTemplateGo(typeEmo);

        callDiscussionImageConnect();

      }

    }
  }, [IdReactRouterAsInt, connectTemplateGox, typeEmo, aboutTemp]);



  ///
  ///
  ///
  /// SHOW/HIDES REPEAT PASSWORD UI STATE FOR SIGN UP
  const [checkSignupPasswordACTIVATE, setcheckSignupPasswordACTIVATE] =
    useState<boolean>(false);

  const [Feedbackshow, setFeedbackshow] = useState<boolean>(false);
  const [FeedBackData, setFeedBackData] = useState<number>(0);

  const CommentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [containerHeight, setcontainerHeight] = useState<number>(0);


  const [showComAddBack, setshowComAddBack] = useState<boolean>(false);



  ///
  ///
  ///
  ///MODAL ZOOMED STATE PC LOCALSTORAGE

  useEffect(() => {
    if (aboutTemp) {
    } else {
      let localPcZoomData = JSON.parse(localStorage.getItem("PcZoom")!);
      if (localPcZoomData !== null) {
        setTimeout(() => {
          setZoomedModal(localPcZoomData);
        }, 400);
      }
    }
  }, [zoomedModal, aboutTemp]);

  ///
  ///
  ///
  ///HIDE LOGO Modal
  const [showlogo, setShowlogo] = useState<boolean>(true);
  const iconTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iconTimerxx = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideLogo = () => {
    setShowlogo(false);
    if (iconTimer.current) {
      clearTimeout(iconTimer.current);
    }
    if (iconTimerxx.current) {
      clearTimeout(iconTimerxx.current);
    }
    iconTimer.current = setTimeout(function () {
      setShowlogo(true);
    }, 2000);
    iconTimerxx.current = setTimeout(function () {
      setShowlogo(false);
    }, 4000);
  };

  ///
  ///
  ///
  ///CREATE A SLIDE UP ANIMATION WITH  REACT SPRING
  const modalanimation = useSpring({
    config: {
      duration: dontallowspring ? 5 : 1500,
    },
    opacity: IdReactRouterAsInt != 0 ? 1 : 0.3,
    transform: IdReactRouterAsInt != 0 ? `translateY(0%)` : `translateY(100%)`,
  });

  const modalanimationTwo = useSpring({
    config: {
      duration: 1400,
    },
    opacity: IdReactRouterAsInt != 0 ? 1 : 0.3,
    transform: IdReactRouterAsInt != 0 ? `translateY(0%)` : `translateY(100%)`,
  });

  ///
  ///
  ///
  ///ANIMATE MOBILE IMAGE ON ZOOM STATE CHANGE
  const mobileLogmodalanimation: any = useSpring({
    config: {
      duration: 20,
    },
    transition: "height 0.4s",
    opacity: mobileZoom ? 1 : 0.98,
    height: mobileZoom ? "100%" : matchTablet ? "23vh" : "15vh",
  });

  ///
  ///
  ///
  /// AUTO SCROLL WINDOWS AND CONTENT GRID
  const contentScrollRef = useRef<any>(null);
  const imagescrollRef = useRef<any>(null);

  const autoScrollWindowNImage: any = useCallback(
    (limiter: number) => {
      if (limiter === 1) {
        imagescrollRef.current.scrollTo(0, 0);
        if (formtype) {
          contentScrollRef.current.scrollTo(0, 45);
        } else {
          contentScrollRef.current.scrollTo(0, 20);
        }
      } else {
        setTimeout(function () {
          if (imagescrollRef.current && contentScrollRef.current) {
            imagescrollRef.current.scrollTo(0, 0);
            contentScrollRef.current.scrollTo(0, 30);
          }
        }, 970);
      }
    },
    [formtype]
  );





  ///
  ///
  ///
  /// SHOW A  ZOOMED/LOCKED MODAL VIEW PC
  const zoomlogmodal = () => {
    if (checkSignupPasswordACTIVATE) {
      setcheckSignupPasswordACTIVATE(false);
    } else {
      let toggleZoomedModal = !zoomedModal;
      setZoomedModal(!zoomedModal);
      hideLogo();
      //LOCALSTORAGE ZOOMED STATES  FOR PC
      localStorage.setItem("PcZoom", toggleZoomedModal.toString());
    }
  };





  ///
  ///
  ///
  /// SHOW A  ZOOMED/LOCKED  MODAL VIEW  MOBILE(CHANGE MOBILEZOOM WITH A CLICK)
  const clickMobileZoom = () => {

    if (showComAddBack) {


      setshowComAddBack(false);
    } else {
      if (idReducer === 0) {

        if (checkSignupPasswordACTIVATE) {
          setcheckSignupPasswordACTIVATE(false);
        } else {
          if (mobileZoom) {
            setCallMobileZoomLimiter(false);
            setMobileZoom(false);
            hideLogo();
          } else {
            setCallMobileZoomLimiter(true);
            setMobileZoom(true);
            hideLogo();
          }
          //setMobileZoom(!mobileZoom);
          if (contentScrollRef.current && contentScrollRef) {
            autoScrollWindowNImage(0);
          }
        }
      } else {

        if (mobileZoom) {

          setCallMobileZoomLimiter(false);
          setMobileZoom(false);
          hideLogo();
        } else {
          setCallMobileZoomLimiter(true);
          setMobileZoom(true);
          hideLogo();
        }
        //setMobileZoom(!mobileZoom);
        if (contentScrollRef.current && contentScrollRef) {
          autoScrollWindowNImage(0);
        }
      }
    }


  };

  ///
  ///
  ///
  ///CHANGE MOBILEZOOM WITH A SCROLL(SCROLL CHANGE LAYOUT)
  const [callMobileZoomLimiter, setCallMobileZoomLimiter] =
    useState<boolean>(false);
  const slideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slide = useCallback(
    (e) => {
      if (contentScrollRef.current.scrollTop <= 0) {
        if (!callMobileZoomLimiter) {
          if (slideTimer.current) {
            clearTimeout(slideTimer.current);
          }
          //slidertimmer makes zoom  wait for some seconds before running
          slideTimer.current = setTimeout(function () {
            setMobileZoom(true);
            hideLogo();
            setCallMobileZoomLimiter(true);
          }, 720);
        }
      } else if (contentScrollRef.current.scrollTop >= 2) {
        if (slideTimer.current) {
          clearTimeout(slideTimer.current);
        }
        if (callMobileZoomLimiter) {
          autoScrollWindowNImage(0);
          setMobileZoom(false);
          hideLogo();
          setCallMobileZoomLimiter(false);
        }
      } else {
      }
    },
    [callMobileZoomLimiter, contentScrollRef, autoScrollWindowNImage]
  );

  ///
  ///
  ///
  ///ACTIVATE MOBILE VIEW TOP SCROLL(ZOOMABLE) ON INITIAL LOAD
  const mobileImageOnLoad = () => {
    hideLogo();
    if (contentScrollRef.current && contentScrollRef) {
      autoScrollWindowNImage(1);
    }
  };

  ///
  ///
  ///
  /// USEREF TARGETS A DIV(BACKGROUND) AND CLOSES MODAL ON CLICK
  const ModalBackgroundRef = useRef<HTMLInputElement>(null);
  const onBackgroundFocus = (e: any): void => {
    if (ModalBackgroundRef.current === e.target) {
      if (aboutTemp) {
        //  CloseModalForm(0, 2);
        ///updateColor();
      } else {
        // CloseModalForm(0, 2);
      }
    }
  };



  ///
  ///
  ///
  /// RANDOMISE IMAGE
  const [showimage, setShowimage] = useState<string>(" ");
  useEffect(() => {
    let imagecontrol: number[] = [1, 2, 3, 4, 5, 6];
    var result = null;
    var randomimage =
      imagecontrol[Math.floor(Math.random() * imagecontrol.length)];
    const img = new Image(); ///new image instance
    if (randomimage === 1) {
      result = image1;
    } else if (randomimage === 2) {
      result = image2;
    } else if (randomimage === 3) {
      result = image3;
    } else if (randomimage === 4) {
      result = image4;
    } else if (randomimage === 5) {
      result = image5;
    } else {
      result = image6;
    }
    img.src = result; //src forces a download
    setShowimage(result);
  }, [showimage]);

  ///
  ///
  ///
  /// GET IMAGE WIDTH ,HEIGHT AND SET WIDE IMAGE PC ONLY
  const ModalSlidingImageRef = useRef<HTMLImageElement>(null);
  const ModalImageRef = useRef<HTMLImageElement>(null);

  const [imageHeightoverflow, setImageHeightoverflow] =
    useState<boolean>(false);
  const [MiniLayoutOverFlow, setMiniLayoutOverFlow] = useState<boolean>(false);

  const [wideImage, setWideImage] = useState<boolean>(false);

  const onloadfunc = () => {
    hideLogo();
    if (ModalSlidingImageRef && ModalSlidingImageRef.current) {
      const imageHeight = ModalSlidingImageRef.current.clientHeight;
      const imageWidth = ModalSlidingImageRef.current.clientWidth;
      setcontainerHeight(imageHeight);
      if (imageHeight + (imageWidth / imageHeight) * 3 > screenHeightReducer) {
        setImageHeightoverflow(true);
      } else {
        setImageHeightoverflow(false);
      }

      if (imageWidth > imageHeight + (imageWidth / imageHeight) * 100) {
        setWideImage(true);
      } else {
        setWideImage(false);
      }
    }
  };

  const onimageload = useCallback(
    (e: any) => {
      onloadfunc();
    },
    [screenHeightReducer, DiscussionImage, ModalSlidingImageRef]
  );

  useEffect(() => {
    onloadfunc();
  }, [screenHeightReducer, DiscussionImage, ModalSlidingImageRef]);

  const onloadfuncx = () => {
    hideLogo();
    if (ModalImageRef && ModalImageRef.current) {
      const imageHeight = ModalImageRef.current.clientHeight;
      setcontainerHeight(imageHeight);
      var xx = 0;
      zoomedModal ? (xx = 205) : (xx = 10);
      if (imageHeight - xx > screenHeightReducer) {
        setMiniLayoutOverFlow(true);
      } else {
        setMiniLayoutOverFlow(false);
      }
    }
  };

  useEffect(() => {
    onloadfuncx();
  }, [screenHeightReducer, DiscussionImage, ModalImageRef]);

  const onimageloadx = useCallback(
    (e: any) => {
      onloadfuncx();
    },
    [screenHeightReducer, DiscussionImage, ModalImageRef]
  );




  /// DYNAMIC MODAL LAYOUT VARIABLES
  ///
  ///
  ///
  const wideImageControlTrue: string = "75vw";
  const wideImageControlfalse: string = "70vw";
  const zoomImageControl: string = "100vw";
  const GridMiniAwide: IGrid = 8;
  const GridMiniBwide: IGrid = 4;
  const GridMiniAlong: IGrid = 7;
  const GridMiniBlong: IGrid = 5;
  const GridZoomAwide: IGrid = 8;
  const GridZoomBwide: IGrid = 4;
  const GridZoomAlong: IGrid = 6;
  const GridZoomBlong: IGrid = 6;

  let GridHolderA: IGrid = 7;
  let GridHolderB: IGrid = 5;

  let GridxA: IGrid = 7;
  let GridxB: IGrid = 5;

  let GridyA: IGrid = 7;
  let GridyB: IGrid = 5;

  let wideImageControl: string = "70vw";
  let imageReal: string = "75vw";

  let borderGrid: string = "11px";
  var WidthHolder: string = "82%";

  var opacitySlidingModalImage = "0";
  var zIndexModalImageSmall = 10;
  var zIndexModalImageZoom = 0;
  var opacityFixedModalImage = "1";

  var slidingImageWidth = "50%";

  if (zoomedModal) {
    if (imageHeightoverflow) {
      opacitySlidingModalImage = "1";
      zIndexModalImageSmall = 0;
      zIndexModalImageZoom = 10;
      opacityFixedModalImage = "0";
    }

    borderGrid = "0px";

    if (wideImage) {
      slidingImageWidth = "66%";
      WidthHolder = "76%";
      wideImageControl = wideImageControlTrue;
      GridxA = GridZoomAwide;
      GridxB = GridZoomBwide;
    } else {
      slidingImageWidth = "50%";
      WidthHolder = "88%";
      wideImageControl = wideImageControlfalse;
      GridxA = GridZoomAlong;
      GridxB = GridZoomBlong;
    }
    imageReal = zoomImageControl;
    GridHolderA = GridxA;
    GridHolderB = GridxB;
  } else {
    WidthHolder = "82%";
    borderGrid = "11px";

    if (wideImage) {
      wideImageControl = wideImageControlTrue;
      GridyA = GridMiniAwide;
      GridyB = GridMiniBwide;
    } else {
      wideImageControl = wideImageControlfalse;
      GridyA = GridMiniAlong;
      GridyB = GridMiniBlong;
    }
    imageReal = wideImageControl;
    GridHolderA = GridyA;
    GridHolderB = GridyB;
  }
  ///
  ///
  ///
  /// DYNAMIC MODAL LAYOUT VARIABLES

  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <LoaderPost RandomColor={RandomColor} autoSlideDisplay={autoSlideDisplay} sliderLoader={sliderLoader} />

      {aboutTemp ? (
        showModalForm ? (
          <ModalAboutLayout
            BioUser={BioUser}
            Aboutid={IdReactRouterAsInt}
            Bio={Bio}
            setcheckIfColorChanged={setcheckIfColorChanged}
            showModalForm={showModalForm}
            profilex={profilex}
            DiscussionImage={DiscussionImage}
            slidingImageWidth={slidingImageWidth}
            opacitySlidingModalImage={opacitySlidingModalImage}
            zIndexModalImageZoom={zIndexModalImageZoom}
            ModalBackgroundRef={ModalBackgroundRef}
            onBackgroundFocus={onBackgroundFocus}
            modalanimation={modalanimation}
            modalanimationTwo={modalanimationTwo}
            ModalSlidingImageRef={ModalSlidingImageRef}
            zoomlogmodal={zoomlogmodal}
            onimageload={onimageload}
            borderGrid={borderGrid}
            imageReal={imageReal}
            GridHolderA={GridHolderA}
            zIndexModalImageSmall={zIndexModalImageSmall}
            zoomedModal={zoomedModal}
            setZoomedModal={setZoomedModal}
            opacityFixedModalImage={opacityFixedModalImage}
            formtype={formtype}
            GridHolderB={GridHolderB}
            WidthHolder={WidthHolder}
            checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
            setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
            imagescrollRef={imagescrollRef}
            clickMobileZoom={clickMobileZoom}
            mobileImageOnLoad={mobileImageOnLoad}
            mobileLogmodalanimation={mobileLogmodalanimation}
            mobileZoom={mobileZoom}
            setMobileZoom={setMobileZoom}
            slide={slide}
            contentScrollRef={contentScrollRef}
            showimage={imageReducer}
          />
        ) : null
      ) : commentTemp ? (
        <>
          <Grid
            container
            style={{
              position: "absolute",
              top: "0em",
              transition: "opacity 1.5s",
              display: "flex",
              padding: "0px",
            }}
          >
            <DiscussionFeedBack
              Feedbackshow={Feedbackshow}
              setFeedbackshow={setFeedbackshow}
              FeedBackData={FeedBackData}
              CommentTimer={CommentTimer}
            />
          </Grid>

          <ModalCommentLayout

            PostOwner={PostOwner}
            CommentPostAll={CommentPostAll}

            reactionTemplateGo={reactionTemplateGo}
            commentTemp={commentTemp}
            connectTemplateGox={connectTemplateGox}


            DiscussionImage={DiscussionImage}
            profileDataHold={profileDataHold}
            keypost={keypost}
            setshowComAddBack={setshowComAddBack}
            showComAddBack={showComAddBack}
            setcommentHistoryScroll={setcommentHistoryScroll}
            setCommentHistoryData={setCommentHistoryData}
            commentHistoryScroll={commentHistoryScroll}
            CommentHistoryData={CommentHistoryData}
            postData={postData}
            scrollLocation={scrollLocation}
            typeEmo={typeEmo}
            connectTemplateGo={connectTemplateGo}

            containerHeight={containerHeight}
            CommentPostid={IdReactRouterAsInt}
            CommentTimer={CommentTimer}
            setFeedbackshow={setFeedbackshow}
            setFeedBackData={setFeedBackData}
            wideImage={wideImage}
            MiniLayoutOverFlow={MiniLayoutOverFlow}
            ModalImageRef={ModalImageRef}
            onimageloadx={onimageloadx}

            setcheckIfColorChanged={setcheckIfColorChanged}
            showModalForm={showModalForm}
            profilex={profilex}
            slidingImageWidth={slidingImageWidth}
            opacitySlidingModalImage={opacitySlidingModalImage}
            zIndexModalImageZoom={zIndexModalImageZoom}
            ModalBackgroundRef={ModalBackgroundRef}
            onBackgroundFocus={onBackgroundFocus}
            modalanimation={modalanimation}
            modalanimationTwo={modalanimationTwo}
            ModalSlidingImageRef={ModalSlidingImageRef}
            zoomlogmodal={zoomlogmodal}
            onimageload={onimageload}
            borderGrid={borderGrid}
            imageReal={imageReal}
            GridHolderA={GridHolderA}
            zIndexModalImageSmall={zIndexModalImageSmall}
            zoomedModal={zoomedModal}
            setZoomedModal={setZoomedModal}

            opacityFixedModalImage={opacityFixedModalImage}
            formtype={formtype}
            GridHolderB={GridHolderB}
            WidthHolder={WidthHolder}
            checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
            setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
            imagescrollRef={imagescrollRef}
            clickMobileZoom={clickMobileZoom}
            mobileImageOnLoad={mobileImageOnLoad}
            mobileLogmodalanimation={mobileLogmodalanimation}
            mobileZoom={mobileZoom}
            setMobileZoom={setMobileZoom}
            slide={slide}
            contentScrollRef={contentScrollRef}
            showimage={DiscussionImage[0]}
            imageHeightoverflow={imageHeightoverflow}
          />

        </>
      ) : showModalForm ? (
        <ModalLogLayout
          slidingImageWidth={slidingImageWidth}
          opacitySlidingModalImage={opacitySlidingModalImage}
          zIndexModalImageZoom={zIndexModalImageZoom}
          ModalBackgroundRef={ModalBackgroundRef}
          onBackgroundFocus={onBackgroundFocus}
          modalanimation={modalanimation}
          modalanimationTwo={modalanimationTwo}
          ModalSlidingImageRef={ModalSlidingImageRef}
          zoomlogmodal={zoomlogmodal}
          onimageload={onimageload}
          borderGrid={borderGrid}
          imageReal={imageReal}
          GridHolderA={GridHolderA}
          zIndexModalImageSmall={zIndexModalImageSmall}
          zoomedModal={zoomedModal}
          showlogo={showlogo}
          opacityFixedModalImage={opacityFixedModalImage}
          formtype={formtype}
          GridHolderB={GridHolderB}
          WidthHolder={WidthHolder}
          checkSignupPasswordACTIVATE={checkSignupPasswordACTIVATE}
          setcheckSignupPasswordACTIVATE={setcheckSignupPasswordACTIVATE}
          imagescrollRef={imagescrollRef}
          clickMobileZoom={clickMobileZoom}
          mobileImageOnLoad={mobileImageOnLoad}
          mobileLogmodalanimation={mobileLogmodalanimation}
          mobileZoom={mobileZoom}
          slide={slide}
          contentScrollRef={contentScrollRef}
          showimage={showimage}
        />
      ) : null}
    </>
  );
}

export const CommentTemplate = React.memo(CommentTemplatex);
