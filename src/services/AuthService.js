import axios from "axios";
import { confirmedLoginAction, logoutAction } from "../store/actions/AuthActions";

export function signUp(email,password){
    const postData = {
        email,
        password,
        returnSecureToken : true
    }
    //axios call
     return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7q19MRjO6i1s1bPT5CawahtGrbLTK12M`,postData)
};

export function login(email,password){
    const postData = {
        email,
        password,
        returnSecureToken : true
    }
    //axios call
     return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7q19MRjO6i1s1bPT5CawahtGrbLTK12M`,postData)
};

export  function  formatError(errorResponse){
    switch(errorResponse.error.message){
        case "EMAIL_EXISTS": 
            return 'Email already exists!';
            
        case 'EMAIL_NOT_FOUND':
            return 'Email NOT FOUND!';
        
        case 'INVALID_PASSWORD': 
            return 'The password is invalid';

        case 'USER_DISABLED':
            return ' The user account has been disabled';
            
        default : 
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails){
    tokenDetails.expireDate = new Date (new Date().getTime()+ tokenDetails.expiresIn * 1000);
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}
export function runLogoutTimer(dispatch,timer){
    setTimeout(() => {dispatch(logoutAction())},timer);
};

export function checkAutoLogin(dispatch,navigate){
    const tokenDetailsString = localStorage.getItem('userDetails');

    let tokenDetails = '';

    if(!tokenDetailsString){
        dispatch(logoutAction(navigate));
        return;
    }
    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if(todaysDate > expireDate){
        dispatch(logoutAction(navigate));
        return;
    }

    dispatch(confirmedLoginAction(tokenDetails));
    const timer = expireDate.getTime() - todaysDate.getDate();
    runLogoutTimer(dispatch,timer);

    
}