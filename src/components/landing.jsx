import Slider from './slider';
import Brands from './brands';
import Card from './card';
import Cardcolor from './cardcolor';
import Cardvans from './cardvans';
import Cardadidas from './cardadidas';
import Air from './air';
import Navbar from './navbar';
import { Link } from 'react-router-dom';




const Landing = () => {
    return (
        
        <div>
            <nav><Navbar/></nav>
            
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
                            <Cardvans />
                        </div>
                        <div className=' col-sm-12 col-lg-3 col-md-6'>
                            <Card />
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'>
                            <Cardcolor />
                        </div>
                        <div className='col-sm-12 col-lg-3 col-md-6'>
                            <Cardadidas />
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