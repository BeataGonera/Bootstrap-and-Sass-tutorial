import { CakeCard } from "./CakeCard";

export const CakesGrid = () => {

    return ( 
        <div className="container">
            <div className="row">
            <div className="col">
            <CakeCard/>
            </div>
            <div className="col">
            <CakeCard/>
            </div>
            <div className="col">
            <CakeCard/>
            </div>
            <div className="col">
            <CakeCard/>
            </div>
        </div>
        </div>
     );
}
 
