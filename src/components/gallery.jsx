import '../styles/gallery.css'

const Gallery = ({ zapa }) => {
    return (
        <div className="darkbox ">
            <div className="row">
                <div className="col-lg-6">
                    <img
                        src={zapa.promo2}
                        alt="shoes"
                        className="img-fluid mb-2 mb-md-4 shadow-1-strong rounded"
                    />
                    <img
                        src={zapa.promo3}
                        alt="red weapon shoes"
                        className="img-fluid shadow-1-strong rounded"
                    />
                </div>
                <div className="col-lg-6">
                    <img
                        src={zapa.promo1}
                        alt="white weapon shoes"
                        className="img-fluid shadow-1-strong rounded"
                    />
                </div>
            </div>
        </div>

    )

}

export default Gallery