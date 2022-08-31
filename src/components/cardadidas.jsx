import React from 'react';



const Cardadidas = () =>{
    return (
        <div className="container">
    <div className="card card_adidas">
        <div className="imgBx">
            <img src={require('../images/badbunny.png')} />
        </div>
        <div className="contentBx">
            <h2>Bad Bunny x Adidas</h2>

            <a href="#">Buy Now</a>
        </div>
    </div>
</div>
    )
}


export default Cardadidas;