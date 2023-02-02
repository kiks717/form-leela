import { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { loadingAction, signupAction } from '../../store/actions/AuthActions';
import classes from './signup.module.css'



const SingUp = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');
    let errorsObj = {email : "", password : ""};
    const [errors,setErrors] = useState(errorsObj)

    function onFormSubmit(e){
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
        dispatch(signupAction(email,password,navigate));
    }
  return (
    <div className={classes.signup}>
    { props.showLoading &&  <Loader/>}
        <h2>Sign Up</h2>
        {props.errorMessage && <div className={classes.errorMessage}>{props.errorMessage}</div>}
        {props.successMessage && <div className={classes.successMessage}>{props.successMessage}</div>}
        
        <form onSubmit={onFormSubmit}>
        <div >
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
                <button type='submit' className={classes.signupBtn}>Sign Up</button>
            </div>
        </form>
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
 export default connect(mapStateToProps)(SingUp);