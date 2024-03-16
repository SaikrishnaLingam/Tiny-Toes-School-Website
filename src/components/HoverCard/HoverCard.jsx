// HoverCard.jsx
import React, { useState } from 'react';

const HoverCard = ({ data }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div
            className="relative  m-4 overflow-hidden cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <img src={data.hoverPic} alt={data.title} className="w-full h-full object-cover" />
            <div className={`absolute bottom-0 left-0 right-0 p-4 ${data.hoverColor} ${hovered ? 'h-3/4' : 'h-1/4'} transition-all duration-300 ease-in-out`}>
                <h2 className="text-white text-xl font-semibold">{data.title}</h2>
                <p className="text-white">{data.content}</p>
            
            {hovered && (
                <div className={`absolute bottom-0 left-0 right-0 p-4  text-white`}>
                    <p>{data.popup}</p>
                </div>
            )}
            </div>
        </div>
    );
};

export default HoverCard;