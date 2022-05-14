import React from 'react';


const Navbar = (props) => {
    return (
        <div className='navbar'>
            {
              props.backButton &&  
              <button className="home-button" onClick={() => props.displayHome()}>Back to Home</button>
            }
            <h1>Rotten Tomatillos</h1>
        </div>
    )
}

export default Navbar