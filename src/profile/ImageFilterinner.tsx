import React, { useState, useEffect, useRef } from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";

function ImageFilterinnerx({
  AllowCaption,
  optionsShow,
  optinstopshowingReducer,
  typeTop,
  selectedImage,
  closeoptionsslide,
  animationop,
  optionsCollectImageRef,
  handleTouchStartOptions,
  handleTouchMoveOptions,
  modalanimation,
  nextSlidePc,
  optionsImages,
  ActiveSlide,
  optionsNameData,
  clickOptions,
  optionsClickType,
  getSliderWidthNew,
  itemUploadRef,
  imageFiltersRef,
  getImageWidth,
  length,
  itemUploadRefThumb,
  loadedimage,
  startSuperSticker,
  duplicateItemupload,
  activeSticker,
  setactiveSticker,
  seteffectMode,
  effectMode,
  setcallfilter,
  callfilter,
  regimageholdfilter,
  setregimageholdfilter,
  FilterUnderStickerStopFiltering,
  trapfilters,
  settrapfilters,
  sethdfilter,
  hdfilter,
  superstickerIndex,
  superzeroeffect,
  finalImageData,
  setfinalImageData,
  finalImageDataSD,
  setfinalImageDataSD,
  finalImageDataBASE64,
  setfinalImageDataBASE64,
  setstartTopicCap,
  itemUploadRefSD,
  setsupeFilterLoadFade,
  setConfirmUpload
}: any): JSX.Element {
  const finalImageDataxx = [...finalImageData];
  const finalImageDataxxSD = [...finalImageDataSD];
  const finalImageDataxxBASE64 = [...finalImageDataBASE64];

  const effectModexx = [...effectMode];
  const regimageholdfilterxx = [...regimageholdfilter];
  const trapfiltersxx = [...trapfilters];

  const [blink, setblink] = useState(false);

  const getFilterWidthViewable = useRef<any>([]);
  const getFilterWidthfull = useRef<any>([]);

  const Timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const Timerf = useRef<ReturnType<typeof setTimeout> | null>(null);

  var addedwidth: number;
  addedwidth = matchTablet || matchMobile ? 77 : 78;

  const thumbsLength = 13;

  ///
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


  useEffect(() => {

    if (AllowCaption) {

      setsupeFilterLoadFade(true);
      ApplyImageFilter(effectMode[0], 0, 0, getImageWidth, "imageHDall", "hd");
    }


  }, [AllowCaption])



  ///
  ///
  ///
  /// GET GLOBAL INNER NAVIGATION VARIABLE
  const { activatefilterImage } = useSelector((state: RootStateOrAny) => ({
    ...state.GlobalNavuploadReducer,
  }));
  const activatefilterImageReducer = activatefilterImage;

  var circleIdentify = typeTop ? 0 : 4;
  var circleIdentify2 = typeTop ? 1 : 5;

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

  const [showfiltersOnload, setshowfiltersOnload] = useState(false);

  const [allow, setallow] = useState(false);

  const [showfiltersOnloadblur, setshowfiltersOnloadblur] = useState(false);

  const [gotoCaption, setgotoCaption] = useState<boolean>(false);

  useEffect(() => {
    if (gotoCaption) {
    }
  }, [gotoCaption]);

  const addimageFiltersRef = (imageRef: any) => {
    if (imageRef && !imageFiltersRef.current.includes(imageRef)) {
      imageFiltersRef.current.push(imageRef);
    }
    ////console.log(postItemsRef.current[1]);
  };

  const canvasRef: any = useRef(null);

  const canvasRefdummy: any = useRef(null);

  function blend(
    background: any,
    foreground: any,
    width: any,
    height: any,
    transform: any
  ) {
    var bottom = background.getImageData(0, 0, width, height);
    var top = foreground.getImageData(0, 0, width, height);

    for (var i = 0, size = top.data.length; i < size; i += 4) {
      // red
      top.data[i + 0] = transform(bottom.data[i + 0], top.data[i + 0]);
      // green
      top.data[i + 1] = transform(bottom.data[i + 1], top.data[i + 1]);
      // blue
      top.data[i + 2] = transform(bottom.data[i + 2], top.data[i + 2]);
      // the fourth slot is alpha. We don't need that (so skip by 4)
    }

    return top;
  }



  const convertColor = (color: string, filtercolorMode: any): string => {
    // Step 1: Convert hexadecimal color code to RGB representation
    const hexToRgb = (hex: string): number[] => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ] : [0, 0, 0];
    };


    var x: number;

    //////////////////
    /////////////
    ////////////
    x = filtercolorMode;

    // Step 2: Reduce intensity of each RGB component by multiplying it by 0.8
    const reduceIntensity = (rgb: number[]): number[] => {
      return rgb.map((value) => Math.round(value * x));
    };

    // Step 3: Convert modified RGB values back to hexadecimal
    const rgbToHex = (rgb: number[]): string => {
      return '#' + rgb.map((value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    };

    const rgbColor = hexToRgb(color);
    const reducedRgb = reduceIntensity(rgbColor);
    const reducedHex = rgbToHex(reducedRgb);

    return reducedHex;
  };






  function FilterGradient(width: any, height: any, type: string) {
    var filtercolorMode = 0.2;
    var ctx = canvasRefdummy.current.getContext("2d");
    canvasRefdummy.current.height = height;
    canvasRefdummy.current.width = width;

    if (type === "jentle") {
      var gradient = ctx.createLinearGradient(
        width / 73.6,
        height / 33.4,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
    } else if (type === "mint" || type === "sahara") {
      var gradient = ctx.createLinearGradient(
        width / 73.6,
        height / 33.4,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
    } else if (type === "fog") {
      var gradient = ctx.createLinearGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
    } else if (type === "nebula") {
      var gradient = ctx.createLinearGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
    } else if (type === "juice") {
      var gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.7
      );
    } else if (type === "moonshine") {
      var gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.7
      );
    } else if (type === "vintage") {
      var gradient = ctx.createRadialGradient(
        width / 2,
        height / 3,
        0,
        width / 2,
        height / 2,
        width * 0.66
      );
    } else if (type === "rainbow" || type === "superstar") {
      var gradient = ctx.createLinearGradient(
        width / 73.6,
        height / 33.4,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
    } else {
    }


    if (type === "jentle") {
      const reducedColor1 = convertColor('#2c1f1f', filtercolorMode);
      const reducedColor2 = convertColor('#41243c', filtercolorMode);
      const reducedColor3 = convertColor('#272122', filtercolorMode);
      gradient.addColorStop(0.1, reducedColor1);
      gradient.addColorStop(0.2, reducedColor2);
      gradient.addColorStop(0.8, reducedColor3);
    } else if (type === "mint") {

      gradient.addColorStop(0.5, "#10241f"); // 50% darker version of #21483e
      gradient.addColorStop(0.65, "#181418"); // 50% darker version of #302831
      gradient.addColorStop(0.1, "#101818"); // 50% darker version of #203131

    } else if (type === "nebula") {
      const reducedColor1 = convertColor('#3b1858', filtercolorMode);
      const reducedColor2 = convertColor('#151569', filtercolorMode);
      gradient.addColorStop(0.1, reducedColor1);
      gradient.addColorStop(0.7, reducedColor2);
    } else if (type === "juice") {
      const reducedColor1 = convertColor('#242424', filtercolorMode);
      const reducedColor2 = convertColor('#313131', filtercolorMode);
      gradient.addColorStop(0, reducedColor1);
      gradient.addColorStop(1, reducedColor2);
    } else if (type === "moonshine") {
      const reducedColor1 = convertColor('#403d6149', filtercolorMode);
      const reducedColor2 = convertColor('#222222', filtercolorMode);
      const reducedColor3 = convertColor('#403d6149', filtercolorMode);
      const reducedColor4 = convertColor('#403d6149', filtercolorMode);

      gradient.addColorStop(0.25, reducedColor1);
      gradient.addColorStop(0.5, reducedColor2);
      gradient.addColorStop(0.75, reducedColor3);
      gradient.addColorStop(1, reducedColor4);
    } else if (type === "rainbow") {
      const reducedColor1 = convertColor('#5c384c', filtercolorMode);
      const reducedColor2 = convertColor('#5c384c', filtercolorMode);
      const reducedColor3 = convertColor('#3e452f', filtercolorMode);
      const reducedColor4 = convertColor('#2e3c3f', filtercolorMode);
      gradient.addColorStop(0.2, reducedColor1);
      gradient.addColorStop(0.3, reducedColor2);
      gradient.addColorStop(0.5, reducedColor3);
      gradient.addColorStop(0.87, reducedColor4);
    } else if (type === "superstar") {
      const reducedColor1 = convertColor('#244a82', filtercolorMode);
      const reducedColor2 = convertColor('#4d3017', filtercolorMode);
      gradient.addColorStop(0.2, reducedColor1);
      gradient.addColorStop(0.8, reducedColor2);
    } else if (type === "fog") {
      const reducedColor1 = convertColor('#293746', filtercolorMode);
      const reducedColor2 = convertColor('#3a2922', filtercolorMode);
      const reducedColor3 = convertColor('#3b355d', filtercolorMode);
      gradient.addColorStop(0, reducedColor1);
      gradient.addColorStop(0.4, reducedColor2);
      gradient.addColorStop(0.8, reducedColor3);
    } else if (type === "vintage") {
      const reducedColor1 = convertColor('#111111', filtercolorMode);
      const reducedColor2 = convertColor('#222222', filtercolorMode);
      const reducedColor3 = convertColor('#333333', filtercolorMode);
      gradient.addColorStop(0, reducedColor1);
      gradient.addColorStop(0.6, reducedColor2);
      gradient.addColorStop(1, reducedColor3);
    } else if (type === "sahara") {
      const reducedColor1 = convertColor('#3b5910', filtercolorMode);
      const reducedColor2 = convertColor('#191d1b', filtercolorMode);
      gradient.addColorStop(0.1, reducedColor1);
      gradient.addColorStop(0.6, reducedColor2);
    } else {
    }

    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, width, height);

    return ctx;







  }




  function blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  ///
  ///
  ///
  /// UPDATE CONFIRM PASSWORD VALUE/ SHOW SPINNER REPEAT PASSWORD
  function ApplyImageFilter(
    typex: string,
    index: number,
    index2: number,
    Ref: any,
    method: string,
    resolution: string
  ) {
    //////////////////INITIALIZE  CANVAS

    var type = typex;

    if (superzeroeffect[index]) {
      type = "normal";

    }

    if (
      type === effectMode[index] &&
      activeSticker === 100 &&
      method !== "imageHD" &&
      method !== "imageHDall"
    ) {
      if (index + 1 > selectedImage.length - 1) {
        setblink(false);
        seteffectMode(effectModexx);
        setregimageholdfilter(regimageholdfilterxx);
      } else {
        ApplyImageFilter(
          typex,
          index + 1,
          index2 + 1,
          getImageWidth,
          "image",
          "sd"
        );
      }
    } else {
      const previewFileReadimage = new Image();
      //// previewFileReadimage.src = itemUploadRef.current[index].src;
      if (duplicateItemupload[index]) {
        previewFileReadimage.src = duplicateItemupload[index];
      } else {
        previewFileReadimage.src = itemUploadRefSD.current[index].src;
      }

      var widthx: number;
      var heightx: number;
      var width: number;
      var height: number;
      /////////////////////////////////////////adjust resolution canvas filter mode//////////////////////////////////////////////
      var dynamicDimensions = matchMobile
        ? window.innerHeight * 8
        : window.innerHeight * 2;
      var dynamicDimensionsx = matchMobile
        ? window.innerWidth * 8
        : window.innerWidth * 1.6;
      ////////
      /////////////////////////////////////////adjust resolution canvas filter mode//////////////////////////////////////////////
      if (canvasRef.current) {

        previewFileReadimage.onload = function () {



          const ctx = canvasRef.current.getContext("2d");
          const qualityValue = matchMobile ? 0.94 : 0.92;

          if (
            previewFileReadimage.naturalWidth > previewFileReadimage.naturalHeight
          ) {
            if (method === "thumb") {
              widthx = matchMobile ? 400 : 650;
              width = matchMobile ? 400 : 650;
            } else {
              if (resolution === "hd") {
                ////////
                /////////////////////////////////////////adjust resolution final result image//////////////////////////////////////////////
                widthx = previewFileReadimage.naturalWidth * qualityValue;
                width = previewFileReadimage.naturalWidth * qualityValue;
                ////////
                /////////////////////////////////////////adjust resolution final result image//////////////////////////////////////////////
              } else {
                widthx = matchMobile
                  ? dynamicDimensionsx * 0.65
                  : dynamicDimensionsx * 0.8;
                width = matchMobile
                  ? dynamicDimensionsx * 0.65
                  : dynamicDimensionsx * 0.8;
              }
            }

            var scalex = widthx / previewFileReadimage.naturalWidth;
            heightx = previewFileReadimage.naturalHeight * scalex;
            var scale = width / previewFileReadimage.naturalWidth;
            height = previewFileReadimage.naturalHeight * scale;
          } else {
            if (method === "thumb") {
              heightx = matchMobile ? 400 : 650;
              height = matchMobile ? 400 : 650;
            } else {
              if (resolution === "hd") {
                ////////
                /////////////////////////////////////////adjust resolution final result image//////////////////////////////////////////////
                heightx = previewFileReadimage.naturalHeight * qualityValue;
                height = previewFileReadimage.naturalHeight * qualityValue;
                ////////
                /////////////////////////////////////////adjust resolution final result image//////////////////////////////////////////////
              } else {
                heightx = matchMobile
                  ? dynamicDimensions * 0.7
                  : dynamicDimensions * 0.9;
                height = matchMobile
                  ? dynamicDimensions * 0.7
                  : dynamicDimensions * 0.9;
              }
            }

            var scalex = heightx / previewFileReadimage.naturalHeight;
            widthx = previewFileReadimage.naturalWidth * scalex;

            var scale = height / previewFileReadimage.naturalHeight;
            width = previewFileReadimage.naturalWidth * scale;
          }

          canvasRef.current.height = height;
          canvasRef.current.width = width;
          //////////////////INITIALIZE  CANVAS

          requestAnimationFrame(async () => {
            //////////////////CSS EDIT IMAGE WITH CTX.FILTER


            if (matchMobile) { }
            else {
              if (type === "lift") {
                ctx.filter =
                  "contrast(0.99) brightness(1) blur(0px) saturate(146%)";
              } else if (type === "sahara") {
                ctx.filter = "contrast(1.1) brightness(0.9) saturate(104%)";
              } else if (type === "jentle") {
                ctx.filter =
                  "contrast(1) brightness(0.74) hue-rotate(17deg) saturate(80%) ";
              } else if (type === "mint") {
                ctx.filter = "contrast(1) brightness(0.8)  saturate(130%)  ";
              } else if (type === "nebula") {
                ctx.filter = "contrast(1.1) brightness(1.04)";
              } else if (type === "juice") {
                if (method === "thumb" && matchMobile) {
                  ctx.filter =
                    "contrast(1.15) brightness(0.1.01) saturate(185%) blur(0px)";
                } else {
                  ctx.filter =
                    "contrast(0.96) brightness(1) saturate(185%) blur(0.55px)";
                }
              } else if (type === "rainbow") {
                ctx.filter = "contrast(1.17) brightness(0.92) saturate(145%) ";
              } else if (type === "superstar") {
                ctx.filter =
                  "contrast(1.07) brightness(0.93) saturate(130%)  hue-rotate(1.4deg)";
              } else if (type === "fog") {
                ctx.filter = "contrast(1.2) brightness(0.95) saturate(137%)";
              } else if (type === "moonshine") {
                ctx.filter =
                  "contrast(0.95) brightness(1.05.2) saturate(45%) blur(0px)";
              } else if (type === "vintage") {
                ctx.filter = " contrast(1.2)  brightness(0.77.6)  saturate(38%)";
              } else {
              }
            }


            //////////////////CSS EDIT IMAGE WITH CTX.FILTER

            ctx.drawImage(
              previewFileReadimage,
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );

            //////////////////////VIGNETTE
            var w = canvasRef.current.width;
            var h = canvasRef.current.height;


            //////////////////////VIGNETTE
            var width = w;
            var height = h;
            if (type === "sahara") {
              var gradient = ctx.createLinearGradient(
                w / 2.7,
                h / 2,
                0,
                w / 4.8,
                h / 2,
                w * 8.65
              );

              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(80, 111, 32, 0.01)");
              gradient.addColorStop(1, "rgba(10, 10, 10, 0.001)");

              if (matchMobile) {
                // Modify gradient stops for mobile to simulate contrast, brightness, and saturation

                // Slightly darker for reduced brightness
                gradient.addColorStop(0.3, "rgba(90, 130, 40, 0.02)");  // Darker and more saturated
                gradient.addColorStop(0.7, "rgba(50, 50, 20, 0.015)");  // More contrast between stops
                gradient.addColorStop(1, "rgba(10, 10, 10, 0.01)");     // Deeper, maintaining darkness
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            } else if (type === "mint") {

            } else if (type === "lift") {
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 3,
                0,
                w / 2,
                h / 3,
                w * 0.66
              );




              // Add original color stops (unchanged for PC)
              gradient.addColorStop(0, "rgba(205, 205, 205,0.0001)");
              gradient.addColorStop(1, "rgba(255, 255, 255,0.003)");

              if (matchMobile) {
                // Modify gradient for mobile to simulate brightness, contrast, and saturation

                // Brighter color stop to simulate brightness
                gradient.addColorStop(0.3, "rgba(255, 255, 200, 0.05)");  // Bright yellowish tone for brightness

                // Darker contrast at the edge, more contrast effect
                gradient.addColorStop(0.7, "rgba(100, 100, 100, 0.07)");  // Darker to simulate contrast

                // More intense saturation with a bit of color
                gradient.addColorStop(1, "rgba(200, 180, 180, 0.05)");    // Slight color tint for saturation
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            } else if (type === "juice") {
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 3,
                0,
                w / 2,
                h / 3,
                w * 0.66
              );

              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(255, 255, 255,0.01)");
              gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");

              if (matchMobile) {
                // Increase intensity of contrast, brightness, saturation, and blur simulation

                // Increase contrast by making colors more distinct
                gradient.addColorStop(0.8, "rgba(180, 220, 70, 0.04)");  // Increase contrast, slightly more distinct

                // Further increase saturation with more intense tones
                gradient.addColorStop(0.65, "rgba(255, 255, 255, 0.065)"); // Higher saturation, more intense tones

                // Further increase saturation with more intense tones
                gradient.addColorStop(0.45, "rgba(60, 160, 255, 0.026)"); // Higher saturation, more intense tones

                // Subtle blur effect intensified with stronger transitions
                gradient.addColorStop(1, 'rgba(255, 220, 220, 0.26)');    // Stronger transition for blur effect
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            } else if (type === "moonshine") {
              var gradient = ctx.createLinearGradient(
                w / 2,
                h / 3,
                0,
                w / 2,
                h / 3,
                w * 0.4
              );


              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(255, 255, 255, 0.011)");
              gradient.addColorStop(1, "#403d6149");


              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);

              // Second radial gradient
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.3
              );

              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(0, 0, 0, 0.02)");
              gradient.addColorStop(1, "rgba(255, 255, 255, 0.001)");

              if (matchMobile) {
                // Further reduction in saturation and brightness simulation
                gradient.addColorStop(0.3, "rgba(50, 50, 50, 0.02)");   // Slightly brighter center for brightness
                gradient.addColorStop(1, "rgba(200, 200, 200, 0.02)");  // Desaturated outer region
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);

            } else if (type === "vintage") {

            } else if (type === "nebula") {
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.65
              );

              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(255, 255, 255, 0.01)");
              gradient.addColorStop(1, "rgba(0, 0, 0, 0.08)");

              if (matchMobile) {
                // Modify gradient stops for mobile to simulate increased contrast and brightness

                // Slight increase in brightness
                gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.02)"); // Slightly brighter center

                // More distinct dark areas for increased contrast
                gradient.addColorStop(0.7, "rgba(30, 30, 30, 0.1)");     // More intense dark area
                gradient.addColorStop(1, "rgba(0, 0, 0, 0.12)");         // Darker outer region for contrast
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            }
            else if (type === "rainbow") {
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.68
              );

              // Add original color stops for desktop
              gradient.addColorStop(0, "rgba(163, 218, 37,0.004)");
              gradient.addColorStop(1, "rgba(27, 194, 236,0.004)");

              if (matchMobile) {
                // Modify gradient stops for mobile to simulate contrast, brightness, and saturation

                // Slightly more distinct colors to simulate increased contrast
                gradient.addColorStop(0.3, "rgba(163, 218, 37, 0.05)"); // Brighter, more vibrant green
                gradient.addColorStop(0.7, "rgba(27, 194, 236, 0.05)"); // More intense cyan for saturation

                // Darker outer area to simulate reduced brightness
                gradient.addColorStop(1, "rgba(10, 70, 130, 0.08)");   // Darker blue for contrast and brightness
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            }
            else if (type === "fog") {
              var gradient = ctx.createLinearGradient(
                w / 2,
                h / 71,
                0,
                w / 19,
                h / 2,
                w * 0.4
              );


              if (matchMobile) {
                // Modify gradient stops for mobile to simulate contrast, brightness, and saturation

                // More intense light and dark areas to simulate increased contrast
                gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.02)"); // Slightly more noticeable light area

                // Darker and more vibrant colors for saturation
                gradient.addColorStop(0.7, "rgba(22, 36, 86, 0.2)");    // Darker and more saturated greenish tone

                // Increased darkness for the end color stop to simulate reduced brightness
                gradient.addColorStop(1, "rgba(20, 50, 30, 0.4)");      // Darker end point for reduced brightness
              } else {

                // Add original color stops for desktop
                gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
                gradient.addColorStop(1, "#20422e5a");

              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            }
            else {
            }
            //////////////////////VIGNETTE

            //////////////////////GRADIENT BRIGHTNESS

            if (type === "normal") {
            } else {
              var gradient = ctx.createRadialGradient(
                w / 2,
                h / 2,
                0,
                w / 2,
                h / 2,
                w * 0.6
              );
              if (type === "lift") {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.001)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.05)");
              } else if (type === "fog") {
                gradient.addColorStop(0, "#c9d6df11");
                gradient.addColorStop(1, "#bef0ce13");
              } else if (type === "jentle") {
                gradient.addColorStop(0, "rgba(153, 153, 153, 0.001)"); // 40% reduced brightness
                gradient.addColorStop(1, "rgba(153, 153, 153, 0.001)"); // 40% reduced brightness

              } else if (type === "vintage") {

              } else if (
                type === "superstar" ||
                type === "rainbow" ||
                type === "sahara"
              ) {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.002)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");
              } else {
                gradient.addColorStop(0, "rgba(255, 255, 255,0.002)");
                gradient.addColorStop(1, "rgba(255, 255, 255,0.001)");
              }

              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
            }

            //////////////////////GRADIENT BRIGHTNESS

            ////////////////// /////// GLOBALCOMPOSITEOPERATION
            if (type === "sahara") {
              ////////////composition
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#a58e89cc";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#a58e89cc";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "jentle") {


              // Softer composition for mobile
              if (matchMobile) {


                ctx.globalCompositeOperation = "soft-light";
                ctx.fillStyle = "#d3b5b5";  // Original color
                ctx.fillRect(0, 0, width, height);

                ctx.globalCompositeOperation = "soft-light";  // 'screen' for a more delicate blend
                ctx.fillStyle = "rgba(211, 181, 181, 0.3)";  // Further reduce opacity
                ctx.fillRect(0, 0, width, height);
              } else {

                // Default composition for desktop
                ctx.globalCompositeOperation = "overlay";
                ctx.fillStyle = "#d3b5b5";  // Original color
                ctx.fillRect(0, 0, width, height);

                ctx.globalCompositeOperation = "soft-light";
                ctx.fillStyle = "#d3b5b5";  // Original color
                ctx.fillRect(0, 0, width, height);

              }


              ////////////composition
            } else if (type === "mint") {

            } else if (type === "nebula") {
              ////////////composition
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#6e6b72cc";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#6c6971cc";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "moonshine") {
              ////////////composition
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#77479f68";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#69359368";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "juice") {
              ////////////composition
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#5b6c7014";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#5b6c7014";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#5b6c7014";
              ctx.fillRect(0, 0, width, height);
              ////////////composition
            } else if (type === "rainbow") {
              ////////////composition
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#3950681f";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#42806c1f";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "superstar") {
              ////////////composition
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#69758113";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#69758113";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "fog") {
              ////////////composition
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#2c2b2937";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#2c2b2937";
              ctx.fillRect(0, 0, width, height);

              ////////////composition
            } else if (type === "vintage") {
              ////////////composition

              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#8888b14e";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "overlay";
              ctx.fillStyle = "#5c83944e";
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = "soft-light";
              ctx.fillStyle = "#8888b14e";
              ctx.fillRect(0, 0, width, height);
              ////////////composition
              ////////////composition
            } else {
            }
            ////////////////// /////// GLOBALCOMPOSITEOPERATION

            ////////////////////GRADIENT BLENDING
            if (
              type === "jentle" ||
              type === "mint" ||
              type === "nebula" ||
              type === "juice" ||
              type === "rainbow" ||
              type === "superstar" ||
              type === "fog" ||
              type === "moonshine" ||
              type === "vintage" ||
              type === "sahara"
            ) {
              var gradient = FilterGradient(width, height, type);
              var screen = blend(
                ctx,
                gradient,
                width,
                height,
                function (bottomPixel: any, topPixel: any) {
                  return 255 - ((255 - topPixel) * (255 - bottomPixel)) / 255;
                }
              );
              ctx.putImageData(screen, 0, 0);
            }

            ////////////////////GRADIENT BLENDING

            try {
              KeepCallingThumbnail4Filters(Ref, ctx, index2, method);

              if (
                method === "image" ||
                method === "imageHD" ||
                method === "imageHDall"
              ) {
                var data = canvasRef.current.toDataURL();

                Ref.current[index].src = data;

                if (method === "imageHDall") {

                  //var data = canvasRef.current.toDataURL("image/png");
                  var data = canvasRef.current.toDataURL("image/jpeg", 0.95);
                  var datathumb = canvasRef.current.toDataURL("image/jpeg", 0.05);

                  const res = await fetch(data);
                  const datax = await res.blob();

                  const resdatathumb = await fetch(datathumb);
                  const datathumbx = await resdatathumb.blob();

                  var base64String = await blobToBase64(datax);

                  finalImageDataxx[index] = datax;
                  finalImageDataxxSD[index] = datathumbx;
                  finalImageDataxxBASE64[index] = base64String;
                }

                regimageholdfilterxx[index] = data;
                effectModexx[index] = type;

                ctx.clearRect(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                );

                if (method === "imageHD") {
                  sethdfilter(false);
                  setblink(false);
                  seteffectMode(effectModexx);
                  setregimageholdfilter(regimageholdfilterxx);
                } else {

                  if (index + 1 > selectedImage.length - 1) {
                    setblink(false);
                    if (method === "imageHDall") {
                      setfinalImageData(finalImageDataxx);
                      setfinalImageDataSD(finalImageDataxxSD);
                      setfinalImageDataBASE64(finalImageDataxxBASE64);

                      setsupeFilterLoadFade(false);
                      setstartTopicCap(true);
                    }
                    seteffectMode(effectModexx);
                    setregimageholdfilter(regimageholdfilterxx);
                  } else {
                    if (method === "imageHDall") {
                      ApplyImageFilter(
                        effectMode[index + 1],
                        index + 1,
                        index2 + 1,
                        getImageWidth,
                        "imageHDall",
                        "hd"
                      );
                    } else {
                      ApplyImageFilter(
                        typex,
                        index + 1,
                        index2 + 1,
                        getImageWidth,
                        "image",
                        "sd"
                      );
                    }
                  }
                }
              }

              if (method === "supersticker") {
                if (FilterUnderStickerStopFiltering) {
                  trapfiltersxx[index] = true;
                  settrapfilters(trapfiltersxx);
                } else {
                  trapfiltersxx[index] = false;
                  settrapfilters(trapfiltersxx);
                }

                var data = canvasRef.current.toDataURL();
                Ref.current[index].src = data;

                if (effectMode[index] !== "normal") {
                  if (duplicateItemupload[index]) {
                  } else {
                    regimageholdfilterxx[index] = data;
                    setregimageholdfilter(regimageholdfilterxx);
                  }
                }
                ctx.clearRect(
                  0,
                  0,
                  canvasRef.current.width,
                  canvasRef.current.height
                );
                setactiveSticker(100);
              }
            } catch {
              console.log("filtermode  filter error");
            }
          });

          canvasRef.current.style.width = `${widthx}px`;
          canvasRef.current.style.height = `${heightx}px`;
        };

      }
    }
  }

  const KeepCallingThumbnail4Filters = (
    Ref: any,
    ctx: any,
    index2: number,
    method: any
  ) => {
    //// const gg = await ctx.putImageData(screen, 0, 0);

    if (method === "thumb") {
      Ref.current[index2].src = canvasRef.current.toDataURL();
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      if (index2 === 1) {
        ApplyImageFilter(
          "juice",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 2) {
        ApplyImageFilter(
          "superstar",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 3) {
        ApplyImageFilter(
          "rainbow",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 4) {
        ApplyImageFilter(
          "fog",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 5) {
        ApplyImageFilter(
          "sahara",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 6) {
        ApplyImageFilter(
          "nebula",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 7) {
        ApplyImageFilter(
          "jentle",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 8) {
        ApplyImageFilter("mint", 0, index2 + 1, imageFiltersRef, "thumb", "sd");
      } else if (index2 === 9) {
        ApplyImageFilter(
          "moonshine",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
      } else if (index2 === 10) {
        ApplyImageFilter(
          "vintage",
          0,
          index2 + 1,
          imageFiltersRef,
          "thumb",
          "sd"
        );
        setshowfiltersOnloadblur(true);
      } else {
        ApplyImageFilter("normal", 0, 0, getImageWidth, "image", "sd");
      }
    }
  };

  useEffect(() => {
    if (hdfilter) {
      ApplyImageFilter(
        effectMode[superstickerIndex],
        superstickerIndex,
        0,
        getImageWidth,
        "imageHD",
        "hd"
      );
    }
  }, [hdfilter]);

  useEffect(() => {
    if (startSuperSticker) {
    } else {
      if (activeSticker != 100) {
        if (duplicateItemupload[activeSticker]) {
          ApplyImageFilter(
            effectMode[activeSticker],
            activeSticker,
            0,
            getImageWidth,
            "supersticker",
            "sd"
          );
        } else {
          ApplyImageFilter(
            effectMode[activeSticker],
            activeSticker,
            0,
            getImageWidth,
            "supersticker",
            "sd"
          );
        }
      }
    }
  }, [startSuperSticker]);

  useEffect(() => {
    if (imageFiltersRef && activatefilterImageReducer) {
      setTimeout(function () {
        setallow(true);
        setshowfiltersOnloadblur(false);
        setshowfiltersOnload(true);
        ApplyImageFilter("lift", 0, 1, imageFiltersRef, "thumb", "sd");
      }, 350);
    }
  }, [activatefilterImageReducer]);



  useEffect(() => {


    if (Timerf.current) {
      clearTimeout(Timerf.current);
    }
    Timerf.current = setTimeout(() => {

      if (ActiveSlide === 12) { } else {
        startImageFilter(ActiveSlide);
      }


    }, 800)


  }, [ActiveSlide])

  const startImageFilter = (i: number) => {
    if (Timerf.current) {
      clearTimeout(Timerf.current);
    }

    if (i === 12 && ActiveSlide === i) {
      setsupeFilterLoadFade(true);
      ApplyImageFilter(effectMode[0], 0, 0, getImageWidth, "imageHDall", "hd");
    } else {

      clickOptions(i, optionsClickType, "filter");

      if (Timer.current) {
        clearTimeout(Timer.current);
      }
      if (ActiveSlide === i) {
        setblink(true);
        ApplyImageFilter(
          optionsNameData[i],
          0,
          0,
          getImageWidth,
          "image",
          "sd"
        );
      } else {





        if (i === 12) {
        } else {
          Timer.current = setTimeout(function () {
            setblink(true);
            ApplyImageFilter(
              optionsNameData[i],
              0,
              0,
              getImageWidth,
              "image",
              "sd"
            );
          }, 2000);
        }
      }
    }
  };

  const clickOptionsOutter = (i: any, optionsClickType: any, source: any) => {
    if (Timer.current) {
      clearTimeout(Timer.current);
    }

    if (i === -1) {
      clickOptions(optionsImages.length, optionsClickType, "filter2");
    } else if (i > optionsImages.length - 1) {
      clickOptions(0, optionsClickType, "filter");
    } else {
      clickOptions(i, optionsClickType, "filter");
    }
  };




  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          padding: "0px",
          position: "fixed",
          top: "-400%",
          zIndex: 0,
          visibility: "hidden",
        }}
      />
      <canvas
        ref={canvasRefdummy}
        style={{
          padding: "0px",
          display: "none",
          position: "fixed",
          top: "-400%",
          zIndex: 0,
          visibility: "hidden",
        }}
      />
      {optionsShow && allow ? (
        <>
          <animated.div ref={getFilterWidthViewable} style={animationop}>
            {matchPc ? (
              <>
                {" "}
                <Grid
                  container
                  style={{
                    zIndex: 10,
                    height: "0px",
                    width: "100%",
                    position: "fixed",
                    marginTop: `${(getSliderWidthNew + addedwidth) / 2}px`,
                  }}
                >
                  <Grid
                    item
                    xs={2}
                    style={{
                      zIndex: 10,
                      height: "0px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    <CircleIcon
                      onMouseDown={() => {
                        clickOptionsOutter(
                          ActiveSlide - 1,
                          optionsClickType,
                          "filter"
                        );
                      }}
                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-dark  buttonshake dontallowhighlighting zuperkinginfo "
                          : "make-small-icons-clickable-light  buttonshake  dontallowhighlighting  zuperkinginfo  "
                      }
                      style={{
                        filter: showfiltersOnloadblur
                          ? "blur(0px)"
                          : "blur(4px)",
                        marginTop: "4vh",
                        fontSize: "1.6vw",
                        cursor: "pointer",
                        color: darkmodeReducer
                          ? "rgba(200, 200, 200, 0.7)"
                          : "rgba(005, 005, 005, 0.6)",
                      }}
                    />{" "}
                  </Grid>

                  <Grid
                    item
                    xs={8}
                    style={{
                      height: "0px",
                    }}
                  ></Grid>

                  <Grid
                    item
                    xs={2}
                    style={{
                      zIndex: 10,
                      height: "0px",
                      textAlign: "right",
                    }}
                  >
                    {" "}
                    <CircleIcon
                      className={
                        darkmodeReducer
                          ? "make-small-icons-clickable-dark  buttonshake dontallowhighlighting zuperkinginfo "
                          : "make-small-icons-clickable-light  buttonshake  dontallowhighlighting  zuperkinginfo  "
                      }
                      onMouseDown={() => {
                        clickOptionsOutter(
                          ActiveSlide + 1,
                          optionsClickType,
                          "filter"
                        );
                      }}
                      style={{
                        filter: showfiltersOnloadblur
                          ? "blur(0px)"
                          : "blur(4px)",
                        marginTop: "4vh",
                        fontSize: "1.6vw",
                        cursor: "pointer",
                        color: darkmodeReducer
                          ? "rgba(200, 200, 200, 0.7)"
                          : "rgba(005, 005, 005, 0.6)",
                      }}
                    />{" "}
                  </Grid>
                </Grid>
              </>
            ) : null}
            <Grid
              container
              className={
                typeTop
                  ? darkmodeReducer
                    ? `optionsTop-background-dark `
                    : `optionsTop-background-light `
                  : ""
              }
              onTouchStart={handleTouchStartOptions}
              onTouchMove={handleTouchMoveOptions}
              style={{
                zIndex: 1,
                padding: "0px",
                top: matchPc ? (typeTop ? "-2vh" : "0vh") : "0vh",
                position: "relative",
                paddingRight: "200px",
                margin: "0 auto",
                overflow: "hidden",
                left: "0px",
                height: matchPc ? "auto" : "25vh",
                paddingBottom: "1px",
              }}
            >
              <animated.div ref={optionsCollectImageRef} style={modalanimation}>
                {optionsImages.map((im: any, i: any) => (
                  <Grid key={i} item xs={12} style={{}}>
                    <Grid
                      item
                      xs={12}
                      style={{
                        margin: "auto",
                        textAlign: "center",
                        position: "relative",
                        top: matchPc ? "1.55vh" : "0.54em",
                      }}
                    >
                      <Grid
                        className={blink ? "blinken" : ""}
                        item
                        xs={12}
                        style={{
                          margin: "auto",
                          marginLeft: "2vw",
                          paddingBottom: "0px",
                          ///  fontFamily: "Arial, Helvetica, sans-serif",
                          fontFamily: "kaushan_scriptregular",
                          fontSize: matchPc
                            ? "1.5vw"
                            : matchTablet
                              ? "2.08vh"
                              : "2.4vh",
                          fontWeight: "normal",
                          visibility: ActiveSlide === i ? "visible" : "hidden",
                          filter: darkmodeReducer
                            ? "drop-shadow(1.2px 0.1px 1.92px rgba(255, 255, 255, 0.6))"
                            : "drop-shadow(1.2px 0.1px 1.92px rgba(41, 53, 70, 8.35))",
                          color: darkmodeReducer ? "#eeeeee" : "#000000",
                        }}
                      >
                        {" "}
                        {optionsNameData[i]}
                      </Grid>
                    </Grid>

                    {showfiltersOnload ? (
                      i === 12 ? (
                        <>
                          <div
                            onMouseDown={() => {
                              //startImageFilter(i);

                              setConfirmUpload(true);
                            }}
                            style={{
                              cursor: ActiveSlide === i ? "pointer" : "copy",
                              width: `${getSliderWidthNew + addedwidth - 5}px`,
                              height: `${getSliderWidthNew + addedwidth - 5}px`,
                              backgroundColor: darkmodeReducer
                                ? "rgba(010,010,010, 0.68)"
                                : "rgba(211,211,211, 0.7)",
                              borderRadius: "50%",
                              marginLeft: "2vw",
                              marginTop: "2.15vh",
                              textAlign: "center",
                              alignItems: "center",
                              display: "grid",
                              justifyContent: "center",
                              boxShadow: darkmodeReducer
                                ? ActiveSlide === i
                                  ? colortypeReducer === 0
                                    ? `0 0 5.5px ${colorReducerdark}`
                                    : `0 0 5.5px ${colorReducer}`
                                  : "0 0 1.5px#aaaaaa"
                                : ActiveSlide === i
                                  ? `0 0 5.5px ${colorReducer}`
                                  : "0 0 1.45px#222222",
                            }}
                          >
                            <ChevronRightIcon
                              style={{
                                fontSize: matchPc ? "3.4vw" : "5vh",
                                color: darkmodeReducer ? "#eeeeee" : "#222222",
                              }}
                              className="zuperkinginfo"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <img
                            ref={addimageFiltersRef}
                            alt={` ${optionsNameData[i]}  option`}
                            onMouseDown={() => {
                              startImageFilter(i);
                            }}
                            style={{
                              backgroundColor: "red",
                              cursor: ActiveSlide === i ? "pointer" : "copy",
                              width: `${getSliderWidthNew + addedwidth}px`,
                              height: `${getSliderWidthNew + addedwidth}px`,
                              borderRadius: "50%",
                              padding: "0px",
                              objectFit: "cover",
                              marginLeft: "2vw",
                              marginTop: "13px",
                              filter: showfiltersOnloadblur
                                ? "blur(0px)"
                                : "blur(4px)",
                              boxShadow: darkmodeReducer
                                ? ActiveSlide === i
                                  ? colortypeReducer === 0
                                    ? `0 0 6.8px ${colorReducerdark}`
                                    : `0 0 6.8px ${colorReducer}`
                                  : typeTop
                                    ? "0 0 12.5px#aaaaaa"
                                    : ""
                                : ActiveSlide === i
                                  ? `0 0 5.7px ${colorReducer}`
                                  : typeTop
                                    ? `0 0 14.45px#222222`
                                    : "",
                            }}
                            src={
                              itemUploadRefThumb.current[0]
                                ? itemUploadRefThumb.current[0].src
                                : null
                            }
                          />
                        </>
                      )
                    ) : null}
                  </Grid>
                ))}
              </animated.div>
            </Grid>
          </animated.div>
        </>
      ) : null}
    </>
  );
}

export const ImageFilterinner = React.memo(ImageFilterinnerx);
