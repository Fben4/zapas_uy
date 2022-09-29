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
    const [loading, setLoading] = useState(true);
    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso
        if (idCategory){
            customFetch(2000, data.filter(item => item.categoryid == idCategory)) //filter devuelve un array con los elementos que cumplen la condicion
        .then(result => setZapas(result))
        .then(() => setLoading(false))
        .catch(error => console.log(error))
        }
        else{
            customFetch(2000, data)//filter devuelve un array con los elementos que cumplen la condicion
        .then(result => setZapas(result))
        .then(() => setLoading(false))
        .catch(error => console.log(error))
        }
        
    },[idCategory]);
        



    return(
        <>
        {
            loading ? <h1>Cargando...</h1> :   <div className='container-fluid text-center'>
            <div className='row'>
                {
                        zapas.map(zapa => <div key={zapa.id} className="col-lg-3 col-md-6 col-sm-12"><Item key={zapa.id} {...zapa} /></div>)
                }
                
            </div>
        </div>
        }
        </>
            

    )
    
}


export default ItemListContainer;