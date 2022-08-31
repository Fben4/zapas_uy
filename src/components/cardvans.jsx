import React from 'react';



const Cardvans = () =>{
    return (
        <div className="container">
    <div className="card card_vans">
        <div className="imgBx">
            <img src={require('../images/vanspro.png')} />
        </div>
        <div className="contentBx">
            <h2>Vans Pro</h2>

            <a href="#">Buy Now</a>
        </div>
    </div>
</div>
    )
}


export default Cardvans;