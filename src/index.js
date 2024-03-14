import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import Logo from './components/Logo';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import OurCurriculum from './components/pages/OurCurriculum';
import RegistrationCorner from './components/pages/RegistrationCorner';
import KnowledgeArea from './components/pages/KnowledgeArea';
import Gallery from './components/pages/Gallery';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

// Need to add routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            {/* <Route path='' element={<Logo />}/> */}
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/contact-us' element={<ContactUs />}/>
            <Route path='/our-curriculum' element={<OurCurriculum />}/>
            <Route path='/registration-corner' element={<RegistrationCorner />}/>
            <Route path='/knowledge-area' element={<KnowledgeArea />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
