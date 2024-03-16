import React from 'react';
import gallery1 from '../../assests/gallery/gallery1.jpeg';
import gallery2 from '../../assests/gallery/gallery2.jpeg';
import gallery3 from '../../assests/gallery/gallery3.jpeg';
import gallery4 from '../../assests/gallery/gallery4.jpeg';
import gallery5 from '../../assests/gallery/gallery5.jpeg';
import gallery6 from '../../assests/gallery/gallery6.jpeg';

const Gallery = () => {
    return (
        <div className='p-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className="relative w-full" style={{height: '300px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery1} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '200px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery2} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '400px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery3} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="relative w-full" style={{height: '150px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery4} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '500px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery5} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '250px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery6} alt="" />
                    </div>
                </div>
                {/* Repeat the same pattern for the other grid containers */}
                <div className="grid gap-4">
                    <div className="relative w-full" style={{height: '180px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery3} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '420px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery1} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '300px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery2} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="relative w-full" style={{height: '280px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery6} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '220px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery4} alt="" />
                    </div>
                    <div className="relative w-full" style={{height: '420px'}}> {/* Set a different height for each image container */}
                        <img className="w-full h-full object-cover rounded-lg" src={gallery5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
