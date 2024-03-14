//import './App.css';
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HomeSlider from "./components/HomeSlider";

function App() {
    return (
        <>
            <Header />
            <Outlet />

            <HomeSlider />
        </>
    );
}

export default App;
