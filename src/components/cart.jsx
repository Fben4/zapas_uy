import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import '../styles/cart.css'


const Cart = () => {
    const ctx = useContext(CartContext);

    return (
        <div >
            <div>
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
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row line ">
                                <div className="col-lg-2 col-md-2 col-sm-12 cartimg "><img className='cartimg img-fluid' src={item.thumbnail} alt="" /></div>
                                <div className=" cartitem col-lg-6 col-md-6 col-sm-12">
                                    <div className="row detail" key={item.id}>
                                        <div className="col-lg-3 col-md-4 col-sm-12 item"><h2>{item.name}</h2> </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 item"><h2>Cantidad : {item.quantity}</h2></div>
                                        <div key={item.size} className="col-lg-3 col-md-4 col-sm-12 item"><h2>Talle : {item.size}</h2></div>
                                        <div className="col-lg-3  col-md-4 col-sm-12 item subtotal"><p>Subtotal: ${item.cost * item.quantity}</p></div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-start align-items-center"><div><button onClick={() => ctx.removeItem(item.id)} className="button ">Remover</button></div></div>
                            </div>


                        </div>

                    )
                    //recorro el carrito y muestro los productos
                    // creo una funcion anonima que llama a la funcion global removeItem y le paso el id del producto
                }

                <div className="sum">
                    <div className="row">
                        <div className="col-lg-6 summary ">
                            <div className="d-flex justify-content-center ">
                                <h2>Total: ${ctx.cartTotal()}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;
 
