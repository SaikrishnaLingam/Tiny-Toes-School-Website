import React from 'react'
import RegisterButton from '../RegisterButton'

const CardComponent = ({ pic, cardColor, title, content, age, seats, index }) => {
    return (
        <div className={`py-4 ${cardColor} flex flex-col items-center`}>
            <div>
                <img src={pic} alt={title} />
            </div>
            <div className='font-bold text-2xl p-2 md:p-4'>{title}</div>
            <div className='px-2 lg:px-10 text-center overflow-hidden h-20'>{content}</div>
            <div className='h-8'>{age}</div>
            <div className='h-8'>{seats}</div>
            {
                index % 2 === 0 
                    ? <div className="self-end"><RegisterButton id={0} /></div> 
                    : <div className="self-start"><RegisterButton id={1} /></div>
            }
        </div>
    )
}

export default CardComponent