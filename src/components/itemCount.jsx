import React from "react";
import { Link } from "react-router-dom";
import '../styles/itemCount.css';
import { useState } from "react";



const ItemCount = ({ initiate, stock } ) =>{

    
    const [quantity, setQuantity] = useState(initiate); //hook

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity-1);
            console.log(quantity);
        }
        
    }

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity+1);
        console.log(quantity);
        }
        
    }

    return (
        <div className="container d-flex justify-content-center">
                    <div className="tittle">
                        <p className="text-dark">Air max 270</p>
                    </div>
                    <div className="input-group w-auto justify-content-end align-items-center">
                        <input onClick={decrease} 
                        type="button" 
                        value="-" 
                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                        <input 
                        type="number" 
                        value={quantity}
                        name="quantity" 
                        className="quantity-field border-0 text-center w-25" />
                        <input onClick={increase} 
                        type="button" 
                        value="+" 
                        className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />
                        <div className="box">
                            <button className="addcart">Añadir al carrito</button>
                        </div>
                        
                    </div>
                </div>
    )
}

export default ItemCount;