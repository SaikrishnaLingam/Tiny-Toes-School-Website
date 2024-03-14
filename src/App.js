//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HomeSlider from "./components/HomeSlider";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const togglePrivacyPolicy = () => {
        setPrivacyPolicy(!privacyPolicy)
    }
    
    return (
        <>
        <Header />
            {!privacyPolicy && (
                <>
                    
                    <Outlet />
                    <HomeSlider />
                    {/* toggle privacy policy in footer */}
                    <Footer />
                </>
            )}

            {privacyPolicy && <PrivacyPolicy />}
        </>
    );
}

export default App;