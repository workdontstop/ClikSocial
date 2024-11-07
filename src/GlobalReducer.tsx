import {
  UPDATE_SCREEN_HEIGHT,
  UPDATE_DARKMODE,
  UPDATE_DARKMODETOGGLE,
  UPDATE_REMEMBERMETOGGLE,
  UPDATE_GLOBAL_COLOR,
  UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY,
  ACTIVATE_GLOBAL_LOADER,
  HIDE_GLOBAL_LOADER,
  CHANGE_OPTIONS_TOP,
  CHANGE_NAV_FILTER,
  CHANGE_NAV_CROP,
  UPDATE_SNAP,
  UPDATE_ALERT,
  UPDATE_LOADER,
  UPDATE_HISCROLL,
  UPDATE_COMMENT_HISCROLL,
  HIPOSTDATA_FROMCOM,
  UPDATE_COMSCROLL,
  UPDATE_HIREACTION_TYPE,
  CHANGE_UPLOAD_DATA,
  UPDATE_INTERACT,
  UPDATE_MenuData,
  UPDATE_MenuNav,
  UPDATE_pagenum,
  UPDATE_signin,
  UPDATE_upaudio,
  clickPostHintState_LOADER,
  connectHintState_LOADER,
  minimiseHintState_LOADER,
  interactHintState_LOADER,
  EditHintState_LOADER,
  interactionstartHintState_LOADER,
  UPDATE_MuteAUDIO,
  UPDATE_AUDIOINDEX,
  UPDATE_RAD2,
  UPDATE_RAD1,
  ADD_NAVIGATION_DATA,
  CLEAR_NAVIGATION_DATA,

  ADD_POST_DATA,
  CLEAR_POST_DATA,
  REMOVE_POST_DATA_BY_TIMESTAMP,
  ADD_PROFILE_DATA,
  CLEAR_PROFILE_DATA,
  REMOVE_PROFILE_DATA_BY_TIMESTAMP



} from "./global_ActionTypes";

////////////OPTIONS TOP SHOW  DATA////////////////
const initialOptionsTopshow = {
  optinstopshowing: false,

  ////For example const initialState = { person: null as Person };
};
type MyOptionsTopShowReducer = typeof initialOptionsTopshow;

export const OptionsTopShowReducer = (
  state = initialOptionsTopshow,
  action: any
): MyOptionsTopShowReducer => {
  switch (action.type) {
    case CHANGE_OPTIONS_TOP:
      return { ...state, optinstopshowing: action.payload };
    default:
      return state;
  }
};
//////OPTIONS TOP SHOW  REDUCER //////////////////////

/////////////////////////BUTTON///////////////////////////////////////////////
///
///
///
////////////SIGNUP DARK BUTTON DATA////////////////
const initialStateButtonsSIGNUPDARK = {
  MozBoxShadowSD: `0 0 4.5px #cccccc`,
  WebkitBoxShadowSD: `0 0 4.5px #cccccc `,
  boxShadowSD: `0 0 4.5px #cccccc`,

  ////For example const initialState = { person: null as Person };
};
type MyButtonsSignUpReducerDark = typeof initialStateButtonsSIGNUPDARK;

export const ButtonsSignUpReducerDark = (
  state = initialStateButtonsSIGNUPDARK,
  action: any
): MyButtonsSignUpReducerDark => {
  switch (action.type) {
    default:
      return state;
  }
};
//////SIGNUP DARK BUTTON REDUCER //////////////////////

///
///
///
////////////SIGNUPLIGHT BUTTON DATA////////////////
const initialStateButtonSIGNUPLIGHT = {
  MozBoxShadowSL: `0 0 4.5px #0b111b`,
  WebkitBoxShadowSL: `0 0 4.5px #0b111b `,
  boxShadowSL: `0 0 4.5px #0b111b`,
  ////For example const initialState = { person: null as Person };
};
type MyButtonsSignUpReducerLight = typeof initialStateButtonSIGNUPLIGHT;

export const ButtonsSignUpReducerLight = (
  state = initialStateButtonSIGNUPLIGHT,
  action: any
): MyButtonsSignUpReducerLight => {
  switch (action.type) {
    default:
      return state;
  }
};
/////SIGNUP SIGNUPLIGHT BUTTON REDUCER //////////////////////

///
///
///
////////////LOGIN DARK BUTTON DATA////////////////
const initialStateButtonsLOGINDARK = {
  paddingLD: "11.5px",
  MozBoxShadowLD: "0 0 1.5px #ffffff ",
  WebkitBoxShadowLD: "0 0 1.5px #ffffff ",
  boxShadowLD: "0 0 1.5px#ffffff",
  ////For example const initialState = { person: null as Person };
};
type MyButtonsLoginReducerDark = typeof initialStateButtonsLOGINDARK;

export const ButtonsLoginReducerDark = (
  state = initialStateButtonsLOGINDARK,
  action: any
): MyButtonsLoginReducerDark => {
  switch (action.type) {
    default:
      return state;
  }
};
//////LOGIN DARK BUTTON REDUCER //////////////////////

///
///
///
////////////LOGIN LIGHT BUTTON DATA////////////////
const initialStateButtonsLOGINLIGHT = {
  paddingLL: "11.5px",
  MozBoxShadowLL: "0 0 1.1px #0b111b ",
  WebkitBoxShadowLL: "0 0 1.1px #0b111b ",
  boxShadowLL: "0 0 1.1px #0b111b ",
  ////For example const initialState = { person: null as Person };
};
type MyButtonsLoginReducerLight = typeof initialStateButtonsLOGINLIGHT;


export const ButtonsLoginReducerLight = (
  state = initialStateButtonsLOGINLIGHT,
  action: any
): MyButtonsLoginReducerLight => {
  switch (action.type) {
    default:
      return state;
  }
};
//////LOGIN LIGHT BUTTON REDUCER //////////////////////

//////////////////////////////////////////////////////BUTTON//////////////////////////////////////////

///
///
///
////////////PAPER LIGHTNDARK DATA////////////////
const initialStatePaperLIGHTNDARK = {
  PaperStyleLight:
    "linear-gradient(0deg, #ffffff, #f2f2f2, #ffffff)",

  PaperStyleDark: "linear-gradient(0deg, #121212, #1f1f1f, #121212",
};

type MyPaperReducerLightnDark = typeof initialStatePaperLIGHTNDARK;

export const PaperReducerLightnDark = (
  state = initialStatePaperLIGHTNDARK,
  action: any
): MyPaperReducerLightnDark => {
  switch (action.type) {
    default:
      return state;
  }
};
////// PAPER LIGHTNDARK REDUCER //////////////////////\

///
///
///
//////GLOBAL KEEP ME LOGGD IN  DATA
const initialStateKeepMeLoggedIn = {
  rememberMe: true,
};
type MyGlobalReducerKeepMeLoggedIn = typeof initialStateKeepMeLoggedIn;

export const GlobalReducerKeepMeLoggedIn = (
  state = initialStateKeepMeLoggedIn,
  action: any
): MyGlobalReducerKeepMeLoggedIn => {
  switch (action.type) {
    case UPDATE_REMEMBERMETOGGLE:
      return { ...state, rememberMe: action.payload };
    default:
      return state;
  }
};

//////GLOBAL KEEP ME LOGGD IN REDUCER

///
///
///
//////GLOBAL COLOR  DATA
const initialStateColorDark = {
  color: "#cccccc",
  colordark: "#cccccc",
  colortype: 0,
};

export const GlobalReducerColor = (
  state = initialStateColorDark,
  action: any
): any => {
  switch (action.type) {
    case UPDATE_GLOBAL_COLOR:
      return {
        ...state,
        color: action.payload.color1,
        colordark: action.payload.color2,
        colortype: action.payload.colortype,
      };
    case UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY:
      return {
        ...state,
        color: action.payload.color1,
        colortype: action.payload.colortype,
      };

    default:
      return state;
  }
};



//////NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN COLOR REDUCER
// Define the shape of the navigation data object
// Define the shape of the profiledataLocal object
// Define the ProfileDataLocal type as 'any'
type ProfileDataLocal = any;

// Define the PostItem type as 'any'
type PostItem = any;

// Define the PostDataLocal type as an array of 'PostItem' objects
type PostDataLocal = PostItem[];


// Define the PostDataItem type
type PostDataItem = {
  idTimestamp: number;
  postdataLocal: PostDataLocal;
};

// Define the ProfileDataItem type
type ProfileDataItem = {
  idTimestamp: number;
  profiledataLocal: ProfileDataLocal;
};

// Initial state for post data with timestamps
const initialPostDataState = {
  postEntries: [] as PostDataItem[] // Array to hold post data items with timestamps
};

// Initial state for profile data with timestamps
const initialProfileDataState = {
  profileEntries: [] as ProfileDataItem[] // Array to hold profile data items with timestamps
};




type PostDataState = typeof initialPostDataState;

export const postDataReducer = (
  state = initialPostDataState,
  action: any
): PostDataState => {
  switch (action.type) {
    case ADD_POST_DATA:
      return {
        ...state,
        postEntries: [
          ...state.postEntries,
          action.payload
        ].slice(-4000) // Keep only the last 4000 entries
      };

    case CLEAR_POST_DATA:
      return {
        ...state,
        postEntries: []
      };

    case REMOVE_POST_DATA_BY_TIMESTAMP:
      return {
        ...state,
        postEntries: state.postEntries.filter(
          entry => entry.idTimestamp !== action.payload
        )
      };

    default:
      return state;
  }
};



type ProfileDataState = typeof initialProfileDataState;

export const profileDataReducer = (
  state = initialProfileDataState,
  action: any
): ProfileDataState => {
  switch (action.type) {
    case ADD_PROFILE_DATA:
      return {
        ...state,
        profileEntries: [
          ...state.profileEntries,
          action.payload
        ].slice(-4000) // Keep only the last 4000 entries
      };

    case CLEAR_PROFILE_DATA:
      return {
        ...state,
        profileEntries: []
      };

    case REMOVE_PROFILE_DATA_BY_TIMESTAMP:
      return {
        ...state,
        profileEntries: state.profileEntries.filter(
          entry => entry.idTimestamp !== action.payload
        )
      };

    default:
      return state;
  }
};


//////NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN COLOR REDUCER





//////GLOBAL COLOR REDUCER

///
///
///
//////GLOBAL LOADER  REDUCER

// Define the shape of the navigation data object with 'any' types
type NavigationDataItem = {
  idTimestamp: number;
  postdataLocal: any; // Accepts any array structure for post data
  profiledataLocal: any; // Accepts any structure for profile data
};

// Initial state with typed navigation data array
const initialStateLoader = {
  loader: false,
  clickPostHint: '',
  clickPostHintState: true,
  connectHint: '',
  connectHintState: true,
  minimiseHint: '',
  minimiseHintState: true,
  interactHint: '',
  interactHintState: true,
  EditHint: '',
  EditHintState: true,
  interactionstartHint: '',
  interactionstartHintState: true,
  adjustinteractionHint: '',
  adjustinteractionHintState: true,

  // Typed navigation data array
  navigationData: [] as NavigationDataItem[]
};



type MYGlobalReducerLoader = typeof initialStateLoader;

export const GlobalReducerLoader = (
  state = initialStateLoader,
  action: any
): MYGlobalReducerLoader => {
  switch (action.type) {
    case ACTIVATE_GLOBAL_LOADER:
      return { ...state, loader: true };
    case HIDE_GLOBAL_LOADER:
      return { ...state, loader: false };
    case clickPostHintState_LOADER:
      return { ...state, clickPostHintState: action.payload2 };
    case connectHintState_LOADER:
      return { ...state, connectHintState: action.payload2 };
    case minimiseHintState_LOADER:
      return { ...state, minimiseHintState: action.payload2 };
    case interactHintState_LOADER:
      return { ...state, interactHintState: action.payload2 };
    case EditHintState_LOADER:
      return { ...state, EditHintState: action.payload2 };
    case interactionstartHintState_LOADER:
      return { ...state, interactionstartHintState: action.payload2 };

    // Handle navigation data update
    case ADD_NAVIGATION_DATA:
      return {
        ...state,
        navigationData: [
          ...state.navigationData,
          action.payload
        ].slice(-4000) // Keep only the last 4000 entries
      };

    // Clear navigation data
    case CLEAR_NAVIGATION_DATA:
      return {
        ...state,
        navigationData: []
      };

    default:
      return state;
  }
};


//////GLOBAL LOADER REDUCER

///
///
///
//////GLOBAL DARKMODE HEIGHT  DATA
const initialState = {
  snapStart: true,
  screenHeight: 0,
  darkmode: true,
  AlertData: null,
  AlertEmojiType: 0,
  activateLoader: false,
  historyscroll: 0,
  comId: [],
  DiscussionImage: [],
  PostDataFromComment: [],
  CommentData: [],
  reactionType: 0,
  interactContent: '',
  interact: 0,
  MenuData: '',
  menunav: true,
  pagenum: 0,
  SignIn: false,
  Guest: 141,
  interactContentAudiox: null,
  interactContentAudiotypex: 0,
  muteaudio: false,
  ActiveAudioIndex: 1000,
  rad1: 0,
  rad2: 2,

  ////For example const initialState = { person: null as Person };
};
type MyGlobalReducer = typeof initialState;

export const GlobalReducer = (
  state = initialState,
  action: any
): MyGlobalReducer => {
  switch (action.type) {
    case UPDATE_INTERACT:
      return {
        ...state, interactContent: action.payload,
        interact: action.payload2
      };
    case UPDATE_SCREEN_HEIGHT:
      return { ...state, screenHeight: action.payload };
    case UPDATE_DARKMODE:
      return { ...state, darkmode: action.payload };
    case UPDATE_DARKMODETOGGLE:
      return { ...state, darkmode: !state.darkmode };
    case UPDATE_SNAP:
      return { ...state, snapStart: action.payload };
    case UPDATE_LOADER:
      return { ...state, activateLoader: action.payload };
    case UPDATE_HISCROLL:
      return { ...state, historyscroll: action.payload };
    case UPDATE_HIREACTION_TYPE:
      return { ...state, reactionType: action.payload };
    case UPDATE_COMMENT_HISCROLL:
      return {
        ...state,
        comId: action.payload,
        DiscussionImage: action.payload2,
      };
    case UPDATE_ALERT:
      return {
        ...state,
        AlertData: action.payload,
        AlertEmojiType: action.payload2,
      };

    case HIPOSTDATA_FROMCOM:
      return { ...state, PostDataFromComment: action.payload };

    case UPDATE_COMSCROLL:
      return {
        ...state,
        CommentData: action.payload,
      };

    case UPDATE_MenuData:
      return {
        ...state,
        MenuData: action.payload,
      };

    case UPDATE_MenuNav:
      return {
        ...state,
        menunav: action.payload,
      };

    case UPDATE_pagenum:
      return {
        ...state,
        pagenum: action.payload,
      };

    case UPDATE_signin:
      return {
        ...state,
        SignIn: action.payload,
      };

    case UPDATE_upaudio:
      return {
        ...state,
        interactContentAudiox: action.payload,
        interactContentAudiotypex: action.payload2,
      };

    case UPDATE_MuteAUDIO:
      return {
        ...state,
        muteaudio: action.payload,
      };

    case UPDATE_AUDIOINDEX:
      return {
        ...state,
        ActiveAudioIndex: action.payload,
      };

    case UPDATE_RAD1:
      return {
        ...state,
        rad1: action.payload,

      };

    case UPDATE_RAD2:
      return {
        ...state,
        rad2: action.payload,

      };




    default:
      return state;
  }
};

//////GLOBAL DARKMODE HEIGHT REDUCER

///
///
///
//////GLOBAL DARKMODE HEIGHT  DATA
const initialStateNAVupload = {
  activatefilterImage: false,
  activatecropImage: false,
  selectedImage: [],
  cropimage: null,



  ////For example const initialState = { person: null as Person };
};
type MyGlobalNavuploadReducer = typeof initialStateNAVupload;
export const GlobalNavuploadReducer = (
  state = initialStateNAVupload,
  action: any
): MyGlobalNavuploadReducer => {
  switch (action.type) {
    case CHANGE_NAV_FILTER:
      return { ...state, activatefilterImage: action.payload };
    case CHANGE_NAV_CROP:
      return { ...state, activatecropImage: action.payload };
    case CHANGE_UPLOAD_DATA:
      return { ...state, selectedImage: action.payload, cropimage: action.payload2 };
    default:
      return state;
  }
};

//////GLOBAL DARKMODE HEIGHT REDUCER
