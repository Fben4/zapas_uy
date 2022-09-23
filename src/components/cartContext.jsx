import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); //createContext me permite crear un contexto

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]) //estado global del carrito

    const addItem = (product, quantity, stock) =>{
        isInCart(product.id) ? increase(product.id, quantity, product.stock) : setCartList([...cartList, {...product, quantity}]) //si el producto esta en el carrito, aumento la cantidad, sino lo agrego al carrito
    }

    const isInCart = (id) => cartList.some(item => item.id === id) //funcion que me dice si el producto esta en el carrito

    const increase = (id, quantity, stock) =>{
            setCartList(cartList.map(item => item.id === id ? {...item, quantity: item.quantity + quantity} : item))//recorro el carrito y si el id del producto coincide con el id del producto que quiero aumentar, aumento la cantidad  
            if (cartList.some(item => item.id === id && item.quantity >= stock)) { //si la cantidad del producto es mayor o igual al stock, no lo dejo agregar mas
                alert('No hay mas stock')

            }
    
    }


    
    const howMany = (id) =>{
        return cartList.find(item => item.id === id).quantity //busco el producto en el carrito y devuelvo la cantidad
    }

    const clear = () =>{
        setCartList([])//limpio el carrito
        console.log(cartList)
    }

    
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) //filtro el carrito para que no tenga el producto con el id pasado por parametro
    }
    


    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;