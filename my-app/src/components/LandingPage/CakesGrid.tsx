import { useEffect, useState, FC } from "react";
import { CakeCard } from "./CakeCard";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from '../../firebase'


interface cake{
    description: string;
    name: string;
    photo: string;
    price: string
}

export const CakesGrid = () => {

    const [cakesToDisplay, setCakesToDisplay] = useState<cake[]>([])


    useEffect(()=> {
        getDocs(collection( db, 'Cakes'))
        .then((querySnapshot) => {
            let cakes: cake[] = [];
            querySnapshot.docs.forEach((doc) => {
                let cakeObject = doc.data() as cake
                cakes.push(cakeObject)
            })
            return cakes
        })
        .then((cakes)=> {
            setCakesToDisplay(cakes)
        })
    },[])

    return ( 
        <div className="container fluid d-flex flex-wrap cakes-to-display-container">
            {cakesToDisplay && cakesToDisplay.map((cake, number) => (
            <CakeCard key={number} name={cake.name} photo={cake.photo} description={cake.description} price={cake.price}/>
            ))      
        }
        </div>


     );
}
 
