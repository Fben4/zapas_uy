import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import customFetch from '../utils/customFetch';
import data from "../utils/data";
import {db} from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";




const ItemListContainer = () => {
    

    const [zapas, setZapas] = useState([]);
    const {idCategory} = useParams();
    const [loading, setLoading] = useState(true);

    //componentDidUpdate
    useEffect(async () => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        setZapas(dataFromFirestore);
        
    },[zapas]);
    
    //componentDidunmount

    useEffect(() => {
        return () => {
            console.log('desmontado');
        }
    },[])



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