import axios from "axios";

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