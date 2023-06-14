import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="container sneakers">
            <div className="card">
                <div className="imgBx">
                    <img src={props.thumbnail} />
                </div>
                <div className="contentBx">
                    <h2>{props.name}</h2>
                    <Link to={`/item/1`} className='buy'>Comprar</Link>
                </div>
            </div>
        </div>
    )
}


export default Card;