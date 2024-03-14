//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HomeSlider from "./components/HomeSlider";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { useState } from "react";
import Footer from "./components/Footer";
import Principal from "./components/Principal";
import AdmissionAd from "./components/AdmissionAd";

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
                    <HomeSlider />
                    <Principal />
                    <AdmissionAd />
                    {/* toggle privacy policy in footer */}
                    {/* set up routes and links in footer */}
                    <Footer setPrivacyPolicy={setPrivacyPolicy}/>
                </>
            )}

            {privacyPolicy && <PrivacyPolicy />}
        </>
    );
}

export default App;