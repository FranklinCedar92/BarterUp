import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="text-center nav-bar title-font">
            <Link to="/">
              <h1>BarterUp</h1>
            </Link>
    
            <nav className="text-center">
              {Auth.loggedIn() ? (
                <>
                  <Link to="/profile">Me </Link>
                  <Link to="/listings"> All Listings </Link>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <Link to="/login"> Login  </Link>
                  <Link to="/signup"> Signup  </Link>
                  <Link to="/profile"> Profile  </Link>
                  <Link to="/listings"> All Listings  </Link>
                </>
              )}
            </nav>
          </div>
        </header>
      );
};



export default Header;