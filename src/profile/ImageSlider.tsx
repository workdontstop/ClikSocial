import React, { useState, useRef, useEffect, useCallback } from 'react';
import './GptCss.css';
import { matchMobile } from '../DetectDevice';
import { useSelector, useDispatch } from "react-redux";
import { UpdateLoader } from ".././GlobalActions";

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
    ScrollReactRouter

}) => {
    const { REACT_APP_CLOUNDFRONT } = process.env;

    interface RootStateReducerImage {
        UserdataReducer: {
            billboard1: string;
            memeberPageid: number;
            id: number;
            MemberProfileData: any;
        };
    }

    const dispatch = useDispatch();

    const { billboard1, memeberPageid, id, MemberProfileData } = useSelector(
        (state: RootStateReducerImage) => ({
            ...state.UserdataReducer,
        })
    );

    const [pagenum, setPagenum] = useState(0);
    const [pagelimit] = useState(18);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const [isBackActive, setIsBackActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(false);

    const menuTimer6 = useRef<ReturnType<typeof setTimeout> | null>(null);


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
            setPagenum((prev) => Math.max(prev - 1, 0));
            console.log('Prev function called');
        }
    }, [isBackActive]);

    const handleNext = useCallback(() => {
        if (isNextActive) {
            setPagenum((prev) => prev + 1);
            console.log('Next function called');
        }
    }, [isNextActive]);

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

    useEffect(() => {
        // Observe the "Prev" and "Next" images coming into view
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-id');
                    if (id === 'prev') {
                        /// dispatch(UpdateLoader(true));

                        handlePrev();
                    } else if (id === 'next') {
                        //// dispatch(UpdateLoader(true));

                        handleNext();
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
                {images.map((src, index) => (
                    <div
                        onClick={() => {





                            if (tyy === 0) {
                                if (Clicked1) {

                                } else {
                                    /// alert('kk');
                                    CallFirstFeed(ActualpostDataAll, 0);
                                }

                                ///clicked is here because when data has been loaded in it cant be loaded gain
                                ///so i prevent load a second time with click then just scroll
                                setClicked1(true);
                                setClicked2(false);

                            } else if (tyy === 1) {

                                if (Clicked2) {

                                } else {
                                    CallFirstFeed(ActualpostDataAll, 0);
                                }


                                setClicked2(true);
                                setClicked1(false);
                            } else {

                            }


                            if (tyy === 1) {

                                setFeedType(2);
                            } else {
                                setFeedType(1);
                            }

                            setshowVerticalFeeds(true);

                            if (menuTimer6.current) {
                                clearTimeout(menuTimer6.current);
                            }
                            setverticalIndex(index - 1);
                            menuTimer6.current = setTimeout(() => {
                                ///  setverticalIndex(index - 1);
                            }, 150);



                        }}
                        key={index}
                        data-id={src.includes('Prev') ? 'prev' : src.includes('Next') ? 'next' : ''}
                        style={{
                            flex: '0 0 auto',
                            scrollSnapAlign: 'center',
                            margin: '0 8px',
                            position: 'relative',
                            width: matchMobile ? '180px' : '230px',
                            height: matchMobile ? '225px' : '320px',
                            borderRadius: '12px', // Rounded corners like Shorts
                            overflow: 'hidden',
                            opacity: src.includes('Prev') ? 0 : src.includes('Next') ? 0 : 1,
                            boxShadow:
                                activeIndex === index
                                    ? '0 4px 12px rgba(0, 0, 0, 0.4)'
                                    : '0 2px 6px rgba(0, 0, 0, 0.2)',
                            cursor: 'pointer',
                            background: `url(${src}) center/cover no-repeat`,
                        }}
                    >
                        {!(src.includes('Prev') || src.includes('Next')) && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '10px',
                                    color: '#fff',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    fontSize: matchMobile ? '0.75rem' : '0.85rem',
                                    fontWeight: 'bold',
                                    maxWidth: '80%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',

                                }}
                            >
                                Caption here
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default React.memo(ImageSlider);
