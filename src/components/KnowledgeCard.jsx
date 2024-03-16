import React from 'react';
import { Link } from 'react-router-dom';

const KnowledgeCard = ({ cardKey, title, summary, pic, text, buttoncolor }) => {
    return (
        <div className='flex flex-col bg-slate-100 bg-opacity-85 border-[1px] border-gray-600'>
            <div className='h-60'> 
                <img src={pic} alt={`Blog ${cardKey}`} className='h-full w-full object-cover' /> 
            </div>
            <div className='p-4 flex flex-col flex-grow'> 
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p className='text-sm text-gray-700 mb-4'>{summary}</p>
                <p className='text-sm text-gray-700 flex-grow'>{text}</p> 
                {/* Link the button to the respective blog using the blog's ID */}
                <Link to={`/blog/${cardKey}`} className={`p-4 ${buttoncolor}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default KnowledgeCard;
