import React from 'react';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    return(
        <div className='position-relative'>
            <FontAwesomeIcon icon={faCartShopping} className = 'cart'></FontAwesomeIcon>
            <span className='badge bg-secondary  '>4</span>
        </div>
            
        
    )
}
    


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                    <Link  className='navbar-brand' to='/'>
                        <img src={require("../images/zapas.png")} width="200" height="120" alt="" />
                    </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav'>
                            
                            <li className='nav-item'>
                                <Link className='nav-link' to='/itemListContainer' >Tienda</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/category/1' >Hombres</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/category/2' >Mujeres</Link>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'><Cart></Cart></a>
                            </li>
                        
                    </ul>

                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


            </div>

        </nav>


    )
}

export default Navbar;