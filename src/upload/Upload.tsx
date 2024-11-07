import React, { useRef, useEffect, useCallback, useState } from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { Grid, Switch, DialogContent } from "@material-ui/core";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { useSpring, animated } from "react-spring";
import { OptionsSlider } from "../profile/OptionsSlider";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import Axios from "axios";

function Uploadx({
  showModalUpload,
  closeUploadModal,
  OpenUploadModal,
  getSliderWidth,
  setShowModalUpload,
  setStopBodyScroll,
  selectedImage,
  setselectedImage,



}: any): JSX.Element {
  const [allowOverflow, setallowOverflow] = useState(true);

  // Use slide-down animation from react-spring
  const animation = useSpring({
    config: {
      duration: 600,
    },
    opacity: showModalUpload ? 1 : 0,
    transform: showModalUpload ? `translateY(0%)` : `translateY(-100%)`,
    padding: "0px",
  });

  // Get darkmode from Redux store
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  // Get global inner navigation variable
  const { activatecropImage } = useSelector((state: RootStateOrAny) => ({
    ...state.GlobalNavuploadReducer,
  }));
  const activatecropImageReducer = activatecropImage;

  const cropTOPLEVELScrollRef: any = useRef(null);
  const refWithimageData = useRef<any>([]);

  const cropscrollRef = useRef<any>(null);

  const escapePress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModalUpload) {
        closeUploadModal(5);
      }
    },
    [showModalUpload, closeUploadModal]
  );





  useEffect(() => {
    document.addEventListener("keydown", escapePress);
    return () => document.removeEventListener("keydown", escapePress);
  }, [escapePress]);

  // Prevent scrolling on the body when OptionsSlider is open
  useEffect(() => {
    if (showModalUpload) {
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = "auto"; // Allow body scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [showModalUpload]);

  // Prevent browser reload on specific actions
  const handlePreventReload = (event: React.MouseEvent | React.FormEvent) => {
    event.preventDefault();
    // handle logic without reloading the page
  };

  return (
    <>
      {showModalUpload ? (
        <DialogContent
          className={darkmodeReducer ? "dialog-container" : "dialog-container"}
          style={{
            padding: "0px",
            height: "100vh",
            position: "fixed",
            zIndex: 100,
            cursor: "default",
            overflow: "hidden",
          }}
        >
          <animated.div ref={cropscrollRef} style={animation}>
            <DialogContent
              ref={cropTOPLEVELScrollRef}
              className={
                matchMobile || matchTablet
                  ? activatecropImageReducer
                    ? darkmodeReducer
                      ? " dontallowhighlighting modal-containerDark"
                      : " dontallowhighlighting  modal-containerLight "
                    : darkmodeReducer
                      ? " dontallowhighlighting modal-containerDark"
                      : " dontallowhighlighting  modal-containerLight "
                  : darkmodeReducer
                    ? " dontallowhighlighting modal-containerDark  postscroll-dark "
                    : " dontallowhighlighting  modal-containerLight  postscroll-light "
              }
              style={{
                padding: "0px",
                height: "100vh",
                overflow: allowOverflow ? "auto" : "hidden",
              }}
            >
              <form onSubmit={handlePreventReload}>
                <OptionsSlider



                  selectedImage={selectedImage}
                  setselectedImage={setselectedImage}
                  setShowModalUpload={setShowModalUpload}
                  setStopBodyScroll={setStopBodyScroll}
                  closeUploadModal={closeUploadModal}
                  allowOverflow={allowOverflow}
                  cropscrollRef={cropscrollRef}
                  typeUpload={1}
                  showModalUpload={showModalUpload}
                  OpenUploadModal={OpenUploadModal}
                  sethaltedTop={() => { }}
                  typeTop={false}
                  getSliderWidth={getSliderWidth}
                  cropTOPLEVELScrollRef={cropTOPLEVELScrollRef}
                  refWithimageData={refWithimageData}
                  setallowOverflow={setallowOverflow}
                />
                {/* Button with preventDefault to avoid reload */}
                <button onClick={handlePreventReload}>Submit</button>
              </form>
            </DialogContent>
          </animated.div>
        </DialogContent>
      ) : null}
    </>
  );
}

export const Upload = React.memo(Uploadx);
