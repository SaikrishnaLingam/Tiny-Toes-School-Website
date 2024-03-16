import React from 'react';
import KnowledgeCard from './KnowledgeCard';
import { blogData } from './Blog/BlogData';

const KnowledgeCorner = () => {
    return (
        <div className='bg-teal-300'>
            <div className='font-bold text-4xl py-5 text-center'>Knowledge Sharing Corner</div>
            <div className='grid grid-cols-1 md:grid-cols-4 px-4 gap-9 xl:gap-8 md:px-6 xl:mx-32 pb-4'>
                {blogData.map((item) => (
                    <KnowledgeCard
                        cardKey={item.id}
                        title={item.title}
                        summary={item.summary}
                        pic={item.pic}
                        buttoncolor={item.buttoncolor}
                        //text={item.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default KnowledgeCorner;