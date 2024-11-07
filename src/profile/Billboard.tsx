import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Box } from "@material-ui/core";

import { DarkmodeToggleAction } from ".././GlobalActions";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { SliderBillboard } from "./SliderBillboard";
import AddIcon from "@mui/icons-material/Add";
import { usePalette } from "react-palette";
import { UpdateColorAction } from ".././GlobalActions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType,
  UpdateSign
} from ".././GlobalActions";




import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { encodeBase64 } from '../profile/utils'; // Ensure this is the correct path to your utils




function Billboardx({
  OpenModalForm,
  click,
  billboardx,
  billboardserverswitch,
  billdefaultbill,
  setDiscussionImage,
  setCommentPostid,
  setconnectTemplateGo,
  x,
  postData,
  showModalFormMenu,
  setshowModalFormMenu, sliderIndex,
  setSliderIndex,
  minimise,

  snapallow,
  setsnapallow
}: any): JSX.Element {
  ///
  ///
  ///
  /// USE DISPATCH
  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      id: number;
      image: string;
      username: string;
      quote: string;
      billboard1: string;
      billboard2: string;
      billboardthumb1: string;
      billboardthumb2: string;
      fans: number;
      favorites: number;
      memeberPageid: number;
      MemberProfileData: any;
      billboardstate: number;
    };
  }
  const {
    id,
    image,
    username,
    quote,
    billboard1,
    billboard2,
    billboardthumb1,
    billboardthumb2,
    fans,
    favorites,
    memeberPageid,
    MemberProfileData,
    billboardstate
  } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));

  const [usernameReducer, setusernameReducer] = useState("");

  const idReducer = id;
  const imageReducer = image;

  const billboard1Reducer = billboard1;
  const billboardstateReducer = billboardstate;
  const billboard2Reducer = billboard2;
  const billboardthumb1Reducer = billboardthumb1;
  const billboardthumb2Reducer = billboardthumb2;
  const fansReducer = fans;


  var billboardImagesnnz = [
    billboard1Reducer,
    billboard2Reducer,
  ];




  var billboardImagesnnzthumb = [
    billboardthumb1Reducer,
    billboardthumb2Reducer,
  ];




  const [billboardBlank, setbillboardBlank] =
    useState(billboardImagesnnz);

  const [billboardBlankthumb, setbillboardBlankthumb] =
    useState(billboardImagesnnzthumb);





  useEffect(() => {

    var billboardImagesnnzc = [
      billboard1Reducer,
      billboard2Reducer,
    ];

    var billboardImagesnnzthumbc = [
      billboardthumb1Reducer,
      billboardthumb2Reducer,
    ];


    setbillboardBlank(billboardImagesnnzc);
    setbillboardBlankthumb(billboardImagesnnzthumbc);

  }, [
    billboard1Reducer,
    billboard2Reducer,
    billboardthumb1Reducer,
    billboardthumb2Reducer,])



  const [quoteReducer, setquoteReducer] = useState("");
  const [favoritesReducer, setfavoritesReducer] = useState(0);
  const [hidefanReducer, sethidefanReducer] = useState(false);


  const [imageReducerThumb, setimageReducerThumb] = useState("");

  // scrollSnapAlign: minimise ? 'none' : "start",

  const billboardImagesnn = ["", ""];


  const [billboardImages, setbillboardImages] = useState(billboardImagesnn);

  const [billboardthumbImages, setbillboardthumbImages] =
    useState(billboardImagesnn);


  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);



  const ChangeProfile = useCallback(() => {

    if (Timervv.current) {
      clearTimeout(Timervv.current);
    }

    Timervv.current = setTimeout(() => {
      var billboardImagesxx = [billboard1, billboard2];
      var billboardImagesxxT = [billboardthumb1, billboardthumb2];

      var billboardImageszz = [
        MemberProfileData.userbillboard1,
        MemberProfileData.userbillboard2,
      ];


      var billboardImageszzT = [
        MemberProfileData.userbillboardthumb1,
        MemberProfileData.userbillboardthumb2,
      ];


      if (memeberPageid === 0 || idReducer === memeberPageid) {

        setbillboardthumbImages(billboardImagesxxT);
        setbillboardImages(billboardImagesxx);
        setusernameReducer(username);
        setquoteReducer(quote);
        setfavoritesReducer(favorites);
      } else {
        setbillboardthumbImages(billboardImageszzT);
        setbillboardImages(billboardImageszz);
        setusernameReducer(MemberProfileData.username);
        setquoteReducer(MemberProfileData.userquote);
        setfavoritesReducer(MemberProfileData.favorites);
      }

    }, 1500)
  }, [idReducer, memeberPageid, billboardstateReducer, billboard1, billboard2, username,
    quote, favorites, billboardthumb1, billboardthumb2, MemberProfileData]);

  useEffect(() => {

    ///alert(MemberProfileData.userbillboardthumb1)
    ChangeProfile();

  }, [MemberProfileData, idReducer, memeberPageid]);

  useEffect(() => {
    ChangeProfile();
  }, [image]);


  useEffect(() => {
    ChangeProfile();
  }, [billboardstateReducer, billboard1, billboard2]);


  useEffect(() => {
    if (memeberPageid === 0 || memeberPageid === idReducer) {
      sethidefanReducer(false);
    } else {
      sethidefanReducer(true);
    }
  }, [memeberPageid, MemberProfileData, idReducer]);



  const [ShowBillboard, setShowBillboard] = useState<boolean>(false);

  const [billstate, setbillstate] = useState<number>(1);

  const [Btop2, setBtop2] = useState<number>(0);
  const [Btop, setBtop] = useState<number>(0);
  const [Bleft, setBleft] = useState<number>(0);
  const [showbill, setshowbill] = useState<boolean>(true);
  const [showbillone, setshowbillone] = useState<boolean>(false);
  const [showbilltwo, setshowbilltwo] = useState<boolean>(false);

  ///
  ///
  ///
  ///CONTROL BILLBOARD UPLOAD PIC POSITION FOR MULTIPLE UPLOADS THINGY
  useEffect(() => {
    setBleft(30);

    if (billboard1Reducer === billdefaultbill) {
      setBtop(-65);
      setshowbill(true);
      setshowbillone(false);
      setshowbilltwo(false);
    } else {
      if (billboard2Reducer === "" || billboard2Reducer === null) {
        setshowbill(true);
        setshowbillone(true);
        setshowbilltwo(false);
        setBtop(-50);
      } else {
        setshowbill(false);
        setshowbillone(true);
        setshowbilltwo(true);
        setBtop2(-50);
      }
    }
  }, [billboard1Reducer, billboard2Reducer, billdefaultbill]);

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


  //////////////////////////////////BILLBOARD VARIABLES FOR DEVICE TYPES
  var widthh = matchPc ? "65vw" : "98.5vw";
  var topp = matchPc ? "50.9vh" : matchTablet ? "5.5vh" : "23vh";
  var usernameClass = matchPc
    ? "usernamePc"
    : matchTablet
      ? "usernameTablet"
      : "usernameMobile";

  var widthName = matchPc ? "65vw" : "98.5vw";
  var topName = matchPc ? "58vh" : matchTablet ? "12.5vh" : "28.5vh";
  var name = matchPc ? "namePc" : matchTablet ? "nameTablet" : "nameMobile";

  var widthConnect = matchPc ? "65vw" : "98.5vw";
  var bottomConnect = matchPc ? "7vh" : matchTablet ? "34vh" : "3vh";
  var favclass = matchPc ? "favPc" : matchTablet ? "favTablet" : "favMobile";
  var fanclass = matchPc ? "fanPc" : matchTablet ? "fanTablet" : "fanMobile";

  var fontConnectText = matchPc ? "1.2vw" : matchTablet ? "2.5vw" : "2.1vh";
  var fontConnectnum = matchPc ? "1.75vw" : matchTablet ? "3.9vw" : "2.3vh";

  var billboardDynamicHeight = matchPc ? "65vh" : matchTablet ? "57vw" : "34vh";

  //////////////////////////////////BILLBOARD VARIABLES FOR DEVICE TYPES

  ///
  ///
  ///
  /// TOGGLEDARKMODE ON USERNAME CLICK
  var toggleDarkMode = false;

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

  ///
  ///
  ///
  /// CLICK BILLBOARD OPEN ON DOUBLE CLICK
  const ClickBillboard = useCallback((e: any) => {
    if (showModalFormMenu) {
      setshowModalFormMenu(false)
    } else {
      switch (e.detail) {
        case 2:
          setShowBillboard(true);
          break;
        case 3:
          setShowBillboard(true);
          break;
        case 4:
          setShowBillboard(true);
          break;
      }
    }
  }, [showModalFormMenu]);

  ///
  ///
  ///
  /// CLICK BILLBOARD CLOSE
  const ClickBillboardClose = (e: any) => {
    setShowBillboard(false);
  };

  var fontOptions1 = "";

  if (matchPc) {
    fontOptions1 = "4.7vw";
  } else if (matchTablet) {
    fontOptions1 = "5.2rem";
  } else {
    fontOptions1 = "2.1rem";
  }

  var fontOptions = "";

  if (matchPc) {
    fontOptions = "5.6vw";
  } else if (matchTablet) {
    fontOptions = "5.2rem";
  } else {
    fontOptions = "2.1rem";
  }


  ///scrollSnapAlign: x ? "start" : "",
  ///hoverOverImageRef.current.style.background = "red";




  const ConnectClickedNew = (tyx: any) => {
    var v = 0;
    if (memeberPageid === 0) {
      v = idReducer;
    } else {
      v = memeberPageid;
    }

    ///alert(v);
    const id = v; // 
    const encodedId = encodeBase64(id.toString());


    const ty = tyx; // Replace reaction Type
    const encodedIdx = encodeBase64(ty.toString());


    // Update the current URL with the scroll position and page number
    //// updateCurrentURLWithScrollPosition();

    // Navigate to the new URL with the new ID
    navigate(`/Connections/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodedIdx}`);
    //dispatch(UserInfoUpdateMEMBER(post.sender));
    ///setScrollReactRouter(0);
  };





  return (
    <>
      <>
        <Grid item md={12} style={{ height: '0px', }}></Grid>
        <Grid container className="dontallowhighlighting" style={{ display: memeberPageid === 0 ? 'none' : 'block' }}>


          {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD LIGHTINING/DARKEN*/}
          <Grid
            container
            style={{
              position: "relative",
              top: "0vh",
              width: "100%",
              scrollSnapAlign: snapallow ? 'none' : "start",

            }}
          >
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CURSOR ALIAS LAYOUT*/}
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={1}
            ></Grid>
            <Grid
              item
              xs={12}
              md={12}
              onClick={ClickBillboard}
              style={{
                visibility: ShowBillboard ? "hidden" : "visible",
                cursor: "copy",
                zIndex: showModalFormMenu ? 0 : 2,
                position: "relative",
                height: billboardDynamicHeight,
                backgroundColor: showModalFormMenu ? "rgba(005, 005, 005, 0)" : darkmodeReducer
                  ? "rgba(005, 005, 005, 0.26)"
                  : "rgba(250, 250, 250, 0.05)",
                borderRadius: "0px",
                borderBottomLeftRadius: ShowBillboard
                  ? "0px"
                  : matchPc
                    ? "7px"
                    : "0px",
                borderBottomRightRadius: ShowBillboard
                  ? "0px"
                  : matchPc
                    ? "7px"
                    : "0px",

              }}
            ></Grid>
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={2}
            ></Grid>
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CURSOR ALIAS LAYOUT*/}

            <Grid item md={12} style={{ height: '0px', }}></Grid>
            <Grid item md={12} style={{ height: '0px', }}></Grid>

            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CONTROL DISPLAY ON DOUBLE CLICK*/}

            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={2}
            ></Grid>
            <Grid
              item
              xs={12}
              md={8}
              onClick={ClickBillboard}
              style={{
                visibility: ShowBillboard ? "hidden" : "visible",
              }}
            >


              {/*///////////////////////////////////////////////////////////////////////////FAVS*/}
              <Grid
                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthConnect,
                  height: "0px",
                  top: bottomConnect,
                  display: showModalFormMenu ? 'none' : "flex",
                  justifyContent: "flex-start",
                  zIndex: 4,
                }}
              >
                <Grid item style={{ textAlign: "center", height: "0px", }}>
                  {" "}
                  <span
                    onClick={() => {

                      ConnectClickedNew(2);

                      ///dispatch(UpdatePostFromCom(postData));
                      ////dispatch(UpdateReactType(2));
                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      ///OpenModalForm(4);
                      ////setconnectTemplateGo(2);

                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectText,
                      marginLeft: matchPc ? "0.45vw" : "2.5vw",
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0)"
                        : "rgba(255, 255, 255, 0)",
                      padding: "1px  ",
                      opacity: darkmodeReducer
                        ? 0.7 : 0.73,
                      display: hidefanReducer ? "none" : "inline",
                    }}
                    className={
                      darkmodeReducer
                        ? `fontfamilyArial zuperxyinfotext turdarkfavfan ${fanclass}  `
                        : `fontfamilyArial  text-connect-light zuperxyinfotext turlight ${fanclass}  `
                    }
                  >
                    FANS
                  </span>
                  <Grid xs={12} item style={{ height: "10px" }}></Grid>
                  <span
                    onClick={() => {
                      ConnectClickedNew(2);
                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectnum,
                      marginLeft: matchPc ? "1.45vw" : "1.5vw",
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0)"
                        : "rgba(255, 255, 255, 0)",
                      display: hidefanReducer ? "none" : "inline",
                    }}
                    className={`fontfamilyArial zuperxyinfo ${fanclass}  `}
                  >
                    {fansReducer === 0 ? "." : fansReducer}
                  </span>{" "}
                </Grid>
                <Grid item style={{ textAlign: "center", height: "0px" }}>
                  {" "}
                  <span
                    onClick={() => {

                      ConnectClickedNew(1);

                      //</Grid></Grid>dispatch(UpdatePostFromCom(postData));
                      ///dispatch(UpdateReactType(1));
                      //// setCommentPostid(postData[pey]);
                      ////setDiscussionImage(postDatainner[pey]);
                      ///OpenModalForm(4);
                      ///setconnectTemplateGo(1);
                    }}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: fontConnectText,
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0)"
                        : "rgba(255, 255, 255, 0)",

                      padding: "1px  ",
                      opacity: darkmodeReducer
                        ? 0.7 : 0.73,
                      marginLeft: matchPc ? "10.1vw" : "12.5vw",
                    }}
                    className={
                      darkmodeReducer
                        ? `fontfamilyArial zuperxyinfotext turdarkfavfan ${favclass}  `
                        : `fontfamilyArial  text-connect-light zuperxyinfotext turlight ${favclass}  `
                    }
                  >
                    FAVORITES
                  </span>
                  <Grid xs={12} item style={{ height: "10px" }}></Grid>
                  <span
                    onClick={() => {
                      ConnectClickedNew(1);
                    }}
                    style={{
                      cursor: "pointer",
                      backgroundColor: darkmodeReducer
                        ? "rgba(005, 005, 005, 0)"
                        : "rgba(255, 255, 255, 0)",
                      fontWeight: "bolder",
                      fontSize: fontConnectnum,

                      marginLeft: matchPc ? "10.1vw" : "11.5vw",
                      marginTop: "9.2px",
                    }}
                    className={`fontfamilyArial zuperxyinfo  ${favclass}`}
                  >
                    {favoritesReducer === 0 ? "." : favoritesReducer}
                  </span>
                </Grid>
              </Grid>


              {/*///////////////////////////////////////////////////////////////////////////FAVS*/}


              <Grid

                item
                xs={12}
                style={{
                  position: "absolute",
                  top: '30vh',
                  textAlign: "right",
                  zIndex: 0,
                  height: "0px",
                  /// scrollSnapAlign: snapStartReducer ? "start" : 'none'

                }}
              >

              </Grid>


              {/*///////////////////////////////////////////////////////////////////////////USERNAME*/}


              <Grid

                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthh,
                  top: topp,
                  textAlign: "right",
                  zIndex: 3,
                  height: "0px",


                }}
              >
                <span
                  onClick={() => {

                    if (idReducer === GuestReducer) {
                      dispatch(UpdateSign(true));
                    }
                  }}


                  className={
                    darkmodeReducer
                      ? `fontfamilyArial ${usernameClass} turdark`
                      : `fontfamilyArial ${usernameClass} turlight`
                  }
                  style={{
                    display: showModalFormMenu ? 'none' : 'inline',
                    cursor: "pointer",
                    color: darkmodeReducer ? "#dddddd" : "#0b111b",
                    backgroundColor: darkmodeReducer
                      ? "rgba(005, 005, 005, 0.45)"
                      : "rgba(250, 250, 250, 0.7)",
                  }}
                >
                  {usernameReducer}
                </span>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////USERNAME*/}
              {/*///////////////////////////////////////////////////////////////////////////FULLNAME OR QUOTES*/}
              <Grid
                item
                xs={12}
                style={{
                  position: "absolute",
                  width: widthName,
                  top: topName,
                  textAlign: "right",
                  zIndex: 3,
                  height: "0px",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: darkmodeReducer ? "#dddddd" : "#0b111b",
                    backgroundColor: quoteReducer ? darkmodeReducer
                      ? "rgba(005, 005, 005, 0.45)"
                      : "rgba(250, 250, 250, 0.7)" : ''
                  }}
                  className={
                    darkmodeReducer
                      ? `fontfamilyArial ${name} turdark`
                      : `fontfamilyArial ${name} turlight`
                  }
                >
                  {quoteReducer ? quoteReducer : ''}
                </span>
              </Grid>
              {/*///////////////////////////////////////////////////////////////////////////FULLNAME OR QUOTES*/}
            </Grid>
            {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD CONTROL DISPLAY ON DOUBLE CLICK*/}
          </Grid>
          {/*///////////////////////////////////////////////////////////////////////////BACKPAD BILLBOARD LIGHTINING/DARKEN*/}
          <Grid
            style={{
              position: "relative",
              zIndex: 0,
            }}
            container
          >
            {" "}
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                position: "fixed",
                top: "3em",
                margin: "auto",
                textAlign: "center",
                zIndex: 0,
              }}
            >


              <>
                <input
                  onClick={click}
                  onInput={() => {
                    setShowBillboard(false);
                  }}
                  onChange={billboardx}
                  type="file"
                  name="superImages"
                  accept="image/*"
                  multiple
                  id="billboardxx"
                  style={{ visibility: "hidden" }}
                />
              </>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                height: "0px",
                position: "absolute",
                top: `${Btop}vh`,
                left: `${Bleft}vw`,
                margin: "auto",
                textAlign: "center",
                zIndex: 20,
                display: showbill || showbilltwo || showbillone
                  ? "block" : "none",
              }}
            >
              {" "}
              {ShowBillboard ? (
                <>
                  <label htmlFor="billboardxx">
                    <AddPhotoAlternateIcon
                      style={{
                        fontSize: fontOptions,
                        color: "#ffffff",
                        cursor: "pointer",
                        opacity: 0.8,
                        visibility: memeberPageid === 0 || memeberPageid === idReducer ?
                          'visible' : 'hidden',
                      }}
                      className="zuperkinginfo"
                    />{" "}
                  </label>
                </>
              ) : null}
            </Grid>
            <Grid
              item
              component={Box}
              display={{ xs: "none", md: "block" }}
              md={1}
            ></Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ marginTop: `-${billboardDynamicHeight}` }}
            >
              {/*///////////////////////////////////////////////////////////////////////////BILLBOARD IMAGE*/}

              <SliderBillboard
                billboardBlank={billboardBlank}
                billboardBlankthumb={billboardBlankthumb}
                sliderIndex={sliderIndex}
                setSliderIndex={setSliderIndex}
                billboardserverswitch={billboardserverswitch}
                ClickBillboardClose={ClickBillboardClose}
                ShowBillboard={ShowBillboard}
                slides={billboardImages}
                slidesthumb={billboardthumbImages}
                billboardDynamicHeight={billboardDynamicHeight}
              />

              {/*///////////////////////////////////////////////////////////////////////////BILLBOARD IMAGE*/}
            </Grid>
          </Grid>
        </Grid>
      </>
    </>
  );
}

export const Billboard = React.memo(Billboardx);
