//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    // const togglePrivacyPolicy = () => {
    //     setPrivacyPolicy(!privacyPolicy)
    // }

    return (
        <>
            <Header />
            <Outlet />
            {/* set footer equals to false when Privacy Policy is true */}
            <Footer />
        </>
    );
}

export default App;