import React from 'react'
import EducateChildren from '../EducateChildren/EducateChildren';
import withScrollAnimation from '../withScrollAnimation';

const OurCurriculum = () => {
    return (
        <div>
            <EducateChildren />
        </div>
    )
}

export default withScrollAnimation(OurCurriculum)