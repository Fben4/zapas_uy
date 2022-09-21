import React from "react";
import { Link } from "react-router-dom";
import '../styles/itemCount.css';
import { useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";



const ItemCount = ({ initiate, stock, onAdd } ) =>{

    
    const [quantity, setQuantity] = useState(initiate); //hook

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
        
    }

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity+1);
        }
        
    }



    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="caja">
                    <div className="inputs">
                        <input onClick={decrease} 
                        type="button" 
                        value="-" 
                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                        <div className="quantity"><p>{quantity}</p></div>
                        <input onClick={increase} 
                        type="button" 
                        value="+" 
                        className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />                     
                    </div>
                    <div className="box">
                        {
                            stock && quantity
                            ? <button onClick={() => onAdd(quantity)} className="button">Agregar al carrito</button> 
                            : <button  className="button bg-dark text-light">Agrega al menos 1</button>
                        }
                        </div>
            </div>
                    
                </div>
    )
}

export default ItemCount;