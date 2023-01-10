import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from 'react';
import { storage } from '../../firebase';


export const CakeCard = () => {

    const [url, setUrl] = useState('');

    useEffect(() => {

    },[])

    useEffect(() => {
        getDownloadURL(ref(storage, 'images/cake4.jpeg'))
        .then((url) => {
            setUrl(url)
        })
        .catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                  // File doesn't exist
                  break;
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
                case 'storage/unknown':
                  // Unknown error occurred, inspect the server response
                  break;
            }
        });
    },[])
    

    return ( 


        <div className="card" style={{width: '18rem'}}>
        <img src={url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">
                <i className="bi bi-cart"></i>
                Add to cart</a>
        </div>
        </div>     
     );
}
 
