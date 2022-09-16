import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Item = ({thumbnail, name, cost,stock,id}) =>{


    const [liveStock,setLiveStock] = useState(stock);

    // componentDidUpdate
    useEffect(() => {
        console.log(`se actualizo el componente  ${name}`);
    },[liveStock]);

    const minus = () => {
        if (liveStock > 0) {
            setLiveStock(liveStock - 1);
        }
        
    }
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
                <h3>{liveStock} unidades</h3>
            </div>
            {/* { liveStock > 0 ? <button className='buy' onClick={minus} >Comprar</button> : <button className='buy'>Sin stock</button> } */}
            <Link to={`/item/${id}`} className='buy'>Comprar</Link>
            
            
        </div>
    </div>
</div>
    )
}


export default Item;