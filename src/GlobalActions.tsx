import {
  UPDATE_SCREEN_HEIGHT,
  UPDATE_DARKMODE,
  UPDATE_DARKMODETOGGLE,
  UPDATE_REMEMBERMETOGGLE,
  UPDATE_GLOBAL_COLOR,
  UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY,
  HIDE_GLOBAL_LOADER,
  ACTIVATE_GLOBAL_LOADER,
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
  UPDATE_RAD1,
  UPDATE_RAD2,
  ADD_NAVIGATION_DATA,
  CLEAR_NAVIGATION_DATA,


  ADD_POST_DATA,
  CLEAR_POST_DATA,
  REMOVE_POST_DATA_BY_TIMESTAMP,
  ADD_PROFILE_DATA,
  CLEAR_PROFILE_DATA,
  REMOVE_PROFILE_DATA_BY_TIMESTAMP
} from "./global_ActionTypes";

export function DarkmodeAction(newDarkModeData: boolean) {
  return {
    type: UPDATE_DARKMODE,
    payload: newDarkModeData,
  };
}

export function SnapToggleAction(Payload: boolean) {
  return {
    type: UPDATE_SNAP,
    payload: Payload,
  };
}

export function DarkmodeToggleAction() {
  return {
    type: UPDATE_DARKMODETOGGLE,
  };
}

export function screenHeightAction(sreenHeightData: number) {
  return {
    type: UPDATE_SCREEN_HEIGHT,
    payload: sreenHeightData,
  };
}

export function rememberMeAction(Payload: boolean) {
  return {
    type: UPDATE_REMEMBERMETOGGLE,
    payload: Payload,
  };
}

export function UpdateColorAction(colorPayload: any, typex: any) {
  if (typex === 1) {
    return {
      type: UPDATE_GLOBAL_COLOR,
      payload: colorPayload,
    };
  } else {
    return {
      type: UPDATE_GLOBAL_COLOR_UPDATE_COLOR1ONLY,
      payload: colorPayload,
    };
  }
}

export function ActivateLoaderAction() {
  return {
    type: ACTIVATE_GLOBAL_LOADER,
  };
}

export function HideLoaderAction() {
  return {
    type: HIDE_GLOBAL_LOADER,
  };
}

export function UpdateOptionsTop(Payload: boolean) {
  return {
    type: CHANGE_OPTIONS_TOP,
    payload: Payload,
  };
}

export function UpdateNavFilterReducer(Payload: boolean) {
  return {
    type: CHANGE_NAV_FILTER,
    payload: Payload,
  };
}

export function UpdateNavCropReducer(Payload: boolean) {
  return {
    type: CHANGE_NAV_CROP,
    payload: Payload,
  };
}

export function UpdateAlertReducer(Payload: any, emotype: number) {
  return {
    type: UPDATE_ALERT,
    payload: Payload,
    payload2: emotype,
  };
}

export function UpdateHistory(Payload: any) {
  return {
    type: UPDATE_HISCROLL,
    payload: Payload,
  };
}

export function UpdateLoader(Payload: boolean) {
  return {
    type: UPDATE_LOADER,
    payload: Payload,
  };
}

export function UpdateCommentHistory(Payload: any, payload2: any) {
  return {
    type: UPDATE_COMMENT_HISCROLL,
    payload: Payload,
    payload2: payload2,
  };
}

export function UpdatePostFromCom(Payload: any) {
  return {
    type: HIPOSTDATA_FROMCOM,
    payload: Payload,
  };
}

export function UpdateComData(Payload: any) {
  return {
    type: UPDATE_COMSCROLL,
    payload: Payload,
  };
}

export function UpdateReactType(Payload: any) {
  return {
    type: UPDATE_HIREACTION_TYPE,
    payload: Payload,
  };
}


export function UpdateUploadData(Payload: any, Payload2: any) {
  return {
    type: CHANGE_UPLOAD_DATA,
    payload: Payload,
    payload2: Payload2,
  };
}


export function UpdateInteract(Payload: String, Payload2: number) {
  return {
    type: UPDATE_INTERACT,
    payload: Payload,
    payload2: Payload2,
  };
}



export function UpdateMenuData(Payload: String) {
  return {
    type: UPDATE_MenuData,
    payload: Payload,
  }
};

export function UpdateMenuNav(Payload: boolean) {
  return {
    type: UPDATE_MenuNav,
    payload: Payload,
  }
};

export function Updatepagenum(Payload: number) {
  return {
    type: UPDATE_pagenum,
    payload: Payload,
  }
};

export function UpdateSign(Payload: boolean) {
  return {
    type: UPDATE_signin,
    payload: Payload,
  }
};

export function UpdateA(Payload: any, Payload2: number) {
  return {
    type: UPDATE_upaudio,
    payload: Payload,
    payload2: Payload2,
  };
}


export function UpdateTutorials(typexx: number, state: boolean) {

  if (typexx === 1) {
    return {
      type: clickPostHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  } else if (typexx === 2) {
    return {
      type: minimiseHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  }
  else if (typexx === 3) {
    return {
      type: connectHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  }
  else if (typexx === 4) {
    return {
      type: interactHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  }
  else if (typexx === 5) {
    return {
      type: EditHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  }
  else if (typexx === 6) {
    return {
      type: interactionstartHintState_LOADER,
      payload: typexx,
      payload2: state,
    };
  } else { }



}


export function MuteAction(Payload: any) {
  return {
    type: UPDATE_MuteAUDIO,
    payload: Payload,
  };
}



export function MuteIndexAudio(Payload: any) {
  return {
    type: UPDATE_AUDIOINDEX,
    payload: Payload,
  };
}



export function UpdateRad1(Payload: any,) {
  return {
    type: UPDATE_RAD1,
    payload: Payload,

  };
}



export function UpdateRad2(Payload: any) {
  return {
    type: UPDATE_RAD2,
    payload: Payload,

  };
}



export const addNavigationData = (
  idTimestamp: any,
  postdataLocal: any,
  profiledataLocal: any
) => ({
  type: ADD_NAVIGATION_DATA,
  payload: { idTimestamp, postdataLocal, profiledataLocal }
});



// Action creators for post data
export const addPostData = (idTimestamp: number, postdataLocal: any) => ({
  type: ADD_POST_DATA,
  payload: { idTimestamp, postdataLocal }
});

export const clearPostData = () => ({
  type: CLEAR_POST_DATA
});

export const removePostDataByTimestamp = (idTimestamp: number) => ({
  type: REMOVE_POST_DATA_BY_TIMESTAMP,
  payload: idTimestamp
});

// Action creators for profile data
export const addProfileData = (idTimestamp: number, profiledataLocal: any) => ({
  type: ADD_PROFILE_DATA,
  payload: { idTimestamp, profiledataLocal }
});

export const clearProfileData = () => ({
  type: CLEAR_PROFILE_DATA
});

export const removeProfileDataByTimestamp = (idTimestamp: number) => ({
  type: REMOVE_PROFILE_DATA_BY_TIMESTAMP,
  payload: idTimestamp
});
