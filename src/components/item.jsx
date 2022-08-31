import React from 'react';


const Item = () =>{
    return (
        <div className="container sneakers">
    <div className="card">
        <div className="imgBx">
            <img src={require('../images/270.png')} />
        </div>
        <div className="contentBx">
            <h2>Air Max 270</h2>

            <a href="# ">Buy Now</a>
        </div>
    </div>
</div>
    )
}


export default Item;