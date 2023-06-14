import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from "./cartContext";

const Cart = () => {
    const ctx = useContext(CartContext);
    return (

        <div className='position-relative'>

            <FontAwesomeIcon icon={faCartShopping} className='cart'></FontAwesomeIcon>
            <span className='badge bg-secondary  '>{ctx.cartQuantity()}</span>

        </div>


    )
}



const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <div className="logonav">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fzapasiso.png?alt=media&token=dfac82ac-52c6-47e0-ac2c-aaa2082049fd" alt="logo" />
                </div>
            </Link>
            <div className="item search right" tabIndex="0">
                <div className="search-group">
                    <select>
                        <option value="all">All</option>
                        <option value="all">Mens</option>
                        <option value="all">Womens</option>
                    </select>
                    <input type="text" />
                    <FontAwesomeIcon icon={faSearch} color='black' className='search-icon'></FontAwesomeIcon>
                </div>
            </div>
            <div className="group">
                <FontAwesomeIcon icon={faUser} className='cart'></FontAwesomeIcon>
            </div>
            <a href="" className="item">
                <div className="group">
                    <Link to='/cart'><Cart    ></Cart></Link>
                </div>
            </a>
        </nav>


    )
}

export default Navbar;