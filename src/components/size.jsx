
import '../styles/size.css';
import { useState } from "react";




const SizeSelector = (sizesarray ) =>{

    const [size, setSize] = useState(0);

    const select = (e) => {
        setSize(e.target.value);

    }

    
    return(
        <div className="container d-flex justify-content-center align-items-center">

                    <div className="select">
                        <h2 className='text-center'>Selecciona un tamaño</h2>
                        <div className='bar'>
                        {
                            sizesarray.sizesarray?.map(size => 
                                    <div key={size}  className="size">
                                        <button value={size} onClick={select}  className='button size_option' >{size}</button>
                                    </div>
                            
                            )
                        }
                        
                        </div>
                        
                    </div>

        </div>
        
    )

    

}


export default SizeSelector;
