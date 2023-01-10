import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState, FC } from 'react';
import { storage } from '../../firebase';


interface CakeCard{
  name: string;
  photo: string;
  description: string;
  price: string;
}

export const CakeCard:FC<CakeCard> = ({name, photo, description, price}) => {
    

    return ( 
        <div className="card" style={{width: '18rem'}}>
          <div className='picture-container'>
        <img src={photo} className="card-img-top" alt={name}/>
          </div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text-container">
            <p className="card-text">{description}</p>
            </div>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i>
                Add to cart</a>

            <a href="#" className="card-link">Details</a>
            <a href="#" className="card-link">Ingredients</a>
        </div>
        </div>     
     );
}
 
