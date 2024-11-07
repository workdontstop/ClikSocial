import React, { useRef, useState, useCallback, useEffect } from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";

import { Grid, Button } from "@material-ui/core";

import { TextField } from "@material-ui/core";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import PublishIcon from '@material-ui/icons/Publish';

import ImageSearchIcon from '@material-ui/icons/ImageSearch';

import { UpdateUploadData, Updatepagenum } from "../GlobalActions";


import CancelIcon from '@material-ui/icons/Cancel';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';


import OpenAI from 'openai';



import Axios from "axios";
import { setTimeout } from "timers";



function GenerateAndUploadx({ setUploadGPT, OpenUploadModal, Loader, setLoader, AiLock,


}: any) {


  const { REACT_APP_SUPERSTARZ_URL } = process.env;



  const dispatch = useDispatch();


  const [shownote, setshownote] = useState(false);

  const [Total, setTotal] = useState(4);

  const [pxResolution, setpxResolution] = useState('');


  const [imageUrl, setimageUrl] = useState('');


  const [showModelType, setShowModelType] = useState(true);
  const [AImodel, setAImodel] = useState(1);


  const [prompt, setprompt] = useState('');




  const Timervv = useRef<ReturnType<typeof setTimeout> | null>(null);



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


  const imageRef = useRef(null);

  const [imageDataURL, setImageDataURL] = useState('');


  const importToFiltersDalle = useCallback(() => {
    // Access the image element using ref
    const par = {
      dalle: imageUrl,
    };

    setLoader(true);

    Axios.get(`${REACT_APP_SUPERSTARZ_URL}/ProxyDalle`, {
      params: par, // Send the 'par' object as query parameters
      responseType: 'arraybuffer', // Set responseType to 'arraybuffer' to receive binary data
    })
      .then((response) => {
        const dataURL = `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
        setImageDataURL(dataURL);

        var ray: any[] = [];

        ray = [dataURL];

        setLoader(false);

        dispatch(UpdateUploadData(ray, ray[0]));


        OpenUploadModal(1);
      })
      .catch(function (error) {
        setLoader(false);
        console.error('Error fetching image:', error);
        // Handle error
      });
  }, [imageUrl]);


  const importToFiltersStablility = useCallback(() => {
    if (!imageUrl) {
      console.error('Invalid image URL');
      return;
    }

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        setImageDataURL(dataURL);

        const ray = [dataURL];

        setLoader(false);

        dispatch(UpdateUploadData(ray, ray[0]));
        OpenUploadModal(1);
      }
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
      setLoader(false);
    };
  }, [imageUrl, dispatch]);




  const imageHandleChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {

      const FileArray = Array.from(e.target.files).map((file: any, index: any) =>
        URL.createObjectURL(file)
      );

      const ray: any[] = [];



      var lim = FileArray.length
      if (lim > 1) {
        lim = 0
      } else { lim = lim - 1 }



      for (let i = 0; i <= lim; i++) {
        ray[i] = FileArray[i];
      }

      dispatch(UpdateUploadData(ray, FileArray[0]));
      console.log(FileArray);

      OpenUploadModal(1);
      ///window.history.pushState(null, "", "Crop");
      /// dispatch(UpdateNavCropReducer(true));


      e.target.value = null;
    }
  };




  const handleImageChange = (e: any) => {
    //setImage(e.target.files[0]);
  };

  var strength = '';
  var image: any = null;

  const GenerateImagetoImage = useCallback(async () => {
    setLoader(true);



    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('strength', strength);
    if (image) {
      formData.append('image', image);
    } else {
      alert('Please upload an image.');
      setLoader(false);
      return;
    }

    try {
      const response = await Axios.post(`${process.env.REACT_APP_SUPERSTARZ_URL}/StableDiffusionApi`, formData, { responseType: 'blob' });
      const url = URL.createObjectURL(new Blob([response.data]));
      setimageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoader(false);
    }
  }, [prompt, strength, image]);





  //////
  const GenerateImageGpt = useCallback(async () => {

    const par = {
      prompt: prompt,
      n: Total,
      size: pxResolution
    }



    console.log("go to  backend dalle");

    /// alert(prompt)

    Axios.post(
      `${REACT_APP_SUPERSTARZ_URL}/DalleApi`,
      { values: par },
      {}
    )
      .then((response) => {
        if (response.data.message === "Done") {

          const GeneratedImage = response.data.payload;

          const imageD = GeneratedImage.data[0].url;

          setLoader(false);

          setimageUrl(imageD);

        }
      })
      .catch(function (error) {

        setLoader(false);
        console.log(error);
        ///  alert("profileoutter color  error");
      });

  }, [prompt, Total, pxResolution])



  const GenerateImageStableSDXL = useCallback(async () => {
    setLoader(true);
    const model = "stable-diffusion-xl-1024-v1-0"; // or "stable-diffusion-v1-6"
    const height = 1024;
    const width = 1024;

    const par = {
      prompt: prompt,
      model,
      height,
      width
    };

    try {
      const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/StableDiffusionApisd`, { values: par }, { responseType: 'blob' });
      const url = URL.createObjectURL(new Blob([response.data]));
      setimageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoader(false);
    }
  }, [prompt]);





  const GenerateImageStableSDXLHUGG = useCallback(async () => {
    setLoader(true);

    // Define the parameters for the image generation
    const params = {
      prompt: prompt,              // Your text prompt
      height: 1024,                // Image height (can be adjusted as needed)
      width: 1024,                 // Image width (can be adjusted as needed)
      steps: 50,                   // Steps to guide the image generation (50 is common)
      guidance_scale: 3.5          // Guidance scale for better alignment with prompt
    };

    console.log("Sending request with params:", params); // Log the params

    const maxRetries = 3; // Set maximum retry attempts
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        // Make a POST request to the image generation API
        const response = await Axios.post(
          'http://192.168.0.39:8000/generate',
          params,
          {
            timeout: 120000,  // Set a timeout for the request (120 seconds)
            withCredentials: true,  // Include credentials in the request
            headers: {
              'Content-Type': 'application/json',  // Ensure JSON is sent
            }
          }
        );

        console.log("Image response:", response.data); // Log the response

        // Convert the base64 image data to a URL
        const url = `data:image/png;base64,${response.data.image}`;
        setimageUrl(url); // Set the generated image URL

        break; // Exit loop on success
      } catch (error) {
        console.error("Error generating image:", error);
        attempt += 1;

        if (attempt >= maxRetries) {
          console.error("Max retries reached, could not generate image.");
        }
      } finally {
        setLoader(false); // Always turn off the loader
      }
    }
  }, [prompt]);



  const GenerateImageStable3 = useCallback(async () => {

    setLoader(true);
    const par = {
      prompt: prompt,
    };

    try {
      const response = await Axios.post(`${REACT_APP_SUPERSTARZ_URL}/StableDiffusionApi`, { values: par }, { responseType: 'blob' });
      const url = URL.createObjectURL(new Blob([response.data]));
      setimageUrl(url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoader(false);
    }
  }, [prompt]);

  /////
  ///////
  /////////////
  var transform = "";
  var font1 = "";
  var font2 = "";
  var paddingbutU = "";

  var width = " ";
  var sizex: "small" | "medium" | undefined = undefined;
  ///
  ///
  ///
  if (matchPc) {
    sizex = "medium";
    width = "33%";
    transform = "scale(1)";
    font1 = "2.7vh";
    font2 = "2.1vh";
    paddingbutU = "70px";
  } else if (matchTablet) {
    sizex = "small";
    width = "62%";
    transform = "scale(1)";
    font1 = "2.6vh";
    font2 = "2vh";
    paddingbutU = "100px";
  } else {
    sizex = "small";
    width = "100%";
    transform = "scale(0.94)";
    font1 = "2.5vh";
    font2 = "1.9vh";
    paddingbutU = "80px";
  }


  ///
  ///
  ///CONDITIONAL STATEMENT FOR DEVICE TYPE
  var buttonFont = "";
  var buttonTransform = " ";
  var pad = "";

  ///
  ///
  ///
  /// GET DARKMODE FROM REDUX STORE
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));
  const darkmodeReducer = darkmode;

  if (matchPc) {
    buttonFont = "1vw";
    buttonTransform = " ";
    pad = darkmodeReducer ? "25px" : "27px";
    ///
  } else if (matchTablet) {
    pad = "21.5px";
    buttonFont = "2vw";
    buttonTransform = " ";
    ///
  } else {
    buttonFont = "2.2vh";
    buttonTransform = "scale(0.95)";
    pad = "25px";
  }

  ///
  ///
  ///
  /// GET  SIGNUP BUTTON AND LOGIN BUTTON STYLE FROM REDUX
  const { MozBoxShadowSD, WebkitBoxShadowSD, boxShadowSD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerDark,
    })
  );

  const { MozBoxShadowSL, WebkitBoxShadowSL, boxShadowSL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsSignUpReducerLight,
    })
  );

  const { MozBoxShadowLD, WebkitBoxShadowLD, boxShadowLD } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerDark,
    })
  );

  const { MozBoxShadowLL, WebkitBoxShadowLL, boxShadowLL } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.ButtonsLoginReducerLight,
    })
  );

  var MozBoxShadowReducerLogin = " ";
  var WebkitBoxShadowReducerLogin = " ";
  var boxShadowReducerLogin = " ";

  var MozBoxShadowReducerSign = " ";
  var WebkitBoxShadowReducerSign = " ";
  var boxShadowReducerSign = " ";

  if (darkmodeReducer) {
    MozBoxShadowReducerLogin = MozBoxShadowLD;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLD;
    boxShadowReducerLogin = boxShadowLD;

    MozBoxShadowReducerSign = MozBoxShadowSD;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSD;
    boxShadowReducerSign = boxShadowSD;
  } else {
    MozBoxShadowReducerLogin = MozBoxShadowLL;
    WebkitBoxShadowReducerLogin = WebkitBoxShadowLL;
    boxShadowReducerLogin = boxShadowLL;

    MozBoxShadowReducerSign = MozBoxShadowSL;
    WebkitBoxShadowReducerSign = WebkitBoxShadowSL;
    boxShadowReducerSign = boxShadowSL;
  }





  return (<>





    <Grid
      container
      style={{
        padding: '0px',
        overflow: 'hidden'

      }}
    >


      {imageUrl ?


        <>

          <div

            className={
              darkmodeReducer ? `  AnimateLoaderDalle turdark` : ` AnimateLoaderDalle  turlight`
            }
            style={{
              boxShadow: `0 0 3px ${colorReducer}`,
              backgroundColor: colorReducer,
              height: "1vh",
              margin: 'auto',
              width: '100%',
              top: '0vh',
              position: 'relative',
              zIndex: '30',
              visibility: Loader ? 'visible' : 'hidden'


            }}
          ></div>

          <img src={imageUrl} ref={imageRef} alt={`Generated Image `}

            style={{
              borderRadius: '5vh', padding: '4px', marginTop: '-1vh',
              position: 'relative',
              width: '100%',
              height: matchMobile ? '64vh' : '80vh', objectFit: 'cover'
            }} />

          <Grid
            item
            xs={4}
            sm={5}

            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>
          <Grid
            item
            xs={4}
            sm={2}
            style={{
              padding: '0px',

            }}
          >

            <CancelIcon

              onClick={() => {
                setimageUrl('');
              }}
              className={`${darkmodeReducer
                ? " zuperxyinfo make-small-icons-clickable-darkMenu dontallowhighlighting zuperkingIcon"
                : " zuperxyinfo make-small-icons-clickable-lightMenu dontallowhighlighting zuperking"
                } `}
              style={{
                fontSize: '8vh',
                color: '#ffffff',
                position: 'absolute',
                right: '1vw',
                top: '7vh',
                opacity: '0.8',
                display: 'block'

              }}
            />


            <Grid item className="buttonpad buttonshake" xs={12} style={{ marginTop: '-17vh', }} >


              <Button
                className="zuperxyinfo"

                onClick={() => {
                  if (AImodel === 0) {

                    importToFiltersStablility();
                  }
                  else if (AImodel === 2) {


                    importToFiltersStablility();
                    ///importToFiltersStablility();
                  }
                  else {

                    importToFiltersStablility();

                    //// importToFiltersDalle();
                  }
                }

                }
                style={{
                  fontSize: buttonFont,
                  transform: buttonTransform,
                  padding: '2vh',
                  color: '#ffffff',
                  borderRadius: "50px",
                  MozBoxShadow: MozBoxShadowReducerSign,
                  WebkitBoxShadow: WebkitBoxShadowReducerSign,
                  boxShadow: boxShadowReducerSign,
                }}
                fullWidth={true}
                variant='outlined'
                size="large"
                color="secondary"
              >
                {" "}



                <span style={{ marginLeft: '0vw' }}>
                  IMPORT
                </span>
              </Button>


            </Grid>


          </Grid>


          <Grid
            item
            xs={12}
            style={{
              padding: '0px',
              textAlign: 'center',
              backgroundColor: 'rgb(8,8,8,0)',
              height: '110vh',
              top: '-76.3vh',
              borderRadius: '5vh',
              position: 'relative',
              zIndex: 100,
              display: Loader ? 'block' : 'none'
            }}
          ></Grid>

        </> :



        <>


          <input
            onChange={imageHandleChange}

            onClick={() => {

              setshownote(true);
            }}
            type="file"
            name="superImages"
            accept="image/*"

            id="fileoo"
            style={{ visibility: "hidden", display: "none" }}
          />




          <Grid
            item
            xs={11}

            style={{
              position: "relative",
              display: 'block',
              zIndex: 100000,
              top: "0em",
              margin: 'auto',


            }}
          >


            <div

              className={
                darkmodeReducer ? `  AnimateLoaderDalle turdark` : ` AnimateLoaderDalle  turlight`
              }
              style={{
                boxShadow: `0 0 3px ${colorReducer}`,
                backgroundColor: colorReducer,
                height: "1vh",
                margin: 'auto',
                width: '100%',
                display: Loader ? 'block' : 'none'


              }}
            ></div>


          </Grid>

          <Grid
            item
            xs={4}
            sm={5}
            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>
          <Grid
            item
            xs={4}
            sm={2}
            style={{
              padding: '0px',
              position: 'relative',
              zIndex: 400

            }}
          >


            <Grid item className="buttonpad buttonshake" xs={12} style={{ marginTop: '0.5vh', }} >



              <Button


                style={{
                  fontSize: buttonFont,
                  transform: buttonTransform,
                  padding: '2vh',

                  borderRadius: "50px",
                  MozBoxShadow: MozBoxShadowReducerLogin,
                  WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                  boxShadow: boxShadowReducerLogin,
                }}
                fullWidth={true}
                variant='outlined'
                size="large"
                color="primary"
              >
                {" "}


                <label htmlFor="fileoo" style={{ padding: '0px', cursor: 'pointer' }}>

                  <span style={{ marginLeft: matchMobile ? '0vw' : '0vw', }}>

                    IMPORT
                  </span>

                </label>
              </Button>



            </Grid>


          </Grid>





          {showModelType ?
            <Grid
              item
              xs={12}
              style={{
                width: '100%',
                height: '0px',
                padding: '0px',
                textAlign: 'center',
                position: 'fixed',
                top: matchMobile ? '28vh' : '42vh',
                left: matchMobile ? '40.5vw' : '45.5vw',
              }}
            >




              <Grid
                item
                xs={1}
                style={{
                  padding: '0px',

                }}
              >


                {AImodel === 0 ? <Button
                  onClick={() => {
                    setAImodel(2);

                  }}
                  style={{
                    fontSize: '0.7rem',
                    transform: buttonTransform,
                    padding: '2vh',

                    borderRadius: "50px",


                    MozBoxShadow: MozBoxShadowReducerSign,
                    WebkitBoxShadow: WebkitBoxShadowReducerSign,
                    boxShadow: boxShadowReducerSign,
                    opacity: AiLock ? '0.3' : '1'
                  }}
                  fullWidth={true}

                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  {" "}
                  DIFFUSION
                </Button> :
                  AImodel === 1 ? <Button
                    onClick={() => {
                      setAImodel(0);

                    }}
                    style={{
                      fontSize: '0.7rem',
                      transform: buttonTransform,
                      padding: '2vh',

                      borderRadius: "50px",

                      MozBoxShadow: MozBoxShadowReducerLogin,
                      WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                      boxShadow: boxShadowReducerLogin,
                      opacity: AiLock ? '0.3' : '1'

                    }}
                    fullWidth={true}

                    variant='outlined'
                    size="large"

                    color="primary"
                  >
                    {" "}
                    SDXL
                  </Button> :
                    <Button
                      onClick={() => {
                        setAImodel(1);

                      }}
                      style={{
                        fontSize: '0.7rem',
                        transform: buttonTransform,
                        padding: '2vh',

                        borderRadius: "50px",

                        MozBoxShadow: MozBoxShadowReducerLogin,
                        WebkitBoxShadow: WebkitBoxShadowReducerLogin,
                        boxShadow: boxShadowReducerLogin,
                      }}
                      fullWidth={true}


                      variant='outlined'
                      size="large"

                      color="primary"
                    >
                      {" "}
                      FLUX
                    </Button>}</Grid> </Grid> : null}

          <Grid
            item
            xs={12}
            style={{
              marginTop: matchMobile ? '-9vh' : '4vh',
              padding: '0.04px',
              textAlign: 'center',
              opacity: '0.7',

            }}>
          </Grid>



          <TextField
            size={sizex}
            onBlur={
              () => {
                ///setShowModelType(false);
              }
            }
            inputProps={{ style: { fontSize: font1 } }}
            InputLabelProps={{ style: { fontSize: font2 } }}
            onChange={(e) => {
              setprompt(e.target.value)

            }}
            /// value={captionvalues.caption}
            style={{
              transform: transform,
              width: matchMobile ? '100vw' : width,
              paddingBottom: "0px",
              paddingTop: "6vh",
              position: "fixed",
              top: matchMobile ? '39vh' : "55vh",
              left: matchMobile ? '0vw' : "34.1vw",
              zIndex: 26,
              padding: '0vh',
              borderRadius: '4%',
              backgroundImage: 'rgb(255,255,255,0.2)',
            }}
            label="Generate &#129302; Image Here, Add A Prompt"
            type="text"
            name="caption"
            variant='outlined'
          />{" "}
          <Grid
            item
            xs={4}
            sm={5}
            style={{
              padding: '0px',
              textAlign: 'center'
            }}
          ></Grid>


          <Grid
            item
            xs={4}
            sm={2}
            style={{
              padding: '0px',
              textAlign: 'center',
              marginTop: matchMobile ? '32vh' : '40vh',
            }}
          >

            <Grid item className="buttonpad buttonshake" xs={12} style={{ display: Loader ? 'none' : 'block' }}>


              <Button
                onClick={() => {


                  if (AImodel === 0) {

                    if (AiLock) { } else {
                      setLoader(true);
                      GenerateImageStable3();
                    }


                  } else if (AImodel === 1) {

                    if (AiLock) { } else {
                      setLoader(true);
                      ///GenerateImageGpt();

                      GenerateImageStableSDXL();
                    }


                  } else {
                    setLoader(true);

                    GenerateImageStableSDXLHUGG();


                  }

                }}
                style={{
                  fontSize: buttonFont,
                  transform: buttonTransform,
                  padding: '2vh',
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


                {" "}

                <span style={{ marginLeft: '0vw' }}>
                  CREATE
                </span>

              </Button>
            </Grid>


          </Grid>

          <Grid
            item
            xs={12}
            style={{
              padding: '0px',
              textAlign: 'center',
              backgroundColor: 'rgb(8,8,8,0)',
              height: '110vh',
              top: '-76.3vh',
              borderRadius: '5vh',
              position: 'relative',
              zIndex: 100,
              display: Loader ? 'block' : 'none'
            }}
          ></Grid>


        </>}




    </Grid >

  </>);
}

export const GenerateAndUpload = React.memo(GenerateAndUploadx);
