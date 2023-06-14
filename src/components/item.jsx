import React from 'react';
import { Link } from "react-router-dom";



const Item = ({thumbnail, name, cost,stock,id}) =>{



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
                <h3>{stock} unidades</h3>
            </div>
            <Link to={`/item/${id}`} className='buy'>Comprar</Link>
            
            
        </div>
    </div>
</div>
    )
}


export default Item;