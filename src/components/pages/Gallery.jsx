import React, { useState } from 'react';
import gallery1 from '../../assests/gallery/gallery1.jpeg';
import gallery2 from '../../assests/gallery/gallery2.jpeg';
import gallery3 from '../../assests/gallery/gallery3.jpeg';
import gallery4 from '../../assests/gallery/gallery4.jpeg';
import gallery5 from '../../assests/gallery/gallery5.jpeg';
import gallery6 from '../../assests/gallery/gallery6.jpeg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='p-4' onClick={selectedImage ? closeModal : null}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
                {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((image, index) => (
                    <div key={index} className="relative w-full" style={{ height: '300px' }}>
                        <img
                            className="w-full h-full object-cover rounded-lg hover:scale-105 cursor-pointer"
                            src={image}
                            alt=""
                            onClick={() => openModal(image)}
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <img
                        className="max-h-full max-w-full"
                        src={selectedImage}
                        alt=""
                        onClick={closeModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;