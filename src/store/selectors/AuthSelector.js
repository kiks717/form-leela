export const isAuthenticated = (state) => {
    if(state.auth.idToken) {
        return true
    };
    return false;
};