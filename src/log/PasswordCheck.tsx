import React, { useState, useCallback, useRef, useEffect } from "react";
import { TextField, DialogContent, Grid, CircularProgress } from "@material-ui/core";
import { matchPc, matchTablet } from "../DetectDevice";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { IPasswordCheck } from "./log-Interfaces";

function PasswordCheckx({
  widthHolder,
  checkSignupPasswordACTIVATE,
  signmeup,
  responseErrorConfirmPassword,
}: IPasswordCheck): JSX.Element {

  // Get dark mode and other Redux state values

  interface RootStateGlobalReducer {
    GlobalReducer: {
      snapStart: boolean;
      darkmode: boolean;
      screenHeight: number;
      muteaudio: boolean;
      ActiveAudioIndex: number;
      MenuData: String;
      Guest: number,

    };
  }

  const { screenHeight, darkmode, snapStart, muteaudio, ActiveAudioIndex, MenuData, Guest } =
    useSelector((state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    }));
  const screenHeightReducer = screenHeight;
  const darkmodeReducer = darkmode;
  const MenuDataReducer = MenuData;
  const GuestReducer = Guest;

  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const confirmPaswordTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [checkSignupPassword, setCheckSignupPassword] = useState<string>("");

  // Clear the password field when the activation prop changes
  useEffect(() => {
    setCheckSignupPassword("");
  }, [checkSignupPasswordACTIVATE]);

  // Device-based UI styles
  let sizex: "small" | "medium" = "small";
  let font1 = "2.6vh";
  let font2 = "2vh";
  let transform = "scale(1)";
  let widthcheckPassword = "100%";
  let displayy = "block";

  if (matchPc) {
    sizex = "medium";
    font1 = "2.7vh";
    font2 = "1.9vh";
    widthcheckPassword = widthHolder;
    displayy = "none";
  } else if (matchTablet) {
    sizex = "small";
    font1 = "2.6vh";
    font2 = "2vh";
    widthcheckPassword = "62%";
    displayy = "block";
  }

  // Handle password input change and show spinner while checking
  const updateCheckSignupPasswordValues = useCallback(
    (e: any) => {
      const { value } = e.target;
      if (confirmPaswordTimer.current) {
        clearTimeout(confirmPaswordTimer.current);
      }
      setCheckSignupPassword(value);

      if (!showSpinner) {
        setShowSpinner(true);
      }

      confirmPaswordTimer.current = setTimeout(() => {
        setShowSpinner(false);
        signmeup(value);
      }, 2500);
    },
    [signmeup, showSpinner]
  );

  // Spinner styles based on dark mode and device
  const spinColor = darkmode ? "#333333" : "#aaaaaa";
  let topp = "10em";
  let toptext = "-31vh";
  let spinsize = 35;
  let left = "44%";

  if (matchPc) {
    topp = "11em";
    toptext = "-17vh";
    spinsize = 30;
    left = "44.5%";
  } else if (matchTablet) {
    topp = "35em";
    toptext = "-22vh";
    spinsize = 45;
    left = "47%";
  }

  return (
    <>
      {checkSignupPasswordACTIVATE ? (
        <>
          <DialogContent
            className={
              darkmode
                ? "dontallowhighlighting mobileTextfield-backplateColorDark"
                : "dontallowhighlighting mobileTextfield-backplateColorLight"
            }
            style={{
              zIndex: 12,
              display: displayy,
              bottom: "0em",
              height: "95.5vh",
              overflow: "hidden",
              width: "100%",
              position: "fixed",
              marginTop: "-3px",
            }}
          />
          <Grid
            item
            xs={12}
            style={{
              position: "fixed",
              top: topp,
              left: left,
              zIndex: 14,
            }}
          >
            <div
              style={{
                position: "relative",
                textAlign: "center",
                left: 0,
                opacity: showSpinner ? "0.2" : "0",
              }}
            >
              <CircularProgress
                variant="determinate"
                size={spinsize}
                thickness={4}
                value={100}
                style={{ color: spinColor }}
              />
              <CircularProgress
                variant="indeterminate"
                disableShrink
                size={spinsize}
                thickness={4}
                style={{
                  color: responseErrorConfirmPassword ? "red" : spinColor,
                  animationDuration: "550ms",
                  position: "absolute",
                  left: 0,
                }}
              />
            </div>
          </Grid>
          <TextField
            size={sizex}
            inputProps={{ style: { fontSize: font1 } }}
            InputLabelProps={{
              style: {
                fontSize: font2,
                color: responseErrorConfirmPassword ? "red" : "",
              },
            }}
            style={{
              transform: transform,
              width: widthcheckPassword,
              position: "relative",
              top: toptext,
              zIndex: 14,
            }}
            label={responseErrorConfirmPassword ? "Passwords Must Be Same" : "Repeat Password"}
            type="password"
            onChange={updateCheckSignupPasswordValues}
            name="inputedUsername"
            value={checkSignupPassword}
            variant="standard"
          />
        </>
      ) : null}
    </>
  );
}

export const PasswordCheck = React.memo(PasswordCheckx);
