import Session from "./../stores/Session";

class Auth {
  static isSignedIn() {
    return !!Session.getToken();
  }

  static signOut() {
    Session.removeUsersData();
  }
}

export default Auth;
