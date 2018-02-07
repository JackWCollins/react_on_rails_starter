/* eslint-disable import/prefer-default-export */

import { KO_POOL_NAME_UPDATE } from "../constants/koPoolConstants";

export const updateSeason = (text) => ({
  type: KO_POOL_NAME_UPDATE,
  text
})