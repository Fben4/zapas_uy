import React from 'react';


const Card = (props) =>{
    return (
        <div className="container sneakers">
    <div className="card">
        <div className="imgBx">
            <img src={props.thumbnail} />
        </div>
        <div className="contentBx">
            <h2>{props.name}</h2>
            <a href="# ">Comprar</a>
        </div>
    </div>
</div>
    )
}


export default Card;