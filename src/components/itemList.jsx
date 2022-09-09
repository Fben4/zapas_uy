import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';


const zapasfromBD = [
    {
        id: 1,
        name:'Air Max 270',
        thumbnail:require('../images/270.png') ,
        cost:5500 ,
        stock:4
    },
    {
        id: 2,
        name:'Air Max 90',
        thumbnail:require('../images/airmax.png') ,
        cost:8000 ,
        stock:3
    },
    {
        id: 3,
        name:'Converse Weapon Hombre',
        thumbnail:require('../images/weapon.png') ,
        cost:9000 ,
        stock:6
    },
    {
        id: 4,
        name:'Adidas x Bad Bunny',
        thumbnail:require('../images/badbunny.png') ,
        cost:8000 ,
        stock:8
    },
    {
        id: 5,
        name:'Vans SK9 Hi',
        thumbnail:require('../images/vanspro.png') ,
        cost:6000 ,
        stock:7
    },
    {
        id: 6,
        name:'Puma Wild Rider',
        thumbnail:require('../images/wildrider.png') ,
        cost:7000 ,
        stock:4
    }
]

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