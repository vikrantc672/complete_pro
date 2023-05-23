//https://developer.spotify.com/documentation/general/guides/authorization/

export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId="75bc520713cf4f0688213eddc9eee835"

const scopes=[
 "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",

];
//extracts token from url present in the browser
export const getTokenFromUrl=()=>{
  return window.location.hash
   .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;