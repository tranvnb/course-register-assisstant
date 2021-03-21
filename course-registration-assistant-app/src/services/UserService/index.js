export const isUserLogin = () => {
    return localStorage.getItem("user-name") !== null && localStorage.getItem("user-name") !== "";
}

export const logUserIn = (username) => {
    localStorage.setItem("user-name", username);
}

export const logUserOut = () => {
    localStorage.removeItem("user-name");
}

export const getUsername = () => {
    return localStorage.getItem("user-name");
}

export default {
    isUserLogin,
    logUserIn,
    logUserOut,
    getUsername
};