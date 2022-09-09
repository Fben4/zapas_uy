import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import zapasfromBD from "../utils/data";




const ItemList = () => {

    const [data, setData] = useState([]);

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso
        
        customFetch(2000, zapasfromBD)
        .then(datos => setData(zapasfromBD))
        .catch(error => console.log(error))
    },[]);



    return(
        <>
        
        {
        data.map(item => (
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