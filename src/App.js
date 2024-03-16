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






//Form with whatsapp
// import React, { useState } from 'react';

// const App = () => {
//     const [formData, setFormData] = useState({ name: '', email: '' });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         // Basic validation
//         if (!formData.name) {
//             setErrors((prevErrors) => ({ ...prevErrors, name: 'Required' }));
//             setIsSubmitting(false);
//             return;
//         }
//         if (!formData.email) {
//             setErrors((prevErrors) => ({ ...prevErrors, email: 'Required' }));
//             setIsSubmitting(false);
//             return;
//         }

//         const data = {
//             Id: Math.floor(Math.random() * 1000), // Generating a random Id for demonstration
//             Name: formData.name,
//             Email: formData.email,
//             "Created at": new Date()
//         };

//         fetch("https://sheet.best/api/sheets/4cd8701c-b5b2-4732-97b0-e3d6fc73bc45", {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         })
//             .then((r) => r.json())
//             .then((responseData) => {
//                 console.log("Form data sent:", responseData);
//                 setIsSubmitting(false);
//                 setFormData({ name: '', email: '' }); // Reset form fields after successful submission
//             })
//             .catch((error) => {
//                 console.error("Error submitting form data:", error);
//                 setIsSubmitting(false);
//             });
//     };

//     return (
//         <div>
//             <h1>Simple Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                     {errors.name && <div>{errors.name}</div>}
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <div>{errors.email}</div>}
//                 </div>
//                 <button type="submit" disabled={isSubmitting}>
//                     Submit
//                 </button>
//             </form>
//             {formData.name && formData.email && (
//                 <div>
//                     <h2>Form Submission Data</h2>
//                     <pre>{JSON.stringify(formData, null, 2)}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;