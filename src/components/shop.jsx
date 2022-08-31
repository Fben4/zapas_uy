import React from "react";
import { Link } from "react-router-dom";
import Card from './card';
import Cardcolor from './cardcolor';
import Cardvans from './cardvans';
import Cardadidas from './cardadidas';
import Navbar from "./navbar";

const Shop = () =>{
    return(
        <div>
            <div><Navbar/></div>
            <div container>
                <div className="row">
                    <div className="col">
                        <Card/>
                    </div>
                    <div className="col">
                        <Cardcolor/>
                    </div>
                    <div className="col">
                        <Cardvans/>
                    </div>
                    <div className="col">
                        <Cardadidas/>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <Card/>
                    </div>
                    <div className="col">
                        <Cardcolor/>
                    </div>
                    <div className="col">
                        <Cardvans/>
                    </div>
                    <div className="col">
                        <Cardadidas/>
                    </div>
            </div>

            
            
            
            

        </div>
            </div>
        
        
    )
}

export default Shop;