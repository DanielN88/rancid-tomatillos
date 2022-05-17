import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div className='navbar'>
            {
              props.backButton &&
              <nav>
                <NavLink to={"/"}> 
                    <button className="home-button" onClick={props.displayHome}>Back to Home</button>
                </NavLink>
              </nav>  
            }
            <h1>Rotten Tomatillos</h1>
        </div>
    )
}

export default Navbar