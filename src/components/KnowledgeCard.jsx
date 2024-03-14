import React from 'react';

const KnowledgeCard = ({ cardKey, title, summary, pic, text, buttoncolor }) => {
    return (
        <div className='flex flex-col bg-slate-100 bg-opacity-85 border-[1px] border-gray-600'>
            <div className='h-60'> 
                <img src={pic} alt={`Blog ${cardKey}`} className='h-full w-full object-cover' /> {/* Ensure the image covers the container */}
            </div>
            <div className='p-4 flex flex-col flex-grow'> 
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-sm text-gray-700 mb-4'>{summary}</p>
                <p className='text-sm text-gray-700 flex-grow'>{text}</p> 
                <button className={`p-4 ${buttoncolor}`}>Read More</button> {/* Use the buttoncolor prop */}
            </div>
        </div>
    );
};

export default KnowledgeCard;