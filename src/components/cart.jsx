import { useContext } from "react";
import { CartContext } from "./cartContext";


const Cart = () =>{
    const ctx = useContext(CartContext);
    
    return(
        <div>
            <h1>Bienvenido a tu carrito</h1>
            <button onClick={ctx.clear} className="button">Limpiar Carrito</button>
            {
                ctx.cartList.map(item => <li> {item.name} Cantidad : {item.quantity} <button onClick={() => ctx.removeItem(item.id)}  className="button ">Remover</button></li>)
            //recorro el carrito y muestro los productos
            // creo una funcion anonima que llama a la funcion global removeItem y le paso el id del producto
            } 
        </div>
    )
}

export default Cart;