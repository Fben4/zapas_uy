import { useEffect, useState } from "react";

import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import {db} from '../utils/firebaseConfig';
import { fetchone } from "../utils/fetchone";



const ItemDetailContainer = () => {

    const [zapa, setZapa] = useState({});
    const {idItem} = useParams();
    const [loading, setLoading] = useState(true);





    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso y actualizo el estado
        fetchone(idItem).then((res) => setZapa(res));
        setLoading(false);
        } , [idItem]);

    //componentDidunmount
    useEffect(() => {
        return(() => {
            setZapa({});
        })
    },[]);

    return (
        <div>
            { loading ? <h1>Cargando...</h1> : <ItemDetail zapa={zapa} /> }
        </div>
            // usar nombre de propiedades iguales a los nombres de los atributos de la base de datos


)};
export default ItemDetailContainer;