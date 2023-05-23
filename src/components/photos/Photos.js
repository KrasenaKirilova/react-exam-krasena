import { useEffect, useState } from 'react';
import { Photo } from "../photo/Photo";

export const Photos = () => {

    const baseUrl = 'https://dog.ceo/api/breeds/image/random';


    const [photos, setPhotos] = useState([]);

    useEffect (() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(result =>setPhotos(result))
        .catch(error => console.log(error))
        .finally(() => console.log('DONE'))
    }, []);
        
        
    return (
        <>
            <h1>Photo here:</h1>
            {photos.length > 0 && photos.map(x => <div><Photo photo={x} key={x.id}/></div>)}
            
        </>
    );
    
}