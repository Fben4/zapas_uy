import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import Gallery from "./gallery";
import '../styles/detail.css'
import Item from "./item";

import { useState,  useContext } from "react";
import { CartContext } from "./cartContext";


const ItemDetail = ({zapa}) => {


    const [itemCount, setItemCount] = useState(0);
    const [size, setSize] = useState(0);
    const ctx = useContext(CartContext) //hook que me permite usar el contexto, funcion global para modificar el estado global

    


    const onAdd = (quantity , itemSize) => {
        setItemCount(quantity);
        setSize(itemSize);
         // actualizo el estado de la variable itemCount
        ctx.addItem(zapa, quantity, itemSize); // agrego el producto al carrito


    }
    



    return(

        <div className='detail container-fluid'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="title d-flex justify-content-center">
                        <h1>{zapa.name}</h1>
                    </div>
                </div>
                
            </div>
            <div className='row'>
                <div className='zapa col-sm-12 col-md-4 col-lg-4'>
                    <img src={zapa.thumbnail_1} alt='thumbnail' className='img-fluid' />
                    
                </div>
                <div className='zapa col-sm-12 col-md-4 col-lg-4'>
                    <img src={zapa.thumbnail} alt='thumbnail' className='img-fluid' />
                </div>
                <div className='  zapa col-sm-12 col-md-4 col-lg-4'>
                    <img src={zapa.thumbnail_2}alt='thumbnail' className='img-fluid' />
                </div>

                
            </div>

            <div className="row costo">
                    <div className="col-lg-12">
                        <div className=" d-flex justify-content-center">
                            <h3>${zapa.cost}</h3>
                        </div>
                    
                </div>
                </div>
            <div className="row stock">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className=" d-flex justify-content-center">
                            <h2>{zapa.stock} unidades</h2>
                        </div>

                    </div>
                </div>
                <div className="row add ">
                    <div className="col-lg-12 d-flex justify-content-center ">
                        {
                            itemCount === 0 // si itemCount es 0, muestro el contador, si no, muestro el boton de finalizar compra
                            ? <div>
                                <ItemCount initiate={itemCount} stock={zapa.stock} onAdd={onAdd} sizesarray={zapa.sizes}  /> 
                                
                            </div>
                            : <div className="gotokart"><Link to='/cart'><button className="button ">Terminar mi compra</button></Link></div>
                        }
                    
                    </div>
                </div>
                <div className="row gallery">
                    <div className="d-flex col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center ">
                        <Gallery zapa={zapa} />
                    </div>
                    <div className="d-flex col-lg-6 col-md-6 col-sm-12 align-items-center ">
                        <div className="description row text-white">
                            <div className=" col-lg-12 col-md-12 col-sm-12">
                                <img src={zapa.logo} alt="logo" className="log"   />
                            </div>
                            <div className="text col-lg-12 col-md-12 col-sm-12">
                                <h1>{zapa.name}</h1>
                                <p>{zapa.description} </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

        </div>
        

        
                
            
            
            
            

        
        
    )
}

export default ItemDetail;