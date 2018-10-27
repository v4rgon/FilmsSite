import * as actions from "./SessionActions";
import { getToken, getUsersData, getRefreshToken, getExpiresData } from "./SessionSelectors";
import Store from "../configStore";

export default class Session {
  static getUsersData() {
    return getUsersData(Store.getInstance().getState());
  }

  static setUsersData(data) {
    Store.getInstance().dispatch(actions.setUsersData(data));
  }

  static removeUsersData() {
    Store.getInstance().dispatch(actions.removeUsersData());
  }

  static getRefreshToken() {
    return getRefreshToken(Store.getInstance().getState());
  }

  static setRefreshToken(token) {
    Store.getInstance().dispatch(actions.setRefreshToken(token));
  }

  static removeRefreshToken() {
    Store.getInstance().dispatch(actions.removeRefreshToken());
  }
  static getToken() {
    return getToken(Store.getInstance().getState());
  }

  static setToken(token) {
    Store.getInstance().dispatch(actions.setToken(token));
  }

  static removeToken() {
    Store.getInstance().dispatch(actions.removeToken());
  }

  static setExpiresData(){
    Store.getInstance().dispatch(actions.setExpiresData());
  }

  static getExpiresData(){
    return getExpiresData(Store.getInstance().getState());
  }
}
