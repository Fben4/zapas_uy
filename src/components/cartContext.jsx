import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); //createContext me permite crear un contexto

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]) //estado global del carrito


    const addItem = (product, quantity, size) =>{
        isInCart (product.id,size) ? increase(product.id, quantity,size) : setCartList([...cartList, {...product, quantity, size}])
    
    }

    const isInCart = (id,size) => cartList.some(item => item.id === id && size === item.size) //funcion que me dice si el producto esta en el carrito

    const increase = (id, quantity, stock,size) =>{
        if (cartList.some(item => item.id === id && item.quantity >= stock)) { //si la cantidad del producto es mayor o igual al stock, no lo dejo agregar mas
            alert('No hay mas stock')

        }
        else if (cartList.some(item => item.id === id &&  quantity <= stock && size === item.size)) { //si la cantidad del producto es menor o igual al stock, lo dejo agregar mas
            setCartList(cartList.map(item => item.id === id ? {...item, quantity: item.quantity + quantity} : item))//recorro el carrito y si el id del producto coincide con el id del producto que quiero aumentar, aumento la cantidad  
        } 
    }

    const cartQuantity = () => {
        let quantities = cartList.map(item => item.quantity) //recorro el carrito y guardo las cantidades en un array
        let total = quantities.reduce((previousValue, CurrentValue) => previousValue + CurrentValue, 0) //sumo las cantidades
        return total
    }


    const cartTotal = () => {
        return cartList.map(item => item.cost * item.quantity).reduce((previousValue, CurrentValue) => previousValue + CurrentValue, 0) //recorro el carrito y multiplico el costo por la cantidad, luego sumo los resultados
    }



    const clear = () =>{
        setCartList([])//limpio el carrito
    }

    
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) //filtro el carrito para que no tenga el producto con el id pasado por parametro
    }
    


    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;
