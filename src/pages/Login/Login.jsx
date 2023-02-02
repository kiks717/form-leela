import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'
import { loadingAction, logInAction } from '../../store/actions/AuthActions';
import classes from '../SignUp/signup.module.css'

function Login(props) {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');
    let errorsObj = {email : "", password : ""};
    const [errors,setErrors] = useState(errorsObj);

    function onLogin(e){
        e.preventDefault();
        let error = false;
        const errorObj = {...errorsObj};
        if(email === ''){
            errorObj.email = 'Email is Required!';
            error = true;
        }
        if(password === ''){
            errorObj.password = 'Password is Required!';
            error = true;
        }
        setErrors(errorObj);
        
        if(error) {return};
        dispatch(loadingAction(true));
        dispatch(logInAction(email,password,navigate));
    };

  return (
    <div>
        <h2>Login Page</h2>
        <div className={classes.signup}>
         { props.showLoading &&  <Loader/>}
        <h2>LOGIN</h2>
        {props.errorMessage && <div className={classes.errorMessage}>{props.errorMessage}</div>}
        {props.successMessage && <div className={classes.successMessage}>{props.successMessage}</div>}
        
        <form onSubmit={onLogin}>
            <div>
                <label>Email</label>
                <input type='email'
                        className={classes.inputSign}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)} />
            </div>

            {errors.email && <div>{errors.email}</div>}

            <div>
                <label>Password</label>
                <input type='password'
                        className={classes.inputSign}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
            </div>

            {errors.password && <div>{errors.password}</div>}

            <div>
                <button type='submit' className={classes.signupBtn}>Log In</button>
            </div>
        </form>
    </div>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        errorMessage : state.auth.errorMessage,
        successMessage : state.auth.successMessage,
        showLoading  : state.auth.showLoading,
    }
}
export default connect(mapStateToProps)(Login)