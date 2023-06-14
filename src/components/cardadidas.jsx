import React from 'react';
import { Link } from "react-router-dom";


const Cardadidas = (props) => {
    return (
        <div className="container">
            <div className="card card_adidas">
                <div className="imgBx">
                    <img src={props.thumbnail} />
                </div>
                <div className="contentBx">
                    <h2>{props.name}</h2>

                    <Link to={`/item/5`} className='buy'>Comprar</Link>
                </div>
            </div>
        </div>
    )
}


export default Cardadidas;