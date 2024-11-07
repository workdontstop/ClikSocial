import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { Grid, Switch, DialogContent } from "@material-ui/core";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { useSpring, animated } from "react-spring";
import { OptionsSlider } from "../profile/OptionsSlider";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import Axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import date from "date-and-time";
import { UserInfoUpdatePROFILE } from "../log/actions/UserdataAction";
import { UserInfoUpdateBILLBOARD } from "../log/actions/UserdataAction";
import { usePalette } from "react-palette";
import { UpdateColorAction } from "../GlobalActions";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { UpdateUploadData } from "../GlobalActions";
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FilterMode } from "../upload/FilterMode";
import CropIcon from '@mui/icons-material/Crop';
import Slider from "@material-ui/core/Slider";
import { TaskbarCrop } from "./TaskbarCrop";
import { TaskbarSuperphoto } from "./TaskbarSuperphoto";


function Taskbarx({
  showModalUploadTask,
  uploadClose,
  getSliderWidth,
}: any): JSX.Element {
  const dispatch = useDispatch();





  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      screenHeight: number;
    };
  }

  ///
  ///
  ///
  /// GET DARKMODE FROM REDUX STORE
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;


  const animation = useSpring({
    config: {
      duration: 600,
    },
    opacity: showModalUploadTask ? 1 : 0,
    transform: showModalUploadTask ? `translateX(0%)` : `translateX(-100%)`,
    padding: "0px",

  });


  const [showAlll, setshowAlll] = useState(false);

  const [hidecropper, setHidecropper] = useState(false);

  const [finalImage, setfinalimage] = useState<any>([]);

  const [hideCrop, sethideCrop] = useState(false);


  const [ratiox, setratiox] = useState(1);




  useEffect(() => {
    if (showModalUploadTask) {
      /// console.log(selectedImageReducer);
      setHidecropper(false);
      setratiox(1);
      setTimeout(() => { setshowAlll(true) }, 600)
    } else {
      setshowAlll(false);

    }

  }, [showModalUploadTask]);

  const itemUploadRefSD = useRef<any>([]);
  const itemUploadRefThumb = useRef<any>([]);
  const itemUploadRef = useRef<any>([]);



  const [ActivatefilterImage, setActivatefilterImage] =
    useState<boolean>(false);



  const { activatefilterImage, activatecropImage, selectedImage, cropimage } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.GlobalNavuploadReducer,
    })
  );
  const activatefilterImageReducer = activatefilterImage;
  const activatecropImageReducer = activatecropImage;
  const selectedImageReducer = selectedImage;
  const cropimageReducer = cropimage;

  const animationkk = useSpring({
    config: {
      duration: 600,
    },
    opacity: activatefilterImageReducer ? 1 : 0,
  });


  const addUploadItemsRef = (UploadRef: any) => {
    if (UploadRef && !itemUploadRef.current.includes(UploadRef)) {
      itemUploadRef.current.push(UploadRef);
    }
  };

  const addUploadItemsRefThumb = (UploadRef: any) => {
    if (UploadRef && !itemUploadRefThumb.current.includes(UploadRef)) {
      itemUploadRefThumb.current.push(UploadRef);
    } ////console.log(postItemsRef.current[1]);
  };

  const addUploadItemsRefSD = (UploadRef: any) => {
    if (UploadRef && !itemUploadRefSD.current.includes(UploadRef)) {
      itemUploadRefSD.current.push(UploadRef);
    }
  };


  var getSliderWidthNew: number = getSliderWidth;

  var xq;
  xq = matchTablet || matchMobile ? 1 : 2;
  var marginadd = Math.ceil((window.innerWidth * xq) / 100);

  getSliderWidthNew = matchPc
    ? getSliderWidth / 1.5
    : matchTablet
      ? getSliderWidth / 1.02
      : getSliderWidth / 0.77;


  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );


  return (
    <>
      <animated.div

        style={{
          ...animation, width: '100%',
          height: "100vh",
          position: "fixed",
          top: '-0vh',
          zIndex: 100,
          backgroundColor: darkmodeReducer
            ? 'rgb(80,80,80,0.78)'
            : 'rgb(200,200,200,0.8)',
          cursor: "default",
          overflow: hideCrop ? 'auto' : 'hidden',
        }}>
        <DialogContent
          className="dontallowhighlighting"
          style={{
            padding: "0px",

          }}>





          {showAlll ? <>   {hidecropper && selectedImageReducer.length === finalImage.length ?
            <animated.div
              style={{
                ...animationkk,
                position: activatefilterImageReducer ? "relative" : "fixed",
                top: activatefilterImageReducer ? "" : "-20vh",
                zIndex: activatefilterImageReducer ? 10 : 1,
                padding: "0px",
              }}
            >
              <FilterMode
                ratiox={ratiox}
                closeUploadModal={uploadClose}
                itemUploadRefThumb={itemUploadRefThumb}
                itemUploadRefSD={itemUploadRefSD}
                itemUploadRef={itemUploadRef}
                filterImage={finalImage}
                selectedImage={selectedImageReducer}
                ActivatefilterImage={ActivatefilterImage}
                setActivatefilterImage={setActivatefilterImage}
                getSliderWidthNew={getSliderWidthNew}
              />
            </animated.div> :


            <TaskbarCrop itemUploadRefSD={itemUploadRefSD} itemUploadRef={itemUploadRef} itemUploadRefThumb={itemUploadRefThumb} hideCrop={hideCrop} sethideCrop={sethideCrop} ratiox={ratiox} setratiox={setratiox}
              showModalUploadTask={showModalUploadTask} setHidecropper={setHidecropper} uploadClose={uploadClose} setfinalimage={setfinalimage} finalImage={finalImage} />

          }
          </> :
            null
          }


          <div style={{ width: '100%', position: 'fixed', top: '-800000000000vh' }}>
            {selectedImageReducer.map((picture: any, index: any) => (
              <>
                <img
                  ref={addUploadItemsRefThumb}
                  src={picture}
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: "auto",
                  }}
                />

                <img
                  ref={addUploadItemsRefSD}
                  src={picture}
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: "auto",
                  }}
                />

                <img
                  ref={addUploadItemsRef}
                  src={picture}
                  style={{
                    width: "100%",
                    height: "auto",
                    margin: "auto",
                  }}
                />
              </>
            ))}
          </div>




        </DialogContent> </animated.div >


    </>
  );
}

export const Taskbar = React.memo(Taskbarx);
