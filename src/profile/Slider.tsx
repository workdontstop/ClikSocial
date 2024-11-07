import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Arrow } from "./Arrow";
import { Dots } from "./Dots";
import { SliderNumber } from "./SliderNumber";
import { Grid, Button } from "@material-ui/core";
import { animated, useTransition } from "react-spring";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { useParams } from 'react-router-dom';

import Axios from "axios";
import { UpdateInteract, MuteAction, MuteIndexAudio } from ".././GlobalActions";
import { Tutorial } from "../Tutorial";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { InView, useInView } from "react-intersection-observer";

import VideoComponent from "./VideoComponent";
import { PostExplain } from "./PostExplain";

import { decodeBase64, encodeBase64 } from './utils';

function Sliderx({
  slides,
  slidesThumb,
  pey,
  addPostItemsRef,
  itemheight,
  onPostsItemClicked,
  onPostsItemload,
  post,
  itemFinalPostHeight,
  itemOriginalPostHeight,
  itemcroptype,
  itemCLICKED,
  setActiveAutoPlay,
  AUTOSlideLongImages,
  clickslider,
  stopSlider,
  SliderAutoPlay,
  showSliderLoader,
  setshowSliderLoader,
  autoPlayTimer,
  sliderIndex,
  setSliderIndex,
  sliderIndexSlow,
  setSliderIndexSlow,
  length,
  startSlider,
  ActiveAutoPlay,
  type,
  setminiProfile,
  miniProfile,
  setzoomClickedIndex,
  setsliderIndexMini,
  postDatainnerInteraction1,
  postDatainnerInteraction2,
  postItemsRef,
  ActiveCanvas,
  setActiveCanvas,
  checkifClicked,
  postDivRef,
  paperPostScrollRef,
  AllowAllHdImagesShow,
  audioPlayerRef,
  ActiveAutoPost,
  setActiveAutoPost,
  InitializingAutoPlayIndex,
  setshowSliderLoaderxx,
  currentClicked,
  setmuteaudioState,
  setinteractContent,
  interactContent,
  dateint,
  dateint2,
  setShowPad,
  setStopShowPad,
  setShowAudioIcon,
  setShowEmoIcon,
  setlatestInview,
  setShowReactionsIcon,
  ClickAudio,

  ShowPost,
  setShowPost,

  setPlayAudio,
  minimise,
  setminimise,

  RandomColor,

  setScrollIndexPusher,
  setStopRouterScroll,
  StopRouterScroll,

  setminimiseSpecificScroll,
  divBox,
  Maximisefromcanvas,
  setMaximisefromcanvas,
  setinV,
  setHideAudioicon,
  HideAudioicon,
  playXAudio,
  setplayXAudio,
  audionotify,
  setaudionotify,

  allowInitialexplainIt,

  showMonoPc,

  imageActive,
  setImageActive,
  PlayClik,

  setExtendBill,
  setFeedType,

  ExtendBill,
  HoldFeedType,
  setEin,
  setstartshow,

  pic,
  sethidezoomMono



}: any): JSX.Element {
  const [sliderDuration] = useState(1500);

  const aRef: any = useRef(null);

  const dispatch = useDispatch();

  var allow4dev = "";

  const limitpostinfoshow1 = 1800;
  const limitpostinfoshow2 = 3000;



  const [hidePrev, sethidePrev] = useState(true);


  const [showSpinx, setshowSpinx] = useState(false);


  const postImageRef = useRef<HTMLImageElement>(null);


  const [Unload, setUnload] = useState(false);

  const InteractTimerxxhyx = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const InteractTimerxxhyx2 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhyl = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhyll = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhya = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhyax = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhy = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxhx = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const InteractTimerxxh = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );



  const picanonymous: any = useRef(null);
  const canvasRefIn: any = useRef(null);
  const DummyCanvas4ToDataURL: any = useRef(null);



  const [VideoUrl, setVideoUrl] = useState('');


  useEffect(() => {


    startInteraction();

    if (minimise) {

      var marginLeft = 0;
      var containerHeight = 0;

      if (pic.current) {
        if (divBox.current) {
          const previewFileReadimage: any = new Image();
          previewFileReadimage.crossOrigin = "anonymous";
          previewFileReadimage.src = pic.current.src;
          previewFileReadimage.onload = () => {
            const naturalWidth = previewFileReadimage.naturalWidth;
            const naturalHeight = previewFileReadimage.naturalHeight;

            if (divBox.current) {
              containerHeight = divBox.current.clientHeight * DivBoxMultiple;
            }
            const aspectRatio = naturalWidth / naturalHeight;
            const newWidth = containerHeight * aspectRatio;

            if (divBox.current) {
              marginLeft = (divBox.current.clientWidth - newWidth) / 2;
            }


            if (divBox.current) {
              if (divBox.current.clientHeight && divBox.current.clientWidth) {
                setcanvasBorderH(divBox.current.clientHeight * DivBoxMultiple);
                setcanvasBorderW(divBox.current.clientWidth);
              }
            }


            if (InteractTimerxxhx.current) {
              clearTimeout(InteractTimerxxhx.current);
            }
            InteractTimerxxhx.current = setTimeout(() => {
              if (previewFileReadimage.naturalWidth > previewFileReadimage.naturalHeight) {
                setMarginLeftCanvas(marginLeft);
              } else { setMarginLeftCanvas(0); }

              if (divBox.current) {
                if (divBox.current.clientHeight && divBox.current.clientWidth) {
                  setcanvasBorderH(divBox.current.clientHeight * DivBoxMultiple);
                  setcanvasBorderW(divBox.current.clientWidth);
                }
              }

            }, 500)
          }
        }
      }

    } else {

      setcanvasBorderH('auto');
      setcanvasBorderW('auto');
    }


    //setActiveCanvas(-1);

    ///stopinviewCanvas(1);


    if (StopRouterScroll === 0) { }

    else {

      setStopRouterScroll(2);
    }


    //startInteraction();

    setUnload(true);

    if (InteractTimerxxh.current) {
      clearTimeout(InteractTimerxxh.current);
    }
    InteractTimerxxh.current = setTimeout(() => {
      setUnload(false);

      // startinviewCanvas(1);
    }, 50)



  }, [minimise])


  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      muteaudio: boolean,
      ActiveAudioIndex: number
    };
  }



  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, snapStart, muteaudio, ActiveAudioIndex } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const snapStartReducer = snapStart;

  const muteaudioReducer = muteaudio;

  const ActiveAudioIndexReducer = ActiveAudioIndex;

  const videoPlayerReff = useRef<HTMLVideoElementWithCapture>(null);



  const [xl, setxl] = useState(false);



  const [interacttypeAll, setinteracttypeAll] = useState(0);

  const [interact, setinteract] = useState(false);


  const [showSpin, setshowSpin] = useState(false);

  const [Interactionloaded, setInteractionloaded] = useState(false);

  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT } = process.env;

  const bucketName = 'clikbatebucket';  // Replace with your bucket name if environment variable is not available
  const bucketRegion = 'us-east-1';




  /////
  ///////
  /////////////
  var transform = "";
  var font1 = "";
  var font2 = "";
  var paddingbutU = "";

  var width = " ";
  var sizex: "small" | "medium" | undefined = undefined;
  ///
  ///
  ///
  if (matchPc) {
    sizex = "medium";
    width = "33%";
    transform = "scale(1)";
    font1 = "2.7vh";
    font2 = "2.1vh";
    paddingbutU = "70px";
  } else if (matchTablet) {
    sizex = "small";
    width = "62%";
    transform = "scale(1)";
    font1 = "2.6vh";
    font2 = "2vh";
    paddingbutU = "100px";
  } else {
    sizex = "small";
    width = "100%";
    transform = "scale(0.94)";
    font1 = "2.5vh";
    font2 = "1.9vh";
    paddingbutU = "80px";
  }


  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  var buttonFont = "";
  var buttonTransform = " ";
  var pad = "";


  const SUPPORTED_DIMENSIONS = [
    { width: 1024, height: 576 },
    { width: 576, height: 1024 },
    { width: 768, height: 768 },
  ];

  // Function to find the closest dimensions from supported ones
  const findClosestDimensions = (originalWidth: number, originalHeight: number) => {
    return SUPPORTED_DIMENSIONS.reduce((prev, curr) => {
      const prevDiff = Math.abs(prev.width - originalWidth) + Math.abs(prev.height - originalHeight);
      const currDiff = Math.abs(curr.width - originalWidth) + Math.abs(curr.height - originalHeight);
      return currDiff < prevDiff ? curr : prev;
    });
  };

  // Function to convert image to base64 and crop if necessary
  const convertImageToBase64 = async (imageUrl: string) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous'; // Allow cross-origin if needed for S3 images
      img.src = imageUrl;

      img.onload = () => {
        const originalWidth = img.width;
        const originalHeight = img.height;

        // Find the closest supported dimensions
        const closestDimensions = findClosestDimensions(originalWidth, originalHeight);
        const { width: targetWidth, height: targetHeight } = closestDimensions;

        console.log(`Original dimensions: ${originalWidth}x${originalHeight}`);
        console.log(`Target dimensions for cropping: ${targetWidth}x${targetHeight}`);

        // Calculate aspect ratio of the closest target dimensions
        const targetAspectRatio = targetWidth / targetHeight;
        const originalAspectRatio = originalWidth / originalHeight;

        let cropWidth, cropHeight, cropX, cropY;

        // Determine cropping dimensions
        if (originalAspectRatio > targetAspectRatio) {
          // Image is wider than the target aspect ratio, crop the width
          cropHeight = originalHeight;
          cropWidth = cropHeight * targetAspectRatio;
          cropX = (originalWidth - cropWidth) / 2;  // Center horizontally
          cropY = 0;  // No vertical crop
        } else {
          // Image is taller than the target aspect ratio, crop the height
          cropWidth = originalWidth;
          cropHeight = cropWidth / targetAspectRatio;
          cropX = 0;  // No horizontal crop
          cropY = (originalHeight - cropHeight) / 2;  // Center vertically
        }

        console.log(`Cropping with dimensions: ${cropWidth}x${cropHeight}, starting at (${cropX}, ${cropY})`);

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // Crop and draw the image to canvas with target dimensions
          ctx.drawImage(
            img,
            cropX, cropY, cropWidth, cropHeight,  // Source cropping rectangle
            0, 0, targetWidth, targetHeight       // Destination rectangle
          );

          // Convert the canvas content to base64
          const dataUrl = canvas.toDataURL('image/jpeg'); // Convert canvas to base64 as JPEG
          const base64String = dataUrl.split(',')[1];     // Remove the "data:image/jpeg;base64," part
          resolve(base64String);
        }
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  };



  ///
  ///
  ///
  /// GET  SIGNUP BUTTON AND LOGIN BUTTON STYLE FROM REDUX
  const { MozBoxShadowSD, WebkitBoxShadowSD, boxShadowSD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerDark,
    })
  );

  const { MozBoxShadowSL, WebkitBoxShadowSL, boxShadowSL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerLight,
    })
  );

  const { MozBoxShadowLD, WebkitBoxShadowLD, boxShadowLD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerDark,
    })
  );

  const { MozBoxShadowLL, WebkitBoxShadowLL, boxShadowLL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerLight,
    })
  );

  var MozBoxShadowReducerLogin = " ";
  var WebkitBoxShadowReducerLogin = " ";
  var boxShadowReducerLogin = " ";

  var MozBoxShadowReducerSign = " ";
  var WebkitBoxShadowReducerSign = " ";
  var boxShadowReducerSign = " ";

  if (darkmodeReducer) {
    MozBoxShadowReducerLogin = MozBoxShadowLD;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLD;
    boxShadowReducerLogin = boxShadowLD;

    MozBoxShadowReducerSign = MozBoxShadowSD;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSD;
    boxShadowReducerSign = boxShadowSD;
  } else {
    MozBoxShadowReducerLogin = MozBoxShadowLL;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLL;
    boxShadowReducerLogin = boxShadowLL;

    MozBoxShadowReducerSign = MozBoxShadowSL;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSL;
    boxShadowReducerSign = boxShadowSL;
  }





  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: minimise ? 1 : matchMobile ? 0.50 : 0.4,


  });

  const [AutoPostLoader, setAutoPostLoader] = useState(false);

  const showcaptionwaitTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );


  const showcaptionwaitTimer2 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const showcaptionwaitTimer3 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const sTimercc = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sTimerccxx = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sTimerccxxhh = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sTimerccxxtt = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SlideimageRef = useRef<HTMLImageElement>(null);

  const SlideimageRefthumb = useRef<HTMLImageElement>(null);

  const [imageHeight, setImageHeight] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const [ZoomOutBigger, setZoomOutBigger] = useState<boolean>(false);

  const [miniH, setminiH] = useState<number>(50);

  const [InteractedDark, setInteractedDark] = useState(false);

  const [HaltAudio, setHaltAudio] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const DivBoxMultiplex = matchMobile ? 0.87 : 0.945;

  const [DivBoxMultiple, setDivBoxMultiple] = useState(DivBoxMultiplex);



  const InteractTimerxxhyv = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );


  //////REDUCE AUDIO VOLUME
  useEffect(() => {
    if (HaltAudio) {


      if (audioPlayerRef.current) {
        // Set volume to desired level (between 0 and 1)
        audioPlayerRef.current.pause();// Example: setting volume to 50%
        setIsPaused(true);
      }


    } else {

      if (audioPlayerRef.current) {
        if (audioPlayerRef.current.paused) {
          // Set volume to desired level (between 0 and 1)
          audioPlayerRef.current.play(); // Example: setting volume to 50%
          setIsPaused(false);
        }
      }

    }
  }, [HaltAudio, isPaused])



  //////REDUCE AUDIO VOLUME
  ///audioPlayerRef


  useEffect(() => {
    if (itemCLICKED[pey]) {

      if (currentClicked === pey) {


      } else {


        onPostsItemClicked(pey, 1);

      }
    }

  }, [currentClicked, itemCLICKED])



  const [show, setshow] = useState(true);
  const [hidePrevVid, sethidePrevVid] = useState(false);


  const videoRef = useRef<HTMLVideoElement>(null);

  const videoImRef = useRef<HTMLImageElement>(null);

  const playVideo = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.play();
        setshow(true);
      }
    } catch (error) {
      console.error("Video playback failed:", error);
      // Fallback behavior, show some UI to prompt the user, etc.
    }
  };


  useEffect(() => {
    if (videoRef.current && inView) {

      if (InteractTimerxxhyx2.current) {
        clearTimeout(InteractTimerxxhyx2.current);
      }


      InteractTimerxxhyx2.current = setTimeout(() => {

        if (videoRef.current) {

          playVideo();

          //setshow(true);

          sethidePrevVid(false);

          if (InteractTimerxxhyx.current) {
            clearTimeout(InteractTimerxxhyx.current);
          }
          InteractTimerxxhyx.current = setTimeout(() => {
            ///sethidePrevVid(true);
            setxl(false);
          }, 10000)

        }


      }, 500)

    } else {
      setshow(false)
      setplayXAudio(false);
    }



  }, [inView]);


  useEffect(() => {
    if (videoImRef.current && inView) {

      setshow(true);

      sethidePrevVid(false);

      if (InteractTimerxxhyx.current) {
        clearTimeout(InteractTimerxxhyx.current);
      }
      InteractTimerxxhyx.current = setTimeout(() => {
        // sethidePrevVid(true);
        setxl(false);
      }, 14000)

    } else {
      setshow(false)
    }
  }, [inView]);






  const startinview = useCallback(() => {

    if (divBox.current) {



      if (inView) {



        if (ExtendBill) {
          setExtendBill(false);
          setFeedType(HoldFeedType);
        } else { }







        if (InteractTimerxxhya.current) {
          clearTimeout(InteractTimerxxhya.current);
        } InteractTimerxxhya.current = setTimeout(() => {
          setstartshow(true);
        }, 4000)


        sethidezoomMono(false);
        if (InteractTimerxxhyax.current) {
          clearTimeout(InteractTimerxxhyax.current);
        } InteractTimerxxhyax.current = setTimeout(() => {

          sethidezoomMono(true);
        }, 32000)


        if (InteractTimerxxhyl.current) {
          clearTimeout(InteractTimerxxhyl.current);
        }
        InteractTimerxxhyl.current = setTimeout(() => {
          setinV(true);

          if (InteractTimerxxhyll.current) {
            clearTimeout(InteractTimerxxhyll.current);
          } InteractTimerxxhyll.current = setTimeout(() => {
            setEin(3);

          }, 2000)


        }, limitpostinfoshow1)


        if (minimise) {

          if (pic.current) {
            if (divBox.current) {

              const previewFileReadimage: any = new Image();
              previewFileReadimage.crossOrigin = "anonymous";
              previewFileReadimage.src = pic.current.src;
              previewFileReadimage.onload = () => {
                const naturalWidth = previewFileReadimage.naturalWidth;
                const naturalHeight = previewFileReadimage.naturalHeight;

                var containerHeight = 0;

                if (divBox.current) {
                  containerHeight = divBox.current.clientHeight * DivBoxMultiple;

                } else {
                  containerHeight = 0;
                }

                const aspectRatio = naturalWidth / naturalHeight;
                const newWidth = containerHeight * aspectRatio;
                if (divBox.current) {
                  var marginLeft = (divBox.current.clientWidth - newWidth) / 2;
                }


                if (InteractTimerxxhy.current) {
                  clearTimeout(InteractTimerxxhy.current);
                }
                InteractTimerxxhy.current = setTimeout(() => {

                  if (previewFileReadimage) {
                    if (previewFileReadimage.naturalWidth > previewFileReadimage.naturalHeight) {
                      setMarginLeftCanvas(marginLeft);
                    } else { setMarginLeftCanvas(0); }
                  }


                  if (divBox.current) {
                    if (divBox.current.clientHeight && divBox.current.clientWidth) {
                      setcanvasBorderH(divBox.current.clientHeight * DivBoxMultiple);
                      setcanvasBorderW(divBox.current.clientWidth);
                    }
                  }
                }, 1000);

              }
            }
          }
        } else {




          setcanvasBorderH('auto');
          setcanvasBorderW('auto');
        }






        setlatestInview(pey);

        setShowPad(true);


        ///setShowAudioIcon(true);
        //setShowReactionsIcon(true);
        //setShowEmoIcon(true);


        if (sTimerccxxtt.current) {
          clearTimeout(sTimerccxxtt.current);
        }
        sTimerccxxtt.current = setTimeout(() => {
          //setShowReactionsIcon(false);

        }, 7000)



        if (sTimerccxxhh.current) {
          clearTimeout(sTimerccxxhh.current);
        }
        sTimerccxxhh.current = setTimeout(() => {
          /// setmaximiseFirst(false);
          ///setShowAudioIcon(false);
          //setShowEmoIcon(false);
        }, 4000)


        if (interactContent && interact && ActiveCanvas === pey) {

        } else {


          if (sTimerccxx.current) {
            clearTimeout(sTimerccxx.current);
          }

          if (sTimercc.current) {
            clearTimeout(sTimercc.current);
          }
          ///calls active post key without clicking on post
          setActiveCanvas(pey);
          InitializingAutoPlayIndex(pey);
          ///calls active post key without clicking on post

          if (minimise) { }

          else {

          }

          startInteraction();

        }




      } else {

        sethidezoomMono(true);

        setstartshow(false);

        if (InteractTimerxxhyl.current) {
          clearTimeout(InteractTimerxxhyl.current);
        }

        setinV(false);


        setPlayAudio(false);

        setShowPost(false);

        /// setmaximiseFirst(false);

        //setShowAudioIcon(true);
        ///setShowReactionsIcon(true);
        setShowPad(false);

        dispatch(MuteIndexAudio(1000));

        setActiveCanvas(-1);
        stopInteraction();




      }


    }
  }, [inView, ActiveAutoPost, ActiveCanvas, pey, itemCLICKED, showSpin, matchMobile, matchPc, itemcroptype,
    interactContent, interact, minimise, pic, divBox]);





  useEffect(() => {


    if (showcaptionwaitTimer.current) {
      clearTimeout(showcaptionwaitTimer.current);
    }



    if (inView) {






      if (showcaptionwaitTimer2.current) {
        clearTimeout(showcaptionwaitTimer2.current);
      }

      if (showcaptionwaitTimer3.current) {
        clearTimeout(showcaptionwaitTimer3.current);
      }



      showcaptionwaitTimer3.current = setTimeout(function () {
        sethidePrev(false);
      }, limitpostinfoshow2);

      showcaptionwaitTimer2.current = setTimeout(function () {
        sethidePrev(true);
      }, 15000);

    } else {

      sethidePrev(true);
    }



  }, [inView]);




  useEffect(() => {

    ///setShowReactionsIcon(true);

    if (sTimerccxx.current) {
      clearTimeout(sTimerccxx.current);
    }

    if (showcaptionwaitTimer.current) {
      clearTimeout(showcaptionwaitTimer.current);
    }


    if (inView) {

      setShowPost(true);
      ///setmaximiseFirst(true);
    }


    showcaptionwaitTimer.current = setTimeout(function () {


      startinview();


    }, 1500)
  }, [inView]);
  /// const getWidth = () => window.innerWidth;
  ///var newGetWidth = getWidth() * slides.length;



  const InteractTimerxx = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const waitChangeIndexTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleTouchMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const tt = useRef<ReturnType<typeof setInterval> | null>(
    null
  );


  const callAutoPlayAgainTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  interface HTMLVideoElementWithCapture extends HTMLVideoElement {
    captureStream(): MediaStream;
  }










  ///
  ///
  ///
  ///
  interface RootStateActiveAutoPlayReducer {
    ActiveAutoPlayReducer: {
      ActiveId: number;
    };
  }
  const { ActiveId } = useSelector((state: RootStateActiveAutoPlayReducer) => ({
    ...state.ActiveAutoPlayReducer,
  }));

  const ActiveIdReducer = ActiveId;


  const wa = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );


  const wa22 = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );



  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE





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

  var colorx =
    colortypeReducer === 0
      ? darkmodeReducer
        ? colorReducerdark
        : colorReducer
      : colorReducer;

  useEffect(() => {
    if (ActiveAutoPlay[pey]) {
      setTimeout(function () {
        stopSlider(0);
      }, 1500);
    }
  }, [ActiveAutoPlay[pey]]);

  var autoSlideDisplay = "none";
  var sliderLoader = "";

  if (showSliderLoader) {
    autoSlideDisplay = "none";
    sliderLoader = "";
  } else {
    autoSlideDisplay = "block";
    sliderLoader = "superloaderAutoSlider";
  }



  const [canvasHide, setcanvasHide] = useState(false);


  useEffect(() => {

    setcanvasHide(true);


    if (InteractTimerxxhyv.current) {
      clearTimeout(InteractTimerxxhyv.current);
    }
    InteractTimerxxhyv.current = setTimeout(() => {

      setcanvasHide(false);



    }, 2000)


  }, [minimise])



  const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);










  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX
  const transitions = useTransition(sliderIndex, {
    key: sliderIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: sliderDuration - 50 },
  });

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM IMAGE
  const sliderFirstImageOnLoad = (item: number) => {
    if (item === 0) {
      if (SlideimageRef.current && SlideimageRef.current.clientHeight) {
        setImageHeight(SlideimageRef.current.clientHeight);
      }
    }
  };

  ///
  ///
  ///
  /// PROVIDES DYNAMIC HEIGHT FOR SLIDER CONTENT FROM THUMBS IF IMAGE DOES NOT LOAD
  const sliderFirstImageOnLoadthumb = (item: number) => {
    if (item === 0 && imageHeight === 0) {
      if (
        SlideimageRefthumb.current &&
        SlideimageRefthumb.current.clientHeight
      ) {
        setImageHeight(SlideimageRefthumb.current.clientHeight);
      }
    }
  };

  //item1
  const tiim = useRef<ReturnType<typeof setTimeout> | null>(null);
  const TouchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const TouchTimer22 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [Touched, setTouched] = useState(0);

  const [cropInitialIn, setcropInitialIn] = useState([
    { x: post.interact1ax, y: post.interact1ay },
    { x: post.interact2ax, y: post.interact2ay },
    { x: post.interact3ax, y: post.interact3ay },
  ]);


  const [cropInitialIn2, setcropInitialIn2] = useState([
    { x: post.interact1bx, y: post.interact1by },
    { x: post.interact2bx, y: post.interact2by },
    { x: post.interact3bx, y: post.interact3by },
  ]);

  const [showIntImage, setshowIntImage] = useState(false);

  const [HasInteractivity, setHasInteractivity] = useState(false);


  const [isLoaded, setIsLoaded] = useState(false);

  const [audioplaying, setaudioplaying] = useState(false);







  /////////////////////////////////////////////////////////////////////////////////////////////////







  ///////////////////////////////////////////////////////////

  const [startInteractivity, setstartInteractivity] = useState(true);

  const containsURL = (str: any) => {
    // Regular expression pattern to match URLs (simplified, not covering all cases)
    const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;

    // Test if the string contains a URL using the regular expression
    return urlPattern.test(str);
  };

  const [PreviewVid, setPreviewVid] = useState('');

  const [postty, setPostty] = useState(0);



  useEffect(() => {


    if (post.interact1b) {
      /// post.interact2a

      setHasInteractivity(true);
      const randomValue = Math.random() < 0.5 ? 1 : 2;

      if (randomValue === 1) {
        setPreviewVid(post.interact1a);
        setPostty(post.interacttype1);
      } else {
        setPreviewVid(post.interact1b);
        setPostty(post.interacttype2);
      }



    } else if (post.interact1a) {


      setHasInteractivity(true);
      setPreviewVid(post.interact1a);
      setPostty(post.interacttype1);


    } else {
      setHasInteractivity(false);
      ///setPreviewVid('');
    }


  }, [postDatainnerInteraction1, postDatainnerInteraction2, post]);


  const [data, setdata] = useState(null);
  const [canvasInteractWidth, setcanvasInteractWidth] = useState(0);
  const [canvasInteractheight, setcanvasInteractheight] = useState(0);


  const [imageWidthcss, setimageWidthcss] = useState<number | 'auto'>(0);
  const [imageHeightcss, setimageHeightcss] = useState<number | 'auto'>(0);


  const [MarginLeftCanvas, setMarginLeftCanvas] = useState<number>(0);


  const [canvasBorderH, setcanvasBorderH] = useState<number | 'auto'>(0);
  const [canvasBorderW, setcanvasBorderW] = useState<number | 'auto'>(0);


  const handleTouchStartIn = useCallback(
    (event: any, type: any) => {

      if (itemCLICKED[pey]) {
        if (data) {
          drawInteraction(0, event, 1);
        }
      } else {

        clickslider(event);
      }

    },
    [data, itemCLICKED[pey]]
  );


  const ScaleCoOrdinates = useCallback(
    (event, type) => {
      if (canvasRefIn.current) {
        const rect = canvasRefIn.current.getBoundingClientRect();
        const scaleX = canvasRefIn.current.width / rect.width;
        const scaleY = canvasRefIn.current.height / rect.height;

        let x, y;

        if (matchMobile) {
          // Handle touch events
          if (event && event.touches && event.touches.length > 0) {


            x = (event.touches[0].clientX - rect.left) * scaleX;
            y = (event.touches[0].clientY - rect.top) * scaleY;

            // Now you can use x and y in your code
          }
        } else {
          // Handle mouse events
          x = (event.clientX - rect.left) * scaleX;
          y = (event.clientY - rect.top) * scaleY;
        }

        return { x, y };
      } else {
        return {
          x: 0,
          y: 0,
        };
      }
    },
    [matchMobile]
  );



  const [interactHeightResolution, setinteractHeightResolution] = useState(window.innerHeight * 0.1);

  useEffect(() => {
    if (matchPc) {
      if (minimise) {
        setinteractHeightResolution(window.innerHeight * 0.74);
      }
      else {
        setinteractHeightResolution(window.innerHeight * 1.5);
      }
    }
  }, [matchPc, minimise])


  useEffect(() => {

    if (matchMobile) {
      if (minimise) {
        setinteractHeightResolution(window.innerHeight * 0.44);
      }
      else {
        setinteractHeightResolution(window.innerHeight * 0.9);
      }
    }

  }, [matchMobile, minimise])


  const callInteract = useCallback(() => {

    if (!canvasRefIn.current) return;

    const context = canvasRefIn.current.getContext("2d");
    context.clearRect(
      0,
      0,
      canvasRefIn.current.width,
      canvasRefIn.current.height
    );

    const previewFileReadimage: any = new Image();
    previewFileReadimage.crossOrigin = "anonymous";
    previewFileReadimage.src = pic.current.src;


    previewFileReadimage.onload = () => {
      if (showSpinx) { setshowSpinx(false); }
      const ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;
      const width = interactHeightResolution / ratio;
      const ratiox =
        previewFileReadimage.naturalWidth / previewFileReadimage.naturalHeight;
      const hei = window.innerHeight / ratiox;

      if (previewFileReadimage) {
        setcanvasInteractWidth(width);
        setcanvasInteractheight(hei);
      }


      if (minimise && divBox.current) {

        if (divBox.current) {
          if (divBox.current.clientHeight && divBox.current.clientWidth) {
            setcanvasBorderH(divBox.current.clientHeight * DivBoxMultiple);
            setcanvasBorderW(divBox.current.clientWidth);
          }
        }

        if (pic.current) {
          const newHeight = (previewFileReadimage.naturalHeight * pic.current.clientWidth) / previewFileReadimage.naturalWidth;


          if (previewFileReadimage.naturalWidth > previewFileReadimage.naturalHeight) {

            const naturalWidth = previewFileReadimage.naturalWidth;
            const naturalHeight = previewFileReadimage.naturalHeight;
            const containerHeight = divBox.current.clientHeight * DivBoxMultiple;
            const aspectRatio = naturalWidth / naturalHeight;
            const newWidth = containerHeight * aspectRatio;


            const marginLeft = (divBox.current.clientWidth - newWidth) / 2;
            setMarginLeftCanvas(marginLeft);

            setimageWidthcss(newWidth);
            setimageHeightcss(divBox.current.clientHeight * DivBoxMultiple);

          } else {

            setMarginLeftCanvas(0);

            setimageWidthcss(pic.current.clientWidth);
            setimageHeightcss(newHeight);

          }

        }


      } else {


        setMarginLeftCanvas(0);


        setcanvasBorderH('auto');
        setcanvasBorderW('auto');

        if (pic.current) {
          const newHeight = (previewFileReadimage.naturalHeight * pic.current.clientWidth) / previewFileReadimage.naturalWidth;


          setimageWidthcss(pic.current.clientWidth);
          setimageHeightcss(newHeight);
        }
      }



      if (data !== previewFileReadimage) {
        setdata(previewFileReadimage);

      }




    };
  }, [slides, sliderIndex, postItemsRef, postDivRef, pic, interactHeightResolution, minimise]);

  const acttii = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [InteractClicked, setInteractClicked] = useState(false);

  const [AllowCallCanvas, setAllowCallCanvas] = useState(false);




  useLayoutEffect(() => {
    if (data) {
      drawInteraction(0, 0, 0);
    }
  }, [data]);

  const [Tutorialx, setTutorialx] = useState(false);


  const stopInteraction = () => {




    if (tiim.current) {
      clearTimeout(tiim.current);
    }


    setHaltAudio(true);

    const newArrlll = [...ActiveAutoPost];
    newArrlll[pey] = 0;
    setActiveAutoPost(newArrlll);

    setAutoPostLoader(false);

    setAllowCallCanvas(false);
    setshowSpinx(false);
    setinteract(false);
    setinteractContent("");
    setStopShowPad(false);
    setinteracttypeAll(0);
    setfadeout(false);

  }

  const startInteraction = useCallback(() => {



    if (sTimercc.current) {
      clearTimeout(sTimercc.current);
    }

    stopInteraction();

    setHaltAudio(false);

    const newArrlll = [...ActiveAutoPost];
    newArrlll[pey] = pey + 1;
    setActiveAutoPost(newArrlll);

    setAutoPostLoader(true);


    ////alert('kk');
    if (HasInteractivity) {
      setshowSliderLoaderxx(true);
      setshowSliderLoader(false);


      if (showIntImage) {
      } else {
        ////load interact image
        setshowIntImage(true);
      }
      setshowSpinx(true);
      setTimeout(() => {
        setInteractClicked(true);

        if (AllowAllHdImagesShow) {
          setAllowCallCanvas(true);
        }
      }, 500);
    }
    ////check for interaction and display canvas image flip
  }, [itemCLICKED[pey], HasInteractivity, showIntImage, postDivRef, AllowAllHdImagesShow])






  useLayoutEffect(() => {
    if (sTimercc.current) {
      clearTimeout(sTimercc.current);
    }

    if (itemCLICKED[pey]) {





      startInteraction();

      setmuteaudioState(true);

      setTimeout(() => {
        setmuteaudioState(false);
      }, 6200);

    } else {


      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      setmuteaudioState(false);

      setInteractionloaded(false);


      if (sTimercc.current) {
        clearTimeout(sTimercc.current);
      }

      stopInteraction();
      ///setTutorial(false);
    }
  }, [itemCLICKED[pey], HasInteractivity, showIntImage, postDivRef, AllowAllHdImagesShow]);




  const [bigPixel1, setbigPixel1] = useState(false);

  const [bigPixel2, setbigPixel2] = useState(false);








  useEffect(() => {
    if (AllowCallCanvas) {
      callInteract();
    }

  }, [AllowCallCanvas]);






  const tti = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interacttime = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interacttimex = useRef<ReturnType<typeof setTimeout> | null>(null);

  const interacttime2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bh = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fadeout, setfadeout] = useState(false);

  const [pause, setpause] = useState(false);


  // State to store the video duration
  const [ImageDuration, setImageDuration] = useState(10000);





  useEffect(() => {

    ///setImageDuration(10000);
    if (ActiveCanvas === pey) {

    } else { setshowSpinx(false) }


  }, [ActiveCanvas])



  const closeItemClick = useCallback(() => {

    /////alert('kkhhh');



  }, [itemCLICKED[pey], matchMobile])


  const IntClose = useCallback(() => {


    if (interacttime.current) {
      clearTimeout(interacttime.current);
    }


    if (interact) {

      setpause(false);

      ///setHideCann(true);

      var d = ImageDuration;


      //video duration
      if (interacttypeAll === 1) {

        d = 50000;
      } else { }
      //video duration


      if (interacttime.current) {
        clearTimeout(interacttime.current);
      }
      if (interacttime2.current) {
        clearTimeout(interacttime2.current);
      }


      interacttime.current = setTimeout(() => {
        setfadeout(true);
        /// closeItemClick();


        if (interacttime2.current) {
          clearTimeout(interacttime2.current);
        }
        //alert('kk');



        interacttime2.current = setTimeout(() => {

          if (interacttypeAll === 1) {


            if (post.backgroudaudio === 1) {
              setHaltAudio(false);
            }
          }

          ///alert('jj');
          ///  dispatch(UpdateInteract('', false));
          setshowSpin(false);

          setHideCann(false);
          setshowSpinx(false);
          if (sc.current) {
            clearTimeout(sc.current);
          }
          setinteract(false);
          setinteractContent("");
          setStopShowPad(false);
          setinteracttypeAll(0);
          setfadeout(false);


        }, 1800);
      }, d);
    } else {

      setTimeout(() => {
        setHideCann(false);
        setInteractionloaded(false);
        setshowSpin(false);
        setshowSpinx(false);
      }, 2000);

    }
  }, [interact, videoPlayerReff, ImageDuration, interacttypeAll]);

  useEffect(() => {

    if (interact) {



      //alert(d);

      IntClose();

    }



  }, [interact, interacttypeAll]);

  const [HideCann, setHideCann] = useState(false);

  const sc = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spin = useCallback((d: any) => {
    setshowSpin(true);

    setInteractionloaded(true);

    if (sc.current) {
      clearTimeout(sc.current);
    }
    sc.current = setTimeout(() => {
      setInteractionloaded(false);
      setshowSpin(false);
      setshowSpinx(false);
      setHideCann(false);
    }, d);
  }, [interact, videoPlayerReff, ImageDuration]);


  // Bilinear interpolation function
  function interpolate(imageData: any, x: any, y: any) {
    var x_floor = Math.floor(x);
    var y_floor = Math.floor(y);

    // Ensure bounds are within the source image
    x_floor = Math.max(0, Math.min(imageData.width - 2, x_floor));
    y_floor = Math.max(0, Math.min(imageData.height - 2, y_floor));

    var x_frac = x - x_floor;
    var y_frac = y - y_floor;

    var p1 = getPixel(imageData, x_floor, y_floor);
    var p2 = getPixel(imageData, x_floor + 1, y_floor);
    var p3 = getPixel(imageData, x_floor, y_floor + 1);
    var p4 = getPixel(imageData, x_floor + 1, y_floor + 1);

    var topInterpolation = interpolatePixelValues(p1, p2, x_frac);
    var bottomInterpolation = interpolatePixelValues(p3, p4, x_frac);

    return interpolatePixelValues(topInterpolation, bottomInterpolation, y_frac);
  }



  // Helper function to get a pixel from image data
  function getPixel(imageData: any, x: any, y: any) {
    var index = (y * imageData.width + x) * 4;
    return [
      imageData.data[index],
      imageData.data[index + 1],
      imageData.data[index + 2],
      imageData.data[index + 3]
    ];
  }

  // Helper function to interpolate between pixel values
  function interpolatePixelValues(p1: any, p2: any, t: any) {
    return [
      (1 - t) * p1[0] + t * p2[0],
      (1 - t) * p1[1] + t * p2[1],
      (1 - t) * p1[2] + t * p2[2],
      (1 - t) * p1[3] + t * p2[3]
    ];
  }


  const [calledInteraction, setcalledInteraction] = useState(false);






  const CallInteractStart2 = useCallback(() => {




    if (itemCLICKED[pey]) {

      sethidePrevVid(true);
      setxl(false);

      dispatch(MuteIndexAudio(pey));
      if (audioPlayerRef.current) { audioPlayerRef.current.volume = 1; }


      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      if (post.backgroudaudio === 1 && post.interacttype2 === 1) {
        setHaltAudio(true);
      } else {

        if (post.interacttype2 === 1 && isAppleDevice) {
          setHaltAudio(true);
          setTimeout(() => {
            setHaltAudio(false);
          }, 1800)
        }
      }



      /// alert(`xx: ${xx}, xnew: ${xnew}`);

      /// dispatch(UpdateInteract(post.interact1b, true));
      ///stop interaction first 
      setInteractedDark(false);
      setinteract(false);
      setinteractContent("");

      setinteracttypeAll(0);
      setfadeout(false);
      ///stop interaction first 
      spin(10000000000000);
      setinteract(true);

      if (post.interacttype2 === 1 && isAppleDevice) {

        setinteractContent(post.interact1b);
        setStopShowPad(true);
      } else {
        setinteractContent(post.interact1b);
        setStopShowPad(true);
      }

      setinteracttypeAll(post.interacttype2);



    }
  }, [itemCLICKED[pey], post, isAppleDevice])




  const CallInteractStart1 = useCallback(() => {



    if (itemCLICKED[pey]) {

      sethidePrevVid(true);
      setxl(false);


      dispatch(MuteIndexAudio(pey));
      if (audioPlayerRef.current) { audioPlayerRef.current.volume = 1; }
      if (interacttimex.current) {
        clearTimeout(interacttimex.current);
      }

      if (post.backgroudaudio === 1 && post.interacttype1 === 1) {
        setHaltAudio(true);
      } else {

        if (post.interacttype1 === 1 && isAppleDevice) {
          setHaltAudio(true);
          setTimeout(() => {
            setHaltAudio(false);
          }, 1800)
        }
      }



      /// alert(`xx: ${xx}, xnew: ${xnew}`);

      ///stop interaction first 
      setInteractedDark(false);
      setinteract(false);
      setinteractContent("");
      setinteracttypeAll(0);
      setfadeout(false);
      ///stop interaction first 
      spin(10000000000000);
      setinteract(true);

      if (post.interacttype1 === 1 && isAppleDevice) {

        setinteractContent(post.interact1a);
        setStopShowPad(true);
      } else {
        setinteractContent(post.interact1a);
        setStopShowPad(true);
      }
      setinteracttypeAll(post.interacttype1);
    }

  }, [post, isAppleDevice, itemCLICKED[pey]])


  const drawInteraction = useCallback(
    (typex: any, event: any, clicked: number) => {
      const adjustedPos = ScaleCoOrdinates(event, 0);
      const xnew = adjustedPos.x;
      const ynew = adjustedPos.y;

      if (canvasRefIn.current) {
        const context = canvasRefIn.current.getContext("2d");

        canvasRefIn.current.height = interactHeightResolution;
        canvasRefIn.current.width = canvasInteractWidth;

        requestAnimationFrame(() => {
          context.drawImage(
            data,
            0,
            0,
            canvasInteractWidth,
            interactHeightResolution
          );




          var offsety = 0;

          const isEdge = /Edg/i.test(navigator.userAgent);
          const isFirefox = /Firefox/i.test(navigator.userAgent);

          if (isEdge) {
            offsety = -20;
          } else if (isFirefox) {
            offsety = -10;
          } else {
            offsety = 0;
          }

          // Access the total width of the element, including margins and borders

          var screenWidth = 0;

          if (isEdge) {
            screenWidth = window.innerWidth * 1.01;
          } else if (isFirefox) {
            screenWidth = window.innerWidth * 0.98;
          } else {
            screenWidth = window.innerWidth * 0.98;
          }

          var pictureWidth = canvasInteractWidth;
          var offsetX = (screenWidth - pictureWidth) / 2;


          var xx = cropInitialIn[0].x;
          var yy = cropInitialIn[0].y;
          const xxw = cropInitialIn2[0].x;
          const yyw = cropInitialIn2[0].y;




          if (post.rad1 === null) {
            var r1 = 120;
          }
          else {
            // Given values
            const percentageCoverage = post.rad1; // Replace with your actual percentageCoverage
            const canvasWidth = canvasInteractWidth/* your canvas width */;
            // Calculate the radius
            var r1 = (percentageCoverage * canvasWidth) / 200;

          }

          if (post.rad2 === null) {
            var r2 = 120;
          } else {
            const percentageCoveragex = post.rad2; // Replace with your actual percentageCoverage
            const canvasWidthx = canvasInteractWidth/* your canvas width */;
            // Calculate the radius
            var r2 = (percentageCoveragex * canvasWidthx) / 200;
          }








          // Calculate the X-coordinate
          const xCoordinate = (xx / 100) * canvasInteractWidth;
          var x2 = xCoordinate;

          const yCoordinate = (yy / 100) * interactHeightResolution;
          var y2 = yCoordinate;


          const xCoordinatex = (xxw / 100) * canvasInteractWidth;
          var x2b = xCoordinatex;

          const yCoordinatex = (yyw / 100) * interactHeightResolution;
          var y2b = yCoordinatex;






          context.beginPath();
          context.arc(xnew, ynew, 5, 0, Math.PI * 2);
          context.fillStyle = "rgba(250, 250,250,0)";
          context.fill();
          context.closePath();

          var clikarc1 = context.isPointInPath(0, 0);
          var clikarc2 = context.isPointInPath(0, 0);

          if (post.interact1a || post.interact1b) {
            //alert('jj');

            var scaleFactor1 = matchMobile ? 1.08 : 1.05; // You can adjust this value to control the zoom level


            var scaleFactor2 = matchMobile ? 1.08 : 1.05; // You can adjust this value to control the zoom level



            if (post.interact1a) {
              if (typex === 0 || typex === 3) {
                var imageData = context.getImageData(
                  x2 - 1 - r1,
                  y2 - 0.5 - r1,
                  2.1 * r1,
                  2.1 * r1
                ); // (x, y, width, height)

                // Create a larger image data for the zoom effect
                var zoomedImageData = context.createImageData(
                  imageData.width * scaleFactor1,
                  imageData.height * scaleFactor1
                );

                // Copy pixels from the original image data to the larger image data with bilinear interpolation
                for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                    var sourceX = xbb / scaleFactor1;
                    var sourceY = ybb / scaleFactor1;

                    // Get the interpolated pixel value
                    var interpolatedPixel = interpolate(imageData, sourceX, sourceY);

                    // Set the pixel values in the zoomed image data
                    var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                    zoomedImageData.data[destIndex] = interpolatedPixel[0];
                    zoomedImageData.data[destIndex + 1] = interpolatedPixel[1];
                    zoomedImageData.data[destIndex + 2] = interpolatedPixel[2];
                    zoomedImageData.data[destIndex + 3] = interpolatedPixel[3];
                  }
                }

                // Apply a light white border at the borders
                var borderWidth = 0; // Adjust the width of the border
                for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                    if (
                      xbb < borderWidth ||
                      xbb >= zoomedImageData.width - borderWidth ||
                      ybb < borderWidth ||
                      ybb >= zoomedImageData.height - borderWidth
                    ) {
                      // Apply a light white color to the border
                      var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                      zoomedImageData.data[destIndex] = 230; // Red channel
                      zoomedImageData.data[destIndex + 1] = 20; // Green channel
                      zoomedImageData.data[destIndex + 2] = 2; // Blue channel
                      zoomedImageData.data[destIndex + 3] = 0.8; // Alpha channel
                    }
                  }
                }

                // Put the modified pixel data back onto the canvas
                context.putImageData(
                  zoomedImageData,
                  x2 - r1 * scaleFactor1,
                  y2 - r1 * scaleFactor1
                );
              }
              //////////////////////////////////////////////////////////////////////////////////////////////////
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2, y2, r1, 0, Math.PI * 2);

                clikarc1 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0)"
                  : "rgba(250, 250,250,0.0)";
                context.closePath();
                context.fill();

              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2, y2, r1, 0, Math.PI * 2);
                clikarc1 = context.isPointInPath(xnew, ynew);
                context.fillStyle = `rgba(250, 250,250,0.0)`;
                context.closePath();
                context.fill();
              }


            }

            if (post.interact1b) {
              if (typex === 0 || typex === 3) {
                var imageData2 = context.getImageData(
                  x2b - 1 - r2,
                  y2b - 0.5 - r2,
                  2.1 * r2,
                  2.1 * r2
                ); // (x, y, width, height)


                // Create a larger image data for the zoom effect
                var zoomedImageData2 = context.createImageData(
                  imageData2.width * scaleFactor2,
                  imageData2.height * scaleFactor2
                );

                // Copy pixels from the original image data to the larger image data with bilinear interpolation
                for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                    var sourceX = xbb / scaleFactor2;
                    var sourceY = ybb / scaleFactor2;

                    // Get the interpolated pixel value
                    var interpolatedPixel = interpolate(imageData2, sourceX, sourceY);

                    // Set the pixel values in the zoomed image data
                    var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                    zoomedImageData2.data[destIndex] = interpolatedPixel[0];
                    zoomedImageData2.data[destIndex + 1] = interpolatedPixel[1];
                    zoomedImageData2.data[destIndex + 2] = interpolatedPixel[2];
                    zoomedImageData2.data[destIndex + 3] = interpolatedPixel[3];
                  }
                }

                // Apply a light white border at the borders
                var borderWidth = 0; // Adjust the width of the border
                for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                  for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                    if (
                      xbb < borderWidth ||
                      xbb >= zoomedImageData2.width - borderWidth ||
                      ybb < borderWidth ||
                      ybb >= zoomedImageData2.height - borderWidth
                    ) {
                      // Apply a light white color to the border
                      var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                      zoomedImageData2.data[destIndex] = 230; // Red channel
                      zoomedImageData2.data[destIndex + 1] = 20; // Green channel
                      zoomedImageData2.data[destIndex + 2] = 2; // Blue channel
                      zoomedImageData2.data[destIndex + 3] = 0.8; // Alpha channel
                    }
                  }
                }

                // Put the modified pixel data back onto the canvas
                context.putImageData(
                  zoomedImageData2,
                  x2b - r2 * scaleFactor2,
                  y2b - r2 * scaleFactor2
                );
              }
              ///////////////////////////////////////////////////////////////////////////////////////////////
              if ([0, 3].includes(typex)) {
                context.beginPath();
                context.arc(x2b, y2b, r2, 0, Math.PI * 2);
                clikarc2 = context.isPointInPath(xnew, ynew);
                context.fillStyle = darkmodeReducer
                  ? "rgba(50, 50,50,0)"
                  : "rgba(250, 250,250,0.0)";
                context.closePath();
                context.fill();
                ///context.lineWidth = matchMobile ? 9.6 : itemcroptype[pey] === 3 ? 9 : 6;
                ///context.strokeStyle = darkmodeReducer ? "#ffffff" : "#333333";
                ///context.stroke();
              } else if (typex === 1) {
                context.beginPath();
                context.arc(x2b, y2b, r2, 0, Math.PI * 2);
                clikarc2 = context.isPointInPath(xnew, ynew);
                context.fillStyle = `rgba(250, 250,250,0.0)`;
                context.closePath();
                context.fill();
              }
            }

            if (typex === 3) {
            } else {
              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              tiim.current = setTimeout(() => {
                if (typex === 0 || typex === 3) {
                  drawInteraction(1, event, 0);
                } else {
                  drawInteraction(0, event, 0);
                }
              }, 80);
            }


            if (canvasRefIn.current) {
              canvasRefIn.current.style.width = `${imageWidthcss}px`;
              canvasRefIn.current.style.height = `${imageHeightcss}px`;
            }






            if (post.interact1b || post.interact1a) {



              if (clicked === 1 && clikarc2) {

                ///clears stop interaction timer for long imagess (PC)
                /*  if (sTimercc.current) {
                    clearTimeout(sTimercc.current);
                  }
  */

                CallInteractStart2();



                ///  closeItemClick();

              } else if (clicked === 1 && clikarc1) {


                CallInteractStart1();








              } else if (clicked === 1) {



                if (minimise) {
                  if (matchMobile) {

                    setMaximisefromcanvas(true);
                    if (wa22.current) {
                      clearTimeout(wa22.current);
                    }
                    wa22.current = setTimeout(() => {
                      setMaximisefromcanvas(false);
                    }, 4000)

                  }


                  else {
                    setminimiseSpecificScroll(true);
                    setminimise(false);
                    if (wa.current) {
                      clearTimeout(wa.current);
                    }
                    wa.current = setTimeout(() => {
                      postDivRef.current[pey].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 1000)

                  }

                }



                switch (event.detail) {
                  case 1:
                    setinteract(false);
                    setinteractContent("");
                    setStopShowPad(false);
                    setinteracttypeAll(0);
                    setfadeout(false);


                    ClickAudio();





                    ////THIS STOPS INTERACTION
                    ///if (tiim.current) {
                    //// clearTimeout(tiim.current);
                    ////  } 
                    /////THIS STOPS INTERACTION


                    ///context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.width);
                    ///setHasInteractivity(false);
                    ////clickslider(event);
                    break;

                }





                /// alert('jj');
              } else {

              }
            } else {
            }

          }

          //alert(imageHeightcss);

        });
      }
    },
    [data, imageWidthcss, imageHeightcss, interact, ImageDuration, isAppleDevice, bigPixel1, bigPixel2, matchPc, Maximisefromcanvas, minimise]
  );



  ///
  ///,
  ///
  /// HANDLE TOUCH START EVENT
  const In = (e: any) => {
    if (itemCLICKED[pey]) {
      ////onMouseDown onMouseMove
      ////touchDown = e.clientX
      //scale
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    }
  };

  ///
  ///
  ///
  /// HANDLE TOUCH MOVE EVENT
  const handleTouchMove = (e: any) => {
    if (itemCLICKED[pey]) {
      if (handleTouchMoveTimer.current) {
        clearTimeout(handleTouchMoveTimer.current);
      }
      handleTouchMoveTimer.current = setTimeout(function () {
        const touchDown = touchPosition;

        if (touchDown === null) {
          return;
        }
        ////currentTouch = e.clientX
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 40) {
          nextSlide();
        } else if (diff < -40) {
          prevSlide();
        } else {
        }

        setTouchPosition(null);
        return false;
      }, 200);

      return false;
    }
  };

  ///
  ///
  ///
  /// WAITS FOR SOME SECS BEFORE CHANGING SLIDE IDENTIFIER(DOTS,ACTIVESLIDES)
  const waitChangeIndex = (data: number, state: any) => {
    if (waitChangeIndexTimer.current) {
      clearTimeout(waitChangeIndexTimer.current);
    }
    waitChangeIndexTimer.current = setTimeout(function () {
      setSliderIndexSlow((state: any) => data);
    }, 500);
  };

  ///
  ///
  ///
  /// NEXT SLIDE
  const nextSlide = () => {
    AUTOSlideLongImages(pey);

    if (ActiveAutoPlay[pey]) {
    } else {
      setshowSliderLoader(true);
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    }

    ///set((state) => (state + 1) % slides.length);
    if (sliderIndex === slides.length - 1) {
      setSliderIndex((sliderIndex: any) => 0);
      waitChangeIndex(0, sliderIndex);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex + 1);
      waitChangeIndex(sliderIndex + 1, sliderIndex);
    }

    if (ActiveAutoPlay[pey]) {
    } else {
      if (callAutoPlayAgainTimer.current) {
        clearTimeout(callAutoPlayAgainTimer.current);
      }
      callAutoPlayAgainTimer.current = setTimeout(function () {
        SliderAutoPlay(1);
      }, sliderDuration);
    }
  };

  ///
  ///
  ///
  /// PREV SLIDE
  const prevSlide = () => {
    AUTOSlideLongImages(pey);
    if (ActiveAutoPlay[pey]) {
    } else {
      setshowSliderLoader(true);
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    }

    if (sliderIndex === 0) {
      setSliderIndex((sliderIndex: any) => slides.length - 1);
      waitChangeIndex(slides.length - 1, sliderIndex);
    } else {
      setSliderIndex((sliderIndex: any) => sliderIndex - 1);
      waitChangeIndex(sliderIndex - 1, sliderIndex);
    }
    if (ActiveAutoPlay[pey]) {
    } else {
      if (callAutoPlayAgainTimer.current) {
        clearTimeout(callAutoPlayAgainTimer.current);
      }
      callAutoPlayAgainTimer.current = setTimeout(function () {
        SliderAutoPlay(1);
      }, sliderDuration);
    }
  };

  ///
  ///
  ///
  /// CHANGE SLIDER CONTENT USING  DOTS
  const GotoDots = (clickedDot: number) => {
    setSliderIndex((sliderIndex: any) => clickedDot);
    waitChangeIndex(clickedDot, sliderIndex);
  };




  ///setshowSpin(false);

  const handleVideoLoad = () => {
    if (videoPlayerReff.current) {
      // Define the handler for when the video ends
      ///alert('kk');
      console.log(interactContent)
      // Add the 'ended' event listener to the video element
      ////////videoPlayerReff.current.addEventListener('ended', handleVideoEnd);

      // Start playing the video
      videoPlayerReff.current.play();
    }
  };



  ////setactiveAudio(pey);





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
      <Grid
        item
        xs={12}
        style={{
          position: "fixed",
          top: "3vh",
          padding: "0px",
          zIndex: "200",
        }}
      >






        {Tutorialx ? (
          <Grid
            item
            onClick={() => {
              setTutorialx(false);
            }}
            xs={6}
            style={{
              padding: "10px",
              backgroundColor: "#00ccff",
              borderRadius: "8%",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Mobile Interaction Still In Development, Coming Soon 😊
          </Grid>
        ) : null}
      </Grid>





      <Grid
        ref={ref}
        item
        onTouchStart={In}
        onTouchMove={handleTouchMove}
        xs={12}
        style={{
          position: "relative",
          height: itemCLICKED[pey]
            ? `${itemOriginalPostHeight[pey]}px`
            : type === 1
              ? `${itemOriginalPostHeight[pey]}px`
              : `${itemFinalPostHeight[pey]}px`,
          padding: "0px",


        }}
      >





        <Tutorial type={1} index={pey} post={post} />

        <Tutorial type={2} index={pey} post={post} />

        <Tutorial type={3} index={pey} post={post} />



        <div
          onMouseOver={() => {
            setZoomOutBigger(true);
          }}
          onMouseOut={() => {
            setZoomOutBigger(false);
          }}
          style={{
            position: "absolute",
            zIndex: 30,
            left: slides.length > 1 ? 165 : 25,
            cursor: "pointer",
            top: slides.length > 1 ? "2.4vh" : "2.4vh",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bolder",
            opacity: "0.7",
            height: "0px",
            padding: "0px",
          }}
        >
          <span
            onClick={() => {
              setsliderIndexMini(sliderIndex);
              setzoomClickedIndex(pey + 1);
              type === 1 ? setminiProfile(false) : setminiProfile(true);
            }}
            className={darkmodeReducer ? "turlight" : "turdark"}
            style={{
              padding: "1px",
              color: "#ffffff",
            }}
          >
            <ZoomOutIcon
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-darkab dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-lightab  dontallowhighlighting zuperkingIcon  "
              }
              style={{
                fontSize: "2.2vw",
                display: "none",
              }}
            />
          </span>
        </div>






        {slides.length > 0 ? (
          interactContent ? null : (
            <SliderNumber
              minimise={minimise}

              autoSlideDisplay={autoSlideDisplay}
              sliderLoader={sliderLoader}


              showSpin={showSpinx}

              setshowSpin={setshowSpinx}
              ActiveCanvas={ActiveCanvas}
              post={post}
              HasInteractivity={HasInteractivity}
              postDatainnerInteraction1={postDatainnerInteraction1}
              postDatainnerInteraction2={postDatainnerInteraction2}
              startSlider={startSlider}
              ActiveAutoPlay={ActiveAutoPlay}
              stopSlider={stopSlider}
              activeSlide={sliderIndexSlow}
              total={slides.length}
              itemCLICKED={itemCLICKED}
              pey={pey}
            />
          )
        ) : null}
        <Arrow
          itemCLICKED={itemCLICKED}
          pey={pey}
          total={slides.length}
          direction="left"
          clickSlideprev={prevSlide}
          clickSlidenext={nextSlide}
          itemOriginalPostHeight={itemOriginalPostHeight}
        />
        {transitions((style, i) => (
          <div key={i}>
            <animated.img

              onClick={() => {
                ///maximiseFirst
                if (minimise) {

                  setminimiseSpecificScroll(true);

                  setminimise(false);

                  if (wa.current) {
                    clearTimeout(wa.current);
                  }
                  wa.current = setTimeout(() => {
                    postDivRef.current[pey].scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 1000)

                } else {
                  ClickAudio();
                }

              }}


              onLoad={(e: any) => {
                onPostsItemload(e, pey, i);
              }}
              onMouseDown={clickslider}
              ref={addPostItemsRef}
              className={
                darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
              }
              src={Unload ? '' : `${REACT_APP_CLOUNDFRONT}${slidesThumb[i]}`}
              alt="a superstarz post "
              style={{
                ...style,



                cursor: "pointer",
                width: "100%",
                height: minimise ? matchMobile ? '30vh' : '68vh' : `auto`,
                position: "absolute",
                padding: "0px",
                objectFit: "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                zIndex: AllowAllHdImagesShow ? 0 : 100,
                borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                  minimise ? '1.5%' : '2%'


              }}
            />




            {


              AllowAllHdImagesShow ? <>


                {VideoUrl === ''
                  ?


                  <img

                    ref={postImageRef}

                    onMouseDown={() => {
                      ///maximiseFirst
                      if (minimise) {

                        setminimiseSpecificScroll(true);

                        setminimise(false);

                        if (wa.current) {
                          clearTimeout(wa.current);
                        }
                        wa.current = setTimeout(() => {
                          postDivRef.current[pey].scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 1000)

                      } else {
                        ClickAudio();
                      }

                    }}
                    className={
                      darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
                    }

                    src={Unload ? `${REACT_APP_CLOUNDFRONT}${slidesThumb[i]}` : `${REACT_APP_CLOUNDFRONT}${post.item2}`}
                    alt="a clikbate post "
                    style={{



                      cursor: "pointer",
                      width: "100%",
                      height: minimise ? matchMobile ? '30vh' : '68vh' : `auto`,

                      position: "absolute",
                      padding: "0px",


                      objectFit: "cover",
                      objectPosition:
                        itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                          ? "50% top"
                          : "50% 50",
                      zIndex: 1,
                      borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                        minimise ? '1.5%' : '2%'


                    }}

                  /> :

                  <video controls style={{ position: 'absolute', top: '0vh', zIndex: 3000, width: '100%' }}>
                    <source src={VideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                }




                <img
                  ref={pic}


                  onMouseDown={() => {
                    ///maximiseFirst
                    if (minimise) {

                      setminimiseSpecificScroll(true);

                      setminimise(false);

                      if (wa.current) {
                        clearTimeout(wa.current);
                      }
                      wa.current = setTimeout(() => {
                        postDivRef.current[pey].scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 1000)

                    } else {
                      ClickAudio();
                    }

                  }}
                  onClick={() => {


                    ClickAudio();



                  }}

                  className={
                    darkmodeReducer ? "turlightpostdark" : "turlightpostlight"
                  }
                  onLoad={() => {
                    setshowSpinx(false);
                    ///alert('jj');
                  }}

                  src={minimise ? `${slides[0]}?v=${dateint2}` : `${slides[0]}?v=${dateint}`}

                  alt="a clikbate post "
                  style={{

                    cursor: "pointer",
                    width: "100%",
                    height: minimise ? matchMobile ? '34.5vh' : '72vh' : `auto`,
                    objectFit: "cover",
                    objectPosition:
                      itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                        ? "50% top"
                        : "50% 50",
                    visibility: 'hidden',


                    position: "absolute",
                    padding: "0px",
                    zIndex: 0,





                  }}
                  crossOrigin="anonymous"
                /></> : null}

            {i === 0 && HasInteractivity && ActiveCanvas === pey ? (
              <div style={{
                height: minimise ? `${canvasBorderH}px` : 'auto',
                width: minimise ? `${canvasBorderW}px` : 'auto',
                overflow: 'hidden',
                position: "absolute",
                zIndex: 110,
              }}>
                <canvas
                  onMouseUp={(e: any) => {
                    handleTouchStartIn(e, 0);
                  }}

                  onTouchStart={(e: any) => {
                    handleTouchStartIn(e, 1);
                  }}
                  ref={canvasRefIn}
                  style={{

                    cursor: "pointer",
                    padding: "0px",
                    height: '0px',
                    width: '0px',
                    top: "0vh",
                    position: 'relative',
                    marginLeft: interactContent && interact && HasInteractivity && ActiveCanvas === pey ? '0px'
                      : minimise ? `${MarginLeftCanvas}px` : '0px',
                    margin: "auto",
                    filter: interactContent && interact && HasInteractivity && ActiveCanvas === pey ? 'blur(11px)' : 'blur(0px)',

                    border: minimise ?
                      `0px solid ${blendedColor}` : `0px solid ${blendedColor}`,
                    visibility: canvasHide ? 'hidden' : 'visible',
                    backgroundColor: '',
                    borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                      minimise ? '1.5%' : '2%'



                  }}
                />
              </div>
            ) : null}



            {post.audioData && itemCLICKED[pey] && ActiveAudioIndexReducer === pey && inView ?
              <audio
                ref={audioPlayerRef}
                src={`${REACT_APP_CLOUNDFRONT}audio/${post.audioData}`}
                autoPlay  // This attribute enables autoplay
                loop  // This attribute enables looping
                style={{
                  cursor: "pointer",
                  height: "10px",
                  objectFit: "contain",
                  zIndex: 0,
                  position: "absolute",
                  margin: "auto",
                  textAlign: "center",
                  top: "-200vh",
                  width: "10px",
                }}
              ></audio> : null}


            {interact && HasInteractivity && ActiveCanvas === pey ? (


              interacttypeAll === 1 ?

                isAppleDevice ? <>



                  <video

                    onClick={() => {
                      if (InteractedDark) {
                        ////////

                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }

                        dispatch(UpdateInteract(interactContent, 2));
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                        /////////////////
                      } else {

                        if (post.backgroudaudio === 1) {
                          setHaltAudio(false);
                        }

                        //// alert('jj');

                        setInteractedDark(true);
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        InteractTimerxx.current = setTimeout(() => {
                          ///closeItemClick();
                          setInteractedDark(false);
                          setinteract(false);
                          setinteractContent("");
                          setStopShowPad(false);
                          setinteracttypeAll(0);
                          setfadeout(false);
                          if (sc.current) {
                            clearTimeout(sc.current);
                          }
                          setshowSpin(false);
                          setshowSpinx(false);
                        }, 1100)

                      }
                    }}
                    autoPlay
                    playsInline
                    ///controls
                    ref={videoPlayerReff}

                    src={`${REACT_APP_CLOUNDFRONT}videos/${interactContent}`}
                    style={{
                      filter: InteractedDark ? 'brightness(40%)' : '',
                      cursor: "pointer",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 50,
                      position: "absolute",
                      margin: "auto",
                      textAlign: "center",
                      top: "0vh",
                      width: "100%",


                    }}>

                  </video>
                </> :
                  <video

                    onClick={() => {

                      if (InteractedDark) {
                        ////////
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        dispatch(UpdateInteract(interactContent, 2));
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                        /////////////////
                      } else {


                        if (post.backgroudaudio === 1) {
                          setHaltAudio(false);
                        }
                        /// alert('jj');

                        setInteractedDark(true);
                        if (InteractTimerxx.current) {
                          clearTimeout(InteractTimerxx.current);
                        }
                        InteractTimerxx.current = setTimeout(() => {
                          ///closeItemClick();
                          setInteractedDark(false);
                          setinteract(false);
                          setinteractContent("");
                          setStopShowPad(false);
                          setinteracttypeAll(0);
                          setfadeout(false);
                          if (sc.current) {
                            clearTimeout(sc.current);
                          }
                          setshowSpin(false);
                          setshowSpinx(false);
                        }, 1100)

                      }


                    }}
                    onLoadedData={handleVideoLoad}
                    ref={videoPlayerReff}

                    src={`${REACT_APP_CLOUNDFRONT}videos/${interactContent}`}
                    style={{
                      filter: InteractedDark ? 'brightness(40%)' : '',
                      cursor: "pointer",
                      height: "100%",
                      objectFit: "contain",
                      zIndex: 50,
                      position: "absolute",
                      margin: "auto",
                      textAlign: "center",
                      top: "0vh",
                      width: "100%",
                      scrollSnapAlign: matchPc ? snapStartReducer ? "start" : 'none' : 'none'


                    }}>

                  </video> :
                <img


                  src={`${REACT_APP_CLOUNDFRONT}${interactContent}`}
                  onClick={() => {
                    if (InteractedDark) {
                      /// closeItemClick();
                      ////////
                      if (InteractTimerxx.current) {
                        clearTimeout(InteractTimerxx.current);
                      }
                      dispatch(UpdateInteract(interactContent, 1));
                      setInteractedDark(false);
                      setinteract(false);
                      setinteractContent("");
                      setStopShowPad(false);
                      setinteracttypeAll(0);
                      setfadeout(false);
                      if (sc.current) {
                        clearTimeout(sc.current);
                      }
                      setshowSpin(false);
                      setshowSpinx(false);
                      /////////////////
                    } else {


                      ///alert('jj');

                      setInteractedDark(true);
                      if (InteractTimerxx.current) {
                        clearTimeout(InteractTimerxx.current);
                      }
                      InteractTimerxx.current = setTimeout(() => {
                        ///closeItemClick();
                        setInteractedDark(false);
                        setinteract(false);
                        setinteractContent("");
                        setStopShowPad(false);
                        setinteracttypeAll(0);
                        setfadeout(false);
                        if (sc.current) {
                          clearTimeout(sc.current);
                        }
                        setshowSpin(false);
                        setshowSpinx(false);
                      }, 1100)

                    }


                  }}
                  style={{
                    filter: InteractedDark ? 'brightness(40%)' : '',
                    cursor: "pointer",
                    height: "100%",
                    objectFit: "contain",
                    zIndex: 50,
                    position: "absolute",
                    margin: "auto",
                    textAlign: "center",
                    top: "0vh",
                    width: "100%",

                  }}
                />
            ) : null}
          </div>
        ))}{" "}
        <Dots
          total={slides.length}
          itemCLICKED={itemCLICKED}
          pey={pey}
          GotoDots={GotoDots}
          slides={slides}
          activeSlide={sliderIndexSlow}
        />
        {post.interact1a && HasInteractivity && ActiveCanvas === pey ? (
          <img
            src={post.interact1a}
            style={{
              height: "100%",
              objectFit: "contain",
              zIndex: 50,
              position: "absolute",
              margin: "auto",
              textAlign: "center",
              top: "-200000vh",
              width: "100%",
            }}
          />
        ) : null}
        {post.interact1b && HasInteractivity && ActiveCanvas === pey ? (
          <img
            src={post.interact1b}
            style={{
              cursor: "pointer",
              height: "100%",
              objectFit: "contain",
              zIndex: 50,
              position: "absolute",
              margin: "auto",
              textAlign: "center",
              top: "-200000vh",
              width: "100%",
            }}
          />
        ) : null}



        {inView && allowInitialexplainIt && post.mode === 1 ?
          <PostExplain

            PlayClik={PlayClik}
            imageActive={imageActive}
            setImageActive={setImageActive}

            audionotify={audionotify}
            setaudionotify={setaudionotify}

            playXAudio={playXAudio}
            setplayXAudio={setplayXAudio}

            setHideAudioicon={setHideAudioicon}
            HideAudioicon={HideAudioicon}
            index={pey}
            itemcroptype={itemcroptype}
            post={post}
            postDivRef={postDivRef}
            pey={pey}
            minimise={minimise}
            setMaximisefromcanvas={setMaximisefromcanvas}
            setminimiseSpecificScroll={setminimiseSpecificScroll}
            setminimise={setminimise}
          />

          : null}




        {
          minimise ? null :
            HasInteractivity ?


              hidePrev ? null :
                < VideoComponent
                  index={pey}
                  itemcroptype={itemcroptype}
                  xl={xl}
                  setxl={setxl}
                  src={PreviewVid} inView={inView} setshow={setshow} videoRef={videoRef} show={show}
                  hidePrevVid={hidePrevVid} InteractTimerxxhyx={InteractTimerxxhyx}
                  sethidePrevVid={sethidePrevVid} postty={postty}
                  videoImRef={videoImRef} />


              : null}



        <div style={{
          width: '100%',
          height: 'auto',
          position: 'fixed',
          bottom: '12vh',
          margin: 'auto',
          textAlign: 'center',
          zIndex: 500,
        }}>




          <Button
            className="zuperxyinfo"
            onClick={async () => {
              try {
                /// setLoader(true);  // Show loader while processing

                if (post.item2) {
                  // Get the image source from the ref



                  const s3Url = `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/${post.item2}`;
                  const imageUrl = s3Url;

                  // Convert the image to base64
                  const base64Image = await convertImageToBase64(imageUrl);



                  // Define parameters for video generation
                  const params = {
                    image: base64Image,  // Send the base64 image data
                    height: 1024,        // Video height
                    width: 1024,         // Video width
                    steps: 50,           // Number of steps for the generation
                    guidance_scale: 3.5, // Guidance scale for better alignment with prompt
                  };

                  console.log("Sending request with params:", params);


                  ///alert(base64Image);


                  const response = await Axios.post(
                    `${REACT_APP_SUPERSTARZ_URL}/generatevideo`,

                    params,
                    {
                      timeout: 300000, // Set a long timeout for video generation (300 seconds)
                      headers: {
                        'Content-Type': 'application/json',
                      }
                    }
                  );


                  // Response contains the video as base64, you can convert it to a blob and display it
                  const videoUrl = `data:video/mp4;base64,${response.data.video}`;
                  console.log("Video URL:", videoUrl);
                  // Set video URL (replace image with the video)
                  setVideoUrl(videoUrl);
                }
              } catch (error) {
                console.error("Error generating video:", error);
              } finally {
                ///setLoader(false);  // Hide loader when done
              }


            }}
            style={{
              fontSize: buttonFont,
              transform: buttonTransform,
              padding: '2vh',
              color: '#ffffff',
              borderRadius: "50px",
              MozBoxShadow: MozBoxShadowReducerSign,
              WebkitBoxShadow: WebkitBoxShadowReducerSign,
              boxShadow: boxShadowReducerSign,
              width: '20%',
              display: 'none'
            }}
            fullWidth={true}
            variant="outlined"
            size="large"
            color="secondary"
          >
            <span style={{ marginLeft: '0vw' }}>Convert to Video</span>
          </Button>

        </div>

      </Grid >




    </>
  );
}

export const Slider = React.memo(Sliderx);
