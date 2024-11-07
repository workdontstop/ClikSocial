import React, { useEffect, useState, useRef, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { matchMobile } from "../DetectDevice";

function PostExplainx({
    post,
    postDivRef,
    pey,
    minimise,
    setMaximisefromcanvas,
    setminimiseSpecificScroll,
    setminimise,
    setHideAudioicon,
    HideAudioicon,
    playXAudio,
    setplayXAudio,
    audionotify,
    setaudionotify,

    imageActive,
    setImageActive,
    PlayClik
}: any): JSX.Element {

    const { REACT_APP_CLOUNDFRONT } = process.env;

    const [images, setImages] = useState<string[]>([]);
    const [texts, setTexts] = useState<string[]>([]);

    const [AllowAudio, setAllowAudio] = useState<boolean>(false);

    const [currentImage, setCurrentImage] = useState<number>(0);
    const [currentImageView, setCurrentImageView] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<string>("");
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const synthRef = useRef<SpeechSynthesisUtterance | null>(null); // Ref for speech synthesis

    // Sanitize steps from post
    const sanitizeSteps = useCallback((steps: string[]) => {
        return steps.map((step) => step.replace(/\*/g, ""));
    }, []);

    useEffect(() => {
        const updatedImages = [post.x1, post.x2, post.x3, post.x4, post.x5, post.x6];
        const updatedTexts = [post.xt1, post.xt2, post.xt3, post.xt4, post.xt5, post.xt6];
        setImages(updatedImages);
        setTexts(sanitizeSteps(updatedTexts));
        setCurrentImage(0);
    }, [post, sanitizeSteps]);
    useEffect(() => {
        if (imageActive) {
            // Ensure current text is valid and not undefined
            const fullText = texts[currentImageView] || "";
            let index = 0;

            // Clear the displayed text at the start
            setDisplayedText("");

            // Only proceed if there is text to display
            if (fullText.length > 0) {
                const typingInterval = setInterval(() => {
                    // Directly set the substring of the fullText up to the current index
                    setDisplayedText(fullText.substring(0, index + 1));

                    index += 1;

                    // Stop the interval when the full text is fully displayed
                    if (index >= fullText.length) {
                        clearInterval(typingInterval);
                    }
                }, 50);

                // Cleanup the interval on component unmount or when effect dependencies change
                return () => {
                    clearInterval(typingInterval);
                };
            }
        }
    }, [currentImageView, texts, imageActive]);




    const [hid, sethid] = useState(false);

    // Handle automatic scrolling and looping back
    useEffect(() => {
        if (!imageActive) {
            autoPlayRef.current = setInterval(() => {
                if (currentImage === 5) {
                    // Stop the interval when the last image is reached
                    if (autoPlayRef.current) {
                        clearInterval(autoPlayRef.current);
                    }
                    // Loop back to the first image after a short delay
                    setTimeout(() => {
                        setCurrentImage(0);
                        setCurrentImageView(0);
                        setImageActive(true);
                    }, 1200);

                    // Stop the audio when the loop is completed
                    setTimeout(() => {
                        setplayXAudio(false);
                    }, 2000);

                } else {
                    setCurrentImage((prev) => (prev + 1));
                    setCurrentImageView((prev) => (prev + 1));
                }
            }, 3500);
        } else if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [imageActive, images.length, currentImage]);

    const wa = useRef<ReturnType<typeof setTimeout> | null>(null);
    const waxc = useRef<ReturnType<typeof setTimeout> | null>(null);
    const wax = useRef<ReturnType<typeof setTimeout> | null>(null);
    const waxk = useRef<ReturnType<typeof setTimeout> | null>(null);
    const wa22 = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
        if (PlayClik) {
            handleImageClick(0);
        }
    }, [PlayClik])

    const handleImageClick = (index: number) => {
        if (minimise) {

            setminimiseSpecificScroll(true);
            setminimise(false);
            if (wa.current) {
                clearTimeout(wa.current);
            }
            wa.current = setTimeout(() => {
                postDivRef.current[pey].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 1000);

        } else {
            if (!imageActive) {
                setCurrentImage(0);
                setImageActive(true);
                setAllowAudio(true);
                setplayXAudio(true);
            } else {
                setAllowAudio(true);
                setaudionotify(true);
                if (waxk.current) {
                    clearTimeout(waxk.current);
                }
                waxk.current = setTimeout(() => {
                    setaudionotify(false);
                }, 7500);
                setplayXAudio(!playXAudio);
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setTimeout(() => {
                            setCurrentImageView(index);
                        }, 500);
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this threshold to determine when the image is considered in view
            }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            imageRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [imageActive, post]);

    useEffect(() => {
        if (AllowAudio) {

            const speakText = async () => {
                // Cancel any ongoing speech
                window.speechSynthesis.cancel();

                if (playXAudio && imageActive) {
                    const textToSpeak = texts[currentImageView];
                    if (textToSpeak && "speechSynthesis" in window) {

                        const splitText = (text: string, maxLength: number) => {
                            const regex = new RegExp(`.{1,${maxLength}}(\\s|$)`, 'g');
                            return text.match(regex) || [];
                        };

                        const chunks = splitText(textToSpeak, 220);

                        const voices = window.speechSynthesis.getVoices();
                        if (!voices.length) {
                            console.warn("No voices available, speech synthesis might not work as expected.");
                            return;
                        }

                        // Try to find a female voice first
                        const femaleVoice = voices.find(
                            (voice) => voice.lang === "en-GB" && voice.name.includes("Female")
                        );



                        // Default to any en-GB voice if no specific male or female voice is found
                        const selectedVoice = femaleVoice || voices.find((voice) => voice.lang === "en-AU");

                        if (!selectedVoice) {
                            console.warn("No en-GB voice found. Using default voice.");
                        }

                        const speakChunk = (chunk: string) => {
                            return new Promise<void>((resolve) => {
                                const utterance = new SpeechSynthesisUtterance(chunk);
                                utterance.rate = 1; // Set the speech rate to make it last longer
                                utterance.pitch = 1;
                                utterance.volume = 1;
                                utterance.lang = "en-AU";

                                if (selectedVoice) {
                                    utterance.voice = selectedVoice;
                                }

                                utterance.onend = () => resolve();
                                window.speechSynthesis.speak(utterance);
                            });
                        };

                        const speakAllChunks = async () => {
                            for (const chunk of chunks) {
                                await speakChunk(chunk);
                            }

                            // Move to the next image after speech ends and scroll to it
                            setCurrentImageView((prev) => {
                                const nextIndex = prev + 1;
                                if (nextIndex >= texts.length) {
                                    setplayXAudio(false); // Stop audio after the last image
                                    return 0; // Loop back to the first image
                                }
                                return nextIndex;
                            });

                            // Scroll to the next image
                            if (imageRefs.current[currentImageView + 1]) {
                                imageRefs.current[currentImageView + 1]!.scrollIntoView({ behavior: 'smooth' });
                            }
                        };

                        speakAllChunks();
                    }
                } else {
                    if (synthRef.current) {
                        window.speechSynthesis.cancel(); // Stop speaking when playXAudio is false
                    }
                }
            };

            const loadVoicesAndSpeak = () => {
                const voices = window.speechSynthesis.getVoices();
                if (voices.length > 0) {
                    speakText();
                } else {
                    window.speechSynthesis.onvoiceschanged = () => {
                        speakText();
                    };
                }
            };

            loadVoicesAndSpeak();

            return () => {
                window.speechSynthesis.cancel(); // Stop any ongoing speech
                window.speechSynthesis.onvoiceschanged = null;
            };

        }
    }, [playXAudio, currentImageView, texts, imageActive, AllowAudio]);



    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
            style={{
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                overflowY: "hidden",
                width: "100%",
                height: matchMobile ? "100%" : "102%",
                position: 'absolute',
                top: '0vh',
                zIndex: 10,
                visibility: hid ? 'hidden' : 'visible',
                borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                    minimise ? '1.5%' : '2%'
            }}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    data-index={index}
                    ref={(el) => (imageRefs.current[index] = el)}
                    style={{
                        minWidth: "100%",
                        height: "100%",
                        scrollSnapAlign: "start",
                        position: "relative",
                        backgroundColor: "#000",
                        transform: imageActive ? '' : `translateX(-${currentImage * 100}%)`,
                        transition: "transform 0.5s ease-in-out",
                        cursor: 'pointer',
                        borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                            minimise ? '1.5%' : '2%'
                    }}
                    onClick={() => handleImageClick(index)}
                >
                    <img
                        src={`${REACT_APP_CLOUNDFRONT}${src}`}
                        alt={`Image ${src}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: matchMobile ? minimise ? '3%' : '0px' :
                                minimise ? '1.5%' : '2%'

                        }}
                    />
                    {imageActive && currentImageView === index && (
                        <div
                            style={{
                                position: "absolute",
                                top: matchMobile ? "" : "10px",
                                bottom: matchMobile ? "5px" : "",
                                left: "50%",
                                transform: "translateX(-50%)",
                                transition: "transform 0.1s",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                textAlign: "center",
                                width: matchMobile ? "90%" : "80%",
                                height: 'auto',
                                fontSize: matchMobile ? "0.8rem" : "1.1rem",
                                fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                        >
                            {displayedText}
                        </div>
                    )}
                </div>
            ))}
        </Grid>
    );
}

export const PostExplain = React.memo(PostExplainx);
