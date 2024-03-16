import React from 'react'
import Principal from "./components/Principal";
import AdmissionAd from "./components/AdmissionAd";
import UnleashPotential from "./components/UnleashPotential";
import HomeGallery from './components/HomeGallery';
import KnowldegeCorner from "./components/KnowldegeCorner";
import Testimonial from "./components/Testimonials/Testimonial.jsx";
import EducateChildren from "./components/EducateChildren/EducateChildren.jsx";
import ImageFlip from "./components/ImageFlip.jsx";
import HomeSlider from "./components/HomeSlider.jsx";
import HoverComponent from './components/HoverCard/HoverComponent.jsx';
import BlogPage from './components/Blog/BlogPage.jsx';

const Layout = () => {
    return (
        <>
            <HomeSlider />
            <Principal />
            <HoverComponent />
            <AdmissionAd />
            <ImageFlip />
            <UnleashPotential />
            <EducateChildren />
            <Testimonial />
            <KnowldegeCorner />
            <HomeGallery />
        </>
    )
}

export default Layout