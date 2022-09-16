import Slider from './slider';
import Brands from './brands';
import Card from './card';
import Cardcolor from './cardcolor';
import Cardvans from './cardvans';
import Cardadidas from './cardadidas';
import Air from './air';
import Navbar from './navbar';
import ItemCount from './itemCount';
import ItemListContainer from './itemListContainer';
import { Link } from 'react-router-dom';
import ItemDetailContainer from './itemDetailContainer';
import Gallery from './gallery';
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import  data  from "../utils/data";





const Landing = () => {

    const [zapa, setZapa] = useState({});

    //componentDidMount
    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso 
        customFetch(2000, data[3]) //funciona con 0 y 2 por ahora
            .then(result => setZapa(result))
            .catch(error => console.log(error))}
            , []);
            


    return (
        
        <div>
            
            <div>
                <Slider />
            </div>
            <div>
                <Brands />
            </div>
            <div className='cards'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-3 col-md-6 '>
                            <Cardvans
                            name='Vans SK9 Hi'
                            thumbnail={require('../images/vanspro.png')}>
                            </Cardvans>
                        </div>
                        <div className=' col-sm-12 col-lg-3 col-md-6'>
                            <Card
                            name='Air Max 270'
                            thumbnail={require('../images/270.png')}

                            >
                            </Card>
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'>
                            <Cardcolor
                            name='Air Max 97'
                            thumbnail={require('../images/airmax.png')}>
                            </Cardcolor>
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'>
                            <Cardadidas
                            name='Adidas x Bad Bunny'
                            thumbnail={require('../images/badbunny.png')}>
                            </Cardadidas>
                        </div>

                    </div>

                </div>

            </div>
            <div className='container'>
                <Air />
            </div>
            <div className='container'>
                <div className='row'> 


                    <div className='col-sm-12 col-lg-4 col-md-6'>
                        <Gallery zapa={zapa}></Gallery>
                    </div>
                    <div className='col-sm-12 col-lg-4 col-md-6'>
                        <Gallery zapa={zapa}></Gallery>
                    </div>
                    <div className='col-sm-12 col-lg-4 col-md-6'>
                        <Gallery zapa={zapa}></Gallery>
                    </div>


                </div>
                
            </div>
        </div>

    )
}

export default Landing;