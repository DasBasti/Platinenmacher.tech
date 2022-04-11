export const client_id = "00kizhr27nj2bbo4fj213qkzxy5v32";
export const redirect_uri = `http://${process.env.REACT_APP_REDIRECT_URI}/login/twitch/authorized`;
export const response_type = "token";
export const scope = ["user:read:subscriptions", "channel:read:subscriptions", "chat:edit", "chat:read"];

export function isLoggedIn() {
    const token = localStorage.getItem("access_token");
    if (token) return true;
    return false;
}

export function getToken(): string {
    const at = localStorage.getItem("access_token");
    return at ? at : ""
}

export function getUsername(): string {
    const un = localStorage.getItem("username");
    return un ? un : ""
}


const initialState = {
    username : "",
    access_token: "",
    scope: "",
}

export default function userReducer(state = initialState, action:any) {
    switch(action.type){
        default:
            return state;
    }
};