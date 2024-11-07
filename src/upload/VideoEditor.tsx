import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";

import { Grid } from "@material-ui/core";

import { RootStateOrAny, useSelector, useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";

import { matchPc, matchTablet, matchMobile } from "../DetectDevice";
import AdjustIcon from '@material-ui/icons/Adjust';


interface HTMLVideoElementWithCapture extends HTMLVideoElement {
  captureStream(): MediaStream;
}





function VideoEditorx({ VideoUrl, VideoUrl2, ShowVideo2, ShowVideo, setShowVideo2, setShowVideo,
  setinteractContentvideo2,
  setinteractContentvideo,
  setinteractContenttype,
  setinteractContenttype2, callDelInteract, setadjustinteract1, setadjustinteract2,
  setvidBackUpURL,
  vidBackUpURL,
  vidBackUpURL2,
  setvidBackUpURL2,
  setCurrentTimestamp,
  currentTimestamp,
  setDuration,
  setCurrentTimestamp2,
  currentTimestamp2,
  setDuration2,

  VideoBlob,
  VideoBlob2

}: any): JSX.Element {

  ///

  const videoPlayerRef = useRef<HTMLVideoElementWithCapture>(null);

  const videoPlayerRefx = useRef<HTMLVideoElementWithCapture>(null);

  const canvasRef: any = useRef(null);



  const Timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Timer3 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wait = 50;


  const [pop, setpop] = useState(false);


  useEffect(() => {

    setpop(true);
    setTimeout(() => {

      setpop(false);
    }, 1600);


  }, [VideoUrl]);

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


  const [EndTimestamp, setEndTimestamp] = useState(0);



  const updateCurrentTimestamp = () => {
    sethideend(false);
    if (videoPlayerRef.current) {

      var x = videoPlayerRef.current.currentTime;
      if (ShowVideo2) {
        setCurrentTimestamp2(x - 1);
      } else {
        setCurrentTimestamp(x - 1);
      }

      setprocessing(true);

      startRecording(VideoUrl, x - 1, 50);
    }
  };

  // New state for recorded video URL
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [RecordedBlob, setRecordedBlob] = useState(null);


  const [rec, setRec] = useState(false);

  const [processing, setprocessing] = useState(false);

  const recorderRef: any = useRef(null);

  const [hideend, sethideend] = useState(false);

  const [Preview, setPreview] = useState(false);




  const stopRecording = () => {
    /////////
    if (videoPlayerRef.current) {
      var xx = videoPlayerRef.current.currentTime;
      setEndTimestamp(xx);
    }
    if (videoPlayerRef.current) {
      videoPlayerRef.current.pause();
    }


    if (Timer2.current) {
      clearTimeout(Timer2.current);
    }

    if (Timer1.current) {
      clearTimeout(Timer1.current);
    }

    setRecordedVideoUrl(VideoUrl);
    setRec(true);
    setprocessing(false);

    ////////
  };

  const startRecording = (sourceVideoUrl: any, startTime: any, durationMaximum: any) => {

    const video = videoPlayerRef.current;

    if (video) {
      video.src = sourceVideoUrl;
      video.currentTime = startTime;

      video.play();


      if (Timer2.current) {
        clearTimeout(Timer2.current);
      }

      if (Timer1.current) {
        clearTimeout(Timer1.current);
      }
      Timer2.current = setTimeout(() => {


        if (videoPlayerRef.current) {

          var xx = videoPlayerRef.current.currentTime;
          setEndTimestamp(xx);
        }
        setRecordedVideoUrl(sourceVideoUrl);
        video.pause();
        setRec(true);
        setprocessing(false);
      }, durationMaximum * 1000);
    }
  };  // Call this function when you want to start recording
  // For example: startRecording(VideoUrl, 0, 10) for a 10-second clip from the start


  const close = (save: boolean) => {

    const video = videoPlayerRef.current;
    if (video) { video.pause(); }


    if (save) { } else {
      if (ShowVideo2) { callDelInteract(false); } else { callDelInteract(true); }
    }

    setShowVideo(false);
    setPreview(false);
    setRec(false);
    setShowVideo2(false);

  }



  // Mock fetchVideoAsBlob function
  const fetchVideoAsBlob = (url: any) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .catch(error => {
        console.error('Error fetching the video:', error);
        return null;
      });
  };

  const fetchVideoMetadata = async (url: any) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      if (contentLength) {
        return parseInt(contentLength, 10);
      }
      return 0; // Return 0 if the size couldn't be determined
    } catch (error) {
      console.error('Error fetching video metadata:', error);
      return 0;
    }
  };

  const [loading, setLoading] = useState(false);
  const maxBlobSize = 50 * 1024 * 1024; // 50MB limit for example

  const Save = useCallback(async () => {

    let Durationxxx;
    if (ShowVideo2) {
      Durationxxx = EndTimestamp - currentTimestamp2;
      setDuration2(Durationxxx);
    } else {
      Durationxxx = EndTimestamp - currentTimestamp;
      setDuration(Durationxxx);
    }

    if (ShowVideo2) {
      setinteractContentvideo2(VideoBlob2);
      setinteractContenttype2(1);
      setadjustinteract2(true);
      close(true);
    } else {
      setinteractContentvideo(VideoBlob);
      setinteractContenttype(1);
      setadjustinteract1(true);
      close(true);
    }


  }, [
    RecordedBlob,
    ShowVideo2,
    VideoUrl,
    currentTimestamp,
    currentTimestamp2,
    EndTimestamp,
    setDuration,
    setDuration2,
    setinteractContentvideo,
    setinteractContentvideo2,
    setinteractContenttype,
    setinteractContenttype2,
    setadjustinteract1,
    setadjustinteract2,
    close,
    VideoBlob,
    VideoBlob2
  ]);


  const { PaperStyleLight, PaperStyleDark } = useSelector(
    (state: RootStateOrAny) => ({
      ...state.PaperReducerLightnDark,
    })
  );



  const videoRef = useRef(null);







  useEffect(() => {
    var starttime = 0;
    if (ShowVideo2) {
      starttime = currentTimestamp2;
    } else {
      starttime = currentTimestamp;
    }


    const video = videoPlayerRefx.current;
    let isPlaying = false;

    if (video) {
      const handlePlay = () => {
        isPlaying = true;
      };

      const handleTimeUpdate = () => {
        if (isPlaying && (video.currentTime < starttime || video.currentTime > EndTimestamp)) {

          video.currentTime = starttime;
          video.pause();
          isPlaying = false;
        }
      };

      const handleSeek = () => {
        if (video.currentTime < starttime || video.currentTime > EndTimestamp) {
          video.currentTime = starttime;
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('seeked', handleSeek);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('seeked', handleSeek);
      };
    }
  }, [currentTimestamp, currentTimestamp2, EndTimestamp, ShowVideo2, Preview, rec, recordedVideoUrl]);

  ////**     < VideoFFmpeg VideoUrl={RecordedBlob} />*////
  return (
    <>

      <div>
        <video ref={videoRef} style={{ display: 'none' }} />
        <canvas ref={canvasRef} style={{ position: 'fixed', top: '-400000000vh', zIndex: 0, }} />
        {vidBackUpURL && <img src={vidBackUpURL} style={{ width: matchMobile ? '100%' : '30%', height: 'auto', position: 'fixed', top: '0vh', zIndex: 0, display: 'none' }} alt="Captured frame" />} {/* Display the captured image */}
      </div>
      <Grid xs={12} style={{
        display: ShowVideo ? 'block' : 'none', position: 'fixed', top: '0vh', height: '100vh',
        backgroundImage: darkmodeReducer ? PaperStyleDark : PaperStyleLight,
        width: '100%', margin: 'auto', textAlign: 'center', backgroundColor: '#00ccff'
      }} >





        <video
          ref={videoPlayerRef}
          src={VideoUrl}
          controls
          playsInline
          autoPlay
          style={{
            width: matchMobile ? '100%' : '50%',
            height: matchMobile ? '40%' : 'auto',
            margin: 'auto',
            textAlign: 'center',
            display: Preview ? 'none' : 'block'
          }}
        ></video>


        {recordedVideoUrl && rec ?
          <video ref={videoPlayerRefx} src={recordedVideoUrl} controls playsInline autoPlay style={{
            width: matchMobile ? '100%' : '50%', height: matchMobile ? '40%' : 'auto', margin: 'auto', textAlign: 'center', display: Preview ? 'block' : 'none'

          }}></video> : null}






        {Preview ? <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif', color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item xs={3}
            sm={1}

            onClick={() => {
              ////setRec(false);
              /////setRecordedVideoUrl(null);
              if (videoPlayerRefx.current) {
                videoPlayerRefx.current.pause();
              }
              setPreview(false);
            }}
            style={{
              border: darkmodeReducer ? '2px solid white' : '2px solid black',
              cursor: 'pointer',
              height: '15vh', borderRadius: '8px', display: pop ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            EDIT
          </Grid>


          <Grid item onClick={() => {
            if (matchMobile) { }
            else {
              if (videoPlayerRefx.current) {
                videoPlayerRefx.current.pause();
              }
            }

            Save();
          }} xs={5}
            sm={3}
            style={{
              cursor: 'pointer',
              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
              display: pop ? 'none' : 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '24px',
            }}>
            SAVE
          </Grid>
        </Grid> : <Grid item xs={12} style={{
          bottom: '-7vh', position: 'relative', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', fontFamily: 'Helvetica, Arial, sans-serif',
          color: darkmodeReducer ? "#ffffff" : '#000000',
        }}>
          <Grid item

            xs={4}
            sm={2}

            onClick={() => {
              if (processing) { } else {
                updateCurrentTimestamp();
              }

            }}
            style={{
              cursor: processing ? 'default' : 'pointer',
              opacity: processing ? 0.25 : 1,
              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black',

              borderRadius: '8px', display: pop ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',

            }}>
            START
          </Grid>


          {processing ? <Grid className="blinking" item xs={2} style={{
            height: '15vh', border: '0px solid white', borderRadius: '8px',
            display: pop ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', visibility: 'visible'
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
                color: 'red'

              }}
            />
          </Grid> :
            <Grid item xs={4}
              sm={2}

              onClick={() => {
                if (videoPlayerRef.current) {
                  videoPlayerRef.current.pause();
                }
                setPreview(true);
              }} style={{
                cursor: 'pointer',
                height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
                display: pop ? 'none' : 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                visibility: recordedVideoUrl && rec ? 'visible' : 'hidden'
              }}>
              PREVIEW
            </Grid>}
          <Grid item onClick={() => {
            if (hideend) { } else { stopRecording(); }
          }} xs={4}
            sm={2}
            style={{
              cursor: processing ? hideend ? 'default' : 'pointer' : 'default',
              opacity: processing ? hideend ? 0.25 : 1 : 0.25,
              height: '15vh', border: darkmodeReducer ? '2px solid white' : '2px solid black', borderRadius: '8px',
              display: pop ? 'none' : 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '24px',
            }}>
            END
          </Grid>
        </Grid>}
      </Grid >











      <Grid
        item
        xs={12}
        style={{
          margin: "auto",
          textAlign: "right",
          left: '5px',
          height: "20px",
          position: 'fixed',
          top: '3vh',
          right: matchMobile ? '45vw' : '26vw',
          display: ShowVideo ? 'block' : 'none',
        }}
      >
        <CloseIcon
          onClick={() => {
            if (videoPlayerRefx.current) {
              videoPlayerRefx.current.pause();
            }
            close(false);
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
              ? `5vh`
              : `2.5vw`,

          }}
        />
      </Grid>






    </>
  );
}

export const VideoEditor = React.memo(VideoEditorx)