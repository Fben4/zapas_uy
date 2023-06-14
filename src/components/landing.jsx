import Slider from './slider';
import Brands from './brands';
import Card from './card';
import Cardcolor from './cardcolor';
import Cardvans from './cardvans';
import Cardadidas from './cardadidas';
import Air from './air';
import { Link } from 'react-router-dom';
import Gallery from './gallery';
import { useEffect, useState } from "react";
import { fetchone } from '../utils/fetchone';




const Landing = () => {

    const [zapa1, setZapa1] = useState({});
    const [zapa2, setZapa2] = useState({});
    const [zapa3, setZapa3] = useState({});

    //componentDidMount
    // useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso 
    //     customFetch(2000, data[2]) //funciona con 0 y 2 por ahora
    //         .then(result => setZapa(result))
    //         .catch(error => console.log(error))}
    //         , []);


    useEffect(() => { // funciones a ejecutar cuando se monta el componente, consulto base de datos en este caso y actualizo el estado
        fetchone('3').then((res) => setZapa1(res));
        fetchone('4').then((res) => setZapa2(res));
        fetchone('2').then((res) => setZapa3(res));
    }, []);

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
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center'>


                    <div className='col-sm-12 col-lg-4 col-md-3'>
                        <Gallery zapa={zapa1}></Gallery>
                    </div>
                    <div className='col-sm-12 col-lg-4 col-md-3'>
                        <Gallery zapa={zapa2}></Gallery>
                    </div>
                    <div className='col-sm-12 col-lg-4 col-md-3'>
                        <Gallery zapa={zapa3}></Gallery>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Landing;