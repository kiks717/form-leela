import { connect, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutAction } from '../../store/actions/AuthActions';
import { isAuthenticated } from '../../store/selectors/AuthSelector';
import classes from './header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  function onLogout(e){
      e.preventDefault();
      dispatch(logoutAction());
  }
  return (
    <div>
      <div className={classes.headerCont}>
        <div className={classes.nav}>
          <Link to='/' className='px-2'>Home </Link> <hr/>
          {/* <Link to='/posts' className='px-2'>Posts </Link> <br/> */}


    {/* { !props.isAuthenticated &&                 */}
         <>
                    <Link to='/signup' className='px-2'>Sign Up </Link> <hr/>
                    <Link to='/login' className='px-2'>Login </Link> <hr/>
          </>
  {/* {props.isAuthenticated &&  */}

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