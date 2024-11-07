import {
  REQUEST_USERDATA,
  REQUEST_USERDATA_ONLOAD,
  REQUEST_USER_INFO_UPDATE,
  REQUEST_PROFILE_UPDATE,
  REQUEST_BILLBOARD_UPDATE,
  REQUEST_BILLBOARD_UPDATE2,
  REQUEST_MEMBER,
  REQUEST_MEMBERDATA,
  REQUEST_USER_REG_UPDATE,
  NEXT_FEED_DATA
} from "../log_ActionTypes";

///
///
///
//////GLOBAL DARKMODE HEIGHT  DATA
const initialState = {
  MemberProfileData: [],
  NextFeedsHoldData: [],
  NextFeedsPagenum: 0,
  memeberPageid: 0,
  id: 0,
  username: "",
  image: "",
  imageThumb: "",
  firstName: "",
  surName: "",
  colorxx: "",
  quote: "",
  reg: 0,
  billboardstate: 0,
  billboard1: "",
  billboardthumb1: "",
  billboard2: "",
  billboardthumb2: "",
  biography: " ",
  fans: 0,
  favorites: 0,
  ////For example const initialState = { person: null as Person };
};
type MyUserdataReducer = typeof initialState;

//////GLOBAL USERDATA REDUCER
export const UserdataReducer = (
  state = initialState,
  action: any
): MyUserdataReducer => {
  switch (action.type) {
    case REQUEST_PROFILE_UPDATE:
      return {
        ...state,
        image: action.payload.image,
      };
    case REQUEST_BILLBOARD_UPDATE:
      return {
        ...state,
        billboard1: action.payload.billboard1,
        billboardstate: action.payload2,
      };
    case REQUEST_BILLBOARD_UPDATE2:
      return {
        ...state,
        billboard2: action.payload.billboard2,
        billboardstate: action.payload2,
      };
    case REQUEST_MEMBER:
      return {
        ...state,
        memeberPageid: action.payload,
      };
    case REQUEST_MEMBERDATA:
      return {
        ...state,
        MemberProfileData: action.payload,
      };


    case NEXT_FEED_DATA:
      return {
        ...state,
        NextFeedsHoldData: action.payload,
        NextFeedsPagenum: action.payload2,
      };


    case REQUEST_USER_INFO_UPDATE:
      return {
        ...state,
        username: action.payload.username,
        quote: action.payload.quote,
        biography: action.payload.describe,
      };
    case REQUEST_USERDATA:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        image: action.payload.userimage,
        imageThumb: action.payload.userimagethumb,
        firstName: action.payload.userfirstname,
        surName: action.payload.usersurname,
        colorxx: action.payload.usercolor,
        quote: action.payload.userquote,
        reg: action.payload.userreg,
        billboard1: action.payload.userbillboard1,
        billboardthumb1: action.payload.userbillboardthumb1,
        billboard2: action.payload.userbillboard2,
        billboardthumb2: action.payload.userbillboardthumb2,
        biography: action.payload.biography,
        fans: action.payload.fans,
        favorites: action.payload.favorites,
      };
    case REQUEST_USERDATA_ONLOAD:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        image: action.payload.userimage,
        imageThumb: action.payload.userimagethumb,
        firstName: action.payload.userfirstname,
        surName: action.payload.usersurname,
        colorxx: action.payload.usercolor,
        quote: action.payload.userquote,
        reg: action.payload.userreg,
        billboard1: action.payload.userbillboard1,
        billboardthumb1: action.payload.userbillboardthumb1,
        billboard2: action.payload.userbillboard2,
        billboardthumb2: action.payload.userbillboardthumb2,
        biography: action.payload.biography,
        fans: action.payload.fans,
        favorites: action.payload.favorites,
      };
    case REQUEST_USER_REG_UPDATE:
      return {
        ...state,
        reg: action.payload,
      };
    default:
      return state;
  }
};
