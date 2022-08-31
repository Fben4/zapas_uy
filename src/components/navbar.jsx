import React from 'react';
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <a className='navbar-brand'>
                    <Link to='/'>
                        <img src={require("../images/zapas.png")} width="200" height="120" alt="" />
                    </Link>
                    
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link  to='/shop' ><a className='nav-link'>Hombre</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/shop' ><a className='nav-link'>Mujeres</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link  to='/shop' ><a className='nav-link'>Marcas</a></Link>
                            </li>
                        
                    </ul>

                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


            </div>

        </nav>


    )
}

export default Navbar;