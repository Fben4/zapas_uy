import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import  data  from "../utils/data";
import ItemDetail from "./itemDetail";



const ItemDetailContainer = () => {

    const [zapa, setZapa] = useState({});

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso 
        customFetch(2000, data[2]) //funciona con 0 y 2 por ahora
            .then(result => setZapa(result))
            .catch(error => console.log(error))}
            , []);

    return (
        <ItemDetail zapa={zapa} /> // usar nombre de propiedades iguales a los nombres de los atributos de la base de datos


)};
export default ItemDetailContainer;