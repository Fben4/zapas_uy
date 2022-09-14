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





const Landing = () => {
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
        </div>

    )
}

export default Landing;