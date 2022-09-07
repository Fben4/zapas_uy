import React from "react";
import { Link } from "react-router-dom";
import Item from './item';

let cost = 4500;

const Shop = () =>{
    return(
        
        <div className="container-fluid">
            <div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')} 
                        cost={cost}>
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost}>
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')} 
                        cost={cost}>
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Item 
                        name='Air Max 270'
                        thumbnail={require('../images/270.png')}
                        cost={cost} >
                        </Item>
                    </div>
            </div>

            
            
            
            

        </div>
            </div>
        
        
    )
}

export default Shop;