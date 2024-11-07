import React, { useRef, useState, useCallback, useEffect } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import { UpdateA } from "../GlobalActions";

import AdjustIcon from '@material-ui/icons/Adjust';


function AudioEditorx({
  AudioUrl,
  setAudioUrl,
  setAudioname,
  setShowAudio,
  ShowAudio,
  setinteractContentAudio,
  setinteractContentAudiotype,
  setaudioEnd,
  setaudioStart,
  audioStart,
  audioEnd,
  setaudioDuration
}: any): JSX.Element {
  // Reference to the audio element


  interface HTMLaudioElementWithCapture extends HTMLAudioElement {
    captureStream(): MediaStream;
  }

  const audioPlayerRef = useRef<HTMLaudioElementWithCapture>(null);

  const audioPreviewRef = useRef<HTMLaudioElementWithCapture>(null);


  const dispatch = useDispatch();

  // States
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);


  const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;

  // Redux state for dark mode
  interface RootStateGlobalReducer {
    GlobalReducer: {
      darkmode: boolean;
    };
  }
  const { darkmode } = useSelector((state: RootStateGlobalReducer) => ({
    ...state.GlobalReducer,
  }));

  const darkmodeReducer = darkmode;

  const recordingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);




  const startRecording = () => {
    const audio = audioPlayerRef.current;
    if (audio) {


      audio.play();

      setRecordedAudioUrl(AudioUrl);
      setaudioStart(audioPlayerRef.current.currentTime);
      setRecording(true);

      // Set a timer to stop recording after 15 seconds
      recordingTimerRef.current = setTimeout(() => {
        stopRecording();
      }, 25000); // 15 seconds
    }
  };



  const stopRecording = () => {
    const audio = audioPlayerRef.current;


    if (audio) {
      setaudioEnd(audio.currentTime);
      audio.pause();
      setRecording(false);


    };


  };

  const [p, setp] = useState(false);


  async function fetchAudioAsBlob(audioUrl: any) {
    try {
      // Fetch the audio data from the URL
      const response = await fetch(audioUrl);

      // Convert the response data into a Blob object
      const audioBlob = await response.blob();

      return audioBlob;
    } catch (error) {
      console.error('Error fetching audio:', error);
      return null;
    }
  }





  const saveRecording = useCallback(async () => {
    if (recordedAudioUrl) {


      fetchAudioAsBlob(AudioUrl)
        .then(blob => {
          if (blob) {


            var Durationxxx = audioEnd - audioStart;
            setaudioDuration(Durationxxx);


            /////not used
            setinteractContentAudio(blob);

            /////used for gui during upload(testing)
            setinteractContentAudiotype(1);

            /////used for upload
            dispatch(UpdateA(blob, 1));




            /// setShowAudio(false);
            ///setp(true);

          } else {
            console.log('Failed to fetch video or convert to Blob.');
          }
        });



    }
  }, [
    audioEnd,
    AudioUrl,
    audioStart,
    recordedAudioUrl,
  ]);

  const closeEditor = () => {
    setShowAudio(false);
  };

  function readFileAsDataUrl(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      // Read the file and get the Data URL directly
      reader.readAsDataURL(file);
    });
  }


  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );

  ///
  ///
  ///
  /// GET LOGGED USER DATA FROM REDUX STORE
  interface RootStateReducerImage {
    UserdataReducer: {
      image: string;
      imageThumb: string;
      id: number;
      username: string;
      memeberPageid: number;
      MemberProfileData: any;
    };
  }
  const { username, image, imageThumb, id, memeberPageid, MemberProfileData } =
    useSelector((state: RootStateReducerImage) => ({
      ...state.UserdataReducer,
    }));

  const [imageReducer, setimageReducer] = useState("");

  const [imageReducerThumb, setimageReducerThumb] = useState("");




  useEffect(() => {

    const audio = audioPreviewRef.current;
    let isPlaying = false;

    if (audio) {
      const handlePlay = () => {
        isPlaying = true;
      };

      const handleTimeUpdate = () => {
        if (isPlaying && (audio.currentTime < audioStart || audio.currentTime > audioEnd)) {
          audio.currentTime = audioStart;
          audio.pause();
          isPlaying = false;
        }
      };

      const handleSeek = () => {
        if (audio.currentTime < audioStart || audio.currentTime > audioEnd) {
          audio.currentTime = audioStart;
        }
      };

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('seeked', handleSeek);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('seeked', handleSeek);
      };
    }
  }, [audioStart, audioEnd, p, recordedAudioUrl, AudioUrl]);

  return (
    <>
      <Grid
        xs={12}
        style={{
          display: "block",
          position: "fixed",
          top: "0vh",
          height: "100vh",
          backgroundImage: darkmodeReducer ? PaperStyleDark : PaperStyleLight,
          width: "100%",
          margin: "auto",
          textAlign: "center",
          zIndex: '2000'
        }}
      >




        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: darkmodeReducer ? "#ffffff" : '#000000',
          }}
        >



        </Grid>

        <Grid
          item
          xs={12}
          style={{
            margin: "auto",
            textAlign: "right",

            height: "auto",
            position: "fixed",
            top: matchMobile ? '5vh' : "3vh",
            right: matchMobile ? '45vw' : "3vw",
            display: matchMobile ? 'block' : "none",
            zIndex: 500000

          }}
        >
          <DeleteOutlineIcon
            onClick={() => {

              const audio = audioPlayerRef.current;
              if (audio) {
                audio.pause();
              }

              setShowAudio(false)
              setAudioUrl(null);
              setAudioname('');

              setinteractContentAudio(null);
              setinteractContentAudiotype(0);

              dispatch(UpdateA(null, 0));
              ///closeEditor
            }}
            className={
              darkmode
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{ margin: "auto", color: darkmodeReducer ? "#ffffff" : '#000000', fontSize: "9.5vw" }}
          />
        </Grid>


        <img
          src={`${REACT_APP_CLOUNDFRONT}${imageThumb}`}

          style={{
            width: matchMobile ? '100%' : "20%",
            height: "auto",
            position: 'absolute',
            zIndex: 1
          }}
        />

        <img
          src={`${REACT_APP_CLOUNDFRONT}${image}`}
          style={{
            width: matchMobile ? '100%' : "20%",
            height: "auto",
            position: 'relative',
            zIndex: 2
          }}
        />
        {

          recordedAudioUrl ? <audio
            ref={audioPreviewRef}
            src={recordedAudioUrl}
            controls
            style={{
              width: matchMobile ? '100%' : "50%", margin: "auto", textAlign: "center",
              visibility: p ? 'visible' : 'hidden'
            }}
          ></audio> :

            null}




        <audio
          ref={audioPlayerRef}
          src={AudioUrl}
          controls
          style={{
            width: matchMobile ? '100%' : "50%", margin: "auto", textAlign: "center",
            visibility: p ? 'hidden' : 'visible'
          }}
        ></audio>





        {p ? <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={3} sm={1}
            onClick={() => {
              setp(false)
            }}
            style={{
              border: darkmodeReducer ? '2px solid white' : '2px solid black',
              cursor: 'pointer',
              height: '15vh', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            EDIT
          </Grid>


          <Grid item onClick={() => {
            saveRecording();

            const audio = audioPlayerRef.current;
            if (audio) {
              audio.pause();
            }

            setShowAudio(false)

          }} xs={3} style={{
            cursor: 'pointer',
            height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
          }}>
            SAVE
          </Grid>
        </Grid> : <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif',
          color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={4} sm={1}

            onClick={
              () => {
                startRecording();

              }}
            style={{
              cursor: recording ? 'default' : 'pointer',
              opacity: recording ? 0.25 : 1,

              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black',

              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            START
          </Grid>


          {recording ? <Grid className="blinking" item xs={2} sm={1} style={{
            height: '15vh', border: '0px solid white', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', visibility: 'visible'
          }}>

            <AdjustIcon
              className={
                darkmodeReducer
                  ? "dontallowhighlighting zuperkingIcon "
                  : "dontallowhighlighting zuperkingIcon  "
              }
              style={{
                margin: "auto",
                fontSize: matchMobile
                  ? `3vh`
                  : `2.5vw`,
                color: 'red',
                marginTop: matchMobile ? '2vh' : ''

              }}
            />
          </Grid> :
            <Grid item xs={4} sm={1}
              onClick={() => {
                /// onClick={saveRecording}
                setp(true)
              }} style={{
                cursor: 'pointer',
                height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                visibility: recordedAudioUrl ? 'visible' : 'hidden'
              }}>
              PREVIEW
            </Grid>}
          <Grid item
            onClick={
              () => {

                stopRecording();
              }}

            xs={4} sm={1} style={{
              cursor: recording ? 'pointer' : 'default',
              opacity: recording ? 1 : 0.25,

              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
            }}>
            END
          </Grid>
        </Grid>}

        <Grid
          item
          xs={12}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: darkmodeReducer ? "#ffffff" : '#000000',
          }}
        >



        </Grid>

        <Grid
          item
          xs={12}
          style={{
            margin: "auto",
            textAlign: "right",
            left: "5px",
            height: "20px",
            position: "fixed",
            top: matchMobile ? '50vh' : "3vh",
            right: matchMobile ? '5vw' : "3vw",
            display: matchMobile ? 'none' : "block",

          }}
        >
          <DeleteOutlineIcon
            onClick={() => {

              const audio = audioPlayerRef.current;
              if (audio) {
                audio.pause();
              }

              setShowAudio(false)
              setAudioUrl(null);
              setAudioname('');

              setinteractContentAudio(null);
              setinteractContentAudiotype(0);

              dispatch(UpdateA(null, 0));
              ///closeEditor
            }}
            className={
              darkmode
                ? "make-small-icons-clickable-lightCrop dontallowhighlighting zuperkingIcon "
                : "make-small-icons-clickable-darkCrop dontallowhighlighting zuperkingIcon  "
            }
            style={{ margin: "auto", color: darkmodeReducer ? "#ffffff" : '#000000', fontSize: "2.5vw" }}
          />
        </Grid>
      </Grid >


    </>
  );
}

export const AudioEditor = React.memo(AudioEditorx);
