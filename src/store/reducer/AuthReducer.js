import { LOADING_ACTION, LOG_IN_CONFIRMED, LOG_IN_FAILED, SIGN_UP_CONFIRMED, SIGN_UP_FAILED } from "../actions/AuthActions";

const initialState = {
    auth: {
        email : '',
        idToken : '',
        localId : '',
        expiresIn : '',
        refreshToken : ''
    },
    errorMessage : '',
    successMessage : '',
    showLoading : false,
};

export function AuthReducer(state = initialState,action){
    if(action.type === SIGN_UP_CONFIRMED){
        return {
            ...state,
            auth : action.payload,
            errorMessage : '',
            successMessage : 'Sign Up Successfully Completed!',
            showLoading : false
        }
    }
    if(action.type === SIGN_UP_FAILED || action.type === LOG_IN_FAILED){
        return {
            ...state,
            errorMessage : action.payload,
            successMessage : '',
            showLoading : false
        }
    }

    if(action.type === LOADING_ACTION){
        return {
            ...state,
            showLoading : action.payload,
        }
    };

    if(action.type === LOG_IN_CONFIRMED){
        return {
            ...state,
            auth : action.payload,
            errorMessage : '',
            successMessage : 'Login Successfull',
            showLoading : false

        }
    };

    return state;
};