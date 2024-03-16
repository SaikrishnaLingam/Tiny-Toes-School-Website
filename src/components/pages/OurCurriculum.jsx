import React from 'react'
import KnowledgeCorner from '../KnowldegeCorner'
import withScrollAnimation from '../withScrollAnimation';

const OurCurriculum = () => {
    return (
        <div>
            <KnowledgeCorner />
        </div>
    )
}

export default withScrollAnimation(OurCurriculum)