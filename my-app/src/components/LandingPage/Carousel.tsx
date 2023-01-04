import cake1 from '../../img/cakes7.jpeg'
import cake2 from '../../img/cake10.png'
import cake3 from '../../img/cake3.jpeg'
import cake4 from '../../img/cake4.jpeg'

export const Carousel = () => {
    return ( 
        <div className='cakes-carousel-container'>

          <div id="cakes-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#cakes-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#cakes-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#cakes-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cake1} className="d-block" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={cake4} className="d-block" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={cake2} className="d-block" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cakes-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cakes-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
     );
}
 
