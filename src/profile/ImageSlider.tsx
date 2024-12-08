import React, { useState, useRef, useEffect, useCallback } from 'react';
import './GptCss.css';
import { matchMobile } from '../DetectDevice';
import { useSelector, useDispatch } from "react-redux";
import { UpdateLoader } from ".././GlobalActions";
import Axios from "axios";

interface ImageSliderProps {
    RandomColor: string;
    FeedType: number;
    setFeedType: any;
    Explainx: any;
    callPaginationx: any;
    ActualpostDataAll: any;
    CallFirstFeed: any;
    tyy: number;
    setverticalIndex: any;
    setshowVerticalFeeds: any;
    ActualPostDataAllxx: any;
    Clicked1: any;
    setClicked1: any;
    Clicked2: any;
    setClicked2: any;
    allowVerticalDatapush: any;
    ScrollReactRouter: any;
    active1: any;
    setactive1: any;
    active2: any;
    setactive2: any;
    callPagination: any;
    ClickItVertical: any;
    ExplainItVertical: any;
    setExplainItVertical: any;
    setClickItVertical: any;
    minimise: any;


}




const ImageSlider: React.FC<ImageSliderProps> = ({
    RandomColor,
    FeedType,
    setFeedType,
    Explainx,
    callPaginationx,
    ActualpostDataAll,
    CallFirstFeed,
    tyy,
    setverticalIndex,
    setshowVerticalFeeds,
    ActualPostDataAllxx,
    Clicked1,
    setClicked1,
    Clicked2,
    setClicked2,
    allowVerticalDatapush,
    ScrollReactRouter,
    active1,
    setactive1,
    active2,
    setactive2,
    callPagination,
    ClickItVertical,
    ExplainItVertical,
    setExplainItVertical,
    setClickItVertical,
    minimise
}) => {



    const { REACT_APP_SUPERSTARZ_URL, REACT_APP_CLOUNDFRONT, REACT_APP_APPX_STATE } = process.env;



    const dispatch = useDispatch();

    ///
    ///
    ///
    /// GET LOGGED USER DATA FROM REDUX STORE
    interface RootStateReducerImage {
        UserdataReducer: {
            id: number;
            image: string;
            username: string;
            quote: string;
            billboard1: string;
            billboard2: string;
            billboardthumb1: string;
            billboardthumb2: string;
            fans: number;
            favorites: number;
            memeberPageid: number;
            MemberProfileData: any;
            billboardstate: number;
            reg: number,
            imageThumb: string;
        };
    }
    const {
        id,
        image,
        username,
        quote,
        billboard1,
        billboard2,
        billboardthumb1,
        billboardthumb2,
        fans,
        favorites,
        memeberPageid,
        MemberProfileData,
        billboardstate,
        reg,
        imageThumb

    } = useSelector((state: RootStateReducerImage) => ({
        ...state.UserdataReducer,
    }));

    const [usernameReducer, setusernameReducer] = useState("");

    const idReducer = id;
    const imageReducerx = image;
    const imageReducerxx = imageThumb;

    const billboard1Reducer = billboard1;
    const billboardstateReducer = billboardstate;
    const billboard2Reducer = billboard2;
    const billboardthumb1Reducer = billboardthumb1;
    const billboardthumb2Reducer = billboardthumb2;
    const memeberPageidReducer = memeberPageid;
    const MemberProfileDataReducer = MemberProfileData;
    const regReducer = reg;


    const [pagenum, setPagenum] = useState(0);
    const [pagelimit] = useState(18);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const [isBackActive, setIsBackActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(false);


    const [mini, setmini] = useState(false);

    useEffect(() => {
        if (minimise) {
            setmini(false);

        } else {

            setmini(true);
        }

    }, [minimise])


    interface RootStateGlobalReducer {
        GlobalReducer: {
            darkmode: boolean;
            MenuData: String;
            Guest: number,

        };
    }
    const { darkmode, MenuData, Guest } = useSelector((state: RootStateGlobalReducer) => ({
        ...state.GlobalReducer,
    }));

    const darkmodeReducer = darkmode;

    const MenuDataReducer = MenuData;

    const GuestReducer = Guest;




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



    const menuTimer62 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const menuTimer6x2 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const menuTimer6xx2 = useRef<ReturnType<typeof setTimeout> | null>(null);


    const menuTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);
    const menuTimer6x = useRef<ReturnType<typeof setTimeout> | null>(null);
    const menuTimer6xx = useRef<ReturnType<typeof setTimeout> | null>(null);



    useEffect(() => {


        if (allowVerticalDatapush || ScrollReactRouter > 0) {
            if (ActualPostDataAllxx.length > 0) {

                if (FeedType === 2 && tyy === 1) {
                    setClicked2(true);

                } else if (FeedType === 1 && tyy === 0 || FeedType === 0 && tyy === 0) {

                    setClicked1(true);
                }
            }
        }
    }, [ActualpostDataAll, allowVerticalDatapush, ScrollReactRouter, ActualPostDataAllxx])




    useEffect(() => {
        // Dynamically check whether Next and Back should be active
        setIsBackActive(pagenum > 0);
        setIsNextActive(ActualpostDataAll.length === pagelimit);


    }, [pagenum, ActualpostDataAll]);

    const generateImages = (): string[] => {
        if (!ActualpostDataAll || ActualpostDataAll.length === 0) return [];

        const baseImages = ActualpostDataAll.map(
            (item: any) => `${REACT_APP_CLOUNDFRONT}${item.item2}`
        );

        baseImages.unshift('https://via.placeholder.com/150?text=Prev'); // Dummy Prev image
        baseImages.push('https://via.placeholder.com/150?text=Next'); // Dummy Next image

        return baseImages;
    };

    const images = generateImages();

    const handlePrev = useCallback(() => {
        if (isBackActive) {

            dispatch(UpdateLoader(true));
            //alert('kk');


            if (menuTimer6xx2.current) {
                clearTimeout(menuTimer6xx2.current);
            }

            menuTimer6xx2.current = setTimeout(() => {


                callfeeds(0);

                //alert('kjh')


            }, 2500)


        }
    }, [isBackActive]);




    const callfeeds = useCallback(
        (type: number) => {

            var xx = 0

            if (ActualpostDataAll.length > 0) {

                xx = ActualpostDataAll[ActualpostDataAll.length - 3].id;

            }

            var cboy = {
                id: idReducer,
                id2: idReducer,
                id3: memeberPageidReducer,
                postPageLimit: type === 0 ? 0 : xx,
            };


            dispatch(UpdateLoader(true));



            var tt = "";
            var tt2 = "";

            if (memeberPageidReducer === 0) {

                if (tyy === 1) {

                    // alert('hh');

                    tt = "feeds_chronologicalExplain";

                }
                else if (FeedType === 1 || FeedType === 0) {

                    tt = "feeds_chronological";

                }
                else {

                }





            } else {



                if (FeedType === 2) {

                    // alert('hh');


                    if (memeberPageidReducer === idReducer) {
                        tt = "profileExplain";
                    } else { tt = "profileExplainUser"; }


                }
                else if (FeedType === 1 || FeedType === 0) {


                    tt = "profile";



                }
                else {

                }






            }


            ///alert(historyDataPost.length);



            //setScrollTo(0);





            Axios.post(
                `${REACT_APP_SUPERSTARZ_URL}/${tt}`,
                {
                    values: cboy,
                },
                {
                    withCredentials: true,
                }
            )
                .then((response) => {
                    if (response.data.message === "feeds fetched") {



                        var postdataRep = response.data.payload;



                        if (tyy === 1) {

                            setExplainItVertical(response.data.payload);

                            setClicked2(false);


                        }
                        else {

                            setClickItVertical(response.data.payload);
                            setClicked1(false);
                        }


                        /// var t = response.data.payload;
                        // setPagenum(t[t.length - 3].id)

                        setPagenum(type === 0 ? 0 : 1);
                        dispatch(UpdateLoader(false));







                    } else if (response.data.message === "error in fetching feeds") {
                        dispatch(UpdateLoader(false));

                        ///alert("Ongoing Security Updates, Pls Try Again Later");
                    }
                })
                .catch(function (error) {
                    dispatch(UpdateLoader(false));

                    console.log("Connection malfunction profile outter 2");
                });


        },
        [idReducer, REACT_APP_SUPERSTARZ_URL, memeberPageidReducer, FeedType, ActualpostDataAll]
    );




    const handleNext = useCallback(() => {
        if (isNextActive) {
            dispatch(UpdateLoader(true));
            //alert('kk');


            if (menuTimer6xx.current) {
                clearTimeout(menuTimer6xx.current);
            }

            menuTimer6xx.current = setTimeout(() => {


                callfeeds(1);

                //alert('kjh')


            }, 2500)



        }
    }, [isNextActive]);


    useEffect(() => {

    }, [ClickItVertical]);


    useEffect(() => {

        // Ensure we scroll to the second image (index 1) on data change
        if (scrollContainerRef.current && ActualpostDataAll.length > 0) {
            const scrollElement = scrollContainerRef.current.children[1] as HTMLElement;
            if (scrollElement) {
                scrollContainerRef.current.scrollTo({
                    left: scrollElement.offsetLeft,
                    behavior: 'smooth',
                });
            }
        }
    }, [ActualpostDataAll]);

    const [prevCalled, setPrevCalled] = useState(false);
    const [nextCalled, setNextCalled] = useState(false);

    useEffect(() => {

        // Observe the "Prev" and "Next" images coming into and going out of view
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('data-id');
                if (entry.isIntersecting) {
                    // Element is in view
                    if (id === 'prev' && !prevCalled) {
                        handlePrev();
                        setPrevCalled(true);
                    } else if (id === 'next' && !nextCalled) {
                        handleNext();
                        setNextCalled(true);
                    }
                } else {

                    // Element is out of view, reset the call state
                    if (id === 'prev') {

                        if (menuTimer6xx2.current) {
                            clearTimeout(menuTimer6xx2.current);
                        }

                        if (menuTimer6x2.current) {
                            clearTimeout(menuTimer6x2.current);
                        }
                        menuTimer6x2.current = setTimeout(() => { dispatch(UpdateLoader(false)); }, 2000)

                        setPrevCalled(false);
                    } else if (id === 'next') {

                        if (menuTimer6xx.current) {
                            clearTimeout(menuTimer6xx.current);
                        }

                        if (menuTimer6x.current) {
                            clearTimeout(menuTimer6x.current);
                        }
                        menuTimer6x.current = setTimeout(() => { dispatch(UpdateLoader(false)); }, 2000)
                        setNextCalled(false);
                    }
                }
            });
        };

        const observerOptions = {
            root: scrollContainerRef.current,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const prevElement = document.querySelector('[data-id="prev"]');
        const nextElement = document.querySelector('[data-id="next"]');

        if (prevElement) observer.observe(prevElement);
        if (nextElement) observer.observe(nextElement);

        return () => observer.disconnect();
    }, [handlePrev, handleNext, images]);


    const [activeIndex, setActiveIndex] = useState<number | null>(1);

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={matchMobile ? 'parent-containerx' : 'parent-container'} style={{ width: matchMobile ? '100%' : '80%' }}>
            <div
                ref={scrollContainerRef}
                className="image-slider"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    padding: '16px',
                    gap: '12px',
                }}
            >
                {/* Images */}
                {images.map((src, index) => {
                    const isActive =
                        tyy === 0 ? active1 === index : tyy === 1 ? active2 === index : false;

                    return (

                        <>


                            <div
                                onClick={() => {
                                    setshowVerticalFeeds(true);
                                    if (menuTimer6.current) {
                                        clearTimeout(menuTimer6.current);
                                    }
                                    if (tyy === 1) {
                                        setactive2(index);
                                        setactive1(-1);
                                    } else {
                                        setactive1(index);
                                        setactive2(-1);
                                    }

                                    if (tyy === 0) {
                                        if (!Clicked1) {
                                            CallFirstFeed(ActualpostDataAll, 0);
                                            menuTimer6.current = setTimeout(() => {
                                                ///  alert(index - 1);
                                                setverticalIndex(index - 1);
                                            }, 500);
                                        }
                                        setClicked1(true);
                                        setClicked2(false);
                                    } else if (tyy === 1) {
                                        if (!Clicked2) {
                                            CallFirstFeed(ActualpostDataAll, 0);
                                            menuTimer6.current = setTimeout(() => {
                                                ///  alert(index - 1);
                                                setverticalIndex(index - 1);
                                            }, 500);
                                        }
                                        setClicked2(true);
                                        setClicked1(false);
                                    }

                                    setFeedType(tyy === 1 ? 2 : 1);


                                    if (menuTimer6.current) {
                                        clearTimeout(menuTimer6.current);
                                    }

                                    menuTimer6.current = setTimeout(() => {
                                        ///  alert(index - 1);
                                        setverticalIndex(index - 1);
                                    }, 1000);
                                }}
                                key={index}
                                data-id={src.includes('Prev') ? 'prev' : src.includes('Next') ? 'next' : ''}
                                style={{
                                    flex: '0 0 auto',
                                    scrollSnapAlign: 'center',
                                    margin: '0 8px',
                                    position: 'relative',
                                    width: mini ? matchMobile ? '180px' : '230px' : matchMobile ? '260px' : '330px',
                                    height: mini ? matchMobile ? '225px' : '320px' : matchMobile ? '325px' : '410px',
                                    borderRadius: '12px', // Rounded corners
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    opacity: src.includes('Prev') || src.includes('Next') ? 0 : 1,
                                    background: `url(${src}) center/cover no-repeat`,
                                    boxShadow: isActive
                                        ? `
                            0 -5px 4px ${RandomColor}, /* Top glow */
                            5px 0 4px ${RandomColor}, /* Right glow */
                            0 5px 4px ${colorReducer}, /* Bottom glow */
                            -5px 0 4px ${colorReducer} /* Left glow */
                          `
                                        : 'none', // Apply glow effect only if active
                                }}
                            >
                                {/* Text Beneath the Image */}
                                {!(src.includes('Prev') || src.includes('Next')) && (
                                    <div
                                        style={{
                                            marginTop: '8px',
                                            width: mini ? matchMobile ? '180px' : '230px' : matchMobile ? '260px' : '330px', // Match image width

                                            fontSize: matchMobile ? '0.75rem' : '0.85rem',
                                            fontWeight: 'normal',
                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                            textAlign: 'left', // Ensure text alignment
                                            wordWrap: 'break-word', // Handle long text
                                            position: 'sticky',
                                            paddingLeft: matchMobile ? '2vw' : '0.5vw',
                                            backgroundColor: 'rgb(000,000,000,0.35)'
                                        }}
                                    >


                                        <span
                                            style={{
                                                display: 'inline-block',  // Make the span behave like a block-level element for proper overflow control
                                                width: mini ? matchMobile ? '180px' : '230px' : matchMobile ? '260px' : '330px',// Match the image width
                                                color: '#fffffff',
                                                textShadow: '2px 1px 8px rgba(0, 0, 0, 1)',
                                                fontSize: mini ? matchMobile ? '0.79rem' : '0.89rem' : matchMobile ? '0.85rem' : '0.95rem',
                                                fontWeight: 'normal',
                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                textAlign: 'left', // Ensure text alignment
                                                overflow: 'hidden', // Hide overflowed text
                                                textOverflow: 'ellipsis', // Add ellipsis for long text
                                                whiteSpace: 'nowrap', // Prevent wrapping of text into multiple lines
                                            }}
                                        >
                                            {ActualpostDataAll[index - 1].caption}
                                        </span>




                                    </div>
                                )}

                                {!(src.includes('Prev') || src.includes('Next')) && (
                                    <div
                                        style={{

                                            top: mini ? matchMobile ? '24.8vh' : '31.6vh' : matchMobile ? '38vh' : '42.3vh',

                                            width: matchMobile ? '180px' : '230px', // Match image width

                                            fontSize: matchMobile ? '0.85rem' : '0.85rem',
                                            fontWeight: 'normal',
                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                            textAlign: 'left', // Ensure text alignment
                                            wordWrap: 'break-word', // Handle long text
                                            position: 'sticky',
                                            paddingLeft: matchMobile ? '2vw' : '0.5vw',

                                        }}
                                    >





                                        <img
                                            onClick={() => {



                                            }}


                                            className={darkmodeReducer ? "turpostDarkmini" : "turpostDarkmini"}

                                            src={`${REACT_APP_CLOUNDFRONT}${ActualpostDataAll[index - 1].profile_image}`}
                                            alt="a superstarz post "
                                            style={{
                                                cursor: "pointer",
                                                boxShadow: darkmodeReducer
                                                    ? "0 0 1px #555555"
                                                    : "0 0 3.5px #aaaaaa",
                                                width: matchMobile ? '10vw' : '3vw',
                                                height: "auto",
                                                padding: "0px",
                                                objectFit: "contain",
                                                borderRadius: "50%",
                                                position: "absolute",
                                                zIndex: 2,
                                                display: memeberPageidReducer === 0 ? 'block' : 'none',

                                                left: matchMobile ? '0.5vw' : '0.2vw'
                                            }}
                                        />




                                    </div>
                                )}



                                {!(src.includes('Prev') || src.includes('Next')) && (
                                    <div
                                        style={{

                                            marginTop: mini ? matchMobile ? '23.8vh' : '32.8vh' : matchMobile ? '36.8vh' : '42.8vh',
                                            width: matchMobile ? '180px' : '230px', // Match image width
                                            marginLeft: mini ? matchMobile ? '-4vw' : '-1vw' : matchMobile ? '15vw' : '4.5vw',
                                            fontSize: matchMobile ? '0.76rem' : '0.86rem',
                                            fontWeight: 'normal',
                                            fontFamily: 'Arial, Helvetica, sans-serif',
                                            textAlign: 'right', // Ensure text alignment
                                            wordWrap: 'break-word', // Handle long text
                                            position: 'sticky',
                                            paddingLeft: matchMobile ? '2vw' : '0.5vw',

                                            zIndex: 1,
                                        }}
                                    >






                                        <span
                                            style={{

                                                display: 'block',  // Make the span behave like a block-level element for proper overflow control
                                                width: matchMobile ? '180px' : '230px', // Match the image width
                                                color: '#fffffff',
                                                textShadow: '2px 1px 8px rgba(0, 0, 0, 1)',
                                                fontSize: mini ? matchMobile ? '0.79rem' : '0.85rem' : matchMobile ? '0.84rem' : '0.95rem',
                                                fontWeight: 'normal',
                                                fontFamily: 'Arial, Helvetica, sans-serif',
                                                textAlign: 'right', // Ensure text alignment
                                                overflow: 'hidden', // Hide overflowed text
                                                textOverflow: 'ellipsis', // Add ellipsis for long text
                                                whiteSpace: 'nowrap', // Prevent wrapping of text into multiple lines

                                            }}
                                        >

                                            <span
                                                style={{

                                                    backgroundColor: 'rgb(000,000,000,0.35)',
                                                    borderRadius: '2vh'
                                                }}
                                            >
                                                {ActualpostDataAll[index - 1].username}

                                            </span>
                                        </span>

                                    </div>
                                )}

                            </div >


                        </>
                    );

                })}
            </div>


        </div >

    );
};

export default React.memo(ImageSlider);
