import React from 'react'
import Principal from "./components/Principal";
import AdmissionAd from "./components/AdmissionAd";
import UnleashPotential from "./components/UnleashPotential";
import HomeGallery from './components/HomeGallery';
import KnowldegeCorner from "./components/KnowldegeCorner";
import Testimonial from "./components/Testimonials/Testimonial.jsx";
import EducateChildren from "./components/EducateChildren/EducateChildren.jsx";
import HoverCards from "./components/HoverCards.jsx";
import ImageFlip from "./components/ImageFlip.jsx";

const Layout = () => {
    return (
        <>
            
            <Principal />
            <HoverCards />
            <AdmissionAd />
            <ImageFlip />
            <UnleashPotential />
            <EducateChildren />
            <Testimonial />
            <KnowldegeCorner />
            {/* Knowledge Sharing Corner - blog(Knowledge Area) */}
            <HomeGallery />
            {/* Route this View More button in Home Gallery to the Gallery Component in the Pages folder */}
        </>
    )
}

export default Layout