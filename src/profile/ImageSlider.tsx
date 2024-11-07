import React, { useState, useRef, useEffect } from 'react';
import './GptCss.css';
import { useSelector } from 'react-redux';
import { matchMobile } from '../DetectDevice';

interface ImageSliderProps {
    RandomColor: string;
    FeedType: number
    setFeedType: any;
    Explainx: any;
    callPaginationx: any;
    ActualpostDataAll: any

}




const ImageSlider: React.FC<ImageSliderProps> = ({ RandomColor, FeedType, setFeedType, Explainx, callPaginationx, ActualpostDataAll }) => {


    const { REACT_APP_CLOUNDFRONT } = process.env;

    interface RootStateReducerImage {
        UserdataReducer: {
            billboard1: string;
            memeberPageid: number;
            id: number;
            MemberProfileData: any
        };
    }

    const {
        billboard1, memeberPageid, id, MemberProfileData
    } = useSelector((state: RootStateReducerImage) => ({
        ...state.UserdataReducer,
    }));


    const idReducer = id;

    const MemberProfileDataReducer = MemberProfileData;



    const images = [
        `${REACT_APP_CLOUNDFRONT}lisa-blackpink-v0-vat3v3pubew91.webp`,
        `${REACT_APP_CLOUNDFRONT}elon-musk-collecting-signatures-to-stop-ai-development-v0-5clnkr98nisa1.webp`,
        `${REACT_APP_CLOUNDFRONT}yj1odjcejc451.jpg`,
        `${REACT_APP_CLOUNDFRONT}2f61783767acb1d7823de5891ac01211.jpg`,
        `${REACT_APP_CLOUNDFRONT}0b5b23f942c2a6fa3cd88a77c5666bc2.jpg`,
    ];

    const truncatedText = typeof MemberProfileDataReducer.username === "string"
        ? (MemberProfileDataReducer.username.length > 8
            ? MemberProfileDataReducer.username.slice(0, 8) + "..."
            : MemberProfileDataReducer.username)
        : '';


    const textArray = memeberPageid ?


        memeberPageid === idReducer ?
            ['My Posts', 'Friends', 'Interests', 'Gallery', 'Playlist',]
            :
            [`${truncatedText}`, 'Friends', 'Interests', 'Gallery', 'Playlist',]

        : ['Recent', 'Friends', 'Top', 'Worst', 'Random'];

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const [activeIndex2, setActiveIndex2] = useState<number>(0);

    const refs = useRef<(HTMLDivElement | null)[]>([]);


    const [imagedatapost, setimagedatapost] = useState('');

    const [imagedatapost2, setimagedatapost2] = useState('');


    const [Zoom1, setZoom1] = useState(false);
    const [Zoom2, setZoom2] = useState(false);
    const [Zoom3, setZoom3] = useState(false);
    const [Zoom3x, setZoom3x] = useState(false);
    const [Zoom4, setZoom4] = useState(false);
    const [Zoom5, setZoom5] = useState(false);



    useEffect(() => {

        setimagedatapost('');
        setimagedatapost2('');

    }, [memeberPageid])



    useEffect(() => {

        ///setActiveIndex(FeedType)

        if (ActualpostDataAll && ActualpostDataAll.length > 0) {
            // Generate a random number between 0 and ActualpostDataAll.length - 1
            const randomIndex = Math.floor(Math.random() * ActualpostDataAll.length);

            // Set the data with the randomly selected item
            if (FeedType === 0) {
                setimagedatapost(ActualpostDataAll[randomIndex].item2);
            }

            if (FeedType === 1) {
                setimagedatapost2(ActualpostDataAll[randomIndex].item2);
            }


        }



    }, [FeedType, ActualpostDataAll])

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



    function hexToRgb(hex: any) {
        hex = hex.replace('#', '');
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return [r, g, b];
    }

    function rgbToHex(r: any, g: any, b: any) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    function blendColors(color1: any, color2: any) {
        var rgb1 = hexToRgb(color1);
        var rgb2 = hexToRgb(color2);
        var blendedRgb = [
            Math.round((rgb1[0] + rgb2[0]) / 2),
            Math.round((rgb1[1] + rgb2[1]) / 2),
            Math.round((rgb1[2] + rgb2[2]) / 2)
        ];
        return rgbToHex(blendedRgb[0], blendedRgb[1], blendedRgb[2]);
    }




    var color1 = RandomColor;
    var color2 = colorReducer;
    var blendedColor = blendColors(color1, color2);



    const handleImageClick = (index: number) => {

        console.log(`Image ${index + 1} clicked again`);
        setActiveIndex(index);



        const imageContainer = refs.current[index];
        if (imageContainer) {
            const parent = imageContainer.parentElement;
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const childRect = imageContainer.getBoundingClientRect();
                const offset = childRect.left - parentRect.left - (parentRect.width / 2) + (childRect.width / 2);
                parent.scrollTo({
                    left: parent.scrollLeft + offset,
                    behavior: 'smooth'
                });
            }
        }






    };

    return (
        <div className={matchMobile ? "parent-containerx" : "parent-container"}>
            <div className="image-slider">
                {images.map((image, index) => (
                    <div

                        onMouseEnter={(e) => {

                            if (index === 0) {

                                setZoom1(true);
                            }
                            else if (index === 1) {
                                setZoom2(true);

                            }
                            else if (index === 2) {
                                setZoom3(true);

                            }
                            else if (index === 3) {
                                setZoom4(true);

                            }
                            else {

                                setZoom5(true);
                            }

                        }}

                        onMouseLeave={(e) => {


                            if (index === 0) {

                                setZoom1(false);
                            }
                            else if (index === 1) {
                                setZoom2(false);

                            }
                            else if (index === 2) {
                                setZoom3(false);

                            }
                            else if (index === 3) {
                                setZoom4(false);

                            }
                            else {

                                setZoom5(false);
                            }

                        }
                        }


                        key={index}
                        className={matchMobile ? "image-containerx" : "image-container"}
                        onClick={() => {


                            if (index === 0) {

                                handleImageClick(index)
                            }
                        }}
                        ref={(el) => (refs.current[index] = el)}
                        style={{
                            // borderColor: activeIndex === index ? blendedColor : 'transparent',
                            opacity: index === 0 ? 1 : '0.7',

                        }}>


                        <img


                            src={

                                imagedatapost && ActualpostDataAll.length > 0 && index === 0 ?
                                    imagedatapost === '' ? `${REACT_APP_CLOUNDFRONT}${imagedatapost2}` :
                                        `${REACT_APP_CLOUNDFRONT}${imagedatapost}`
                                    :

                                    image}


                            alt={`Slide ${index + 1}`} className="image"
                            style={{
                                transform:

                                    index === 0 ?

                                        matchMobile ? Zoom1 ? "scale(1.16)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)' :
                                            Zoom1 ? "scale(1.18)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)'

                                        :
                                        index === 1 ?

                                            matchMobile ? Zoom2 ? "scale(1.16)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)' :
                                                Zoom2 ? "scale(1.18)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)'

                                            :

                                            index === 2 ?

                                                matchMobile ? Zoom3 ? "scale(1.16)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)' :
                                                    Zoom3 ? "scale(1.18)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)'

                                                :
                                                index === 3 ?

                                                    matchMobile ? Zoom4 ? "scale(1.16)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)' :
                                                        Zoom4 ? "scale(1.18)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)'

                                                    :

                                                    matchMobile ? Zoom5 ? "scale(1.16)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)' :
                                                        Zoom5 ? "scale(1.18)" : activeIndex === index ? 'scale(1)' : 'scale(0.8)'






                                ,


                                transition: "transform 0.1s",




                                width: matchMobile ? '120px' : '190px',
                                height: matchMobile ? '120px' : '190px'

                            }} />

                        <div className={matchMobile ? "overlay-textx" : "overlay-text"} style={{
                            fontSize: activeIndex === index ?
                                matchMobile ? '1rem' : '1.4rem' : matchMobile ? '0.76rem' : '0.92rem',
                            marginLeft: matchMobile ? '0px' : '-0.3vw',

                        }}>

                            <span style={{
                                color: '#ffffff',
                                fontWeight: 'bolder',
                                textShadow: '2px 1px 8px rgba(0, 0, 0, 1)',
                            }}>   {textArray[index]} </span>




                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default React.memo(ImageSlider);
