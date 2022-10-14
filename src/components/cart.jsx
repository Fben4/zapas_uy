import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import '../styles/cart.css'
import {doc , setDoc, collection, updateDoc,serverTimestamp, increment } from 'firebase/firestore'
import { db } from "../utils/firebaseConfig";

const Cart = () => {
    const ctx = useContext(CartContext);

    const createorder = async ()  =>{
        
        

        let order = {
            buyer: {
                name: 'Juan',
                phone: '0987654321',
                email: 'arbol@gmail.com'
            },
            date: serverTimestamp(),
            items : ctx.cartList.map(item => {
                return {
                    id: item.id,
                    title: item.name,
                    price: item.cost,
                    quantity: item.quantity
                }
            }),
            total: ctx.cartTotal()
            
        
            
        }
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        alert('Orden creada ' + newOrderRef.id);
        
        ctx.cartList.map( async(item) => {
            const itemRef = doc(db, "zapas", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity),
                sales : increment(item.quantity)
            });
        })
        ctx.clear()
    }



    return (
        <div >
            <div >
                <h1 className="text-center">Bienvenido a tu carrito</h1>

                {
                    ctx.cartList.length > 0
                        ? <div className="d-flex justify-content-center container caja ">
                            <button onClick={ctx.clear} className="button">Limpiar Carrito</button>
                        </div>
                        : <div><h3 className="text-center ">No hay productos en el carrito</h3>
                            <div className="d-flex justify-content-center"><Link to='/itemListContainer'><button className="button">Seguir comprando</button></Link>
                            </div>
                        </div>
                }
                
                { //size selector
                    ctx.cartList.map(item =>
                        <div className="container-fluid  d-flex justify-content-center">
                            <div className="row line ">
                                <div className="col-lg-2 col-md-2 col-sm-12 cartimg coly"><img className='cartimg img-fluid' src={item.thumbnail} alt="" /></div>
                                <div className=" cartitem col-lg-8 col-md-8 col-sm-12 ">
                                    <div className="row detail" key={item.id}>
                                        <div className="col-lg-3 col-md-3 col-sm-12 items "><h3>{item.name}</h3> </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 items"><h3>Cantidad : {item.quantity}</h3></div>
                                        <div key={item.size} className="col-lg-3 col-md-3 col-sm-12 items"><h3>Talle : {item.size}</h3></div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 items subtotal"><h3>Subtotal: ${item.cost * item.quantity}</h3></div>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center align-items-center"><div><button onClick={() => ctx.removeItem(item.id)} className="button ">Remover</button></div></div>
                            </div>


                        </div>

                    )
                    //recorro el carrito y muestro los productos
                    // creo una funcion anonima que llama a la funcion global removeItem y le paso el id del producto
                }
                
                {
                    ctx.cartList.length > 0 
                    ? 
                    <div className="container-fluid">
                        <div className="row ">
                        <div className=" col-lg-4 col-sm-12 col-md-6 d-flex justify-content-center resumen">
                            <div className="row summary ">
                                <div className="col-lg-12 total-title "><h2>Resumen de compra</h2></div>
                                {
                                    ctx.cartList.map(item => <div key={item.id} className="sum "><p >{item.name} x {item.quantity} = ${item.cost * item.quantity}</p></div>)
                                }
                                <div className="col-lg-12 total"><p>Total: ${ctx.cartTotal()}</p></div>
                                <button onClick={createorder} className="button">Finalizar compra</button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                                
                        </div>
                                
                    </div>
                    </div>
                    
                
                : null
                }


            </div>

        </div>
    )
}

export default Cart;
 
