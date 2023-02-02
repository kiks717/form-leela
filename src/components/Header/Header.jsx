import { connect, useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { logoutAction } from '../../store/actions/AuthActions';
import { isAuthenticated } from '../../store/selectors/AuthSelector';
import classes from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onLogout(e){
      e.preventDefault();
      dispatch(logoutAction(navigate));
  }
  return (
    <div>
      <div className={classes.headerCont}>
        <div className={classes.nav}>
          <Link to='/' className='px-2'>Home </Link> <hr/>
          <Link to='/posts' className='px-2'>Posts </Link> <br/>
        <hr/>

         <>
            <Link to='/signup' className='px-2'>Sign Up </Link> <hr/>
            <Link to='/login' className='px-2'>Login </Link> <hr/>
          </>

    <button onClick={onLogout} className={classes.logout}>Logout</button> 
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated : isAuthenticated(state)
  }
};
export default connect(mapStateToProps)(Header)