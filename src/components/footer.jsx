import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';


const footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                                <FontAwesomeIcon icon={faLocationDot} className='icon'  />
                            <div className="cta-text">
                                <h4>Encuentranos</h4>
                                <span>Punta Carretas Shopping , Piso 2 , 14</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faPhone} className='icon'  />
                            <div className="cta-text">
                                <h4>Llamanos</h4>
                                <span>099999999</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={faEnvelope} className='icon'  />
                            <div className="cta-text">
                                <h4>Mandanos un correo</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={require('../images/zapasiso.png')} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Siguenos</span>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} className='social-icon'  /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} className='social-icon'  /></a>
                                <a href="#"><FontAwesomeIcon icon={faTiktok} className='social-icon'  /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Marcas</h3>
                            </div>
                            <ul>
                                <li><a href="#">Nike</a></li>
                                <li><a href="#">Adidas</a></li>
                                <li><a href="#">Puma</a></li>
                                <li><a href="#">Vans</a></li>
                                <li><a href="#">Reebook</a></li>
                                <li><a href="#">Converse</a></li>
                                <li><a href="#">New Balance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>No te pierdas de nuestros drops</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email"/>
                                    <button className="d-flex justify-content-center"> <FontAwesomeIcon icon={faPaperPlane} className='icon icon-white' /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="#">Franco Benitez y Ferrer</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Sobre nosotros</a></li>
                                <li><a href="#">Contactanos</a></li>
                                <li><a href="#">Mi cuenta</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default footer;