import React, {useState, useEffect} from "react";

export default function WineImage({filename}) {

    const [imageUrl, setImageUrl] = useState('');


    // Fetch the image URL from the server
    useEffect(() => {
        fetch(`http://localhost:3000/wines/${filename}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Image not found');
                }
                return response.blob();
            })
            .then((blob) => {
                setImageUrl(URL.createObjectURL(blob));
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
    }, [filename]);

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Uploaded Image" className="wine--image"/>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}