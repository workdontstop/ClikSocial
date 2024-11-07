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
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import CircleIcon from "@mui/icons-material/Circle";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import CancelIcon from '@material-ui/icons/Cancel';

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "./DetectDevice";
import { UpdateTutorials } from "./GlobalActions";


import AddIcon from "@mui/icons-material/Add";
import {
  UpdateReactType,
  Updatepagenum,
} from "./GlobalActions";

import { useInView } from "react-intersection-observer";

function Tutorialx({ type, index, post, minClicked }: any) {





  const {
    REACT_APP_SUPERSTARZ_URL,
    REACT_APP_CLOUNDFRONT,
    REACT_APP_APPX_STATE,
  } = process.env;



  const dispatch = useDispatch();






  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      Guest: number



    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { darkmode, Guest } = useSelector(
    (state: RootStateGlobalReducer) => ({
      ...state.GlobalReducer,
    })
  );

  const darkmodeReducer = darkmode;
  const GuestReducer = Guest;



  ///
  ///
  ///
  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );
  var PaperStyleReducer = "";

  if (darkmodeReducer) {
    PaperStyleReducer = PaperStyleDark;
  } else {
    PaperStyleReducer = PaperStyleLight;
  }




  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      reg: number;
      id: number;
      memeberPageid: number;
    };
  }
  const { image, id, reg, memeberPageid } = useSelector((state: RootStateReducerImage) => ({
    ...state.UserdataReducer,
  }));
  const imageReducer = image;
  const idReducer = id;
  const regReducer = reg;
  const memeberPageidReducer = memeberPageid;






  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    GlobalReducerLoader: {
      loader: boolean;
      clickPostHint: string;
      clickPostHintState: boolean;
      connectHint: string;
      connectHintState: boolean;
      minimiseHint: string;
      minimiseHintState: boolean;
      interactHint: string;
      interactHintState: boolean;
      EditHint: string;
      EditHintState: boolean;
      interactionstartHint: string;
      interactionstartHintState: boolean;
      adjustinteractionHint: string;
      adjustinteractionHintState: boolean;
    };
  }
  const { clickPostHint, clickPostHintState, connectHint, connectHintState, minimiseHint, minimiseHintState, interactHint, interactHintState,
    EditHint, EditHintState, interactionstartHint, interactionstartHintState } = useSelector((state: RootStateReducerImage) => ({
      ...state.GlobalReducerLoader,
    }));



  const [hide1, sethide1] = useState(false);
  const [hide2, sethide2] = useState(false);
  const [hide3, sethide3] = useState(false);
  const [hide4, sethide4] = useState(false);

  useEffect(() => {
    if (idReducer === GuestReducer) {
      setTimeout(() => {
        sethide1(true);
        sethide2(true);
        sethide3(true);

      }, 100)


    } else {


    }
    //////*****

    /*  
 */

  }, [post, idReducer, GuestReducer])


  return <>


    {type === 1 && index === 0 && clickPostHintState && regReducer === 1 ?

      <Grid container

        style={{
          height: "0px",
          width: '100%',
          position: 'fixed',
          top: matchMobile ? '12vh' : '14vh',
          left: matchMobile ? '16.5%' : '28%',
          zIndex: 50000,
          color: darkmodeReducer ? 'whitesmoke' : 'black',
          fontFamily: 'sans-serif',
          display: hide1 ? 'none' : 'block'
        }}>
        <Grid
          xs={12}
          item

        >

          <span
            onClick={() => {
              dispatch(UpdateTutorials(type, false));
            }}
            style={{
              backgroundImage: PaperStyleReducer,
              padding: matchMobile ? '2vh' : '2.5vh',
              paddingRight: matchMobile ? '10vw' : '3vw',
              paddingLeft: matchMobile ? '4vw' : '1vw',
              width: 'auto',
              fontSize: matchMobile ? `1.5vh` : `0.8vw`,
              position: 'absolute',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '20px',
            }}>Clik On Interactions


          </span>

        </Grid>

      </Grid> : null

    }

    {type === 2 && index === 1 && minimiseHintState && regReducer === 1 ?

      <Grid container

        style={{
          height: "0px",
          width: '100%',
          position: 'fixed',
          top: matchMobile ? '12vh' : '14vh',
          left: matchMobile ? '16.5%' : '28%',
          zIndex: 50000,
          color: darkmodeReducer ? 'whitesmoke' : 'black',
          fontFamily: 'sans-serif',
          display: hide2 ? 'none' : 'block'
        }}>
        <Grid
          xs={12}
          item

        >

          <span

            onClick={() => {
              dispatch(UpdateTutorials(type, false));
            }}
            style={{
              backgroundImage: PaperStyleReducer,
              padding: matchMobile ? '2vh' : '2.5vh',
              paddingRight: matchMobile ? '10vw' : '3vw',
              paddingLeft: matchMobile ? '4vw' : '1vw',
              width: 'auto',
              fontSize: matchMobile ? `1.5vh` : `0.8vw`,
              position: 'absolute',
              cursor: 'pointer',
              borderRadius: '20px',
              fontWeight: 'bold',
            }}>

            Clik On Plain Image For Audio



          </span>

        </Grid>

      </Grid> : null

    }



    {type === 3 && index === 2 && connectHintState && regReducer === 1 ?

      <Grid container

        style={{
          height: "0px",
          width: '100%',
          position: 'fixed',
          top: matchMobile ? '12vh' : '14vh',
          left: matchMobile ? '16.5%' : '28%',
          zIndex: 50000,
          color: darkmodeReducer ? 'whitesmoke' : 'black',
          fontFamily: 'sans-serif',
          display: hide3 ? 'none' : 'block'
        }}>
        <Grid
          xs={12}
          item

        >

          <span

            onClick={() => {
              dispatch(UpdateTutorials(type, false));
            }}

            style={{
              backgroundImage: PaperStyleReducer,
              padding: matchMobile ? '2vh' : '2.5vh',
              paddingRight: matchMobile ? '10vw' : '3vw',
              paddingLeft: matchMobile ? '4vw' : '1vw',
              width: 'auto',
              position: 'absolute',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: matchMobile ? `1.5vh` : `0.8vw`,
              borderRadius: '20px',
            }}>Double Clik Profile Pic To Add Favorites



          </span>

        </Grid>

      </Grid > : null

    }



    {
      type === 4 && index === 0 && interactHintState && GuestReducer === idReducer ?

        <Grid container

          style={{
            height: "0px",
            width: '100%',
            position: 'fixed',
            top: matchMobile ? '5vh' : '10vh',
            left: matchMobile ? '12%' : '32%',
            zIndex: 50000,
            color: darkmodeReducer ? 'whitesmoke' : 'black',
            fontFamily: 'sans-serif',
            display: 'none',
          }}>


        </Grid> : null

    }



    {
      type === 5 && EditHintState && regReducer === 1 ?

        <Grid container

          style={{
            height: "0px",
            width: '100%',
            position: 'fixed',
            top: '26vh',
            left: '40vw',
            color: darkmodeReducer ? 'whitesmoke' : 'black',
            zIndex: 50000,
            fontFamily: 'sans-serif'
          }}>
          <Grid
            xs={12}
            item

          >

            <span
              onClick={() => {
                dispatch(UpdateTutorials(type, false));
              }}

              style={{
                backgroundImage: PaperStyleReducer,
                padding: matchMobile ? '2vh' : '2.5vh',
                paddingRight: matchMobile ? '10vw' : '3vw',
                paddingLeft: matchMobile ? '4vw' : '1vw',
                width: 'auto',
                fontSize: matchMobile ? `1.5vh` : `0.8vw`,
                position: 'absolute',
                cursor: 'pointer',
                borderRadius: '20px',
                fontWeight: 'bold',
              }}>Double Click This Image To Add Media


            </span>

          </Grid>

        </Grid> : null

    }


    {
      type === 6 && interactionstartHintState && regReducer === 1 ?

        <Grid container

          style={{
            height: "0px",
            width: '100%',
            position: 'fixed',
            top: '3.3vh',
            left: '8vw',
            zIndex: 50000,
            color: darkmodeReducer ? 'whitesmoke' : 'black',
            fontFamily: 'sans-serif'
          }}>
          <Grid
            xs={12}
            item

          >

            <span
              onClick={() => {
                dispatch(UpdateTutorials(type, false));
              }}

              style={{
                backgroundImage: PaperStyleReducer,
                padding: matchMobile ? '2vh' : '2.5vh',
                paddingRight: matchMobile ? '10vw' : '3vw',
                paddingLeft: matchMobile ? '4vw' : '1vw',
                width: 'auto',
                fontSize: matchMobile ? `1.5vh` : `0.8vw`,
                position: 'absolute',
                cursor: 'pointer',
                borderRadius: '20px',
                fontWeight: 'bold',
              }}> Click On This Image To Add Interaction
            </span>

          </Grid>

        </Grid> : null

    }



  </>;
}





export const Tutorial = React.memo(Tutorialx);
