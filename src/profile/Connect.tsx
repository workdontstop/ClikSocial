import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
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
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { ServerError } from "../log/ServerError";
import { Loader } from "./Loader";
import { UpdateAlertReducer, UpdateLoader } from ".././GlobalActions";
import { timers } from "jquery";
import EditIcon from "@mui/icons-material/Edit";

function Connectx({
  postprofiletop,
  optionsClass,
  post,
  profileImagethumbLeft,
  profileImagethumbTop,
  fontOptions,
  PostCon,
  Comment,
  Reaction,
  Profile,
  Mini,
  profileImageref,
  calculateconnectPosition,
  profilewidth,
  zoomedModal,
  wideImage,
  Added,
  setAdded,
  GoToMember,
  connect,
  minimise,
  RandomColor
}: any): JSX.Element {
  const dispatch = useDispatch();


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  const [serverErrorDisplay, setServerErrorDisplay] = useState<number>(1);
  const [serverEmojiplain, setserverEmojiplain] = useState<boolean>(true);

  const [activetimer, setactivetimer] = useState<boolean>(false);

  const Timerkk = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Timerkk2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [showSliderLoader, setshowSliderLoader] = useState<boolean>(false);

  const [Zoom1, setZoom1] = useState(false);

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
      AlertData: "";
      AlertEmojiType: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { screenHeight, darkmode, AlertData, AlertEmojiType } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const AlertDataReducer = AlertData;
  const AlertEmojiTypeReducer = AlertEmojiType;



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

  /*///////////////////////////////////////////////////////////////////////////CONNECT CALL BACK END*/
  var valax = {
    myId: 0,
    friendId: 0,
  };

  if (PostCon === 1) {
    valax = {
      myId: idReducer,
      friendId: post.sender,
    };
  } else if (PostCon === 2) {
    valax = {
      myId: idReducer,
      friendId: post.sender,
    };
  } else if (Comment === 1) {
    valax = {
      myId: idReducer,
      friendId: post.comUserId,
    };
  } else if (Reaction === 1) {
    valax = {
      myId: idReducer,
      friendId: post.reactId,
    };
  } else if (connect === 1) {
    valax = {
      myId: idReducer,
      friendId: memeberPageidReducer,
    };
  } else {
  }

  const callAddfav = () => {
    setAdded(100);
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/add_fav`, { values: valax }, {})
      .then((response) => {
        if (response.data.message === "added") {
          if (connect === 1) {
            dispatch(
              UpdateAlertReducer(
                `${MemberProfileDataReducer.username}   Added To Favorites`,
                1
              )
            );
          } else {
            dispatch(
              UpdateAlertReducer(`${post.username}   Added To Favorites`, 1)
            );
          }

          setTimeout(() => {
            setAdded(1);
          }, 2000);
        }
      })
      .catch(function (error) {
        alert("post fav error");
      });
  };

  const callDelfav = () => {
    setAdded(100);
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/remove_fav`, { values: valax })
      .then((response) => {
        if (response.data.message === "removed") {
          if (connect === 1) {
            dispatch(
              UpdateAlertReducer(
                `${MemberProfileDataReducer.username}   Removed From Favorites`,
                1
              )
            );
          } else {
            dispatch(
              UpdateAlertReducer(`${post.username}   Removed From Favorites`, 1)
            );
          }
          setTimeout(() => {
            setAdded(0);
          }, 2000);
        }
      })
      .catch(function (error) {
        alert("post fav error");
      });
  };

  const cc = () => {
    if (Added === 1) {
      callDelfav();
    } else if (Added === 0) {
      callAddfav();
    } else {
    }
  };
  ///
  ///
  ///
  /// 
  const Click = (e: any) => {
    if (activetimer) {
      //
      dispatch(UpdateLoader(false));
      //
      if (Timerkk.current) {
        clearTimeout(Timerkk.current);
      }
      if (Timerkk2.current) {
        clearTimeout(Timerkk2.current);
      }

      if (Added === 1) {
        callDelfav();
      } else if (Added === 0) {
        callAddfav();
      } else {
      }

      Timerkk2.current = setTimeout(() => {
        setactivetimer(false);
      }, 250);

      ///
      ///
    } else {
      //
      dispatch(UpdateLoader(true));
      //
      if (Timerkk.current) {
        clearTimeout(Timerkk.current);
      }
      if (Timerkk2.current) {
        clearTimeout(Timerkk2.current);
      }
      setactivetimer(true);
      Timerkk.current = setTimeout(() => {
        GoToMember();
      }, 1000);
    }
  };

  /*///////////////////////////////////////////////////////////////////////////CONNECT CALL BACK END*/

  return (
    <>
      {connect === 1 ? (
        <>
          <>
            <EditIcon
              style={{
                fontSize: fontOptions,
                color: "#ffffff",
                display:
                  idReducer === memeberPageidReducer ||
                    memeberPageidReducer === 0
                    ? "block"
                    : "none",
              }}
              className="zuperkinginfo "
            />
          </>
          <span
            onClick={cc}
            style={{
              cursor: "pointer",
              display:
                idReducer === memeberPageidReducer || memeberPageidReducer === 0
                  ? "none"
                  : "block",
            }}
          >
            {" "}
            {Added === 0 ? (
              <>
                {" "}
                <AddIcon
                  style={{
                    fontSize: fontOptions,
                    color: "#ffffff",


                  }}
                  className="zuperkinginfo "
                />{" "}
              </>
            ) : Added === 100 ? (
              <>
                {" "}
                <PanoramaFishEyeIcon
                  style={{
                    fontSize: fontOptions,
                    color: "#ffffff",
                  }}
                  className="zuperkinginfo  changeOpacityx"
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <DownloadDoneIcon
                  style={{
                    fontSize: fontOptions,
                    color: "#ffffff",
                  }}
                  className="zuperkinginfo"
                />{" "}
              </>
            )}
          </span>
        </>
      ) : null}

      {PostCon === 1 ? (
        <div




          className="zuperxyinfo"
          style={{

            opacity: 1,
            top: postprofiletop,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            zIndex: 1,
            paddingLeft: matchPc ? "1.4vw" : matchTablet ? "2.3vw" : "2.1vw",
            height: "0px",
            fontFamily: "Arial, Helvetica, sans-seri",
          }}
        >
          <Grid
            className={`${optionsClass}`}
            style={{
              backgroundImage: `linear-gradient(45deg,${RandomColor}, ${post.color1})`,
              zIndex: 2,
              left: matchMobile ? '-2vh' : '2vh',
              top: matchMobile ? '-6.5vh' : '-3.5vh',
              opacity: 0.8,
              position: "absolute",
              cursor: 'pointer',
              transform: matchMobile ? 'scale(0.4)' : 'scale(1)',
            }}
          >
            {Added === 0 ? (
              <>
                {" "}
                <AddIcon
                  style={{
                    fontSize: matchMobile ? '6vh' : fontOptions,
                    color: "#ffffff",
                  }}
                  className="zuperkinginfo "
                />{" "}
              </>
            ) : Added === 100 ? (
              <>
                {" "}
                <PanoramaFishEyeIcon
                  style={{
                    fontSize: matchMobile ? '6vh' : fontOptions,
                    color: "#ffffff",
                  }}
                  className="zuperkinginfo  changeOpacity"
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <DownloadDoneIcon
                  style={{
                    fontSize: matchMobile ? '6vh' : fontOptions,
                    color: "#ffffff",
                  }}
                  className="zuperkinginfo"
                />{" "}
              </>
            )}
          </Grid>
          <img

            onMouseEnter={(e) => {
              setZoom1(true);
            }
            }
            onMouseLeave={(e) => {
              setZoom1(false);
            }}


            onClick={Click}
            ref={profileImageref}
            onLoad={calculateconnectPosition}
            className={darkmodeReducer ? "turpostDark" : "turpostDark"}

            src={`${REACT_APP_CLOUNDFRONT}${post.profile_image}`}
            alt="a superstarz post "
            style={{
              transform: matchMobile ? Zoom1 ? "scale(1.5)" : "scale(1)" : Zoom1 ? "scale(1.18)" : "scale(1)",
              transition: "transform 0.1s",
              cursor: "pointer",
              boxShadow: darkmodeReducer
                ? "0 0 1px #555555"
                : "0 0 3.5px #aaaaaa",
              width: profilewidth,
              height: "auto",
              padding: "0px",
              objectFit: "contain",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div >
      ) : null
      }


      {
        PostCon === 2 ? (
          <div
            className="zuperxyinfo"
            style={{
              opacity: 1,
              top: postprofiletop,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              zIndex: 1,
              paddingLeft: matchPc ? "1.4vw" : matchTablet ? "2.3vw" : "2.1vw",
              height: "0px",
              fontFamily: "Arial, Helvetica, sans-seri",
            }}
          >
            <Grid
              className={`${optionsClass}`}
              style={{

                backgroundImage: `linear-gradient(45deg, ${post.color1},${colorReducer})`,
                zIndex: 2,
                left: matchMobile ? '-2.8vw' : `${profileImagethumbLeft + 18}px`,
                top: matchMobile ? `${profileImagethumbTop - 45}px` : `${profileImagethumbTop}px`,
                opacity: 0.8,
                position: "absolute",
                cursor: 'pointer',
                transform: matchMobile ? 'scale(0.4)' : 'scale(1)',
              }}
            >
              {Added === 0 ? (
                <>
                  {" "}
                  <AddIcon
                    style={{
                      fontSize: matchMobile ? '6vh' : fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo "
                  />{" "}
                </>
              ) : Added === 100 ? (
                <>
                  {" "}
                  <PanoramaFishEyeIcon
                    style={{
                      fontSize: matchMobile ? '6vh' : fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo  changeOpacity"
                  />{" "}
                </>
              ) : (
                <>
                  {" "}
                  <DownloadDoneIcon
                    style={{
                      fontSize: matchMobile ? '6vh' : fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo"
                  />{" "}
                </>
              )}
            </Grid>
            <img
              onMouseEnter={(e) => {
                setZoom1(true);
              }
              }
              onMouseLeave={(e) => {
                setZoom1(false);
              }}



              onClick={Click}
              ref={profileImageref}
              onLoad={calculateconnectPosition}
              className={darkmodeReducer ? "turpostDarkmini" : "turpostDarkmini"}

              src={`${REACT_APP_CLOUNDFRONT}${post.profile_image}`}
              alt="a superstarz post "
              style={{
                transform: matchMobile ? Zoom1 ? "scale(1.5)" : "scale(1)" : Zoom1 ? "scale(1.18)" : "scale(1)",
                transition: "transform 0.1s",
                top: matchMobile ? '0.9vh' : '4.5vh',
                cursor: "pointer",
                boxShadow: darkmodeReducer
                  ? "0 0 1px #555555"
                  : "0 0 3.5px #aaaaaa",
                width: matchMobile ? '14vw' : '4.8vw',
                height: "auto",
                padding: "0px",
                objectFit: "contain",
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        ) : null
      }


      {
        Comment === 1 ? (
          <>
            <Grid
              className={`${optionsClass}`}
              style={{
                ///backgroundColor: `${zoomedModal ? " " : `${post.color1}`}`,


                backgroundImage: zoomedModal ? ''
                  : `linear-gradient(45deg, ${post.color1},${colorReducer})`,
                zIndex: 2,
                left:
                  `${zoomedModal
                    ? wideImage
                      ? "72"
                      : "106"
                    : wideImage
                      ? "20"
                      : "25"
                  }px`,
                top: `${zoomedModal
                  ? wideImage
                    ? "-10"
                    : "-19"
                  : wideImage
                    ? "-20"
                    : "-25"
                  }px`,
                opacity: 0.8,
                position: "relative",
                padding: "0px",
                borderRadius: "50%",
                fontSize: "0.1vw",
                cursor: 'pointer',
                color: `${zoomedModal ? `${post.color1}` : `#ffffff`}`,
              }}
            >
              {Added === 0 ? (
                <>
                  {" "}
                  <AddIcon style={{}} className="zuperkinginfo " />{" "}
                </>
              ) : Added === 100 ? (
                <>
                  {" "}
                  <PanoramaFishEyeIcon
                    style={{}}
                    className="zuperkinginfo  changeOpacity"
                  />{" "}
                </>
              ) : (
                <>
                  {" "}
                  <DownloadDoneIcon style={{}} className="zuperkinginfo" />{" "}
                </>
              )}
            </Grid>
            <img
              onMouseEnter={(e) => {
                setZoom1(true);
              }
              }
              onMouseLeave={(e) => {
                setZoom1(false);
              }}


              onClick={Click}
              ref={profileImageref}
              onLoad={calculateconnectPosition}
              className={darkmodeReducer ? "turpostDark" : "turpostLight"}

              src={`${REACT_APP_CLOUNDFRONT}${post.profile_image}`}
              alt="a superstarz post "
              style={{
                transform: matchMobile ? Zoom1 ? "scale(1.5)" : "scale(1)" : Zoom1 ? "scale(1.18)" : "scale(1)",
                transition: "transform 0.1s",
                cursor: "pointer",
                boxShadow: darkmodeReducer
                  ? "0 0 1px #555555"
                  : "0 0 3.5px #aaaaaa",
                width: zoomedModal ? "6%" : "15%",
                height: "auto",
                padding: "0px",

                marginLeft: zoomedModal ? "10%" : "0%",
                objectFit: "contain",
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
              }}
            />
          </>
        ) : null
      }

      {
        Reaction ? (
          <>
            {" "}
            <Grid
              className={`  ${optionsClass}   `}
              style={{
                ///backgroundColor: `${post.color1}`,
                backgroundImage: `linear-gradient(45deg, ${post.color1},${colorReducer})`,
                zIndex: 7,
                left: matchMobile ? '6vw' : wideImage
                  ? zoomedModal
                    ? `2vw`
                    : `1.2vw`
                  : zoomedModal
                    ? `4vw`
                    : `1.7vw`,
                top: wideImage
                  ? zoomedModal
                    ? `3.6vh`
                    : `3.5vh`
                  : zoomedModal
                    ? `3.2vh`
                    : `3.5vh`,
                width: "25px",
                height: "25px",
                opacity: 0.8,
                textAlign: "center",
                position: "relative",
                borderRadius: "50%",
                cursor: 'pointer',
              }}
            >
              {Added === 0 ? (
                <>
                  {" "}
                  <AddIcon
                    style={{
                      fontSize: fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo "
                  />{" "}
                </>
              ) : Added === 100 ? (
                <>
                  {" "}
                  <PanoramaFishEyeIcon
                    style={{
                      fontSize: fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo  changeOpacity"
                  />{" "}
                </>
              ) : (
                <>
                  {" "}
                  <DownloadDoneIcon
                    style={{
                      fontSize: fontOptions,
                      color: "#ffffff",
                    }}
                    className="zuperkinginfo"
                  />{" "}
                </>
              )}
            </Grid>
            <img
              onMouseEnter={(e) => {
                setZoom1(true);
              }
              }
              onMouseLeave={(e) => {
                setZoom1(false);
              }}


              onClick={Click}
              title={post.username}
              className={
                darkmodeReducer
                  ? `turprofileDark image-gray-on-click `
                  : ` turprofileLight image-gray-on-click`
              }
              style={{
                transform: matchMobile ? Zoom1 ? "scale(1.5)" : "scale(1)" : Zoom1 ? "scale(1.18)" : "scale(1)",
                transition: "transform 0.1s",
                display: "block",
                zIndex: 2,
                borderRadius: "50%",
                cursor: "pointer",
                position: "relative",
                padding: "10px",
                margin: "auto",
                objectFit: "contain",
                width: "70%",
              }}

              src={`${REACT_APP_CLOUNDFRONT}${post.profile_image}`}
              alt="Superstarz Billboard "
            />
          </>
        ) : null
      }
    </>
  );
}

export const Connect = React.memo(Connectx);
