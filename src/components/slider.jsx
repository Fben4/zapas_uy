import React from 'react';


const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner slide">
                <div className="carousel-item item1 active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F1.jpg?alt=media&token=1a217320-f89f-4dab-93d0-8577a3d1dda6" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item item2">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2F6.jpg?alt=media&token=d115ca3b-57dc-4ba2-9621-ba1c892f1018" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item item3">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zapas-uy.appspot.com/o/images%2Fold-skool-lite-vs-old-skool.jpg?alt=media&token=1e5f7746-13f3-492e-9a74-76c95d1352b4" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;