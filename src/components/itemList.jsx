import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import data from "../utils/data";




const ItemList = () => {

    const [zapas, setZapas] = useState([]);

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso
        
        customFetch(2000, data)
        .then(result => setZapas(result))
        .catch(error => console.log(error))
    },[]);



    return(
        <>
        
        {
        zapas.map(item => (
                <Item 
                key={item.id}
                name= {item.name}
                thumbnail={item.thumbnail}
                cost={item.cost}
                stock={item.stock}
            />
            ))
        }

        </>

    
    )
}




export default ItemList;