import React from 'react';
import { useInView } from 'react-intersection-observer';

const withScrollAnimation = (WrappedComponent) => {
    return (props) => {
        const { ref, inView } = useInView({
            threshold: 0.2, // Adjust threshold as needed
        });

        return (
            <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-20'} transition-opacity duration-000`}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withScrollAnimation;