import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import customFetch from '../utils/customFetch';
import data from "../utils/data";




const ItemListContainer = () => {

    const [zapas, setZapas] = useState([]);
    const {idCategory} = useParams();

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso
        if (idCategory){
            customFetch(2000, data.filter(item => item.categoryid == idCategory)) //filter devuelve un array con los elementos que cumplen la condicion
        .then(result => setZapas(result))
        .catch(error => console.log(error))
        }
        else{
            customFetch(2000, data)//filter devuelve un array con los elementos que cumplen la condicion
        .then(result => setZapas(result))
        .catch(error => console.log(error))
        }
        
    },[idCategory]);



    return(
        <>
        
        {
        
        zapas.map(item => (
            <div className="row">
                <Item className="col-lg-3 col-md-4 col-sm-12"
                    key={item.id}
                    id={item.id}
                    name= {item.name}
                    thumbnail={item.thumbnail}
                    cost={item.cost}
                    stock={item.stock}
            />

            </div>
                
            

            ))
        }

        </>

    
    )
}




export default ItemListContainer;