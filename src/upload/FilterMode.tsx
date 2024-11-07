import React, {
  ChangeEvent,
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";


import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { Grid, GridSize } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import { SuperCrop } from "./SuperCrop";
import PhotoIcon from "@mui/icons-material/Photo";
import GifIcon from "@mui/icons-material/Gif";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import TitleIcon from '@mui/icons-material/Title';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Axios from "axios";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import { FilterModeArrow } from "./FilterModeArrow";
import { FilterModeInner } from "./FilterModeInner";
import { Superstickers } from "./Superstickers";
import { OptionsSlider } from "../profile/OptionsSlider";
import { convertHexToRGB } from "material-ui/utils/colorManipulator";
import { Caption } from "./Caption";
import date from "date-and-time";
import AdjustIcon from '@material-ui/icons/Adjust';
import { CaptionText } from "./CaptionText";
import { Tutorial } from "../Tutorial";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { AudioEditor } from "./AudioEditor";
import CloseIcon from '@material-ui/icons/Close';

///Axios.defaults.withCredentials = true;

function FilterModex({
  filterImage,
  selectedImage,
  itemUploadRef,
  itemUploadRefSD,
  setActivatefilterImage,
  ActivatefilterImage,
  getSliderWidthNew,
  closeUploadModal,
  itemUploadRefThumb,
  showAlll,
  ratiox,





}: any): JSX.Element {
  var newitemUploadRef = useRef<any>(null);

  const Value = {
    caption: "",
    topic: "",
  };





  const [captionvalues, setcaptionvalues] = useState(Value);

  // Formatting the date and time
  // by using date.format() method
  /// const datevalue = date.format(now, "YYYY_MM_DD_HH_mm_ss");

  const { REACT_APP_SUPERSTARZ_URL } = process.env;

  ///
  ///
  ///DARKMODE FROM REDUX
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const originalfilterImageRef = useRef<HTMLDivElement>(null);

  const [ShowHideNegativeValue, setShowHideNegativeValue] = useState("-");

  const [translate, setTranslate] = useState(0);
  const [stalestate] = useState(1);

  const [ActiveSlide, setActiveSlide] = useState(0);

  const [slideGo, setslideGo] = useState<boolean>(true);

  const [transitionFast, settransitionFast] = useState<boolean>(false);

  const [loadedimage, setloadedimage] = useState<boolean>(false);

  const [hideArrow, sethideArrow] = useState<boolean>(false);

  const getCropHeightRef2: any = useRef<HTMLDivElement>(null);

  const getCropHeightRef: any = useRef<HTMLDivElement>(null);

  const getCropHeightRefmobile: any = useRef<HTMLDivElement>(null);

  const getScreenWidthRef: any = useRef<HTMLDivElement>(null);

  const getCropHeightRefFull: any = useRef<HTMLDivElement>(null);

  const getImageWidth = useRef<any>([]);

  const [wideimage, setwideimage] = useState(false);

  const [wideimagepushMobile, setwideimagepushMobile] = useState(false);

  const [filterHeight, setfilterHeight] = useState(0);

  const [show, setshow] = useState(false);

  const [showhidefilter, setshowhidefilter] = useState(false);

  const [showFilter, setshowFilter] = useState(false);

  const [LoadboxWidth, setLoadboxWidth] = useState<any>(0);

  const [filterWidthForSlider, setfilterWidthForSlider] = useState(0);

  const [filterLimit, setfilterLimit] = useState(0);

  const imageFiltersRef = useRef<any>([]);

  const [startSuperSticker, setstartSuperSticker] = useState(false);

  const [startSuperStickerblur, setstartSuperStickerblur] = useState(false);

  const [superstickerIndex, setsuperstickerIndex] = useState(0);

  const [loaderArray, setloaderArray] = useState<any>([]);

  const [duplicateItemupload, setduplicateItemupload] = useState<any>([]);

  const [superUploadedImageName, setsuperUploadedImageName] = useState<any>([]);

  const [hidetextz, sethidetextz] = useState(false);



  const [FilterSliderHeight, setFilterSliderHeight] = useState(0);
  const [FilterSliderWidth, setFilterSliderWidth] = useState(0);
  const [FilterSliderHeight2, setFilterSliderHeight2] = useState(0);
  const [FilterSliderContainerWidth, setFilterSliderContainerWidth] =
    useState(0);

  const [screenWidth, setscreenWidth] = useState(0);

  const [lastIndex, setlastIndex] = useState(0);

  const [filterThumbWidthFull, setfilterThumbWidthFull] = useState(0);

  const [matchTabletMobile, setmatchTabletMobile] = useState<boolean>(false);

  const [activeSticker, setactiveSticker] = useState<number>(100);

  const [superStickerActivated, setsuperStickerActivated] =
    useState<boolean>(true);

  const [effectMode, seteffectMode] = useState<any>([]);

  const [interactContent, setinteractContent] = useState<any>([]);
  const [interactContent2, setinteractContent2] = useState<any>([]);

  const [interactContentvideo, setinteractContentvideo] = useState<any>(null);
  const [interactContentvideo2, setinteractContentvideo2] = useState<any>(null);

  const [interactContenttype, setinteractContenttype] = useState(0);
  const [interactContenttype2, setinteractContenttype2] = useState(0);



  const [interactContentBlob, setinteractContentBlob] = useState<any>([]);
  const [interactContent2Blob, setinteractContent2Blob] = useState<any>([]);


  const [XandYAxisInteract1, setXandYAxisInteract1] = useState<any>({ x: 0, y: 0 });

  const [cropInitialIn, setcropInitialIn] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  const [cropInitialIn2, setcropInitialIn2] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  const [trapfilters, settrapfilters] = useState<boolean[]>([]);

  const [regimageholdfilter, setregimageholdfilter] = useState<any>([]);
  const [regimageholdfilterxx, setregimageholdfilterxx] = useState<any>([]);

  const [finalImageData, setfinalImageData] = useState<any>([]);

  const [finalImageDataSD, setfinalImageDataSD] = useState<any>([]);

  const [finalImageDataBASE64, setfinalImageDataBASE64] = useState<any>([]);

  const [callfilter, setcallfilter] = useState<boolean>(false);

  const [FilterUnderStickerStopFiltering, setFilterUnderStickerStopFiltering] =
    useState<boolean>(false);

  const [hdfilter, sethdfilter] = useState<boolean>(false);

  const [superzeroeffect, setsuperzeroeffect] = useState<boolean[]>([]);
  const [superzeroeffectonce, setsuperzeroeffectonce] = useState<boolean[]>([]);

  const [startTopicCap, setstartTopicCap] = useState(false);

  const [supeFilterLoadFade, setsupeFilterLoadFade] = useState<boolean>(false);

  ///
  ///
  ///
  /// GET GLOBAL INNER NAVIGATION VARIABLE
  const { activatefilterImage } = useSelector((state: RootStateOrAny) => ({
    ...state.GlobalNavuploadReducer,
  }));
  const activatefilterImageReducer = activatefilterImage;




  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const [Durationx, setDuration] = useState(0);

  const [currentTimestamp2, setCurrentTimestamp2] = useState(0);
  const [Durationx2, setDuration2] = useState(0);



  const [radius1, setradius1] = useState(0);

  const [radius2, setradius2] = useState(0);





  const [AudioUrl, setAudioUrl] = useState<any>(null);


  const [vidBackUpURL, setvidBackUpURL] = useState(''); // State to store the image URL


  const [vidBackUpURL2, setvidBackUpURL2] = useState(''); // State to store the image URL

  const [interactContentAudio, setinteractContentAudio] = useState<any>(null);

  const [interactContentAudiotype, setinteractContentAudiotype] = useState<any>(0);

  const [ShowAudio, setShowAudio] = useState<any>(false);

  const [Audioname, setAudioname] = useState('');


  const [AllowCaption, setAllowCaption] = useState(false);


  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const [callInnerButton, setcallInnerButton] = useState(0);

  const [backgroudAudio, setbackgroudAudio] = useState<number>(0);

  const [showpdi, setshowpdi] = useState(false);


  useEffect(() => {

    if (matchMobile) {

      setshowpdi(true);
      setTimeout(() => {
        setshowpdi(false);

      }, 2000)
    }

  }, [backgroudAudio]);


  const [audioStart, setaudioStart] = useState(0);
  const [audioEnd, setaudioEnd] = useState(0);
  const [audioEndDuration, setaudioDuration] = useState(0);

  const [ConfirmUpload, setConfirmUpload] = useState(false);



  useEffect(() => {
    if (startSuperSticker) {
    } else {
      setcallInnerButton(0);
    }
  }, [startSuperSticker])


  useEffect(() => {
    setTimeout(() => {
      sethidetextz(true);
    }, 8000)


  }, [activatefilterImageReducer])

  /////
  const convertAndSetAudioUrl = (file: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      // This is the data URL
      const audioDataUrl = reader.result;
      setAudioUrl(audioDataUrl);
      setShowAudio(true);

    };

    // Read the file as a Data URL
    reader.readAsDataURL(file);

  };



  ////
  const handleFileChangex = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // Clear the input value to allow the same file to be selected again
    if (event.target && event.target.value) {
      event.target.value = '';
    }

    if (file) {
      try {
        // Check if the selected file is an audio file
        if (file.type.startsWith('audio/')) {
          // Audio file handling logic

          // For example, setting the audio file to state variables
          // Assuming setAudioData is your state setter for audio data

          setAudioname(file.name);
          convertAndSetAudioUrl(file);

          // You might also handle the audio data URL or Blob here if needed
          // ...

        } else {
          // Handle non-audio file selection, possibly show an error message
          console.error('Selected file is not an audio file');
        }

      } catch (error) {
        console.error('Error processing the audio file:', error);
      }
    }
  };

  // Make sure to define or update your state setters like setAudioData
  // and other relevant states and logic as needed.






  const updatecaptiontop = useCallback(
    (e: any) => {
      const { name, value } = e.target;







      let usernameCleaner = /[^a-zA-Z0-9\s.,!?'"“”‘’–—:;()[\]{}<>\/\\`~@#$%^&*_+=|\-😀🙏👍🙌💩🦄\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;



      // Updated regex to allow emojis

      let cleanValue = value.replace(usernameCleaner, "");

      let usernameLimiter = /^.{0}$/;

      var x = 0




      if (name === "topic") {

        usernameLimiter = /^.{40}$/;

        x = 40;

      } else {

        usernameLimiter = /^.{65}$/;

        x = 65;

      }


      let finalUsername = cleanValue.replace(usernameLimiter, "");

      let checkUsernameClean = usernameCleaner.test(value);
      let checkUsernameLimited = usernameLimiter.test(cleanValue);

      if (checkUsernameClean) {
      } else {
      }

      let userNameLength = finalUsername.length;


      if (checkUsernameClean) {
      } else {
        if (checkUsernameLimited || userNameLength > x) {

        } else {
          setcaptionvalues({ ...captionvalues, [name]: value });

        }
      }

    },
    [captionvalues]
  );








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
    width = "20%";
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
    font1 = "";
    font2 = "";
    paddingbutU = "80px";
  }

  ///

  useEffect(() => {

    const interactContentxx = [...interactContent];

    for (let i = 0; i < selectedImage.length; i++) {
      interactContentxx[i] = '';
      if (selectedImage.length - 1 === i) {
        setinteractContent(interactContentxx);
      }
    }



    const effectModexx = [...effectMode];

    for (let i = 0; i < selectedImage.length; i++) {
      effectModexx[i] = "normal";
      if (selectedImage.length - 1 === i) {
        seteffectMode(effectModexx);
      }
    }

    const trapfiltersxx = [...trapfilters];

    for (let i = 0; i < selectedImage.length; i++) {
      trapfiltersxx[i] = false;
      if (selectedImage.length - 1 === i) {
        settrapfilters(trapfiltersxx);
      }
    }

    const superzeroeffectx = [...superzeroeffect];

    for (let i = 0; i < selectedImage.length; i++) {
      superzeroeffectx[i] = false;
      if (selectedImage.length - 1 === i) {
        setsuperzeroeffect(superzeroeffectx);
      }
    }

    const superzeroeffectoncex = [...superzeroeffectonce];

    for (let i = 0; i < selectedImage.length; i++) {
      superzeroeffectoncex[i] = false;
      if (selectedImage.length - 1 === i) {
        setsuperzeroeffectonce(superzeroeffectoncex);
      }
    }

    const finalImageDatax = [...finalImageData];

    for (let i = 0; i < selectedImage.length; i++) {
      finalImageDatax[i] = null;
      if (selectedImage.length - 1 === i) {
        setfinalImageData(finalImageDatax);
        setfinalImageDataSD(finalImageDatax);
        setfinalImageDataBASE64(finalImageDatax);
      }
    }
  }, [activatefilterImageReducer]);



  useEffect(() => {
    const regimageholdfilterxx = [...regimageholdfilter];
    const regimageholdfilterxx2 = [...regimageholdfilterxx];
    for (let i = 0; i < selectedImage.length; i++) {
      regimageholdfilterxx[i] = itemUploadRef.current[i].src;
      regimageholdfilterxx2[i] = itemUploadRef.current[i].src;
      if (selectedImage.length - 1 === i) {
        setregimageholdfilter(regimageholdfilterxx);
        setregimageholdfilterxx(regimageholdfilterxx2);
      }
    }
  }, [activatefilterImageReducer]);

  const addpostImageRef = (imageRef: any) => {
    if (imageRef && !getImageWidth.current.includes(imageRef)) {
      getImageWidth.current.push(imageRef);
    }
    ////console.log(postItemsRef.current[1]);
  };

  ///
  ///
  /// ACTIVATES SLIDER ITEM TO BE VIEWED ON CLICK
  const clickOptions = (i: number) => {
    //setTranslate(getImageWidth.current[0].clientWidth * i);
    //setActiveSlide(i);
  };

  ///
  ///
  ///
  ///CREATE OPTIONS SLIDER ANIMATION WITH  REACT SPRING
  const modalanimation = useSpring({
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
    },
    transform: `translateX(${ShowHideNegativeValue}${translate}px)`,
    height: "auto",
    display: "flex",
    width: `auto`,
    padding: "0px",
    margin: "auto",
  });

  ///
  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (matchTablet || matchMobile) {
      setmatchTabletMobile(true);
    }
    if (matchTablet || matchMobile) {
      var wi = getCropHeightRefmobile.current.clientWidth;
    } else {
      var wi = getCropHeightRef.current.clientWidth;
    }
    if (getCropHeightRef.current && getCropHeightRef.current.clientWidth) {
      setFilterSliderHeight(getCropHeightRef.current.clientHeight);
      setFilterSliderHeight2(getCropHeightRef2.current.clientHeight);
      if (ratiox === 4) { setFilterSliderWidth(wi * 1.15); }
      else if (ratiox === 5) { setFilterSliderWidth(wi * 1.3); } else { setFilterSliderWidth(wi); }

      setscreenWidth(getScreenWidthRef.current.clientWidth);
    }
  }, [wideimage]);

  ///
  ///
  ///
  ///
  useEffect(() => {
    var hiddenContentWidth = FilterSliderContainerWidth - screenWidth;
    var h = Math.ceil(hiddenContentWidth / filterWidthForSlider);

    setlastIndex(h);

    setLoadboxWidth(screenWidth / h);

    const newArrxq = [...loaderArray];
    for (
      var i: number = 0;
      i < Math.ceil(hiddenContentWidth / filterWidthForSlider);
      i++
    ) {
      //////////////////////////////
      newArrxq[i] = i;
      if (i === Math.ceil(hiddenContentWidth / filterWidthForSlider) - 1) {
        setloaderArray(newArrxq);
      }

      ///////////////////////////////
      ////
    }
  }, [
    FilterSliderContainerWidth,
    screenWidth,
    filterWidthForSlider,
    wideimage,
  ]);

  ///
  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (getImageWidth.current[0] && show) {
      setFilterSliderContainerWidth(
        selectedImage.length * getImageWidth.current[0].clientWidth
      );

      if (
        screenWidth >
        selectedImage.length * getImageWidth.current[0].clientWidth
      ) {
        sethideArrow(true);
      }
    }
  }, [selectedImage, screenWidth, getImageWidth, show, wideimage]);
  ///

  //

  //
  //
  //
  //USE SLIDE DOWN ANIMATION FROM REACT SPRING
  const animationxx = useSpring({
    config: {
      duration: 250,
    },
    opacity: startTopicCap ? 1 : 0,
  });

  //
  //
  //USE SLIDE DOWN ANIMATION FROM REACT SPRING
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: startSuperSticker ? 1 : 0,
  });

  ///
  ///
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    setTimeout(function () {
      if (itemUploadRef.current[0] && activatefilterImageReducer) {
        if (matchTabletMobile) {
          var ccj = itemUploadRef.current[0].width * 0.3;
          if (
            itemUploadRef.current[0].width + ccj >
            itemUploadRef.current[0].height
          ) {
            setwideimagepushMobile(true);
          }
          setwideimage(true);
          setshow(true);
          setTimeout(function () {
            var heightimage = getImageWidth.current[0].clientHeight;
            var heightpage = getCropHeightRef.current.clientHeight;
            if (heightimage - 2 > heightpage) {
              setwideimage(false);
            }
          }, 150);
        } else {
          if (
            itemUploadRef.current[0].width > itemUploadRef.current[0].height
          ) {
            setwideimage(true);
            setshow(true);
          } else {
            setshow(true);
          }
        }
      }
    }, 150);
  }, [activatefilterImageReducer]);

  ///
  ///
  ///
  ///
  useEffect(() => {
    if (getImageWidth.current[0] && show) {
      setfilterHeight(getImageWidth.current[0].clientHeight);
      var v = getImageWidth.current[0].clientWidth;
      setfilterWidthForSlider(v);
      var vv = Math.ceil(screenWidth / v);
      setfilterLimit(vv);
    }
  }, [show, getImageWidth, screenWidth, wideimage]);
  ///

  ///

  const clickSlideprev = () => {
    if (translate === 0) {
      var hiddenContentWidth = FilterSliderContainerWidth - screenWidth;
      setTranslate((translate: any) => hiddenContentWidth);
      setActiveSlide((ActiveSlide: any) =>
        Math.ceil(hiddenContentWidth / filterWidthForSlider)
      );
    } else {
      var tt = ActiveSlide - 1;
      setTranslate((translate: any) => filterWidthForSlider * tt);
      setActiveSlide((ActiveSlide: any) => ActiveSlide - 1);
    }
  };

  const clickSlidenext = () => {
    if (slideGo) {
      var tt = ActiveSlide + 1;
      var hiddenContentWidth = FilterSliderContainerWidth - screenWidth;

      if (filterWidthForSlider * tt > hiddenContentWidth) {
        setTranslate((translate: any) => hiddenContentWidth);
        setActiveSlide((ActiveSlide: any) => ActiveSlide + 1);
        setslideGo(false);
      } else {
        setTranslate((translate: any) => filterWidthForSlider * tt);
        setActiveSlide((ActiveSlide: any) => ActiveSlide + 1);
      }
    } else {
      setTranslate((translate: any) => 0);
      setActiveSlide((ActiveSlide: any) => 0);
      setslideGo(true);
    }
  };

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
  /// CLICK BILLBOARD OPEN ON DOUBLE CLICK
  const superstickerz = (index: number) => {
    setsuperstickerIndex(index);
    const trapfiltersxx = [...trapfilters];
    trapfiltersxx[index] = false;
    settrapfilters(trapfiltersxx);

    setFilterUnderStickerStopFiltering(false);

    sethdfilter(true);

    setTimeout(function () {
      if (duplicateItemupload[index]) {
        const effectModexx = [...effectMode];
        effectModexx[index] = "normalx";
        seteffectMode(effectModexx);
      }
    }, 1500);

    setstartSuperSticker(true);

    setstartSuperStickerblur(true);
  };


  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [pop, setpop] = useState(false);


  ///
  ///
  ///
  /// 
  const ClickiMAGEtOBEfILTERED = (e: any, index: number) => {
    switch (e.detail) {
      case 1:

        if (Timer.current) {
          clearTimeout(Timer.current);
        }
        if (pop) {
          setpop(false);

        } else {

          setpop(true);

          Timer.current = setTimeout(() => {
            setpop(false);

          }, 2200)
        }

        break;
      case 2:
        superstickerz(index);
        break;
      case 3:
        superstickerz(index);
        break;
      case 4:
        superstickerz(index);
        break;
    }
  };

  var pcfont = 2.4;

  var mobilefont = 4.8;



  return (
    <>
      {supeFilterLoadFade ? (
        <>
          <Grid
            container
            style={{
              backgroundColor: darkmodeReducer
                ? "rgba(50,50,50,0.5)"
                : "rgba(250,250,250,0.5)",
              position: "fixed",
              top: "0px",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          ></Grid>{" "}
        </>
      ) : null}




      {selectedImage.length > 0 ? (
        <>
          {hideArrow ? null : (
            <FilterModeArrow
              filterHeight={filterHeight}
              clickSlidenext={clickSlidenext}
              clickSlideprev={clickSlideprev}
            />
          )}

          <Grid
            container
            style={{
              zIndex: 1,
              padding: "0px",
              position: "relative",
              margin: "0 auto",
              overflow: "hidden",
              left: "0px",
              height: "auto",
              paddingBottom: "0px",
              filter: startSuperStickerblur ? "blur(45px)" : "blur(0px)",
              marginTop: matchMobile ? '-2vh' : '-6vh'
            }}
          >
            <Grid container>
              {loaderArray.map((index: any) => {
                return (
                  <Grid
                    item
                    key={index}
                    style={{
                      height: "5px",
                      width: `${LoadboxWidth}px`,
                    }}
                  >
                    <div
                      className={darkmodeReducer ? "turlight" : "turdark"}
                      style={{
                        margin: "auto",
                        height: "5px",
                        width: matchMobile ? "9vw" : "2.5vw",
                        backgroundColor:
                          colortypeReducer === 0
                            ? darkmodeReducer
                              ? colorReducerdark
                              : colorReducer
                            : colorReducer,
                        opacity: 0.6,
                        borderTopRightRadius: "5px",
                        borderTopLeftRadius: "5px",
                        visibility:
                          ActiveSlide - 1 === index ? "visible" : "hidden",
                      }}
                    ></div>
                  </Grid>
                );
              })}
            </Grid>

            <animated.div style={modalanimation}>
              {selectedImage.map((imagee: any, index: any) => {
                return (

                  <div key={index} style={{ padding: "0px" }}>




                    <AdjustIcon

                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                          : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                      }
                      style={{
                        color: "#ffffff",
                        fontSize: matchTabletMobile
                          ? `${mobilefont / 2}vh`
                          : `${pcfont / 1.4}vw`,
                        marginRight: "5vw",
                        marginTop: matchMobile ? '25vh' : '12vh',
                        position: 'fixed',
                        marginLeft: matchMobile ? '4.5vh' : '2vh',
                        zIndex: 500,
                        display: interactContent[index] || interactContent2[index] ? 'block' : 'none'

                      }}
                    />

                    <img
                      onClick={(e: any) => {
                        ClickiMAGEtOBEfILTERED(e, index);
                      }}
                      src={
                        itemUploadRef.current[index]
                          ? itemUploadRef.current[index].src
                          : null
                      }
                      style={{
                        width: matchTabletMobile
                          ? wideimage
                            ? `${FilterSliderWidth}px`
                            : "auto"
                          : wideimage
                            ? `${FilterSliderWidth}px`
                            : "auto",
                        height: matchTabletMobile
                          ? wideimage
                            ? "auto"
                            : `${FilterSliderHeight}px`
                          : wideimage
                            ? "auto"
                            : `${FilterSliderHeight}px`,

                        position: "relative",
                        margin: "auto",
                        padding: "0px",

                        display: pop ? 'block' : 'none',
                        cursor: 'pointer'
                      }}
                    />



                    <img
                      ref={addpostImageRef}
                      onClick={(e: any) => {

                        ClickiMAGEtOBEfILTERED(e, index);
                      }}
                      src={
                        itemUploadRefSD.current[index]
                          ? itemUploadRefSD.current[index].src
                          : null
                      }
                      style={{
                        width: matchTabletMobile
                          ? wideimage
                            ? `${FilterSliderWidth}px`
                            : "auto"
                          : wideimage
                            ? `${FilterSliderWidth}px`
                            : "auto",
                        height: matchTabletMobile
                          ? wideimage
                            ? "auto"
                            : `${FilterSliderHeight}px`
                          : wideimage
                            ? "auto"
                            : `${FilterSliderHeight}px`,

                        position: "relative",
                        margin: "auto",
                        padding: "0px",

                        display: pop ? 'none' : 'block',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                );
              })}{" "}
            </animated.div>
          </Grid>
        </>
      ) : null}


      <Grid
        container
        style={{
          padding: "0px",
          position: "relative",
          margin: "0 auto",
          overflow: "visible",
          left: "0px",
          height: "auto",
          paddingBottom: "0px",
          filter: startSuperStickerblur ? "blur(45px)" : "blur(0px)",
        }}
      >
        <Grid
          item
          xs={12}
          md={2}
          style={{
            padding: "0px",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            padding: matchTabletMobile ? "4px" : "0px",
            marginTop: matchMobile
              ? wideimagepushMobile
                ? "-1vh"
                : "-2.8vh"
              : wideimage
                ? "1vh"
                : "0vh",
            height: `${FilterSliderHeight2}px`,
          }}
        >
          <OptionsSlider
            setConfirmUpload={setConfirmUpload}
            AllowCaption={AllowCaption}
            setstartTopicCap={setstartTopicCap}
            finalImageData={finalImageData}
            setfinalImageData={setfinalImageData}
            finalImageDataSD={finalImageDataSD}
            setfinalImageDataSD={setfinalImageDataSD}
            finalImageDataBASE64={finalImageDataBASE64}
            setfinalImageDataBASE64={setfinalImageDataBASE64}
            superzeroeffect={superzeroeffect}
            superstickerIndex={superstickerIndex}
            sethdfilter={sethdfilter}
            hdfilter={hdfilter}
            trapfilters={trapfilters}
            settrapfilters={settrapfilters}
            FilterUnderStickerStopFiltering={FilterUnderStickerStopFiltering}
            regimageholdfilter={regimageholdfilter}
            setregimageholdfilter={setregimageholdfilter}
            setcallfilter={setcallfilter}
            callfilter={callfilter}
            seteffectMode={seteffectMode}
            effectMode={effectMode}
            setactiveSticker={setactiveSticker}
            activeSticker={activeSticker}
            startSuperSticker={startSuperSticker}
            duplicateItemupload={duplicateItemupload}
            selectedImage={selectedImage}
            length={selectedImage.length}
            getImageWidth={getImageWidth}
            imageFiltersRef={imageFiltersRef}
            typeUpload={2}
            typeTop={false}
            getSliderWidthA={getSliderWidthNew}
            itemUploadRef={itemUploadRef}
            itemUploadRefThumb={itemUploadRefThumb}
            itemUploadRefSD={itemUploadRefSD}
            setsupeFilterLoadFade={setsupeFilterLoadFade}
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            height: matchMobile
              ? wideimagepushMobile
                ? "7.5vh"
                : "0.5vh"
              : wideimage
                ? "3vh"
                : screenWidth > FilterSliderContainerWidth
                  ? "1.8vh"
                  : "1vh",
          }}
        ></Grid>
      </Grid>



      {startSuperSticker ? (
        <>
          {" "}
          <animated.div
            style={{
              ...animation,
              zIndex: 5,
              position: "relative",
            }}
          >
            <Grid
              className={
                darkmodeReducer
                  ? "dontallowhighlighting"
                  : "dontallowhighlighting  "
              }
              container
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0vh",
                zIndex: 11,
              }}
            >
              <Superstickers


                ratiox={ratiox}
                callInnerButton={callInnerButton}
                setCurrentTimestamp={setCurrentTimestamp}
                currentTimestamp={currentTimestamp}
                setDuration={setDuration}

                setCurrentTimestamp2={setCurrentTimestamp2}
                currentTimestamp2={currentTimestamp2}
                setDuration2={setDuration2}

                setvidBackUpURL={setvidBackUpURL}
                vidBackUpURL={vidBackUpURL}
                vidBackUpURL2={vidBackUpURL2}
                setvidBackUpURL2={setvidBackUpURL2}
                interactContentvideo2={interactContentvideo2}
                interactContentvideo={interactContentvideo}
                interactContenttype={interactContenttype}
                interactContenttype2={interactContenttype2}

                setinteractContentvideo2={setinteractContentvideo2}
                setinteractContentvideo={setinteractContentvideo}
                setinteractContenttype={setinteractContenttype}
                setinteractContenttype2={setinteractContenttype2}
                setradius1={setradius1}
                setradius2={setradius2}
                interactContentBlob={interactContentBlob}
                setinteractContentBlob={setinteractContentBlob}
                interactContent2Blob={interactContent2Blob}
                setinteractContent2Blob={setinteractContent2Blob}
                cropInitialIn2={cropInitialIn2}
                setcropInitialIn2={setcropInitialIn2}
                setinteractContent2={setinteractContent2}
                interactContent2={interactContent2}
                cropInitialIn={cropInitialIn}
                setcropInitialIn={setcropInitialIn}
                setinteractContent={setinteractContent}
                interactContent={interactContent}
                superzeroeffect={superzeroeffect}
                setsuperzeroeffect={setsuperzeroeffect}
                superzeroeffectonce={superzeroeffectonce}
                setsuperzeroeffectonce={setsuperzeroeffectonce}
                FilterUnderStickerStopFiltering={
                  FilterUnderStickerStopFiltering
                }
                setFilterUnderStickerStopFiltering={
                  setFilterUnderStickerStopFiltering
                }
                callfilter={callfilter}
                setcallfilter={setcallfilter}
                regimageholdfilter={regimageholdfilter}
                regimageholdfilterxx={regimageholdfilterxx}
                seteffectMode={seteffectMode}
                effectMode={effectMode}
                setactiveSticker={setactiveSticker}
                duplicateItemupload={duplicateItemupload}
                setduplicateItemupload={setduplicateItemupload}
                setsuperStickerActivated={setsuperStickerActivated}
                setstartSuperStickerblur={setstartSuperStickerblur}
                setstartSuperSticker={setstartSuperSticker}
                index={superstickerIndex}
                itemUploadRef={itemUploadRef}
                startSuperSticker={startSuperSticker}
              />
            </Grid>{" "}
          </animated.div>
        </>
      ) : null}

      {startTopicCap ? (
        <>
          {" "}
          <animated.div
            style={{
              ...animationxx,
              zIndex: 5,
              position: "relative",
            }}
          >
            <Grid
              className={
                darkmodeReducer
                  ? "dontallowhighlighting"
                  : "dontallowhighlighting  "
              }
              container
              style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0vh",
                zIndex: 11,
              }}
            >


              <Caption
                startTopicCap={startTopicCap}
                audioStart={audioStart}
                setaudioStart={setaudioStart}
                audioEnd={audioEnd}
                setaudioEnd={setaudioEnd}
                audioEndDuration={audioEndDuration}
                setaudioDuration={setaudioDuration}
                backgroudAudio={backgroudAudio}

                currentTimestamp2={currentTimestamp2}
                Durationx2={Durationx2}
                currentTimestamp={currentTimestamp}
                Durationx={Durationx}
                vidBackUpURL={vidBackUpURL}
                vidBackUpURL2={vidBackUpURL2}
                captionvalues={captionvalues}
                setcaptionvalues={setcaptionvalues}
                setAllowCaption={setAllowCaption}
                setAudioUrl={setAudioUrl}
                AudioUrl={AudioUrl}

                setAudioname={setAudioname}
                Audioname={Audioname}

                ShowAudio={ShowAudio}
                setShowAudio={setShowAudio}

                setinteractContentAudio={setinteractContentAudio}
                interactContentAudio={interactContentAudio}

                setinteractContentAudiotype={setinteractContentAudiotype}
                interactContentAudiotype={interactContentAudiotype}

                interactContenttype2={interactContenttype2}
                interactContenttype={interactContenttype}
                interactContentvideo2={interactContentvideo2}
                interactContentvideo={interactContentvideo}
                radius1={radius1}
                radius2={radius2}
                interactContent={interactContentBlob}
                setinteractContent={setinteractContentBlob}
                interactContent2={interactContent2Blob}
                setinteractContent2={setinteractContent2Blob}

                cropInitialIn2={cropInitialIn2}
                setcropInitialIn2={setcropInitialIn2}

                cropInitialIn={cropInitialIn}
                setcropInitialIn={setcropInitialIn}


                closeUploadModal={closeUploadModal}
                finalImageData={finalImageData}
                finalImageDataSD={finalImageDataSD}
                finalImageDataBASE64={finalImageDataBASE64}
                selectedImage={selectedImage}
                setstartTopicCap={setstartTopicCap}
              />
            </Grid>{" "}
          </animated.div>
        </>
      ) : null}




      {startSuperSticker || startTopicCap ?
        null : <>

          <Grid
            className={
              darkmodeReducer
                ? "dontallowhighlighting"
                : "dontallowhighlighting  "
            }
            xs={12}
            item
            style={{
              height: "0px",
              position: "fixed",
              top: matchMobile ? '14vh' : "20vh",
              zIndex: 11,
              left: matchMobile ? '' : '18vw',
              right: matchMobile ? '7vw' : '',
            }}
          >
            <TitleIcon
              onClick={() => {
                superstickerz(0);

                if (matchMobile) {

                  setTimeout(() => { setcallInnerButton(1); }, 1000)
                } else {

                  setTimeout(() => { setcallInnerButton(1); }, 200)
                }


              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: "#ffffff",
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
              }}
            />


          </Grid>


          <Grid
            className={
              darkmodeReducer
                ? "dontallowhighlighting"
                : "dontallowhighlighting  "
            }
            xs={12}
            item
            style={{
              height: "0px",
              position: "fixed",
              top: matchMobile ? '25vh' : "35vh",
              zIndex: 11,
              left: matchMobile ? '' : '18vw',
              right: matchMobile ? '7vw' : '',
            }}
          >
            <InsertPhotoIcon
              onClick={() => {
                superstickerz(0);

                if (matchMobile) {

                  setTimeout(() => { setcallInnerButton(2); }, 1000)
                } else {

                  setTimeout(() => { setcallInnerButton(2); }, 200)
                }




              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: "#ffffff",
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
              }}
            />


          </Grid>

          <Grid
            className={
              darkmodeReducer
                ? "dontallowhighlighting"
                : "dontallowhighlighting  "
            }
            xs={12}
            item
            style={{
              height: "0px",
              position: "fixed",
              top: matchMobile ? '36vh' : "50vh",
              zIndex: 11,
              left: matchMobile ? '' : '18vw',
              right: matchMobile ? '7vw' : '',
              visibility: matchMobile ? 'visible' : 'visible'
            }}
          >
            <TouchAppIcon
              onClick={() => {
                superstickerz(0);



                if (matchMobile) {

                  setTimeout(() => { setcallInnerButton(3); }, 1000)
                } else {

                  setTimeout(() => { setcallInnerButton(3); }, 200)
                }


              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: "#ffffff",
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
              }}
            />

          </Grid>


        </>
      }

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChangex}
      />
      {startSuperSticker || startTopicCap ?
        null :

        <>
          <Grid
            className={
              darkmodeReducer
                ? "dontallowhighlighting"
                : "dontallowhighlighting  "
            }
            xs={12}
            item
            style={{
              height: "0px",
              position: "fixed",
              top: matchMobile ? '3vh' : "21vh",
              zIndex: 11,
              right: matchMobile ? '7vw' : '18vw',
            }}
          >
            <MusicNoteIcon
              onClick={
                () => {

                  if (interactContentAudiotype === 1) {

                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  } else {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }

                  }
                }
              }
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: "#ffffff",
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
              }}
            />

            {interactContentAudiotype === 1 ?

              <p

                className={


                  darkmodeReducer
                    ? "zuperkingIcon "
                    : " zuperkingIcon  "
                }
                style={{
                  marginTop: matchMobile ? '-6vh' : '5vh',
                  fontFamily: "Roboto Condensed",
                  fontWeight: 'bolder',
                  fontSize: '2.4vh',
                  filter: darkmodeReducer
                    ? "drop-shadow(1.2px 0.1px 1.92px rgba(255, 255, 255, 0.6))"
                    : "drop-shadow(1.2px 0.1px 1.92px rgba(41, 53, 70, 8.35))",
                  marginLeft: matchMobile ? '-80vw' : '2vw',
                  position: 'absolute',
                  overflow: 'hidden',
                  width: matchMobile ? '78vw' : '18vw',
                  color: matchMobile ? '#ffffff' : darkmodeReducer ? '#ffffff' : '#000000'

                }}> {Audioname}</p> : <p style={{
                  marginTop: '5vh',
                  fontFamily: "Roboto Condensed",
                  fontWeight: 'bolder', fontSize: '3vh',
                  filter: darkmodeReducer
                    ? "drop-shadow(1.2px 0.1px 1.92px rgba(255, 255, 255, 0.6))"
                    : "drop-shadow(1.2px 0.1px 1.92px rgba(41, 53, 70, 8.35))",
                  marginLeft: '-1.4vw',
                  visibility: hidetextz ? 'hidden' : 'visible',
                  color: darkmodeReducer ? '#ffffff' : '#000000'

                }}></p>}

          </Grid >

          <Grid
            item
            xs={12}
            style={{
              height: "0px",
              position: "fixed",
              top: matchMobile ? '14vh' : "45vh",
              zIndex: 11,
              right: matchMobile ? '9vw' : '4vw',
              display: interactContentAudiotype === 1 ? 'block' : 'none'
            }}
          >


            <CircleIcon
              onClick={
                () => {


                  if (backgroudAudio === 1) {
                    setbackgroudAudio(0);
                  } else {
                    setbackgroudAudio(1);
                  }
                }
              }
              className={


                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                fontSize: matchTabletMobile ? `${mobilefont}vh` : `${pcfont - 1.4}vw`,
                marginRight: "1vw",

                color: backgroudAudio === 0 ? 'green' : 'red'
              }}

            />
            <span

              onClick={
                () => {


                  if (backgroudAudio === 1) {
                    setbackgroudAudio(0);
                  } else {
                    setbackgroudAudio(1);
                  }
                }
              }

              className={


                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }

              style={{
                position: 'relative', // Absolute position for the text
                top: '-10%', // Center vertically
                fontFamily: "Roboto Condensed",
                fontSize: matchTabletMobile ? `${mobilefont - 0.5}vh` : `1.2vw`,
                color: darkmodeReducer ? '#ffffff' : '#000000',
                visibility: matchMobile ? showpdi ? 'visible' : 'hidden' : 'visible'
              }}
            >
              {backgroudAudio === 0 ? ' Play During Interaction' : 'Stop During Interaction'}
            </span>


          </Grid>

        </>

      }


      {
        ShowAudio ? <AudioEditor
          setaudioDuration={setaudioDuration}
          audioStart={audioStart}
          audioEnd={audioEnd}
          setaudioStart={setaudioStart}
          setaudioEnd={setaudioEnd}
          setAudioUrl={setAudioUrl}
          setAudioname={setAudioname}
          AudioUrl={AudioUrl}
          ShowAudio={ShowAudio}
          setShowAudio={setShowAudio}
          setinteractContentAudio={setinteractContentAudio}
          setinteractContentAudiotype={setinteractContentAudiotype}
        /> : null
      }


      {
        startSuperSticker ? null :

          startTopicCap ? null :

            <Grid
              item
              xs={6}
              style={{
                padding: "0px",
                height: '0px',

              }}
            >





              <CheckIcon
                onClick={() => {
                  /// setAllowCaption(true);

                  setConfirmUpload(true);
                }}
                className={
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                    : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
                }
                style={{
                  color: "#ffffff",
                  fontSize: matchTabletMobile
                    ? `${mobilefont}vh`
                    : `${pcfont + 2.1}vw`,
                  left: matchMobile ? '7%' : "87%",
                  position: 'absolute',
                  borderRadius: '80%',
                  zIndex: 2,
                  bottom: matchMobile ? '36vh' : '28vh',
                  display: startTopicCap ? 'none' : 'block',

                }}
              />



            </Grid>
      }





      <Grid
        container
        style={{ height: "100%", position: "fixed", top: "-800vh" }}
      >
        <Grid
          item
          xs={12}
          style={{
            padding: "0px",
          }}
        >
          <Grid
            item
            ref={getScreenWidthRef}
            xs={12}
            style={{ padding: "0px", width: "100%" }}
          ></Grid>
          <Grid
            item
            ref={getCropHeightRef}
            xs={5}
            style={{ padding: "0px", height: matchMobile ? "72%" : "78%" }}
          ></Grid>

          <Grid
            item
            ref={getCropHeightRefmobile}
            xs={12}
            style={{ padding: "0px", height: "78%" }}
          ></Grid>

          <Grid
            item
            ref={getCropHeightRef2}
            xs={5}
            style={{ padding: "0px", height: matchMobile ? "23%" : "24%" }}
          ></Grid>
        </Grid>
      </Grid>



      {ConfirmUpload ? startTopicCap ? null :
        <Grid
          container

          style={{
            height: "100%", position: "fixed", top: "2vh", padding: "0px",
            zIndex: 200,

            backgroundColor: darkmodeReducer ? 'rgb(000,000,000,0.64)' : 'rgb(180,180,180,0.8)'
          }}
        >
          <Grid
            item
            xs={4}
            style={{
              padding: '0px'
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={4}
            style={{
              marginTop: '12vh',

              padding: '0px',
              backgroundColor: darkmodeReducer
                ? "rgba(50,50,50,0.98)"
                : "rgba(200,200,200,0.85)",
              height: '46vh',
              borderRadius: '20px',

            }}
          >

            <Grid
              item
              xs={12}
              style={{
                padding: '0px',
                textAlign: 'center',
                fontFamily: "Roboto Condensed",
                color: darkmodeReducer ? '#ffffff' : '#000000'
              }}
            >Upload Post</Grid>



            <CloseIcon
              onClick={() => {
                setConfirmUpload(false);

              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: colorReducer,
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
                left: matchMobile ? '86%' : "62%",
                position: 'absolute',
                borderRadius: '80%',
                zIndex: 2,
                bottom: matchMobile ? '64vh' : '80vh',
                display: startTopicCap ? 'none' : 'block',

              }}
            />

            <CheckIcon
              onClick={() => {
                setAllowCaption(true);

              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: colorReducer,
                fontSize: matchTabletMobile
                  ? `${mobilefont}vh`
                  : `${pcfont}vw`,
                left: matchMobile ? '86%' : "62%",
                position: 'absolute',
                borderRadius: '80%',
                zIndex: 2,
                bottom: matchMobile ? '44vh' : '60vh',
                display: startTopicCap ? 'none' : 'block',

              }}
            />

            <CaptionText
              updatecaptiontop={updatecaptiontop}
              sizex={sizex} font1={font1} font2={font2}
              captionvalues={captionvalues}
              transform={transform} width={width} />

          </Grid>
          <Grid
            item
            xs={4}
            style={{
              padding: '0px'
            }}
          ></Grid>

        </Grid> : null
      }




    </>
  );
}

export const FilterMode = React.memo(FilterModex);
