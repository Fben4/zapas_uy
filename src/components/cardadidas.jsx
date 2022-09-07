import React from 'react';



const Cardadidas = (props) =>{
    return (
        <div className="container">
    <div className="card card_adidas">
        <div className="imgBx">
            <img src={props.thumbnail} />
        </div>
        <div className="contentBx">
            <h2>{props.name}</h2>

            <a href="#">Buy Now</a>
        </div>
    </div>
</div>
    )
}


export default Cardadidas;