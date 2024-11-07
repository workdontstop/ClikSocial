import React, { useRef, useState, useEffect, useCallback } from "react";

import { Grid, Button } from "@material-ui/core";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { ILogButtons } from "./log-Interfaces";
import { UpdateSign } from ".././GlobalActions";
import CancelIcon from "@material-ui/icons/Cancel";

import { ActivateLoaderAction, HideLoaderAction } from "../GlobalActions";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import googleIcon from "../images/gg.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { encodeBase64 } from "../profile/utils"; // Ensure this is the correct path to your utils
import { useGoogleLogin } from "@react-oauth/google"; // New Google OAuth import
import Axios from "axios"; // Import Axios
import { UserdataAction } from "./actions/UserdataAction";

import { UpdateColorAction } from "../GlobalActions";

function LoginButtonsx({ OpenModalForm, type, setScrollReactRouter, setFormtype, setCurrentPage }: any) {
  /// Device-specific settings
  var buttonFont = "";
  var buttonTransform = " ";
  var pad = "";

  const darkmodeReducer = useSelector((state: RootStateOrAny) => state.GlobalReducer.darkmode);

  const { REACT_APP_SUPERSTARZ_URL } = process.env;

  if (matchPc) {
    buttonFont = "1vw";
    buttonTransform = " ";
    pad = darkmodeReducer ? "25px" : "27px";
  } else if (matchTablet) {
    pad = "21.5px";
    buttonFont = "2vw";
    buttonTransform = " ";
  } else {
    buttonFont = "";
    buttonTransform = "scale(0.95)";
    pad = "25px";
  }

  /// GET BUTTON STYLE FROM REDUX
  const { MozBoxShadowSD, WebkitBoxShadowSD, boxShadowSD } = useSelector((state: RootStateOrAny) => state.ButtonsSignUpReducerDark);
  const { MozBoxShadowSL, WebkitBoxShadowSL, boxShadowSL } = useSelector((state: RootStateOrAny) => state.ButtonsSignUpReducerLight);
  const { MozBoxShadowLD, WebkitBoxShadowLD, boxShadowLD } = useSelector((state: RootStateOrAny) => state.ButtonsLoginReducerDark);
  const { MozBoxShadowLL, WebkitBoxShadowLL, boxShadowLL } = useSelector((state: RootStateOrAny) => state.ButtonsLoginReducerLight);

  var MozBoxShadowReducerLogin = darkmodeReducer ? MozBoxShadowLD : MozBoxShadowLL;
  var WebkitBoxShadowReducerLogin = darkmodeReducer ? WebkitBoxShadowLD : WebkitBoxShadowLL;
  var boxShadowReducerLogin = darkmodeReducer ? boxShadowLD : boxShadowLL;

  var MozBoxShadowReducerSign = darkmodeReducer ? MozBoxShadowSD : MozBoxShadowSL;
  var WebkitBoxShadowReducerSign = darkmodeReducer ? WebkitBoxShadowSD : WebkitBoxShadowSL;
  var boxShadowReducerSign = darkmodeReducer ? boxShadowSD : boxShadowSL;

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Loginxx = () => {
    const id = 1;
    const encodedId = encodeBase64(id.toString());
    setCurrentPage("login");
    navigate(`/Login/${encodedId}/${encodeBase64("0")}/${encodeBase64("0")}/${encodeBase64("0")}`);
    setScrollReactRouter(0);
  };





  const Reload = () => {

    const id = 0; // Replace with the actual ID you want to navigate to
    const encodedId = encodeBase64(id.toString());



    // Navigate to the new URL with the new ID
    navigate(`/Feeds/${encodedId}/${encodeBase64('0')}/${encodeBase64('0')}/${encodeBase64('0')}`);
    //dispatch(UserInfoUpdateMEMBER(post.sender));
    //setScrollReactRouter(0);


  }





  const log = useCallback((email: any, name: any) => {

    const initialCleanLogValue = {
      email: email,
      name: name,
    };

    /// alert(initialCleanLogValue.name);

    dispatch(ActivateLoaderAction());

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/loge`,
      {
        values: initialCleanLogValue,
      },
      { withCredentials: true }
    )
      .then((response) => {
        // Handle success (200 OK)
        if (response.data.payload) {
          dispatch(HideLoaderAction());
          dispatch(UserdataAction(response.data.payload));

          var colorboy = {
            color1: response.data.payload.usercolor1,
            color2: response.data.payload.usercolor2,
            colortype: response.data.payload.usercolortype,
          };
          dispatch(UpdateColorAction(colorboy, 1));

          if (response.data.payload.userreg === 1) {
            localStorage.setItem('reg', '0');

            Axios.put(
              `${REACT_APP_SUPERSTARZ_URL}/update_Reg`,
              { values: response.data.payload },
              {}
            )
              .then((response) => {
                if (response.data.message === "updated") {
                  Reload();
                }
              })
              .catch(function (error) {
                Reload();
              });
          } else {
            Reload();
          }
        }
      })
      .catch(function (error) {
        // Handle errors (including no email found)
        if (error.response) {
          if (error.response.status === 404 && error.response.data.message === "no email") {



            signmeup(email, name);


          } else {
            ///alert("An error occurred during login");
          }
        } else {
          ///alert("Network or server error");
        }

        dispatch(HideLoaderAction()); // Hide loader on error
      });

  }, [REACT_APP_SUPERSTARZ_URL, dispatch]);



  ///alert

  const signmeup = useCallback(
    (email: any, name: any) => {


      const initialCleanLogValue = {
        email: email,
        name: name,
      };


      dispatch(ActivateLoaderAction());

      Axios.post(`${REACT_APP_SUPERSTARZ_URL}/registrationGoogle`, {
        values: initialCleanLogValue,
      })
        .then((response) => {
          if (response.data.payload) {

            dispatch(HideLoaderAction());
            dispatch(UserdataAction(response.data.payload));

            var colorboy = {
              color1: response.data.payload.usercolor1,
              color2: response.data.payload.usercolor2,
              colortype: response.data.payload.usercolortype,
            };
            dispatch(UpdateColorAction(colorboy, 1));


            localStorage.setItem('reg', '1');

            Reload();

          }
        })
        .catch(function (error) {

        });





    },
    [
      REACT_APP_SUPERSTARZ_URL,

      dispatch,

    ]
  );



  // Google login success handler
  const handleLoginSuccess = async (response: any) => {
    console.log("Auth Code:", response.code);

    // Send this code to your backend to exchange for tokens using Axios
    try {
      const result = await Axios.post(
        `${process.env.REACT_APP_SUPERSTARZ_URL}/google`, // Assuming you're using environment variables for the backend URL
        {
          code: response.code, // The authorization code returned by Google
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Tokens received from backend:", result.data);

      // Extract name and email from the response
      const userInfo = result.data.userInfo;

      // Save name and email in variables
      const name = userInfo.name;
      const email = userInfo.email;


      //alert(`${name}-${email}`);


      var emailx = 'email';




      log(email, name);




      // Handle the access token, ID token, etc.
    } catch (error) {
      console.error("Error exchanging auth code:", error);
    }
  };

  const handleLoginFailure = () => {
    console.error("Login Failed");
  };

  // Use `useGoogleLogin` with redirect flow
  const googleLogin = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
    flow: "auth-code", // Using redirect flow instead of popup
  });

  return (
    <>
      <Grid container className={matchPc ? "containerloginpc" : "containerloginmobile "} item style={{ marginTop: matchMobile ? "-2.5vh" : "0vh", padding: "0px" }}>
        <Grid container spacing={1}>
          <Grid item xs={8} sm={10} style={{ marginRight: matchMobile ? "5%" : "10%" }}>
            {/* Custom Google login button */}
            <Button
              variant="contained"
              style={{
                borderRadius: "5vw", // Rounded button
                padding: matchMobile ? "10px 20px" : "20px 40px",
                backgroundColor: "#ffffff",
                color: "#bbbbbb",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginTop: "2vh",
              }}
              startIcon={
                <img src={googleIcon} alt="Google icon" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
              }
              onClick={() => googleLogin()} // Trigger Google login on button click
            >
              <span>Google</span>
            </Button>
          </Grid>
        </Grid>

        <CancelIcon
          onClick={() => {
            dispatch(UpdateSign(false));
          }}
          className={`${darkmodeReducer ? "make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon" : "make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"} `}
          style={{
            fontSize: matchMobile ? "8vh" : "3.8vw",
            color: darkmodeReducer ? "#ffffff" : "#000000",
            position: "absolute",
            right: "1vw",
            top: matchMobile ? "0vh" : "0px",
            display: "none",
          }}
        />

        {matchMobile ? null : <Grid item xs={false} sm={3}></Grid>}

        <Grid item className="buttonpad buttonshake" xs={6} sm={2}>
          <Button
            onClick={() => {
              setFormtype(true);
              Loginxx();
            }}
            style={{
              fontSize: buttonFont,
              transform: buttonTransform,
              padding: "21.5px",
              borderRadius: "52px",
              MozBoxShadow: MozBoxShadowReducerLogin,
              WebkitBoxShadow: WebkitBoxShadowReducerLogin,
              boxShadow: boxShadowReducerLogin,
            }}
            fullWidth={true}
            variant="outlined"
            size="large"
            color="primary"
          >
            Log In
          </Button>
        </Grid>

        {matchMobile ? null : <Grid item xs={false} sm={2}></Grid>}

        <Grid item className="buttonpad buttonshake" xs={6} sm={2}>
          <Button
            onClick={() => {
              setFormtype(false);
              Loginxx();
            }}
            style={{
              fontSize: buttonFont,
              transform: buttonTransform,
              padding: pad,
              borderRadius: "50px",
              MozBoxShadow: MozBoxShadowReducerSign,
              WebkitBoxShadow: WebkitBoxShadowReducerSign,
              boxShadow: boxShadowReducerSign,
            }}
            fullWidth={true}
            variant="contained"
            size="large"
            color="secondary"
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={1} sm={3} md={2}></Grid>
      </Grid>
    </>
  );
}

export const LoginButtons = React.memo(LoginButtonsx);
