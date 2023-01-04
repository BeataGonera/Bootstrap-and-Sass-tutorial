import { NavBar } from '../NavBar/NavBar'
import { Carousel } from './Carousel';

export const LandingPage = () => {
    return ( 
        <>
        <NavBar/>
        <Carousel/>

        <section id="theme-line">

            <div id='theme-line-container'>

                <div className='pink-rectangle bg-primary'>
                    <h1 className="display-1 lead">Delicious cakes and cookies made from natural ingredients.</h1>
                </div>

                <svg id="animated-dashed-rectangle">
                    <rect id='stroke'/>
                </svg>

            </div>
            
        </section>
        </>
     );
}
 
