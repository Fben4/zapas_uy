import React from "react";
import { Link } from "react-router-dom";
import Item from './item';
import Navbar from "./navbar";

const Shop = () =>{
    return(
        
        <div className="container-fluid">
            
            <div>
                <div className="row">
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
            </div>
            <div className="row">
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
                    <div className="col">
                        <Item/>
                    </div>
            </div>

            
            
            
            

        </div>
            </div>
        
        
    )
}

export default Shop;