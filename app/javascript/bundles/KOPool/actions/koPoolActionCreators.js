/* eslint-disable import/prefer-default-export */

import { KO_POOL_NAME_UPDATE, KO_POOL_LOGIN } from "../constants/koPoolConstants";

export const updateSeason = (text) => ({
  type: KO_POOL_NAME_UPDATE,
  text
});

export const login = (loginParams) => {
  console.log("In login method in action creator")
  return {
    type: KO_POOL_LOGIN, loginParams
  }
};