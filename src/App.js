//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HomeSlider from "./components/HomeSlider";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { useState } from "react";

function App() {
    const [privacyPolicy, setPrivacyPolicy] = useState(true)

    return (
        <>
        <Header />
            {!privacyPolicy && (
                <>
                    
                    <Outlet />
                    <HomeSlider />
                    {/* toggle privacy policy in footer */}
                </>
            )}

            {privacyPolicy && <PrivacyPolicy />}
        </>
    );
}

export default App;