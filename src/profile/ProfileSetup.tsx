import React, { useRef, useState, useCallback, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Grid, DialogContent, Box } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { UpdateAlertReducer } from ".././GlobalActions";
import { UpdateLoader, UpdateMenuData, Updatepagenum } from ".././GlobalActions";
import { Profile } from "./Profile";

import { UpdateTutorials } from "../GlobalActions";


import { matchPc, matchTablet, matchMobile } from "../DetectDevice";

function ProfileSetupx({
    setPostPageLimit,
    setPostData,
    setshowProfiileData,
    showProfiileData,


    OpenModalForm,
    postData,
    paperPostScrollRef,
    setx,
    setDiscussionImage,
    setCommentPostid,

    setStopBodyScroll,
    setSliderIndexMini,
    zoomClickedIndex,
    setzoomClickedIndex,
    miniProfilexx,
    setminiProfile,
    sliderIndexMini,
    setconnectTemplateGo,
    settypeEmo,
    ScrollTo,
    setshowThisComponenet,
    showThisComponenet,
    setscrollLocation,
    setShowLoader2,
    ShowLoader2,
    StopMini,
    setStopMini,

    clikplay,
    callPagination,
    setShowBigPlay,

    ShowBigPlay,
    callhistoryModal,
    openmodalhistory,
    historyScrollonload,
    setkeypost,
    WebsiteMode,
    setlatestInview,
    postDivRefx,


    setindexRoll,
    postDivRefRoll,



    setcallResponse,
    callResponse,
    ActualData,
    ActualPagenum,

    showData2,
    setuptype,
    showData3,
    showDataTop,
    showData1,

    CallMorePages,
    setupTop,
    PostPageLimit,
    ActualpostDataAll,
    RandomColor,

    sethistoryScrollonload,


    profileDataHold,
    pagePostScroll,

    setminimise,
    minimise,
    setIdReactRouterAsInt,
    ScrollReactRouter,
    setScrollReactRouter,
    PostPagenumPusher,
    setScrollIndexPusher,
    setshowLogButtons,

    snapallow,
    setsnapallow,
    FeedType,

    PCZOOM,
    setPCZOOM,

    postDivRef,
    NavUsed,

    setAutoGo,
    AutoGo,
    localPostId,
    localProfileId,

    latestInview,

    setExtendBill,
    setFeedType,

    ExtendBill,
    HoldFeedType,
    setMobileZoom,
    mobileZoom,
    zoomedModal,
    setZoomedModal,
    mono,
    setmono




}: any) {
    /////////////////////////////////////////////


    const dispatch = useDispatch();

    const sTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [miniProfile, setminiProfilepg] = useState<boolean>(false);




    const Callit = useCallback(() => {

        if (miniProfilexx) {

            setminiProfilepg(false);

            if (sTimer.current) {
                clearTimeout(sTimer.current);
            }

            sTimer.current = setTimeout(() => {
                setminiProfilepg(true);
            }, 2000);
        } else {
            setminiProfilepg(false);

        }

    }, [miniProfilexx])



    useEffect(() => {



        Callit();




    }, [miniProfilexx])

    const [postDatainner, setpostDatainner] = useState<Array<any>>([[]]);
    const [postDatainnerThumb, setpostDatainnerThumb] = useState<Array<any>>([
        [],
    ]);
    const [postDatainnerInteraction1, setpostDatainnerInteraction1] = useState<Array<any>>([[]]);
    const [postDatainnerInteraction2, setpostDatainnerInteraction2] = useState<Array<any>>([[]]);




    ///
    ///
    ///
    ///
    /// INTERFACE/TYPES FOR SCREENHEIGHT AND DARKMODE
    interface RootStateGlobalReducer {
        GlobalReducer: {
            darkmode: boolean;
            screenHeight: number;
            AlertData: "";
            AlertEmojiType: number;
            Guest: number
        };
    }

    ///
    ///
    ///
    /// GET SCREENHEIGHT FROM REDUX STORE
    const { screenHeight, darkmode, AlertData, AlertEmojiType, Guest } = useSelector(
        (state: RootStateGlobalReducer) => ({
            ...state.GlobalReducer,
        })
    );
    const screenHeightReducer = screenHeight;
    const darkmodeReducer = darkmode;
    const AlertDataReducer = AlertData;
    const AlertEmojiTypeReducer = AlertEmojiType;
    const GuestReducer = Guest;


    ///
    ///
    ///
    /// GET LOGGED USER DATA FROM REDUX STORE
    interface RootStateReducerImage {
        UserdataReducer: {
            image: string;
            memeberPageid: number;
            id: number;

        };
    }
    const { image, id, memeberPageid } = useSelector((state: RootStateReducerImage) => ({
        ...state.UserdataReducer,
    }));
    const imageReducer = image;
    const idReducer = id;
    const memeberPageidReducer = memeberPageid;



    const CallResponseUpdate =
        useCallback(() => {

            setshowProfiileData(true);
            responsex(ActualData, ActualPagenum);


        }, [ActualData, ActualPagenum])


    useEffect(() => {
        if (callResponse) {
            setshowProfiileData(true);
            CallResponseUpdate();

        }

    }, [callResponse, ActualData, ActualPagenum])


    const responsex = useCallback(
        (postdataRep: any, postLim: any) => {



            dispatch(Updatepagenum(postLim));


            if (idReducer === GuestReducer) {
                dispatch(UpdateTutorials(4, true));
            }


            postdataRep.forEach((obj: any) => {
                obj.itemheight = "auto";
                obj.itemrealheighthold = "0";
                obj.itemcroptype = "0";
                obj.itemFinalPostHeight = "0";
                obj.itemOriginalPostHeight = "0";
                obj.itemCLICKED = true;
                obj.onLoadDataOnce = false;
                obj.ActiveAutoPlay = true;
                obj.ActiveAutoPost = 0;
                obj.itemInteractGo = false;
                obj.lim = postLim;
            });



            const newArrxt: any = [[...postDatainner]];
            const newArrxt1: any = [[...postDatainnerInteraction1]];
            const newArrxt2: any = [[...postDatainnerInteraction2]];
            const newArrxtThumb: any = [[...postDatainnerThumb]];
            postdataRep.map((obj: any, index: any) => {
                const newArrxtq: any = [];
                const newArrxtqThumb: any = [];
                const newArrxtq1: any = [];
                const newArrxtq2: any = [];
                for (let i = 0; i < postdataRep[index].post_count; i++) {
                    ///////////////////////////////

                    if (i === 0) {
                        newArrxtq[i] = `${postdataRep[index].item1}`;
                        newArrxtqThumb[i] = `${postdataRep[index].thumb1}`;
                        newArrxtq1[i] = `${postdataRep[index].interact1a}`;
                        newArrxtq2[i] = `${postdataRep[index].interact1b}`;
                    } else if (i === 1) {
                        newArrxtq[i] = `${postdataRep[index].item2}`;
                        newArrxtqThumb[i] = `${postdataRep[index].thumb2}`;
                        newArrxtq1[i] = `${postdataRep[index].interact2a}`;
                        newArrxtq2[i] = `${postdataRep[index].interact2b}`;
                    } else if (i === 2) {
                        newArrxtq[i] = `${postdataRep[index].item3}`;
                        newArrxtqThumb[i] = `${postdataRep[index].thumb3}`;
                        newArrxtq1[i] = `${postdataRep[index].interact3a}`;
                        newArrxtq2[i] = `${postdataRep[index].interact3b}`;
                    } else if (i === 3) {
                        newArrxtq[i] = `${postdataRep[index].item4}`;
                        newArrxtqThumb[i] = `${postdataRep[index].thumb4}`;
                    } else if (i === 4) {
                        newArrxtq[i] = `${postdataRep[index].item5}`;
                        newArrxtqThumb[i] = `${postdataRep[index].thumb5}`;
                    } else {
                    }






                    if (i + 1 === postdataRep[index].post_count) {
                        newArrxt[index] = newArrxtq;
                        newArrxtThumb[index] = newArrxtqThumb;

                        newArrxt1[index] = newArrxtq1;
                        newArrxt2[index] = newArrxtq2;

                        setpostDatainner(newArrxt);
                        setpostDatainnerThumb(newArrxtThumb);

                        setpostDatainnerInteraction1(newArrxt1);
                        setpostDatainnerInteraction2(newArrxt2);

                    }
                    ///document.body.focus();
                    /////
                    ///////////////////////////////
                }
            });
            setPostData(postdataRep);

            setshowProfiileData(true);

        }, [idReducer, GuestReducer])




    return (
        <>
            {showProfiileData && ActualData.length > 0 ? (
                <Grid item xs={12} style={{
                    position: "relative", zIndex: 1, padding: "0px"
                }}>
                    <Profile
                        mono={mono}
                        setmono={setmono}


                        ExtendBill={ExtendBill}
                        HoldFeedType={HoldFeedType}
                        setFeedType={setFeedType}
                        setExtendBill={setExtendBill}
                        latestInview={latestInview}
                        localPostId={localPostId}
                        localProfileId={localProfileId}

                        setAutoGo={setAutoGo}
                        AutoGo={AutoGo}

                        postDivRef={postDivRef}

                        NavUsed={NavUsed}

                        PCZOOM={PCZOOM}
                        setPCZOOM={setPCZOOM}


                        FeedType={FeedType}
                        setsnapallow={setsnapallow}
                        snapallow={snapallow}

                        setshowProfiileData={setshowProfiileData}
                        setshowLogButtons={setshowLogButtons}
                        PostPagenumPusher={PostPagenumPusher}
                        setScrollIndexPusher={setScrollIndexPusher}

                        setScrollReactRouter={setScrollReactRouter}
                        ScrollReactRouter={ScrollReactRouter}
                        setIdReactRouterAsInt={setIdReactRouterAsInt}
                        setminimise={setminimise}
                        minimise={minimise}

                        pagePostScroll={pagePostScroll}
                        profileDataHold={profileDataHold}
                        sethistoryScrollonload={sethistoryScrollonload}
                        RandomColor={RandomColor}
                        ActualpostDataAll={ActualpostDataAll}
                        PostPageLimit={PostPageLimit}
                        setPostPageLimit={setPostPageLimit}
                        setupTop={setupTop}
                        showData1={showData1}
                        CallMorePages={CallMorePages}
                        showData3={showData3}
                        showDataTop={showDataTop}
                        showData2={showData2}
                        setuptype={setuptype}
                        setindexRoll={setindexRoll}
                        postDivRefRoll={postDivRefRoll}
                        postDivRefx={postDivRefx}
                        setlatestInview={setlatestInview}
                        WebsiteMode={WebsiteMode}
                        setkeypost={setkeypost}
                        historyScrollonload={historyScrollonload}
                        callhistoryModal={callhistoryModal}
                        openmodalhistory={openmodalhistory}
                        clikplay={clikplay}
                        ShowBigPlay={ShowBigPlay}
                        setShowBigPlay={setShowBigPlay}
                        callPagination={callPagination}
                        postDatainnerInteraction1={postDatainnerInteraction1}
                        postDatainnerInteraction2={postDatainnerInteraction2}
                        StopMini={StopMini}
                        setStopMini={setStopMini}
                        ShowLoader2={ShowLoader2}
                        setShowLoader2={setShowLoader2}
                        setscrollLocation={setscrollLocation}
                        showThisComponenet={showThisComponenet}
                        setshowThisComponenet={setshowThisComponenet}
                        ScrollTo={ScrollTo}
                        settypeEmo={settypeEmo}
                        setconnectTemplateGo={setconnectTemplateGo}
                        setminiProfile={setminiProfile}
                        miniProfile={miniProfile}
                        sliderIndexMini={sliderIndexMini}
                        setSliderIndexMini={setSliderIndexMini}
                        zoomClickedIndex={zoomClickedIndex}
                        setzoomClickedIndex={setzoomClickedIndex}
                        setStopBodyScroll={setStopBodyScroll}
                        setCommentPostid={setCommentPostid}
                        setDiscussionImage={setDiscussionImage}
                        setx={setx}
                        showProfiileData={showProfiileData}
                        OpenModalForm={OpenModalForm}
                        postData={postData}
                        postDatainner={postDatainner}
                        postDatainnerThumb={postDatainnerThumb}
                        paperPostScrollRef={paperPostScrollRef}
                    /></Grid>
            ) : null}


        </>
    );
}

export const ProfileSetup = React.memo(ProfileSetupx);
