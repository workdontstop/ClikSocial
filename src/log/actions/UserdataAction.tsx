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

export function UserdataAction(ServerPayload: any) {
  return {
    type: REQUEST_USERDATA,
    payload: ServerPayload,
  };
}

export function UserdataActionOnLoad(ServerPayload: any) {
  return {
    type: REQUEST_USERDATA_ONLOAD,
    payload: ServerPayload,
  };
}

export function UserInfoUpdateAction(data: any) {
  return {
    type: REQUEST_USER_INFO_UPDATE,
    payload: data,
  };
}

export function UserInfoUpdatePROFILE(data: any) {
  return {
    type: REQUEST_PROFILE_UPDATE,
    payload: data,
  };
}

export function UserInfoUpdateMEMBERDATA(data: any) {
  return {
    type: REQUEST_MEMBERDATA,
    payload: data,
  };
}

export function UserInfoUpdateMEMBER(data: number) {
  return {
    type: REQUEST_MEMBER,
    payload: data,
  };
}

export function UpdateNextFeeds(data: any, data2: number) {
  return {
    type: NEXT_FEED_DATA,
    payload: data,
    payload2: data2
  };
}

export function UserInfoUpdateBILLBOARD(data: any, typex: any) {
  if (typex === 1) {
    return {
      type: REQUEST_BILLBOARD_UPDATE,
      payload: data,
      paload2: typex
    };
  } else {
    return {
      type: REQUEST_BILLBOARD_UPDATE2,
      payload: data,
      paload2: typex
    };
  }
}


export function UserdataReg(data: any) {
  return {
    type: REQUEST_USER_REG_UPDATE,
    payload: data,
  };
}