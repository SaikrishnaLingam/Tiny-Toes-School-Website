//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HomeSlider from "./components/HomeSlider";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { useState } from "react";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import AdmissionAd from "./components/AdmissionAd";
import UnleashPotential from "./components/UnleashPotential";
import HomeGallery from './components/HomeGallery';
import KnowldegeCorner from "./components/KnowldegeCorner";
import Testimonial from "./components/Testimonial";

function App() {
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    // const togglePrivacyPolicy = () => {
    //     setPrivacyPolicy(!privacyPolicy)
    // }
    
    return (
        <>
        <Header />
            {!privacyPolicy && (
                <>
                <Outlet />
                {/* make buttons functinal */}
                    <HomeSlider />
                    <Principal />
                    {/* Cards */}
                    <AdmissionAd />
                    {/* Embrace Learning section */}
                    <UnleashPotential />
                    {/* Educate for children */}
                    <Testimonial />
                    <KnowldegeCorner />
                        {/* Knowledge Sharing Corner - blog(Knowledge Area) */}
                    <HomeGallery /> 
                        {/* Route this View More button in Home Gallery to the Gallery Component in the Pages folder */}
                    <Footer setPrivacyPolicy={setPrivacyPolicy}/>
                    {/* toggle privacy policy in footer */}
                    {/* set up routes and links in footer */}
                    {/* make footer responsive */}
                </>
            )}

            {privacyPolicy && <PrivacyPolicy />}
        </>
    );
}

export default App;