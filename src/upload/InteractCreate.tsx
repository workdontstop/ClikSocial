import React, { useRef, useState, useEffect, useCallback, useLayoutEffect, } from "react";
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
import CheckIcon from "@mui/icons-material/Check";
import BentoIcon from "@mui/icons-material/Bento";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import CircleIcon from "@mui/icons-material/Circle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchMobile, matchPc, matchTablet } from "../DetectDevice";
import { UserInfoUpdateMEMBER } from "../log/actions/UserdataAction";
import BackspaceIcon from "@material-ui/icons/Backspace";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PanoramaIcon from "@material-ui/icons/Panorama";
import AddIcon from "@mui/icons-material/Add";
import Slider from "@material-ui/core/Slider";
import CloseIcon from "@mui/icons-material/Close";

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  UpdateLoader,
  UpdateHistory,
  UpdateCommentHistory,
  UpdatePostFromCom,
  UpdateReactType,
  Updatepagenum,
} from "../GlobalActions";



import { InteractMenu } from "./InteractMenu";

import { InteractMenux } from "./InteractMenux";


import { useInView } from "react-intersection-observer";

function InteractCreatex({
  stickerOPtionsDefault,
  setcropInitialIn,
  setcropInitialIn2,
  index,
  moveCordinatesMultiple,
  showBorder,
  setshowBorder,
  canxxtim,
  canxxTime,
  valuex,
  valuex2,
  handleChange,
  adjustinteract1,
  adjustinteract2,
  interactContent,
  interactContent2,
  setadjustinteract1,
  setadjustinteract2,
  mobilefont,
  pcfont,
  handleChange2x,
  colorx,
  callDelInteract,
  percentageCoveragex,
  interactContenttype,
  interactContentvideo,
  interactContenttype2,
  interactContentvideo2,
  StopTouch,
  TouchedOpacity,
  canvasRefIn,
  canvasInteractWidth,
  screenWidth,
  Touched,
  triggerFileInput,
  interactHeightResolution,



  dat,
  cropInitialIn,
  cropInitialIn2,
  setradius1,
  setradius2,
  callInteract,
  setTouched,
  showArc,
  canvasInteractWidthCss,
  setstickerOPtionsDefault,
  ratiox

}: any) {
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

  const [AllowDel, setAllowDel] = useState(false);
  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [AllowDel2, setAllowDel2] = useState(false);
  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const videoRefjj = useRef<HTMLVideoElement>(null);

  const videoRefjja = useRef<HTMLVideoElement>(null);


  const tiim = useRef<ReturnType<typeof setTimeout> | null>(null);

  const TouchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  const [openMenu, setopenMenu] = useState(true);

  // Helper function to get a pixel from image data
  function getPixel(imageData: any, x: any, y: any) {
    var index = (y * imageData.width + x) * 4;
    return [
      imageData.data[index],
      imageData.data[index + 1],
      imageData.data[index + 2],
      imageData.data[index + 3]
    ];
  }

  // Helper function to interpolate between pixel values
  function interpolatePixelValues(p1: any, p2: any, t: any) {
    return [
      (1 - t) * p1[0] + t * p2[0],
      (1 - t) * p1[1] + t * p2[1],
      (1 - t) * p1[2] + t * p2[2],
      (1 - t) * p1[3] + t * p2[3]
    ];
  }



  // Bilinear interpolation function
  function interpolate(imageData: any, x: any, y: any) {
    var x_floor = Math.floor(x);
    var y_floor = Math.floor(y);

    // Ensure bounds are within the source image
    x_floor = Math.max(0, Math.min(imageData.width - 2, x_floor));
    y_floor = Math.max(0, Math.min(imageData.height - 2, y_floor));

    var x_frac = x - x_floor;
    var y_frac = y - y_floor;

    var p1 = getPixel(imageData, x_floor, y_floor);
    var p2 = getPixel(imageData, x_floor + 1, y_floor);
    var p3 = getPixel(imageData, x_floor, y_floor + 1);
    var p4 = getPixel(imageData, x_floor + 1, y_floor + 1);

    var topInterpolation = interpolatePixelValues(p1, p2, x_frac);
    var bottomInterpolation = interpolatePixelValues(p3, p4, x_frac);

    return interpolatePixelValues(topInterpolation, bottomInterpolation, y_frac);
  }

  const handleTouchStartIn = useCallback((e: any, type: any) => {
    // Check if touch interactions should be processed based on the device
    if (StopTouch) {
      return;
    }

    // Determine clientX and clientY based on mobile or desktop events
    const zx = type === 0 ? e.clientX : e.touches[0].clientX;
    const zy = type === 0 ? e.clientY : e.touches[0].clientY;



    // Get canvas dimensions
    const canvasWidth = canvasRefIn.current.width;
    const xCoordinate = zx;
    const xTravelPercentage = (xCoordinate / canvasWidth) * 100;

    const canvasHeight = canvasRefIn.current.height;
    const yCoordinate = zy;
    const yTravelPercentage = (yCoordinate / canvasHeight) * 100;



    //alert(xTravelPercentage);

    const newCropInitialIn = {
      x: xTravelPercentage,
      y: yTravelPercentage,
    };

    const newCropInitialIn2 = {
      x: xTravelPercentage,
      y: yTravelPercentage,
    };

    // Check interaction contents
    if (interactContent[index] || interactContent2[index]) {
      const context = canvasRefIn.current.getContext("2d");
      const pictureWidth = canvasInteractWidth;
      const offsetX = (screenWidth - pictureWidth) / 2;


      if (context.isPointInPath(zx, zy)) {
        // Existing logic for handling touch in path
        if (Touched === 1 || Touched === 2) {
          // Handle touch or mouse actions when already touched
        } else {
          // Optionally call a draw function here
          // calldraw(3, zx, zy, 0);
        }
      } else {
        if (interactContent[index]) {
          if (adjustinteract1) {
            setcropInitialIn((prevArray: any) => {
              const newArray: any = [...prevArray];
              newArray[index] = newCropInitialIn;
              return newArray;
            });

            if (!showBorder) {
              setshowBorder(true);
            }

            if (canxxtim.current) {
              clearTimeout(canxxtim.current);
            }

            canxxtim.current = setTimeout(() => {
              setshowBorder(false);
            }, canxxTime);
          }
        } else {



          setcropInitialIn((prevArray: any) => {
            const newArray: any = [...prevArray];
            newArray[index] = newCropInitialIn;
            return newArray;
          });

          if (e.target) {

            if (matchMobile) { } else {
              triggerFileInput(1);
            }
            // Handle other interactions
          }
        }

        if (interactContent2[index]) {
          if (adjustinteract2) {
            setcropInitialIn2((prevArray: any) => {
              const newArray: any = [...prevArray];
              newArray[index] = newCropInitialIn2;
              return newArray;
            });

            if (!showBorder) {
              setshowBorder(true);
            }

            if (canxxtim.current) {
              clearTimeout(canxxtim.current);
            }

            canxxtim.current = setTimeout(() => {
              setshowBorder(false);
            }, canxxTime);
          }

          if (Touched === 1 || Touched === 2) {
            // Handle additional touch logic if needed
          } else {
            // Optionally call a draw function here
            // calldraw(3, zx, zy, 0);
          }
        } else {
          setcropInitialIn2((prevArray: any) => {
            const newArray: any = [...prevArray];
            newArray[index] = newCropInitialIn2;
            return newArray;
          });

          if (matchMobile) { } else {
            triggerFileInput(2);
          }
        }
      }
    } else {



      setcropInitialIn((prevArray: any) => {
        const newArray: any = [...prevArray];
        newArray[index] = newCropInitialIn;
        return newArray;
      });

      if (e.target) {

        if (matchMobile) { } else {
          triggerFileInput(1);
        }
        /// alert('jjk');
        // Handle additional logic here
      }
    }

    // Mobile specific adjustments based on matchMobile state
    if (matchMobile) {
      // Add any mobile specific behaviors here
      // For example: adjusting touch interactions or UI
    }
  }, [
    interactContent[index],
    interactContent2[index],
    Touched,
    canvasRefIn,
    canvasInteractWidth,
    StopTouch,
    interactHeightResolution,
    adjustinteract1,
    adjustinteract2,
    matchMobile, // Include matchMobile in dependencies
  ]);





  useLayoutEffect(() => {
    if (dat) {

      if (Touched === 1 || Touched === 2) {
        calldraw(0, 0, 0, 1);
      } else { calldraw(0, 0, 0, 0); }

    }
  }, [showBorder, dat, Touched, canvasInteractWidth, interactHeightResolution, interactContent, interactContent2, cropInitialIn, cropInitialIn2, valuex, valuex2]);









  const calldraw = useCallback((typex: number, x: number, y: number, mode: number) => {

    if (canvasRefIn.current) {
      var context = canvasRefIn.current.getContext("2d");



      canvasRefIn.current.height = interactHeightResolution;
      canvasRefIn.current.width = canvasInteractWidth;


      requestAnimationFrame(() => {
        context.drawImage(dat, 0, 0, canvasInteractWidth, interactHeightResolution);
        // Get the screen width

        function adjustBrightness(imageData: any, factor: any) {
          var data = imageData.data;
          for (var i = 0; i < data.length; i += 4) {
            // Adjust brightness for each RGB component
            data[i] *= factor;     // Red
            data[i + 1] *= factor; // Green
            data[i + 2] *= factor; // Blue
          }
        }


        // Get the picture width (adjust this according to your specific scenario)
        const pictureWidth = canvasInteractWidth;

        // Calculate the offsetX based on the combination of screen width and picture width
        const offsetX = (screenWidth - pictureWidth) / 2;

        // Use cropInitialIn.y directly for offsetY as it works perfectly



        // Adjust the coordinates of ctx.arc() based on the offset
        const xx = cropInitialIn[index].x;
        const xx2 = cropInitialIn2[index].x;


        var yy = cropInitialIn[index].y;
        var yy2 = cropInitialIn2[index].y;

        ////////////////////



        /////////////////////////////





        // Calculate the X-coordinate
        const xCoordinate = (xx / 100) * canvasInteractWidth;
        var x2 = xCoordinate;



        const yCoordinate = (yy / 100) * interactHeightResolution;
        var y2 = yCoordinate;




        // Calculate the X-coordinate
        const xCoordinateb = (xx2 / 100) * canvasInteractWidth;
        var x2b = xCoordinateb;



        const yCoordinateb = (yy2 / 100) * interactHeightResolution;
        var y2b = yCoordinateb;







        var scaleFactor = 1.02; // You can adjust this value to control the zoom level



        if (interactContent[index] && mode === 0 || interactContent2[index] && mode === 0) {


          ///alert(x2);

          if (interactContent[index]) {
            var r = valuex;
            // Assuming canvasWidth is the width of your canvas and r is the radius of the arc
            const canvasWidth = canvasInteractWidth /* your canvas width */;
            // Calculate the percentage coverage
            const percentageCoverage1 = (2 * r / canvasWidth) * 100;
            ///setpercentageCoveragex(percentageCoverage);



            if (stickerOPtionsDefault === 4) {

              setradius1(percentageCoverage1);
            }

            if (typex === 0 || typex === 3) {


              var valuexx = valuex - 0.5;
              var imageData = context.getImageData(x2 - 1 - r, y2 - 0.5 - r, 2.1 * r, 2.1 * r); // (x, y, width, height)


              // Create a larger image data for the zoom effect
              var zoomedImageData = context.createImageData(imageData.width * scaleFactor, imageData.height * scaleFactor);

              // Copy pixels from the original image data to the larger image data with bilinear interpolation
              for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                  var sourceX = xbb / scaleFactor;
                  var sourceY = ybb / scaleFactor;

                  // Get the interpolated pixel value
                  var interpolatedPixel = interpolate(imageData, sourceX, sourceY);

                  // Set the pixel values in the zoomed image data
                  var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                  zoomedImageData.data[destIndex] = interpolatedPixel[0];
                  zoomedImageData.data[destIndex + 1] = interpolatedPixel[1];
                  zoomedImageData.data[destIndex + 2] = interpolatedPixel[2];
                  zoomedImageData.data[destIndex + 3] = interpolatedPixel[3];
                }
              }

              // Apply a light white border at the borders
              var borderWidth = showBorder ? 1 : 0; // Adjust the width of the border
              for (var ybb = 0; ybb < zoomedImageData.height; ybb++) {
                for (var xbb = 0; xbb < zoomedImageData.width; xbb++) {
                  if (
                    xbb < borderWidth ||
                    xbb >= zoomedImageData.width - borderWidth ||
                    ybb < borderWidth ||
                    ybb >= zoomedImageData.height - borderWidth
                  ) {
                    // Apply a light white color to the border
                    var destIndex = (ybb * zoomedImageData.width + xbb) * 4;
                    zoomedImageData.data[destIndex] = 230; // Red channel
                    zoomedImageData.data[destIndex + 1] = 20; // Green channel
                    zoomedImageData.data[destIndex + 2] = 2; // Blue channel
                    zoomedImageData.data[destIndex + 3] = 0.8; // Alpha channel
                  }
                }
              }

              // Put the modified pixel data back onto the canvas
              context.putImageData(zoomedImageData, x2 - r * scaleFactor, y2 - r * scaleFactor);
            }

            ////////////////////////////////////////////////////////////////////////////////////
            /////typex filps between zero and one for blinking efect


            if (typex === 0 || typex === 3) {



              context.beginPath();
              context.arc(x2, y2, r + 14, 0, Math.PI * 2);
              var clikarc1 = context.isPointInPath(x, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              ///context.fillStyle = `rgba(250, 250,250,0)`;
              context.closePath();
              context.fill();

              ///context.lineWidth = 2;
              ///context.strokeStyle = "#333333";
              ////context.stroke();
            }
            else if (typex === 1) {
              context.beginPath();
              context.arc(x2, y2, r + 14, 0, Math.PI * 2);
              var clikarc1 = context.isPointInPath(x, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              context.closePath();
              context.fill();


            } else {


            }
          }



          if (interactContent2[index]) {

            var r = valuex2;
            // Assuming canvasWidth is the width of your canvas and r is the radius of the arc
            const canvasWidth = canvasInteractWidth /* your canvas width */;
            // Calculate the percentage coverage
            const percentageCoverage2 = (2 * r / canvasWidth) * 100;
            ///setpercentageCoveragex(percentageCoverage);



            if (stickerOPtionsDefault === 4) {

              setradius2(percentageCoverage2);
            }


            if (typex === 0 || typex === 3) {

              var valuexx2 = valuex2 - 0.5;

              var imageData2 = context.getImageData(x2b - 1 - r, y2b - 0.5 - r, 2.1 * r, 2.1 * r); // (x, y, width, height)


              // Create a larger image data for the zoom effect
              var zoomedImageData2 = context.createImageData(imageData2.width * scaleFactor, imageData2.height * scaleFactor);

              // Copy pixels from the original image data to the larger image data with bilinear interpolation
              for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                  var sourceX = xbb / scaleFactor;
                  var sourceY = ybb / scaleFactor;

                  // Get the interpolated pixel value
                  var interpolatedPixel = interpolate(imageData2, sourceX, sourceY);

                  // Set the pixel values in the zoomed image data
                  var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                  zoomedImageData2.data[destIndex] = interpolatedPixel[0];
                  zoomedImageData2.data[destIndex + 1] = interpolatedPixel[1];
                  zoomedImageData2.data[destIndex + 2] = interpolatedPixel[2];
                  zoomedImageData2.data[destIndex + 3] = interpolatedPixel[3];
                }
              }

              // Apply a light white border at the borders
              var borderWidth = showBorder ? 1 : 0;  // Adjust the width of the border
              for (var ybb = 0; ybb < zoomedImageData2.height; ybb++) {
                for (var xbb = 0; xbb < zoomedImageData2.width; xbb++) {
                  if (
                    xbb < borderWidth ||
                    xbb >= zoomedImageData2.width - borderWidth ||
                    ybb < borderWidth ||
                    ybb >= zoomedImageData2.height - borderWidth
                  ) {
                    // Apply a light white color to the border
                    var destIndex = (ybb * zoomedImageData2.width + xbb) * 4;
                    zoomedImageData2.data[destIndex] = 230; // Red channel
                    zoomedImageData2.data[destIndex + 1] = 20; // Green channel
                    zoomedImageData2.data[destIndex + 2] = 2; // Blue channel
                    zoomedImageData2.data[destIndex + 3] = 0.8; // Alpha channel
                  }
                }
              }

              // Put the modified pixel data back onto the canvas
              context.putImageData(zoomedImageData2, x2b - r * scaleFactor, y2b - r * scaleFactor);
            }

            /////typex filps between zero and one for blinking efect
            if (typex === 0 || typex === 3) {
              context.beginPath();
              context.arc(x2b, y2b, r + 14, 0, Math.PI * 2);
              var clikarc2 = context.isPointInPath(x, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              context.closePath();
              context.fill();

              /***
               * 
               * context.lineWidth = 2;
              context.strokeStyle = "#333333";
              context.stroke();
              
              **/
            }
            else if (typex === 1) {
              context.beginPath();
              context.arc(x2b, y2b, r + 14, 0, Math.PI * 2);
              var clikarc2 = context.isPointInPath(x, y);
              context.fillStyle = `rgba(250, 250,250,0.0)`;
              context.closePath();
              context.fill();


            } else {


            }
          }


          if (typex === 3) { } else {

            if (tiim.current) {
              clearTimeout(tiim.current);
            }
            tiim.current = setTimeout(() => {

              if (Touched === 1 || Touched === 2) { } else {

                if (typex === 0 || typex === 3) {
                  calldraw(1, 0, 0, 0);
                } else { calldraw(0, 0, 0, 0); }
              }
            }, 170)

          }







          if (typex === 3) {
            if (clikarc1) {
              ///  calldraw(0, 0, 0, 1);

              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              callInteract(1);
              setTouched(1);


              if (TouchTimer.current) {
                clearTimeout(TouchTimer.current);
              }


              TouchTimer.current = setTimeout(() => {

                setTouched(0);
                callInteract(0);

                if (TouchTimer.current) {
                  clearTimeout(TouchTimer.current);
                }


              }, 5000);

              /// context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
              ///callInteract(00, 0, 0, 1)
              // Stop the spinning animation
            } else if (clikarc2) {
              ///  calldraw(0, 0, 0, 1);

              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              callInteract(2);
              setTouched(2);


              if (TouchTimer.current) {
                clearTimeout(TouchTimer.current);
              }


              TouchTimer.current = setTimeout(() => {

                setTouched(0);
                callInteract(0);

                if (TouchTimer.current) {
                  clearTimeout(TouchTimer.current);
                }


              }, 5000);

              /// context.clearRect(0, 0, canvasRefIn.current.width, canvasRefIn.current.height);
              ///callInteract(00, 0, 0, 1)
              // Stop the spinning animation
            } else {

            }
            ///////////////
          }



        }


        if (interactContent[index] || interactContent2[index]) {
          if (cropInitialIn.x === 0) {
          } else {
            ///canvasRefIn.current.style.width = `${canvasInteractWidthCss}px`;
            /// canvasRefIn.current.style.height = `${window.innerHeight}px`;
          }
        }




      });
      ///use this
    }

  }, [showBorder, valuex2, valuex, dat, cropInitialIn, cropInitialIn2, interactContent2, interactContent, canvasRefIn,
    showArc, canvasInteractWidth, interactHeightResolution, Touched, canvasInteractWidthCss, stickerOPtionsDefault]);



  const [startdown, setstartdown] = useState(false);


  return <>


    <canvas
      className={TouchedOpacity ? 'changeOpacityEdit' : ""}



      onMouseUp={(e: any) => {
        if (matchMobile) { } else {
          handleTouchStartIn(e, 0);
          setstartdown(false);
        }// Handle mouse up with type 0 for mouse event
      }}

      onMouseMove={(e: any) => {

        if (startdown) {
          if (matchMobile) { } else {


            setstartdown(true);
            handleTouchStartIn(e, 0);

          }// Handle mouse up with type 0 for mouse event
        }
      }
      }


      onMouseDown={(e: any) => {
        if (matchMobile) { } else {

          setstartdown(true);
          handleTouchStartIn(e, 0);

        }// Handle mouse up with type 0 for mouse event
      }}

      onTouchStart={(e: any) => {



        if (matchMobile) {
          e.preventDefault(); // Prevent default behaviors like page scroll
          handleTouchStartIn(e, 1); // Handle touch end with type 1 for touch event }
        } else { }


      }}

      onTouchMove={(e: any) => {

        if (matchMobile) {
          e.preventDefault(); // Prevent default behaviors like page scroll
          handleTouchStartIn(e, 1); // Handle touch end with type 1 for touch event }
        } else { }


      }}





      onTouchEnd={((e: any) => {

        if (interactContent[index]) {

          if (e.target) {
            triggerFileInput(2);
            // Handle other interactions
          }
        } else {

          if (e.target) {
            triggerFileInput(1);
            // Handle other interactions
          }



        }

      })}

      ref={canvasRefIn}
      style={{
        transform: matchMobile ?

          ratiox === 1 ? 'scale(0.82)' :
            ratiox === 2 ? 'scale(0.66)' :
              ratiox === 3 ? 'scale(0.56)' :
                ratiox === 4 ? 'scale(0.49)' :
                  'scale(0.417)'


          : 'scale(1)',
        padding: "0px",
        position: 'relative',
        zIndex: 11,
        top: '0vh',
        margin: matchMobile ? '' : 'left',
        left: matchMobile ?

          ratiox === 1 ? '-11vw' :
            ratiox === 2 ? '-27vw' :
              ratiox === 3 ? '-42.5vw' :
                ratiox === 4 ? '-59vw' :
                  '-73.5vw' :


          '',
        backgroundColor: 'rgb(0,0,0,0)',
        display: stickerOPtionsDefault === 4 ? 'block' : 'none',
      }}
    />


    {
      openMenu ?


        matchMobile ? <InteractMenux
          ratiox={ratiox}

          interactContenttype={interactContenttype}
          interactContentvideo={interactContentvideo}
          interactContenttype2={interactContenttype2}
          interactContentvideo2={interactContentvideo2}
          percentageCoveragex={percentageCoveragex}
          callDelInteract={callDelInteract}
          colorx={colorx}
          setadjustinteract2={setadjustinteract2}
          setcropInitialIn2={setcropInitialIn2}
          interactContent2={interactContent2}
          stickerOPtionsDefault={stickerOPtionsDefault}
          setcropInitialIn={setcropInitialIn} index={index}
          moveCordinatesMultiple={moveCordinatesMultiple}
          showBorder={showBorder}
          setshowBorder={setshowBorder}
          canxxtim={canxxtim}
          canxxTime={canxxTime}
          valuex={valuex}
          valuex2={valuex2}
          handleChange={handleChange}
          adjustinteract1={adjustinteract1}
          adjustinteract2={adjustinteract2}
          interactContent={interactContent}
          setadjustinteract1={setadjustinteract1}
          mobilefont={mobilefont}
          pcfont={pcfont}
          handleChange2x={handleChange2x}
        /> :
          <InteractMenu
            interactContenttype={interactContenttype}
            interactContentvideo={interactContentvideo}
            interactContenttype2={interactContenttype2}
            interactContentvideo2={interactContentvideo2}
            percentageCoveragex={percentageCoveragex}
            callDelInteract={callDelInteract}
            colorx={colorx}
            setadjustinteract2={setadjustinteract2}
            setcropInitialIn2={setcropInitialIn2}
            interactContent2={interactContent2}
            stickerOPtionsDefault={stickerOPtionsDefault}
            setcropInitialIn={setcropInitialIn} index={index}
            moveCordinatesMultiple={moveCordinatesMultiple}
            showBorder={showBorder}
            setshowBorder={setshowBorder}
            canxxtim={canxxtim}
            canxxTime={canxxTime}
            valuex={valuex}
            valuex2={valuex2}
            handleChange={handleChange}
            adjustinteract1={adjustinteract1}
            adjustinteract2={adjustinteract2}
            interactContent={interactContent}
            setadjustinteract1={setadjustinteract1}
            mobilefont={mobilefont}
            pcfont={pcfont}
            handleChange2x={handleChange2x}
          /> : null}







    {stickerOPtionsDefault === 4 ?
      interactContent[index] || interactContent2[index] ? null : < Grid
        item
        xs={12}
        style={{
          margin: "auto",
          textAlign: 'center',
          left: '0px',
          height: "20px",
          position: 'relative',
          bottom: matchMobile ? '30vh' : '8vh',
          width: '100%',
          zIndex: 20
        }}
      >
        <CloseIcon
          onClick={() => {
            if (tiim.current) {
              clearTimeout(tiim.current);
            }
            if (TouchTimer.current) {
              clearTimeout(TouchTimer.current);
            }

            calldraw(0, 0, 0, 1);
            setstickerOPtionsDefault(0);
            //setStopCollectInteractData1(false);
          }}
          className={
            darkmodeReducer
              ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
              : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
          }
          style={{
            margin: "auto",
            color: "#ffffff",
            fontSize: matchMobile
              ? `${mobilefont}vh`
              : `${pcfont}vw`,

          }}
        />
      </Grid>
      : null}

    {stickerOPtionsDefault === 4 ?
      interactContent[index] || interactContent2[index] ? <>

        <Grid
          item
          xs={12}
          style={{
            margin: "auto",
            textAlign: 'center',
            left: '0px',
            height: "20px",
            position: 'fixed',
            bottom: matchMobile ?

              ratiox >= 3 ? '33vh' : '20vh' : '8vh',
            width: '100%',
            zIndex: 200
          }}
        >
          {Touched === 1 || Touched === 2 ? <DeleteIcon
            onClick={() => {

              /////
              ////callDelInteract();

            }}
            className={
              darkmodeReducer
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{
              margin: "auto",
              color: "#ffffff",
              fontSize: matchMobile
                ? `${mobilefont}vh`
                : `${pcfont}vw`,
            }}
          /> : <CheckIcon
            onClick={() => {

              if (tiim.current) {
                clearTimeout(tiim.current);
              }
              if (TouchTimer.current) {
                clearTimeout(TouchTimer.current);
              }

              calldraw(0, 0, 0, 1);

              setstickerOPtionsDefault(0);


            }}
            className={
              darkmodeReducer
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{
              margin: "auto",
              color: "#ffffff",
              fontSize: matchMobile
                ? `${mobilefont}vh`
                : `${pcfont}vw`,
              display: adjustinteract1 || adjustinteract2 ? 'none' : 'block',

            }}
          />}


        </Grid>
      </> : null : null}

  </>;
}

export const InteractCreate = React.memo(InteractCreatex);
