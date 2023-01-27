import { formatError, login, signUp } from "../../services/AuthService"

export const SIGN_UP_CONFIRMED = '[sign up action] confirmed signup';
export const SIGN_UP_FAILED = '[sign up action] failed signup';
export const LOG_IN_CONFIRMED = '[login action] confirmed login';
export const LOG_IN_FAILED = '[login action] failed login';
export const LOADING_ACTION = '[loading action] show loading';


export function signupAction(email,password){
    return (dispatch) => {
        signUp(email,password).then((response) => {
            dispatch(confirmedSignUpAction(response));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(failedSignUpAction(errorMessage));
        })
    };
}

export function logInAction(email,password){
    return (dispatch) => {
        login(email,password).then((response) => {
            dispatch(confirmedLoginAction(response));
        }).catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(failedLoginAction(errorMessage));
        })
    };
} 
export function confirmedLoginAction(data){
    return {
        type : LOG_IN_CONFIRMED,
        payload : data
    }
}

export function failedLoginAction(message){
        return {
            type : LOG_IN_FAILED,
            payload : message
        }
}
export function confirmedSignUpAction(payload){
    return {
        type : SIGN_UP_CONFIRMED,
        payload,
    }
}
export function failedSignUpAction(message){
    return {
        type : SIGN_UP_FAILED,
        payload : message,
    }
}

export function loadingAction(status){
    return {
        type : LOADING_ACTION,
        payload : status,
    }
}
