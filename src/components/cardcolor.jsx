import React from 'react';



const Cardcolor = () =>{
    return (
        <div className="container">
    <div className="card card_orange">
        <div className="imgBx">
            <img src={require('../images/airmax.png')} />
        </div>
        <div className="contentBx">
            <h2>Air Max 97</h2>

            <a href="#">Buy Now</a>
        </div>
    </div>
</div>
    )
}


export default Cardcolor;