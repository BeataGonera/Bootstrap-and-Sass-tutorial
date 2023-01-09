import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar'
import { Carousel } from './Carousel';
import { ThemeLine } from './themeLine';



export const LandingPage = () => {

    return ( 
        <>
        <NavBar/>
        <Carousel/>

        <section id="theme-line">

            <div id='theme-line-container'>

                <div className='pink-rectangle bg-primary'>
                    <h1 className="display-1 lead"><ThemeLine text={'  Delicious cakes and cookies made from natural ingredients.'}/></h1>
                </div>

                <svg id="animated-dashed-rectangle">
                    <rect id='stroke'/>
                </svg>

                <div id='button-chevron-down'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle id='biggest-circle' cx="45" cy="45" r="45" />
                            <circle id='rotating-circle' cx="50%" cy="50%" r="35" />
                            <text id="chd" x='35' y='55' fill='black'>&#xF282;</text>
                        </g>
                    </svg>
                    
                </div>

            </div>
        </section>

        <Footer/>
        </>
     );
}
 
