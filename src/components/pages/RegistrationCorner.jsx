//Form with whatsapp
import React, { useState } from 'react';

const RegistrationCorner = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Basic validation
        if (!formData.name) {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Required' }));
            setIsSubmitting(false);
            return;
        }
        if (!formData.email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Required' }));
            setIsSubmitting(false);
            return;
        }

        const data = {
            Id: Math.floor(Math.random() * 1000), // Generating a random Id for demonstration
            Name: formData.name,
            Gender: formData.gender,
            Age: formData.age,
            Email: formData.email,
            "Created at": new Date()
        };

        fetch("https://sheet.best/api/sheets/4cd8701c-b5b2-4732-97b0-e3d6fc73bc45", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((r) => r.json())
            .then((responseData) => {
                console.log("Form data sent:", responseData);
                setIsSubmitting(false);
                setFormData({ name: '', email: '' }); // Reset form fields after successful submission
            })
            .catch((error) => {
                console.error("Error submitting form data:", error);
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name of the Student'
                        className='border-2 rounded-md'
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <input
                        type='age'
                        id='age'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        placeholder='Age'
                        className='border-2 rounded-md'
                    />
                </div>
                <div>
                    <select
                        id='gender'
                        name='gender'
                        value={formData.gender}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    >
                        <option value=''>Select gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>









                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
            {formData.name && formData.email && (
                <div>
                    <h2>Form Submission Data</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default RegistrationCorner;