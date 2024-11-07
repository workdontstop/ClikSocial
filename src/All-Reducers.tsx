import { combineReducers } from "redux";
import {
  IsLoggedReducer,
  IsLoggedProfileReducer,
} from "./log/reducers/IsloggedReducer";
import { UserdataReducer } from "./log/reducers/UserdataReducer";
import {
  GlobalReducer,
  GlobalNavuploadReducer,
  ButtonsLoginReducerLight,
  ButtonsLoginReducerDark,
  ButtonsSignUpReducerLight,
  ButtonsSignUpReducerDark,
  PaperReducerLightnDark,
  GlobalReducerKeepMeLoggedIn,
  GlobalReducerColor,
  GlobalReducerLoader,
  OptionsTopShowReducer,
  postDataReducer,
  profileDataReducer,

} from "./GlobalReducer";
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////
////////////////////////////
//////////////
////////
////
//
const AllReducers = combineReducers({
  IsLoggedReducer,
  GlobalReducer,
  GlobalNavuploadReducer,
  ButtonsLoginReducerLight,
  ButtonsLoginReducerDark,
  ButtonsSignUpReducerLight,
  ButtonsSignUpReducerDark,
  PaperReducerLightnDark,
  UserdataReducer,
  GlobalReducerKeepMeLoggedIn,
  GlobalReducerColor,
  IsLoggedProfileReducer,
  GlobalReducerLoader,
  OptionsTopShowReducer,
  postData: postDataReducer,
  profileData: profileDataReducer,
});

export default AllReducers;
