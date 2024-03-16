import React from 'react'
import KnowledgeCorner from '../KnowldegeCorner'
import withScrollAnimation from '../withScrollAnimation';

const KnowledgeArea = () => {
    return (
        <div>
            <KnowledgeCorner />
        </div>
    )
}

export default withScrollAnimation(KnowledgeArea)