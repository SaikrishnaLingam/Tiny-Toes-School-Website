//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { useState } from "react";
import Footer from "./components/Footer";
import HomeSlider from "./components/HomeSlider";

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
                <HomeSlider />
                <Outlet />
                {/* make buttons functinal */}
                    
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