import "./App.css";
import "typeface-roboto";
import { useEffect, useState } from "react";
import Axios from "axios";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import { matchPc, matchTablet, matchMobile } from "./DetectDevice";
import Supercheck from "./Supercheck";
import { IsLoggedAction } from "./log/actions/IsLoggedAction";
import { IsLoggedProfileAction } from "./log/actions/IsLoggedAction";
import { UserdataActionOnLoad } from "./log/actions/UserdataAction";
import { UpdateColorAction } from "./GlobalActions";
import { Grid, GridSize } from "@material-ui/core";
import SuperstarzIconLight from "./images/s.png";
import SuperstarzIconDark from "./images/sd.png";
import ProfileOutter from "./profile/ProfileOutter";
import { UserdataAction } from "./log/actions/UserdataAction";




import { ActivateLoaderAction, HideLoaderAction } from "./GlobalActions";

function App(): JSX.Element {
  ///
  ///
  ///
  ///DISPATCH
  const dispatch = useDispatch();

  const [superLoad, setsuperLoad] = useState<boolean>(true);

  ///
  ///
  ///
  ///TYPES FOR ISLOGGEDIN
  interface RootStateIsLogged {
    IsLoggedReducer: {
      loggedIn: boolean;
    };
  }

  /////////////////////////////
  ///
  ///
  ///LOGGED IN DATA FROM REDUX
  const { loggedIn } = useSelector((state: RootStateIsLogged) => ({
    ...state.IsLoggedReducer,
  }));
  const loggedInReducer = loggedIn;


  ///
  ///
  ///
  ///TYPES FOR ISLOGGEDINPROFILE
  interface RootStateIsLoggedProfile {
    IsLoggedProfileReducer: {
      loggedInProfile: boolean;
    };
  }
  /////////////////////////

  ///////////////////////
  ///
  ///
  ///LOGGEDPROFILE IN DATA FROM REDUX
  const { loggedInProfile } = useSelector(
    (state: RootStateIsLoggedProfile) => ({
      ...state.IsLoggedProfileReducer,
    })
  );
  const loggedInProfileReducer = loggedInProfile;
  //////////////

  ///
  ///
  ///
  ///DOT ENV DATA
  const { REACT_APP_SUPERSTARZ_URL } = process.env;

  ///
  ///
  ///MODAL ZOOMED STATE
  useEffect(() => {
    setTimeout(function () {
      setsuperLoad(false);
    }, 500);
    document.title = "Clik Bate";
  }, []);

  ///
  ///
  ///MODAL ZOOMED STATE

  const initialLogValuexx = {
    inputedUsername: "Guest",
    inputedPassword: "gggggggg",
  };

  const [cleanLoginValuesxx, setCleanLoginValuesxx] =
    useState(initialLogValuexx);

  const GuestLogin = () => {
    /// dispatch(ActivateLoaderAction());
    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/loging`,
      {
        values: cleanLoginValuesxx,
      },
      { withCredentials: true }
    )
      .then((response) => {

        if (response.data.payload) {
          dispatch(HideLoaderAction());

          dispatch(IsLoggedAction());
          dispatch(IsLoggedProfileAction());

          dispatch(UserdataAction(response.data.payload));

          var colorboy = {
            color1: response.data.payload.usercolor1,
            color2: response.data.payload.usercolor2,
            colortype: response.data.payload.usercolortype,
          };
          dispatch(UpdateColorAction(colorboy, 1));
          /// window.location.reload();
        }

      })
      .catch(function (error) {
        console.log("Guest Login Error");
      });

    ///alert("app.tsx checkislogged logged out");
  }


  const IsLog = () => {
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/checkIsLogged`, { withCredentials: true })
      .then((response) => {
        if (response.data.message === "logged in") {



          let regLocalData = localStorage.getItem('reg');

          // Check if 'reg' equals '1' and dont stop tutorial
          if (regLocalData === '1') { } else {

            if (response.data.payload.id === 141) {
              ///alert(response.data.payload.id);
            } else {
              if (response.data.payload.userreg === 1) {
                Axios.put(
                  `${REACT_APP_SUPERSTARZ_URL}/update_Reg`,
                  { values: response.data.payload },
                  {}
                ).then((response) => {
                  if (response.data.message === "updated") {

                    ///alert('kjj');

                  }
                }).catch(function (error) {

                });
              }
            }
          }



          localStorage.setItem('reg', '0');

          dispatch(IsLoggedAction());
          dispatch(IsLoggedProfileAction());
          dispatch(UserdataActionOnLoad(response.data.payload));
          var colorboy = {
            color1: response.data.payload.usercolor1,
            color2: response.data.payload.usercolor2,
            colortype: response.data.payload.usercolortype,
          };
          dispatch(UpdateColorAction(colorboy, 1));


        } else if (response.data.message === "logged out") {
          GuestLogin();
        }
      })
      .catch(function (error) {
        GuestLogin();
      });

  }



  useEffect(() => {
    IsLog();
  }, [REACT_APP_SUPERSTARZ_URL, dispatch]);


  useEffect(() => {

    setTimeout(() => { IsLog(); }, 1500)

  }, []);


  ///
  ///
  ///
  /// GET DARK MODE REDUCER FROM REDUX STORE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;

  ///
  ///
  ///MUI PAPER STYLES FROM REDUX
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );
  var PaperStyleReducer = "";
  var logoimage;

  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
    logoimage = SuperstarzIconDark;
  } else {
    PaperStyleReducer = PaperStyleLight;
    logoimage = SuperstarzIconLight;
  }

  var icon;
  var containerApp = "containerappmobile";
  ///
  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  if (matchPc) {
    containerApp = "containerapp";
    icon = "iconPc";

    ///
  } else if (matchTablet) {
    containerApp = "containerapptablet";
    icon = "iconTablet";

    ///
  } else {
    containerApp = "containerappmobile";
    icon = "iconMobile";
  }



  return (
    <>
      {loggedInReducer ? (
        loggedInProfileReducer ? (
          <ProfileOutter />
        ) : (
          <Supercheck />
        )
      ) : (
        <Home />
      )}

      {superLoad ? (
        <>
          <Grid
            container
            style={{
              backgroundImage: PaperStyleReducer,
              position: "fixed",
              top: "0px",
              width: "100%",
              height: "100%",
              zIndex: 100000000,
            }}
          >
            <Grid container className={containerApp} style={{ top: "27%" }}>
              <Grid item xs={3} sm={4} md={4}></Grid>
              <Grid
                item
                className="centericon   dontallowhighlighting"
                xs={6}
                sm={4}
                md={4}
                style={{
                  textAlign: "center",
                }}
              >
                <img
                  className={icon}
                  src={logoimage}
                  alt="SuperstarZ logo"
                  style={{
                    textAlign: "center", opacity: matchMobile ? darkmodeReducer ? 0.69 : 0.9 : darkmodeReducer ? 0.7 : 0.9,
                    width: matchMobile ? '70%' : '40%', height: 'auto'
                  }}
                />
              </Grid>

              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>{" "}
        </>
      ) : null}
    </>
  );
}

export default App;
