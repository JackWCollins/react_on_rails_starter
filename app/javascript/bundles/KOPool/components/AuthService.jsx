import { AUTH_TOKEN } from "../constants/koPoolConstants";

// https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b

class AuthService {
  // Sets user details in localStorage
  saveUserData = (accessToken) => {
    // Set the time that the access token will expire at
    // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem(AUTH_TOKEN, accessToken);
  }

  // removes user details from localStorage
  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem(AUTH_TOKEN);
    // localStorage.removeItem('expires_at');
  }

  // checks if the user is authenticated
  isAuthenticated() {
    return localStorage.getItem(AUTH_TOKEN) != null
    // Check whether the current time is past the
    // access token's expiry time
    // let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
  }
}

export const authService = new AuthService();