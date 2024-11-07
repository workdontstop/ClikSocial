import React, {
  ChangeEvent,
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { TextField } from "@material-ui/core";
import { Grid, GridSize } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Masonry from "@mui/lab/Masonry";
import CircleIcon from "@mui/icons-material/Circle";
import { SuperCrop } from "./SuperCrop";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PhotoIcon from "@mui/icons-material/Photo";
import GifIcon from "@mui/icons-material/Gif";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Axios from "axios";
import CropIcon from "@mui/icons-material/Crop";
import CheckIcon from "@mui/icons-material/Check";
import { PreviewCanvasCropAll } from "./PreviewCanvasCropAll";
import { FilterModeArrow } from "./FilterModeArrow";
import { OptionsSlider } from "../profile/OptionsSlider";
import { convertHexToRGB } from "material-ui/utils/colorManipulator";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import UndoIcon from "@mui/icons-material/Undo";
import LayersIcon from "@mui/icons-material/Layers";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightModeIcon from "@mui/icons-material/LightMode";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import HighlightIcon from "@mui/icons-material/Highlight";
import Slider from "@material-ui/core/Slider";
import { HexColorPicker } from "react-colorful";
import ColorizeIcon from "@mui/icons-material/Colorize";
import EditIcon from "@mui/icons-material/Edit";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import CloseIcon from "@mui/icons-material/Close";
import RestoreIcon from "@mui/icons-material/Restore";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import date from "date-and-time";
import { UpdateNavFilterReducer } from "../GlobalActions";
import { UpdateNavCropReducer } from "../GlobalActions";
import { AudioEditor } from "./AudioEditor";
import { CaptionText } from "./CaptionText";
import { useNavigate } from 'react-router-dom';


function Captionx({
  closeUploadModal,
  setstartTopicCap,
  selectedImage,
  finalImageData,
  finalImageDataSD,
  finalImageDataBASE64,
  cropInitialIn2,
  interactContent2,
  cropInitialIn,
  interactContent,
  radius1,
  radius2,
  interactContenttype2,
  interactContenttype,
  interactContentvideo2,
  interactContentvideo,

  interactContentAudiotype,
  interactContentAudio,

  setinteractContentAudio,
  setinteractContentAudiotype,
  captionvalues,
  setcaptionvalues,
  setAudioname,
  Audioname,
  setAudioUrl,
  AudioUrl,
  setShowAudio,
  ShowAudio,
  setAllowCaption,
  vidBackUpURL,
  vidBackUpURL2,
  currentTimestamp,
  Durationx,
  currentTimestamp2,
  Durationx2,
  audioStart,
  setaudioStart,
  audioEnd,
  setaudioEnd,
  audioEndDuration,
  setaudioDuration,
  backgroudAudio,
  startTopicCap
}: any): JSX.Element {
  const [matchTabletMobile, setmatchTabletMobile] = useState<boolean>(false);

  const [supeFilterLoadFadex, setsupeFilterLoadFadex] =
    useState<boolean>(false);



  useEffect(() => {
    if (startTopicCap) {

      UploadSuperData(
        finalImageData,
        finalImageDataSD,
        finalImageDataBASE64
      );

    }
  }, [startTopicCap]);


  const { REACT_APP_SUPERSTARZ_URL } = process.env;




  const [loadmode, setloadmode] = useState('');


  var s3finaldata: any = [];

  var s3finaldataThumb: any = [];

  var s3finaldataExtra: any = [];

  var s3finaldataAll: any = [];

  var s3finaldataINT1: any = [];

  var s3finaldataINT2: any = [];

  var s3finalvid: any = '';

  var s3finalvid2: any = '';

  var s3finalvidbackup: any = '';

  var s3finalvid2backup: any = '';



  ///
  ///
  ///DARKMODE FROM REDUX
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
      interactContentAudiox: any;
      interactContentAudiotypex: number
    };
  }
  const { darkmode, interactContentAudiox, interactContentAudiotypex } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  var pcfont = 2.9;

  var mobilefont = 4.8;

  //
  ///
  ///GET OPTIONS SLIDER IMAGE WIDTH FROM MATERIAL UI GRID
  useEffect(() => {
    if (matchMobile || matchTablet) {
      setmatchTabletMobile(true);

    }
  }, []);




  useEffect(() => {

    console.log(cropInitialIn)

  }, [cropInitialIn]);


  ///
  ///
  /// SANITISE LOG IN FORM INPUT CLIENT SIDE
  const updatecaptiontop = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setcaptionvalues({ ...captionvalues, [name]: value });


    },
    [captionvalues]
  );






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
    width = "20%";
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
    font1 = "";
    font2 = "";
    paddingbutU = "80px";
  }

  ///
  ///
  ///
  /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
  interface RootUserdataReducer {
    UserdataReducer: {
      id: number;
    };
  }

  ///
  ///
  ///
  /// GET SCREENHEIGHT FROM REDUX STORE
  const { id } = useSelector((state: RootUserdataReducer) => ({
    ...state.UserdataReducer,
  }));

  const idReducer = id;

  const dispatch = useDispatch();


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };



  const calldatabase = useCallback((datak: any, t: number, audiolink: any) => {

    setloadmode('Saving');

    // alert(finalImageData.length)
    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/post_upload_data`, {
      values: datak,
    })
      .then((response) => {
        console.log(response);
        setsupeFilterLoadFadex(false);
        if (response.data.message === "images uploaded") {
          if (t === 1) {
            console.log(response.data.go);

            var tg = response.data.go;



            var da = {
              file: audiolink,
              name: Audioname,
              sender: idReducer,
              post: tg,
              backgroudAudio: backgroudAudio,

            };


            Axios.post(`${REACT_APP_SUPERSTARZ_URL}/post_upload_audio_data`, {
              values: da,
            })
              .then((response) => {
                ///console.log(response);
                /// setsupeFilterLoadFadex(false);
                if (response.data.message === "audio uploaded") {

                  setsupeFilterLoadFadex(false);
                  closeUploadModal(2);
                  goBack();
                  window.location.reload();

                }
              })
              .catch(function (error) {
                setsupeFilterLoadFadex(false);
                console.log(error);
              });






          } else {
            setsupeFilterLoadFadex(false);
            closeUploadModal(2);
            goBack();
            window.location.reload();
          }


        }
      })
      .catch(function (error) {
        setsupeFilterLoadFadex(false);
        console.log(error);
      });


  }, [audioStart, audioEnd, Audioname, idReducer, backgroudAudio])

  const UpdatePostDatabaseStatus200 = useCallback((datak: any, b: any) => {


    if (interactContentAudiotypex === 1) {
      GetSecureURLAudio(datak);

      /// alert(interactContentAudiotypex);
    }

    else {




      console.log(datak);
      var audiolinkm = null;

      calldatabase(datak, 0, audiolinkm)
    }
  }, [interactContentAudiotypex]);




  const GetSecureURLAudio = useCallback((datak: any) => {
    var kob = {
      count: 0,
    };

    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/get_signed_url_4upload_post_audio`, {
      values: kob,
    })
      .then((response: any) => {
        //setsupeFilterLoadFadex(false);
        var holderx = response.data.holder;
        setsupeFilterLoadFadex(true);
        /// alert('UploadingPost');
        ///alert(h1);
        let urlxx = "";
        var xx: any = null;
        urlxx = holderx[0].urlA;




        xx = interactContentAudiox;


        // Step 1: Get the size of the Blob in bytes
        const sizeInBytesxx = interactContentAudiox.size;
        // Step 2: Convert size from bytes to megabytes
        const sizeInMegabytesxx = Math.ceil(sizeInBytesxx / (1024 * 1024));

        setloadmode(`Uploading Audio ( ${sizeInMegabytesxx}MB ) ! Thank you for your patience.`);

        Axios.put(urlxx, xx)
          .then((response) => {
            setsupeFilterLoadFadex(false);
            if (response.status === 200) {

              setloadmode(`Processing Audio ( ${sizeInMegabytesxx}MB ) ! Thank you for your patience.`);
              setsupeFilterLoadFadex(true);
              let imagelinkx = urlxx.split("?")[0];
              let imagelinkl = imagelinkx.split("/").pop();
              var audiolink = imagelinkl;
              ///console.log(audiolink);


              var kobx = {
                audio: imagelinkl,
                currentTimestamp: audioStart,
                Durationx: audioEndDuration
              };


              ///call transcode here
              Axios.post(`${REACT_APP_SUPERSTARZ_URL}/transAudio`, {
                values: kobx,
              }).then((response) => {
                if (response.status === 200) {
                }
              }).catch(function (error) {
                console.log(error);
              });



              calldatabase(datak, 1, audiolink);


              ///console.log(imagelinkx);
            }
          })
          .catch(function (error) {
            setsupeFilterLoadFadex(false);
            console.log(error);
          });


        ///  PutImageInS3WithURLVid(type, type2, holder[0].urlVid, holder[0].urlVid2, a, b, base64);

      })
      .catch(function (error) {
        setsupeFilterLoadFadex(false);
        console.log(error);
      });

  }, [interactContentAudiox]);




  const PutImageInS3WithURLVid = useCallback(
    (type: any, type2: any, h1: any, h2: any, v1: any, v2: any, base64: any, vidbackup1: any, vidbackup2: any, holder: any) => {

      let urlx = "";
      var x: any = null;

      ///alert(h1);
      let urlxx = "";
      var xx: any = null;


      const calldatabaseVid = () => {




        var datallx = {
          topic: captionvalues.topic,
          caption: captionvalues.caption,
          id: idReducer,
          all: s3finaldataAll,
          I1x: cropInitialIn[0].x,
          I1y: cropInitialIn[0].y,
          I1bx: cropInitialIn2[0].x,
          I1by: cropInitialIn2[0].y,
          I2x: cropInitialIn[1].x,
          I2y: cropInitialIn[1].y,
          I2bx: cropInitialIn2[1].x,
          I2by: cropInitialIn2[1].y,
          I3x: cropInitialIn[2].x,
          I3y: cropInitialIn[2].y,
          I3bx: cropInitialIn2[2].x,
          I3by: cropInitialIn2[2].y,
          rad1: radius1,
          rad2: radius2,
          vid1: s3finalvid,
          vid2: s3finalvid2,
          vid1backup: s3finalvidbackup,
          vid2backup: s3finalvid2backup,
          interacttype1: type,
          interacttype2: type2,

        }


        ///setloadmode('Pocessing');

        setsupeFilterLoadFadex(true);
        UpdatePostDatabaseStatus200(datallx, base64);



      }



      const calltwo = () => {
        if (type2 === 1) {
          // alert('thumb');
          urlxx = h2;
          xx = v2;

          // Step 1: Get the size of the Blob in bytes
          const sizeInBytes2 = v2.size;
          // Step 2: Convert size from bytes to megabytes
          const sizeInMegabytes2 = Math.ceil(sizeInBytes2 / (1024 * 1024));

          setloadmode(`Uploading Video ( ${sizeInMegabytes2}MB ) ! Thank you for your patience.`);

          Axios.put(urlxx, xx)
            .then((response) => {

              setsupeFilterLoadFadex(false);
              if (response.status === 200) {


                setloadmode(`Processing Video ( ${sizeInMegabytes2}MB ) ! Thank you for your patience.`);


                setsupeFilterLoadFadex(true);
                let imagelinkx = urlxx.split("?")[0];
                let imagelinkjjka = imagelinkx.split("/").pop();
                s3finalvid2 = imagelinkjjka;

                setsupeFilterLoadFadex(true);
                calldatabaseVid();




                var kobx = {
                  vidxx: imagelinkjjka,
                  currentTimestamp: currentTimestamp2,
                  Durationx: Durationx2
                };


                ///call transcode here
                Axios.post(`${REACT_APP_SUPERSTARZ_URL}/trans`, {
                  values: kobx,
                }).then((response) => {
                  if (response.status === 200) {
                  }
                }).catch(function (error) {
                  console.log(error);
                });


              }
            })
            .catch(function (error) {
              setsupeFilterLoadFadex(false);
              console.log(error);
            });

        } else {
          calldatabaseVid();

        }
      }



      if (type === 1) {
        // alert('thumb');
        urlx = h1;
        x = v1;


        // Step 1: Get the size of the Blob in bytes
        const sizeInBytes = v1.size;
        // Step 2: Convert size from bytes to megabytes
        const sizeInMegabytes = Math.ceil(sizeInBytes / (1024 * 1024));

        setloadmode(`Uploading Video ( ${sizeInMegabytes}MB ) ! Thank you for your patience.`);

        Axios.put(urlx, x)
          .then((response) => {

            setsupeFilterLoadFadex(false);
            if (response.status === 200) {

              setloadmode(`Processing Video ( ${sizeInMegabytes}MB ) ! Thank you for your patience.`);

              setsupeFilterLoadFadex(true);
              let imagelink = urlx.split("?")[0];
              let imagelinkka = imagelink.split("/").pop();
              s3finalvid = imagelinkka;


              setsupeFilterLoadFadex(true);
              calltwo();




              var kobx = {
                vidxx: imagelinkka,
                currentTimestamp: currentTimestamp,
                Durationx: Durationx
              };


              ///call transcode here
              Axios.post(`${REACT_APP_SUPERSTARZ_URL}/trans`, {
                values: kobx,
              }).then((response) => {
                if (response.status === 200) {
                }
              }).catch(function (error) {
                console.log(error);
              });


            }
          })
          .catch(function (error) {
            setsupeFilterLoadFadex(false);
            console.log(error);
          });
      } else {
        calltwo()
      }






    },
    [idReducer, s3finaldata, s3finaldataExtra, s3finaldataThumb, s3finalvid2, s3finalvid2backup, s3finalvid, s3finalvidbackup, s3finaldataAll, cropInitialIn, cropInitialIn2, interactContentAudiotypex, Audioname,]
  );


  const GetVideoSecureURL = (a: any, b: any, type: any, type2: any, datall: any, base64: any, vidbackup1: any, vidbackup2: any) => {
    var countxx: any = 0;

    if (type === 1) {
      countxx = countxx + 1;
    }

    if (type2 === 1) {
      countxx = countxx + 1;
    }

    if (countxx > 0) {
      var kob = {
        count: countxx,
      };

      Axios.post(`${REACT_APP_SUPERSTARZ_URL}/get_signed_url_4upload_post_vid`, {
        values: kob,
      })
        .then((response: any) => {
          setsupeFilterLoadFadex(false);
          var holder = response.data.holder;
          setsupeFilterLoadFadex(true);
          /// alert('UploadingPost');
          console.log(holder);



          setloadmode('Uploading Video');


          PutImageInS3WithURLVid(type, type2, holder[0].urlVid, holder[0].urlVid2, a, b, base64, vidbackup1, vidbackup2, holder);

        })
        .catch(function (error) {
          setsupeFilterLoadFadex(false);
          console.log(error);
        });
    } else {

      setsupeFilterLoadFadex(true);
      UpdatePostDatabaseStatus200(datall, base64);
    }
  };



  ////
  ////
  ////
  const CallDatabase = useCallback((datall: any, base64: any, UpdatePostDatabaseStatus200: any) => {

    GetVideoSecureURL(interactContentvideo, interactContentvideo2, interactContenttype, interactContenttype2, datall, base64, vidBackUpURL, vidBackUpURL2);

    ///setsupeFilterLoadFadex(true);
    //UpdatePostDatabaseStatus200(datall, base64);
  }, [interactContentvideo, interactContentvideo2, interactContenttype, interactContenttype2, interactContentAudiotypex, Audioname, vidBackUpURL, vidBackUpURL2])

  const PutImageInS3Interaction = useCallback(
    (holder: any, datap: any, base64: any, allow: boolean, i: number) => {


      let urlx = "";
      var x: any = null;
      if (allow) {
        // alert('thumb');
        urlx = holder[i].urlinteraction1;
        x = interactContent;
      } else {
        //alert('hd');
        urlx = holder[i].urlinteraction2;
        console.log(urlx)
        x = interactContent2;
      }

      if (x[i]) {

        Axios.put(urlx, x[i])
          .then((response) => {
            console.log(response)
            setsupeFilterLoadFadex(false);
            if (response.status === 200) {
              setsupeFilterLoadFadex(true);
              if (allow) {
                let imagelink = urlx.split("?")[0];
                let imagelinkjjk = imagelink.split("/").pop();
                s3finaldataINT1[i] = imagelinkjjk;
                var datak = {
                  imagedata: s3finaldata[0],
                  imagedataThumb: s3finaldataThumb[0],
                  imagedata2: s3finaldataExtra[0],
                  interact1: s3finaldataINT1[0],
                  interact2: s3finaldataINT2[0]
                };
                s3finaldataAll[i] = datak;

                if (i + 1 === finalImageData.length) {
                  var datall = {
                    topic: captionvalues.topic,
                    caption: captionvalues.caption,
                    id: idReducer,
                    all: s3finaldataAll,
                    I1x: cropInitialIn[0].x,
                    I1y: cropInitialIn[0].y,
                    I1bx: cropInitialIn2[0].x,
                    I1by: cropInitialIn2[0].y,
                    I2x: cropInitialIn[1].x,
                    I2y: cropInitialIn[1].y,
                    I2bx: cropInitialIn2[1].x,
                    I2by: cropInitialIn2[1].y,
                    I3x: cropInitialIn[2].x,
                    I3y: cropInitialIn[2].y,
                    I3bx: cropInitialIn2[2].x,
                    I3by: cropInitialIn2[2].y,
                    rad1: radius1,
                    rad2: radius2,
                    vid1: s3finalvid,
                    vid2: s3finalvid2,
                    vid1backup: s3finalvidbackup,
                    vid2backup: s3finalvid2backup,
                    interacttype1: 0,
                    interacttype2: 0,
                  };

                  //setloadmode('Pocessing');

                  CallDatabase(datall, base64, UpdatePostDatabaseStatus200);


                  ///alert('Processing');

                } else {

                  PutImageInS3Interaction(holder, datap, base64, false, i + 1);
                }
              } else {
                let imagelinkx = urlx.split("?")[0];
                let imagelinkj = imagelinkx.split("/").pop();
                s3finaldataINT2[i] = imagelinkj;

                PutImageInS3Interaction(holder, datap, base64, true, i);
              }
            }
          })
          .catch(function (error) {
            setsupeFilterLoadFadex(false);
            console.log(error);
          });
      } else {

        //////////////////////////////////
        ////////////////////////////////////
        setsupeFilterLoadFadex(true);
        if (allow) {
          let imagelink = null;
          s3finaldataINT1[i] = imagelink;
          var datak = {
            imagedata: s3finaldata[0],
            imagedataThumb: s3finaldataThumb[0],
            imagedata2: s3finaldataExtra[0],
            interact1: s3finaldataINT1[0],
            interact2: s3finaldataINT2[0]
          };
          s3finaldataAll[i] = datak;


          if (i + 1 === finalImageData.length) {
            var datall = {
              topic: captionvalues.topic,
              caption: captionvalues.caption,
              id: idReducer,
              all: s3finaldataAll,
              I1x: cropInitialIn[0].x,
              I1y: cropInitialIn[0].y,
              I1bx: cropInitialIn2[0].x,
              I1by: cropInitialIn2[0].y,
              I2x: cropInitialIn[1].x,
              I2y: cropInitialIn[1].y,
              I2bx: cropInitialIn2[1].x,
              I2by: cropInitialIn2[1].y,
              I3x: cropInitialIn[2].x,
              I3y: cropInitialIn[2].y,
              I3bx: cropInitialIn2[2].x,
              I3by: cropInitialIn2[2].y,
              rad1: radius1,
              rad2: radius2,
              vid1: s3finalvid,
              vid2: s3finalvid2,
              vid1backup: s3finalvidbackup,
              vid2backup: s3finalvid2backup,
              interacttype1: 0,
              interacttype2: 0,
            };

            CallDatabase(datall, base64, UpdatePostDatabaseStatus200);

          } else {

            PutImageInS3Interaction(holder, datap, base64, false, i + 1);
          }
        } else {
          let imagelinkx = null;
          s3finaldataINT2[i] = imagelinkx;

          PutImageInS3Interaction(holder, datap, base64, true, i);
        }
        ////////////////////////////////////
        /////////////////////////////////
      }
    },
    [idReducer, s3finaldata, s3finaldataThumb, s3finaldataExtra, s3finaldataINT1, s3finaldataINT2, interactContent, interactContent2, cropInitialIn,
      cropInitialIn2, s3finalvid, s3finalvid2, s3finalvid2backup, s3finalvidbackup]
  );


  const PutImageInS3WithURL = useCallback(
    (holder: any, a: any, b: any, base64: any, allow: boolean, i: number) => {




      let urlx = "";
      let urlxx = "";
      var x: any = null;
      if (allow) {
        // alert('thumb');
        urlx = holder[i].urlThumb;
        x = b;
      } else {
        //alert('hd');
        urlx = holder[i].urlHD;
        urlxx = holder[i].urlHD2;
        x = a;

      }



      Axios.put(urlx, x[i])
        .then((response) => {
          console.log(response);
          setsupeFilterLoadFadex(false);
          if (response.status === 200) {
            setsupeFilterLoadFadex(true);
            if (allow) {
              let imagelink = urlx.split("?")[0];
              let imagelinkjj = imagelink.split("/").pop();
              s3finaldataThumb[i] = imagelinkjj;
              var datak = {
                imagedata: s3finaldata[0],
                imagedataThumb: s3finaldataThumb[0],
                imagedata2: s3finaldataExtra[0],
                interact1: s3finaldataINT1[0],
                interact2: s3finaldataINT2[0]
              };
              s3finaldataAll[i] = datak;

              if (i + 1 === finalImageData.length) {
                var datap = {
                  topic: captionvalues.topic,
                  caption: captionvalues.caption,
                  id: idReducer,
                  all: s3finaldataAll,
                };

                ///console.log(s3finaldataAll);
                //setsupeFilterLoadFadex(true);
                //UpdatePostDatabaseStatus200(datap, base64);


                /// alert('UploadingInteraction');
                setloadmode('Uploading Interaction');
                PutImageInS3Interaction(holder, datap, base64, false, 0);
              } else {
                PutImageInS3WithURL(holder, a, b, base64, false, i + 1);
              }
            } else {


              Axios.put(urlxx, x[i])
                .then((response) => {

                  if (response.status === 200) {
                    let imagelinkxda = urlx.split("?")[0];
                    s3finaldata[i] = imagelinkxda;


                    let imagelinkv = urlxx.split("?")[0];
                    let imagelinkxxqqq = imagelinkv.split("/").pop();
                    s3finaldataExtra[i] = imagelinkxxqqq;

                    PutImageInS3WithURL(holder, a, b, base64, true, i);
                  }
                })
                .catch(function (error) {
                  ///setsupeFilterLoadFadex(false);
                  console.log(error);
                });

            }
          }
        })
        .catch(function (error) {
          setsupeFilterLoadFadex(false);
          console.log(error);
        });

    },
    [idReducer, s3finaldata, s3finaldataThumb, s3finaldataExtra, s3finaldataINT1, s3finaldataINT2]
  );

  const GetSecureURL = (hdBlob: any, thumbBlob: any, hdBase64: any) => {
    var kob = {
      count: finalImageData.length + 1,

    };

    Axios.post(`${REACT_APP_SUPERSTARZ_URL}/get_signed_url_4upload_post`, {
      values: kob,
    })
      .then((response) => {
        setsupeFilterLoadFadex(false);
        var holder = response.data.holder;
        setsupeFilterLoadFadex(true);
        /// alert('UploadingPost');
        setloadmode('Uploading Post');
        PutImageInS3WithURL(holder, hdBlob, thumbBlob, hdBase64, false, 0);
      })
      .catch(function (error) {
        setsupeFilterLoadFadex(false);
        console.log(error);
      });
  };

  const UploadSuperData = useCallback(
    (hdBlob: any, thumbBlob: any, hdBase64: any) => {

      setsupeFilterLoadFadex(true);
      GetSecureURL(hdBlob, thumbBlob, hdBase64);
    },
    [finalImageData, captionvalues, closeUploadModal, idReducer]
  );


  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );






  return (
    <>


      <Grid
        container
        className={
          darkmodeReducer ? "modal-containerDark" : "modal-containerLight"
        }
        style={{
          padding: "0px",
          height: "100%",
          zIndex: 1,
        }}
      > <Grid
        item
        xs={12}
        style={{
          padding: "0px",
        }}
      ></Grid>

        {ShowAudio ? <AudioEditor
          setaudioDuration={setaudioDuration}
          audioStart={audioStart}
          audioEnd={audioEnd}
          setaudioStart={setaudioStart}
          setaudioEnd={setaudioEnd}
          setAudioUrl={setAudioUrl}
          setAudioname={setAudioname}
          AudioUrl={AudioUrl}
          ShowAudio={ShowAudio}
          setShowAudio={setShowAudio}
          setinteractContentAudio={setinteractContentAudio}
          setinteractContentAudiotype={setinteractContentAudiotype}
        /> : null}





        <Grid
          item
          xs={5}
          sm={6}
          style={{
            padding: "0px",
            backgroundColor: '#00ccff',
            height: '0px',
            marginTop: '3vh'
          }}
        >



          {finalImageData[0] ? < img
            src={URL.createObjectURL(finalImageData[0])}
            style={{
              width: matchMobile ? '100%' : "65%",
              height: matchMobile ? 'auto' : "53vh",
              objectFit: 'cover',
              marginLeft: '10vw',
              borderRadius: '10%'
            }}
            alt="Image"
          /> : null}



        </Grid>



        <Grid
          item
          xs={7}
          sm={6}
          style={{
            padding: "0px",
            height: '0vh',
            marginTop: '5vh',
            paddingLeft: matchMobile ? '0px' : '8vw',
          }}
        >






          <Grid
            item
            xs={12}
            style={{
              padding: "0px",
              height: '5vh',
              marginTop: '-14vh'

            }}
          >


            <MusicNoteIcon

              className={
                darkmodeReducer
                  ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                  : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
              }
              style={{
                color: "#ffffff",
                fontSize: matchTabletMobile ? `2vh` : `${pcfont - 1}vw`,
                marginRight: "5vw",
              }}
            />
            <span
              style={{
                position: 'relative', // Absolute position for the text
                top: '-10%', // Center vertically
                fontFamily: 'kaushan_scriptregular',
                fontSize: matchTabletMobile ? `2vh` : `1.3vw`,
              }}
            >
              {interactContentAudiotype === 1 ? Audioname : 'Uploading Post'}
            </span>


          </Grid>



          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                padding: "0px",
                position: 'relative',
                marginTop: '12vh',
                height: 'auto',

              }}
            >


              <Grid
                item
                xs={3}
                sm={12}
                style={{
                  padding: "0px",

                  height: '0vh',
                  position: 'relative',

                }}
              ></Grid>



              <Grid
                item
                xs={9}
                sm={6}
                style={{
                  padding: "0px",

                  height: '0vh',
                  position: 'relative',

                }}
              >

                {
                  interactContenttype === 1 ?
                    <video
                      src={interactContentvideo ? URL.createObjectURL(interactContentvideo) : ''}   // Using the blob URL from interactContentvideo
                      style={{
                        width: matchMobile ? '70%' : "90%", // Set thevideo width to 100%
                        height: "auto",
                        display: "block", // Ensure proper rendering in some browsers
                        margin: "0 auto", // Center the video
                        cursor: 'pointer'
                      }}
                    // Add if you want video controls like play, pause, etc.
                    /> :
                    interactContent.length > 0 ? <img
                      src={URL.createObjectURL(interactContent[0])}
                      style={{
                        width: matchMobile ? '70%' : "90%",
                        height: "21vh",
                        objectFit: 'cover',

                      }}
                    /> : null
                }


                {interactContenttype2 === 1 ?
                  <video
                    src={interactContentvideo2 ? URL.createObjectURL(interactContentvideo2) : ''}   // Using the blob URL from interactContentvideo
                    style={{
                      width: matchMobile ? '70%' : "90%",// Set thevideo width to 100%
                      height: "auto",
                      display: "block", // Ensure proper rendering in some browsers
                      margin: "0 auto", // Center the video
                      cursor: 'pointer'
                    }}
                  // Add if you want video controls like play, pause, etc.
                  /> :
                  interactContent2.length > 0 ? <img
                    src={URL.createObjectURL(interactContent2[0])}

                    style={{
                      width: matchMobile ? '70%' : "90%",
                      height: "21vh",
                      objectFit: 'cover',
                    }}
                  /> : null
                }
              </Grid>


            </Grid>
          </Grid>




        </Grid>






        <Grid
          item
          xs={12}
          style={{
            padding: "0px",

          }}
        ></Grid>
        <Grid
          item
          xs={4}
          style={{
            margin: "auto",
            textAlign: "center",
            height: "0px",
            marginTop: '3vh',
            visibility: 'hidden'
          }}
        >
          <CheckIcon
            onClick={() => {
              //////postdata();

            }}
            className={
              darkmodeReducer
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{
              color: "#ffffff",
              fontSize: matchTabletMobile ? `${mobilefont}vh` : `${pcfont}vw`,
              marginRight: "5vw",
            }}
          />
          <CloseIcon
            onClick={() => {
              setAllowCaption(false);
              setstartTopicCap(false);
            }}
            className={
              darkmodeReducer
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{
              margin: "auto",
              color: "#ffffff",
              fontSize: matchTabletMobile ? `2vh` : `${pcfont}vw`,
              marginLeft: "5vw",
            }}
          />
        </Grid>



        {supeFilterLoadFadex ? (

          <>
            <Grid
              container
              style={{
                backgroundColor: darkmodeReducer
                  ? "rgba(50,50,50,0.68)"
                  : "rgba(250,250,250,0.8)",
                position: "fixed",
                top: "0px",
                width: "100vw",
                height: "100vh",
                zIndex: 10000000,
              }}
            >


              <h2 className='blinken' style={{ textAlign: 'center', margin: 'auto', fontFamily: 'kaushan_scriptregular', }}>
                {loadmode}..
              </h2>



            </Grid>{" "}
          </>
        ) :

          null


        }



      </Grid >
    </>
  );
}

export const Caption = React.memo(Captionx);
