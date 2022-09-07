import React from 'react';



const Cardvans = (props) =>{
    return (
        <div className="container">
    <div className="card card_vans">
        <div className="imgBx">
            <img src={props.thumbnail}/>
        </div>
        <div className="contentBx">
            <h2>{props.name}</h2>
            <a href="#">Comprar</a>
        </div>
    </div>
</div>

    )
}


export default Cardvans;