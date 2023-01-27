import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (
    <div>
      <div className='bg-red-400 text-white px-2 py-2 flex items-center justify-between'>
        <h2 className='font-bold text-lg'>React Router</h2>
        <div>
          <Link to='/' className='px-2'>Home </Link> <hr/>
          {/* <Link to='/posts' className='px-2'>Posts </Link> <br/> */}
          <Link to='/signup' className='px-2'>Sign Up </Link> <hr/>
          <Link to='/login' className='px-2'>Login </Link> <hr/>

        </div>
      </div>
    </div>
  )
}

export default Header