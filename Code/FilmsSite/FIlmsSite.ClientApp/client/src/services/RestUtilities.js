import Session from "../stores/Session";
import { urls } from "./../constants/urls";
import axios from "axios";

export default class RestUtilities {
  static getApiUrl(url) {
    // return "http://localhost:53720" + url;
    return "http://localhost:5000" + url;
  }

  static request(method, url, data) {
    const headers = {
      Authorization: `Bearer ${Session.getToken()}`,
      Accept: "application/json"
    };

    console.log(url);

    url = RestUtilities.getApiUrl(url);

    return axios({
      url,
      method,
      headers: headers,
      data
    }).catch(error => {
      if (error.response.status === 401) {
        Session.removeUsersData();
        window.location.replace(urls.login);
      }
      return error;
    });
  }
}
