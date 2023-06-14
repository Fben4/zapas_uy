import React from 'react';
import { Link } from "react-router-dom";


const Cardvans = (props) => {
    return (
        <div className="container">
            <div className="card card_vans">
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


export default Cardvans;