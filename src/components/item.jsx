import React from 'react';
import { Link } from "react-router-dom";


const Item = ({thumbnail, name, cost}) =>{
    return (

        <div className="container sneakers">
    <div className="item">
        <div className="imgBx">
            <img src={thumbnail}/>
        </div>
        <div className="contentBx">
            <h2>{name}</h2>
            <div className='costo'>
                <h3>${cost}</h3>
            </div>
            <a>Comprar</a>
            
        </div>
    </div>
</div>
    )
}


export default Item;