import React, { memo, useEffect, useRef, useState } from 'react';
import './GptCss.css';
import { setTimeout } from 'timers';
import { matchMobile } from '../DetectDevice';

interface VideoComponentProps {
    src: string;
    inView: boolean;
    setshow: any;
    videoRef: any;
    show: boolean;
    hidePrevVid: boolean;
    InteractTimerxxhyx: any;
    xl: boolean;
    setxl: any;
    sethidePrevVid: any;
    postty: number;
    videoImRef: any;
    itemcroptype: any;
    index: any

}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, inView, setshow, videoRef, show, hidePrevVid,
    InteractTimerxxhyx, xl, setxl, sethidePrevVid, postty, videoImRef, itemcroptype, index }) => {

    const { REACT_APP_CLOUNDFRONT } = process.env;

    const isAppleDevice = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);


    const [xl2, setxl2] = useState(false);


    const clik = () => {


        if (matchMobile) {

            if (xl) {

                setxl(false);


                setxl2(false);

                setTimeout(() => {

                    sethidePrevVid(true)
                }, 1500)

            }
            else {
                if (InteractTimerxxhyx.current) {
                    clearTimeout(InteractTimerxxhyx.current);
                }

                setxl(true);


            }

        }

        else {
            if (xl) {

                setxl(false);

                setTimeout(() => {

                    sethidePrevVid(true)
                }, 1500)

            }
            else {
                if (InteractTimerxxhyx.current) {
                    clearTimeout(InteractTimerxxhyx.current);
                }

                setxl(true);
            }

        }
    }

    return (


        <>

            <div

                onClick={() => {


                    setxl(false);

                    sethidePrevVid(true)
                }}

                style={{
                    cursor: 'pointer',
                    width: matchMobile ? '85%' : '90%',
                    height: '92%',
                    backgroundColor: '',
                    position: 'fixed',
                    top: '0vh',
                    zIndex: 200,
                    display: hidePrevVid ? 'none' : 'block'
                }}>



            </div >

            <div className="video-container" style={{
                visibility: hidePrevVid ? 'hidden' : 'visible',




                left: xl ? matchMobile ? '15% ' : '20% ' :
                    matchMobile ? '35.2% ' : '40% ',


                bottom: xl ? matchMobile ? '3% ' : '10% ' :
                    matchMobile ? itemcroptype[index] === 1 ? '30% ' : '18%' :
                        itemcroptype[index] === 2 ? '30% ' : '16%'


            }}>

                {postty === 1 ?


                    matchMobile ? (



                        xl ? <video
                            onClick={() => {
                                clik();
                            }

                            }
                            ref={videoRef}
                            autoPlay

                            playsInline
                            loop

                            className={"circular-video2x"}


                        >
                            <source
                                src={`${REACT_APP_CLOUNDFRONT}videos/${src}`}
                            />
                            Your browser does not support the video tag.
                        </video> :

                            xl2 ?
                                <video
                                    onClick={() => {
                                        clik();
                                    }

                                    }
                                    ref={videoRef}
                                    autoPlay

                                    playsInline
                                    loop

                                    className={"circular-video2"}


                                >
                                    <source
                                        src={`${REACT_APP_CLOUNDFRONT}videos/${src}`}
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                : <video
                                    onClick={() => {
                                        clik();
                                    }

                                    }
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop

                                    className={"circular-video2"}


                                >
                                    <source
                                        src={`${REACT_APP_CLOUNDFRONT}videos/${src}`}
                                    />
                                    Your browser does not support the video tag.
                                </video>
                    ) : (

                        xl ? <video

                            style={{ cursor: 'pointer' }}
                            onClick={
                                () => {
                                    clik();
                                }
                            }
                            ref={videoRef}
                            autoPlay

                            playsInline
                            loop
                            className={"circular-videox"}

                        >
                            <source
                                src={`${REACT_APP_CLOUNDFRONT}videos/${src}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video > :
                            <video

                                style={{ cursor: 'pointer' }}
                                onClick={
                                    () => {
                                        clik();
                                    }
                                }
                                ref={videoRef}
                                autoPlay
                                muted
                                playsInline
                                loop
                                className={"circular-video"}

                            >
                                <source
                                    src={`${REACT_APP_CLOUNDFRONT}videos/${src}`}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video >
                    )
                    :

                    matchMobile ?

                        <img

                            ref={videoImRef}
                            onClick={
                                () => {
                                    clik();
                                }
                            }
                            src={`${REACT_APP_CLOUNDFRONT}${src}`}

                            // Assuming the images have .jpg extension
                            alt="placeholder"
                            className={xl ? "circular-video2x" : "circular-video2"}
                            style={{ cursor: 'pointer' }}
                        />
                        :

                        <img
                            ref={videoImRef}
                            onClick={
                                () => {
                                    clik();
                                }
                            }

                            src={`${REACT_APP_CLOUNDFRONT}${src}`}

                            // Assuming the images have .jpg extension
                            alt="placeholder"
                            className={xl ? "circular-videox" : "circular-video"}
                            style={{ cursor: 'pointer' }}
                        />

                }


            </div >

        </>
    );
};

export default memo(VideoComponent);
