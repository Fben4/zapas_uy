import React from "react";
import { Link } from "react-router-dom";
import '../styles/itemCount.css';
import '../styles/size.css'
import { useState } from "react";
import { faAdd } from "@fortawesome/free-solid-svg-icons";



const ItemCount = ({ initiate, stock, onAdd, sizesarray }) => {


    const [quantity, setQuantity] = useState(initiate); //hook
    const [Itemsize, setItemSize] = useState(0);


    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }

    }

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }

    }

    const select = (e) => {
        setItemSize(e.target.value);
        console.log('select', e.target.value);
    }


    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="caja">
                <div className="d-flex justify-content-center">
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
                </div>
                <div className="container d-flex justify-content-center align-items-center">

                    <div className="select">
                        <h2 className='text-center'>Selecciona un tamaño</h2>
                        <div className='bar'>
                            {
                                sizesarray?.map(size =>
                                    <div key={size} className="size">
                                        <button value={size} onClick={select} className='button size_option' >{size}</button>
                                    </div>

                                )
                            }

                        </div>

                    </div>

                </div>

                <div className="box">
                    {
                        stock && quantity > 0 && Itemsize > 0 
                            ? <button onClick={() => onAdd(quantity, Itemsize)} className="button">Agregar al carrito</button>
                            : <button className="button bg-dark text-light">Selecciona cantidad y talle</button>
                    }
                </div>
            </div>


        </div>


    )
}

export default ItemCount;