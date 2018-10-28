export function getToken(state) {
    //if (state.session.token && state.session) return state.session.token.token;
    // else
     return undefined;
  }
  
  export function getUsersData(state) {
    return state.session;
  }
  
  export function getRefreshToken(state) {
    if (state.session.token) return state.session.token.refresh_token;
    else return undefined;
  }
  
  export function getExpiresData(state) {
    if (state.session.token) return state.session.token.expires;
    else return Date.now();
  }
  