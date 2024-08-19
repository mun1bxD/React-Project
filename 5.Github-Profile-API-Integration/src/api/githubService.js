import apiClient from "./apiClient.js";
import { FOLLOWERS_API, FOLLOWING_API, STARRED_API } from "./endpoint.js";

export const getProfile = (username) => {
  return apiClient.get(`users/${username}`);
};

export const getStarred = (username) => {
  return apiClient.get(`users/${username}/${STARRED_API}`);
};

export const getFollowers = (username) => {
  return apiClient.get(`users/${username}/${FOLLOWERS_API}`);
};
export const getFollowing = (username) => {
  return apiClient.get(`users/${username}/${FOLLOWING_API}`);
};
