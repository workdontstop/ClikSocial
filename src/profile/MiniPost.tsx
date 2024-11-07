import React, { useRef, useState, useEffect, useCallback } from "react";
import { Paper, Grid, Box } from "@material-ui/core";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSpring, animated, useTransition } from "react-spring";
import Crop54Icon from "@mui/icons-material/Crop54";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import ViewArrayIcon from "@mui/icons-material/ViewArray";
import CropIcon from "@mui/icons-material/Crop";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import AspectRatioTwoToneIcon from "@mui/icons-material/AspectRatioTwoTone";
import StarIcon from "@mui/icons-material/Star";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import AlbumIcon from "@mui/icons-material/Album";
import BentoIcon from "@mui/icons-material/Bento";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import VideocamIcon from '@material-ui/icons/Videocam';


import { Tutorial } from "../Tutorial";


import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import AddIcon from "@mui/icons-material/Add";
import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType, Updatepagenum
} from ".././GlobalActions";
import { Connect } from "./Connect";
import { Slider } from "./Slider";
import { useInView } from "react-intersection-observer";
import { isSafari } from "react-device-detect";

function MiniPostx({
  pey,
  addPostItemsRef,
  onPostsItemload,
  post,
  length,
  itemheight,
  itemheighthold,
  postbackheight,
  itemcroptype,
  itemFinalPostHeight,
  onPostsItemClicked,
  itemCLICKED,
  addpostDivRefx,
  postDatainner,
  itemOriginalPostHeight,
  ActiveAutoPlay,
  setActiveAutoPlay,
  AUTOSlideLongImages,
  postDivRefx,
  onLoadDataOnce,
  postDatainnerThumb,
  setcountAutoplay,
  countAutoplay,
  second,
  setsecond,
  secondgo,
  setsecondgo,
  scrollToPostx,
  OpenModalForm,
  setDiscussionImage,
  postData,
  setCommentPostid,
  miniLayoutPost,
  setStopBodyScroll,
  setminiProfile,
  postItemsRef,
  miniProfile,
  zoomClickedIndex,
  setzoomClickedIndex,
  sliderIndexMini,
  setSliderIndexMini,
  paperPostScrollRef,
  postDatainnerInteraction2,
  postDatainnerInteraction1,
  clearAllTimers,
  AllowAllHdImagesShow,
  InitializingAutoPlayIndex,
  WebsiteMode,





}: any) {
  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  var allow4dev = "";

  if (REACT_APP_APPX_STATE === "dev") {
    allow4dev = "http://localhost:1000";
  } else {
    allow4dev = "";
  }

  const ShowBigPlay = false;

  const [BigCircle, setBigCircle] = useState(false);


  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [opacityController, setopacityController] = useState<boolean>(false);

  const [StopSpring, setStopSpring] = useState(false);
  const [showIndex, setshowIndex] = useState(false);

  const [profileImagethumbTop, setprofileImagethumbTop] = useState<number>(0);
  const [profileImagethumbLeft, setprofileImagethumbLeft] = useState<number>(0);

  const animationmenu = useSpring({
    config: {
      duration: 2,
    },
    opacity: opacityController ? 1 : StopSpring ? 1 : 0,
    transform: opacityController
      ? `translateY(0%)`
      : StopSpring
        ? `translateY(0%)`
        : `translateY(150%)`,
  });

  ///
  ///
  ///
  /// SPRING TRANSITION WITH INDEX

  useEffect(() => {
    setTimeout(() => {
      setStopSpring(true);
    }, 30000);
  }, [post]);



  const [AllowFadoutMiniThumb, setAllowFadoutMiniThumb] = useState(false);

  const historyBoy = () => {



    var tt = 0;

    var n, d;

    n = '';
    d = {
      type: 1,
      id: 0,
      index: 400,
      data: postData,
      innerid: 0,
      pagenumReducer: pagenumReducer,
    };
    window.history.replaceState(d, "", `${n}`);

    let modalName = ``;

    var dd = {
      type: 1,
      id: 0,
      innerid: 0,
      pagenumReducer: pagenumReducer,
    };
    window.history.pushState(dd, "", modalName);

  }

  useEffect(() => {


    setTimeout(() => {
      if (zoomClickedIndex === 0) {
        setshowIndex(false);
      } else {
        if (zoomClickedIndex - 1 === pey) {
          setshowIndex(true);
        } else {
          setshowIndex(false);
        }

        if (sliderIndexMini > 400) {
        } else {
          scrollToPostx(zoomClickedIndex - 1);
        }
        setzoomClickedIndex(0);
      }
    }, 500);
  }, [miniProfile, sliderIndexMini]);




  const minClicked = () => {

    ///historyBoy();

    setzoomClickedIndex(pey + 1);
    setSliderIndexMini(0);
    setminiProfile(false);

    ///dispatch(UpdateTutorials(4, false));
  }


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

  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      activateLoader: boolean;
      historyscroll: number;
      interactContent: any;
      interact: boolean;
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


  const profileImageref = useRef<any>();

  var textback = "";
  if (darkmodeReducer) {
    textback = "caption-darkPost";
  } else {
    textback = "caption-lightPost";
  }

  var themepadding = darkmodeReducer ? "turdarkemo" : "turlightemo";

  const [LImiter, setLImiter] = useState<boolean>(false);

  useEffect(() => {
    if (onLoadDataOnce[pey]) {
      if (LImiter) {
      } else {
        setTimeout(() => {
          setopacityController(true);
        }, pey * 250);
        setLImiter(true);
      }
    }
  }, [onLoadDataOnce, LImiter]);



  const [Hideonload, setHideonload] = useState(true);

  const [FavIcon, setFavIcon] = useState(false);

  const [CommSho, setCommsho] = useState(false);



  useEffect(() => {

    if (post.funny > 0 || post.care > 0) {

      setFavIcon(true)
    }
    else if (post.commentCount > 0) {
      setCommsho(true)
    }
    else {
      setCommsho(false);
      setFavIcon(false)
    }


    setTimeout(() => {
      setHideonload(false);
    }, 3500);
    if (post) {
      setAdded(post.favCount);
    }
  }, [post]);


  var postprofiletop = matchPc ? "0.9vh" : matchTablet ? "-9.3vh" : "3.3vh";
  var posttopicfont = matchPc ? "1.25vw" : matchTablet ? "1.8vh" : "1.6vh";

  var postusernamefont = matchPc ? "0.98rem" : "0.84rem";

  var postDateFont = matchPc ? "0.75vw" : "1.6vh";

  var postusernameleft = matchPc ? "41.1%" : matchTablet ? "15.5%" : "20%";

  var postusernameleftx = matchPc ? "15.5%" : matchTablet ? "15.5%" : "20%";

  var postcirclefont = matchPc ? ShowBigPlay ? '1.4vw' : "0.7vw" : matchTablet ? "1.2vw" : ShowBigPlay ? '3vh' : "1.1vh";
  var postcirclefontx = matchPc ? ShowBigPlay ? '2.2vw' : "1.4vw" : matchTablet ? "1.2vw" : ShowBigPlay ? '4.1vh' : "2.2vh";

  var dotspace = matchPc ? "1.7vw" : matchTablet ? "1.9vh" : "1.9vh";
  var dotspace2 = matchPc ? "0.9vw" : matchTablet ? "1.9vh" : "1.9vh";

  var postusernametop = matchPc ? "-6vh" : matchTablet ? "-11.9vh" : "-3.5vh";
  var postusernametopx = matchPc ? "3.1vh" : matchTablet ? "-11.9vh" : "1.8vh";


  var postusernametopxTI = matchPc ? "3.1vh" : "-2.3vh";

  var profilewidth = matchPc
    ? miniLayoutPost
      ? "12%"
      : "12.5%"
    : matchTablet
      ? "12.5%"
      : "15%";

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

  const calculateconnectPosition = useCallback(() => { }, []);


  const [Added, setAdded] = useState(100);

  const dispatch = useDispatch();

  const GoToMember = () => {

    dispatch(Updatepagenum(0));

    if (memeberPageidReducer === post.sender) {
    } else {
      ///
      dispatch(UserInfoUpdateMEMBER(post.sender));
      //
      var tt = paperPostScrollRef.current.scrollTop;

      var n, d;

      if (memeberPageidReducer === 0) {
        n = usernameReducer;
        d = {
          type: 0,
          id: 0,
          index: tt,
          data: postData,
          innerid: 0,
          pagenumReducer: pagenumReducer,
        };
      } else {
        n = MemberProfileDataReducer.username;
        d = {
          type: 1,
          id: memeberPageidReducer,
          index: tt,
          data: postData,
          innerid: 0,
          pagenumReducer: pagenumReducer,
        };
      }

      window.history.replaceState(d, "", `${n}`);

      let modalName = `${post.username}`;

      var dd = {
        type: 1,
        id: post.sender,
        innerid: 0,
        pagenumReducer: pagenumReducer,
      };
      window.history.pushState(dd, "", modalName);
    }
  };


  const [HasInteractivity, setHasInteractivity] = useState(false);


  const containsURL = (str: any) => {
    // Regular expression pattern to match URLs (simplified, not covering all cases)
    const urlPattern = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/i;

    // Test if the string contains a URL using the regular expression
    return urlPattern.test(str);
  };



  useEffect(() => {



    if (post.interact1a) {
      setHasInteractivity(true);
      ///alert(post.interact1a);
    } else {

    }



    if (post.interact2a) {
      setHasInteractivity(true);
      ///alert(post.interact1a);
    } else {

    }


  }, [post, itemCLICKED]);





  function formatClikBateTime(dateTime: any) {
    const now: any = new Date();
    const timestamp: any = new Date(dateTime);
    const timeDiff = Math.abs(now - timestamp) / 1000;

    if (timeDiff < 60) {
      return 'just now';
    } else if (timeDiff < 3600) {
      const minutes = Math.floor(timeDiff / 60);
      return `${minutes}m ago`;
    } else if (timeDiff < 86400) {
      const hours = Math.floor(timeDiff / 3600);
      return `${hours}h ago`;
    } else if (timeDiff < 2592000) {
      const days = Math.floor(timeDiff / 86400);
      return `${days}d ago`;
    } else if (timeDiff < 31536000) {
      const months = Math.floor(timeDiff / 2592000);
      return `${months}mo ago`;
    } else {
      const years = Math.floor(timeDiff / 31536000);
      return `${years}y ago`;
    }
  }


  var PostTime = formatClikBateTime(post.time);





  const [isWide, setIsWide] = useState(false);

  const handleImageLoad = (e: any) => {


    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (naturalWidth > naturalHeight) {
      setIsWide(true);
    }


  };




  return (
    <>
      <animated.div style={animationmenu}>


        <div
          ref={addpostDivRefx}
          style={{
            padding: "0px",
            width: "100%",
            marginTop: pey === 0 || pey === 1 ? "-0.5px" : "-1.1px",
            zIndex: length - 1 - pey,
            paddingLeft: matchMobile ? "0px" : "0px",
            paddingRight: matchMobile ? "0px" : "0px",
            paddingTop: matchMobile ? "10px" : "3px",
            scrollSnapAlign: 'start',


          }}
        >



          {/*///////////////////////////////////////////////////////////////////////////POST DATA*/}

          {matchMobile ? <>
            {" "}
            {post.interacttype1 === 1 || post.interacttype2 === 1 ?
              <VideocamIcon
                onClick={() => {


                }}
                className={HasInteractivity ? darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight heartbeat"
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark heartbeat " :
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                    : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "}

                style={{
                  color: darkmodeReducer
                    ? "#ffffff" : '#000000',
                  transform: matchMobile ? 'scale(0.4)' : 'scale(0.58)',
                  position: "absolute",
                  zIndex: 30,
                  backgroundColor: darkmodeReducer
                    ? "rgba(41,41,41,0.86)"
                    : "rgba(205,205,205,0.9) ",
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  padding: "2px",
                }}
              /> :
              <div
                onClick={() => {
                  ///startplay();
                }}
                style={{
                  position: "absolute",
                  zIndex: 30,
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  height: "0px",
                  padding: "0px",
                }}
              >
                <span
                  className={HasInteractivity ? "zuperkingtur heartbeat" : darkmodeReducer ? "turx" : "turdark"}
                  style={{
                    padding: "7px",
                    paddingLeft: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    paddingRight: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    backgroundColor: post.color1,
                    borderRadius: "50%",
                    fontSize: '0.8vw',
                    display: HasInteractivity ? 'block' : 'none',
                    color: darkmodeReducer ? "#ffffff" : "#000000",
                    transform: matchMobile ? 'scale(0.15)' : 'scale(0.3)'
                  }
                  }
                >
                  <span style={{ opacity: HasInteractivity ? 0 : 1 }}>{0}</span>
                </span>
              </div>}

            <AudiotrackIcon
              onClick={() => {


              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "}

              style={{
                color: darkmodeReducer ? '#ffffff' : '#ffffff',
                transform: matchMobile ? 'scale(0.6)' : 'scale(0.9)',
                position: "absolute",
                zIndex: 30,
                backgroundColor: post.color1,
                left: '40vw',
                cursor: "pointer",
                top: matchMobile ? '1.5vh' : "5vh",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bolder",
                display: post.audioData ? 'block' : 'none',
                opacity: 1,
                padding: "2px",
              }}
            />


          </> : <>
            {" "}
            {post.interacttype1 === 1 || post.interacttype2 === 1 ?
              <VideocamIcon
                onClick={() => {


                }}
                className={HasInteractivity ? darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight heartbeat"
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark heartbeat " :
                  darkmodeReducer
                    ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                    : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "}

                style={{
                  color: darkmodeReducer
                    ? "#ffffff" : '#000000',
                  transform: matchMobile ? 'scale(0.4)' : 'scale(0.58)',
                  position: "absolute",
                  zIndex: 30,
                  backgroundColor: darkmodeReducer
                    ? "rgba(41,41,41,0.86)"
                    : "rgba(205,205,205,0.9)",
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  padding: "2px",
                }}
              /> :
              <div
                onClick={() => {
                  ///startplay();
                }}
                style={{
                  position: "absolute",
                  zIndex: 30,
                  left: matchMobile ? '1vh' : 30,
                  cursor: "pointer",
                  top: matchMobile ? '1vh' : "5vh",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bolder",
                  opacity: 1,
                  height: "0px",
                  padding: "0px",
                }}
              >
                <span
                  className={HasInteractivity ? "zuperkingtur heartbeat" : darkmodeReducer ? "turx" : "turdark"}
                  style={{
                    padding: "7px",
                    paddingLeft: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    paddingRight: HasInteractivity ? matchMobile ? '3.3vw' : "0.9vw" : '10px',
                    backgroundColor: post.color1,
                    borderRadius: "50%",
                    fontSize: "0.92vw",
                    display: HasInteractivity ? 'block' : 'none',
                    color: darkmodeReducer ? "#ffffff" : "#000000",
                    transform: matchMobile ? 'scale(0.15)' : 'scale(0.3)'
                  }
                  }
                >
                  <span style={{ opacity: HasInteractivity ? 0 : 1 }}>{0}</span>
                </span>
              </div>}

            <AudiotrackIcon
              onClick={() => {


              }}
              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zupermenulight "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zupermenudark  "}

              style={{
                color: darkmodeReducer ? '#ffffff' : '#ffffff',
                transform: 'scale(0.9)',
                position: "absolute",
                zIndex: 30,
                backgroundColor: post.color1,
                left: '23vw',
                cursor: "pointer",
                top: "5vh",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bolder",
                display: post.audioData ? 'block' : 'none',
                opacity: 1,
                padding: "2px",
              }}
            />


          </>}
          {" "}


          <div>



            <img
              onLoad={handleImageLoad}
              onClick={() => {

                /// historyBoy();
                setzoomClickedIndex(pey + 1);
                setSliderIndexMini(0);
                setminiProfile(false);
              }}
              className={

                AllowAllHdImagesShow ? darkmodeReducer ? "turlightpostdar   fadeboyout" : "turlightpostlight fadeboyout " :
                  darkmodeReducer ? "turlightpostdar  " : "turlightpostlight "
              }


              src={`${REACT_APP_CLOUNDFRONT}${postDatainnerThumb[pey][showIndex ? (sliderIndexMini > 400 ? 0 : sliderIndexMini) : 0
              ]}`}

              alt="a Clikbate post "
              style={{

                cursor: "pointer",
                width: "100%",
                height: matchMobile ? isWide ? '19.5vh' : '19.5vh' : '58vh',
                position: AllowAllHdImagesShow ? "absolute" : 'relative',
                padding: "0px",
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                borderRadius: '0vh',
                zIndex: 0,

              }}

            />



            <Grid container style={{
              height: matchMobile ? '40vh' : '40vh',
              marginTop: matchMobile ? '50%' : '77%',
              width: '100%',
              zIndex: '0',
              position: 'absolute',
              scrollSnapAlign: 'end',
              opacity: 0,


            }}>


              <Grid item xs={12} style={{
                padding: "0px",
                width: "100%",

              }}>


              </Grid>

            </Grid>





            {AllowAllHdImagesShow ? <img
              onLoad={handleImageLoad}
              onClick={() => {
                minClicked();
              }}
              className={
                darkmodeReducer ? "turlightpostdark fadeboyinInt" : "turlightpostlight fadeboyinInt"
              }


              src={`${REACT_APP_CLOUNDFRONT}${post.item2}`}

              alt="a Clikbate post "
              style={{

                cursor: "pointer",
                width: "100%",
                height: matchMobile ? isWide ? '19.5vh' : '19.5vh' : '58vh',
                position: "relative",
                padding: "0px",
                objectFit:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "cover"
                    : "cover",
                objectPosition:
                  itemcroptype[pey] === 1 || itemcroptype[pey] === 2
                    ? "50% top"
                    : "50% 50",
                borderRadius: '0vh',
                zIndex: 1,



              }}

            /> : null}




          </div>


        </div>
      </animated.div >
    </>
  );
}

export const MiniPost = React.memo(MiniPostx);
