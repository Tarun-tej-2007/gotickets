import React from 'react'
import {Link} from 'react-router-dom';

function navbar(){
  return (
    <nav>
      <div>
        <h2>
          <Link to='/welcome'>
            <button>GoRooms</button>
          </Link>
        </h2>
      </div>
      <div>
        <p>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </p>
        <p>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
        </p>
      </div>
    </nav>
  )
}






export default navbar