import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import  data  from "../utils/data";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {

    const [zapa, setZapa] = useState({});
    const {idItem} = useParams();

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso 
        if (idItem){
            customFetch(2000, data.find(item => item.id == idItem)) 
            .then(result => setZapa(result))
            .catch(error => console.log(error))}
        } , [idItem]);

    return (
        <ItemDetail zapa={zapa} /> // usar nombre de propiedades iguales a los nombres de los atributos de la base de datos


)};
export default ItemDetailContainer;