export const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (user === null)
        return false;
    return true;
}
export const logOut = () => {
    localStorage.removeItem('user');
}
export const UserData = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
}