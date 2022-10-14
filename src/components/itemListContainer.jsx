import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import customFetch from '../utils/customFetch';
import {db} from '../utils/firebaseConfig';
import { collection, getDocs, where, query, orderBy} from "firebase/firestore";




const ItemListContainer = () => {
    

    const [zapas, setZapas] = useState([]);
    const {idCategory} = useParams();
    const [loading, setLoading] = useState(true);


    const firebaseFetch = async (idCategory) => {
        const collectionRef = idCategory ? query(collection(db, "zapas"), where("categoryid", "==", parseInt(idCategory))) : collection(db, "zapas");
        getDocs(collectionRef).then((res) => {
            setZapas(res.docs.map((prod) => ({id: prod.id, ...prod.data(), })))
        });
    }
    //componentDidUpdate
    useEffect( () => {
        firebaseFetch(idCategory);
        setLoading(false);
    },[idCategory]);
    
        //componentDidunmount
        useEffect(() => {
            return(() => {
                setZapas([]);
            })
        },[]);
    



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