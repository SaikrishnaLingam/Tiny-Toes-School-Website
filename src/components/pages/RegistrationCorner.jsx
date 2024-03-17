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

    const handleFileChange = (fieldName, e) => {
        const files = e.target.files; // Get the array of files
        setFormData(prevFormData => ({
            ...prevFormData,
            [fieldName]: files // Store the array of files in the corresponding field
        }));
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
            <div className='bg-yellow-300 p-14'>
                <h1 className='text-4xl'>Choose TinyToes Play School, a haven founded in 2010, ensuring your child's growth with a nurturing environment, modern curriculum, and unwavering commitment to safety.</h1>
                <p className='italic text-bold text-3xl'>Enroll today for a flourishing tomorrow.</p>
            </div>

            <h1 className='text-2xl font-semibold py-4 text-center'>Registration Form</h1>

            <form onSubmit={handleSubmit}>
                {/* student image */}
                <div>
                    <label htmlFor="studentImg">Student's Image:</label>
                    <input
                        type="file"
                        id="studentImg"
                        name="studentImg"
                        onChange={handleFileChange}
                        className='border-2 rounded-md'
                    />
                    {errors.studentImg && <div>{errors.studentImg}</div>}
                </div>

                {/* name */}
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
                {/* age */}
                <div>
                    <input
                        type='number'
                        id='age'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        placeholder='Age'
                        className='border-2 rounded-md'
                    />
                    {errors.age && <div>{errors.age}</div>}
                </div>
                {/* gender */}
                <div>
                    <select
                        id='gender'
                        name='gender'
                        value={formData.gender}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    >
                        <option value=''>Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    {errors.gender && <div>{errors.gender}</div>}
                </div>
                {/* father name */}
                <div>
                    <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="Father's Name"
                        className='border-2 rounded-md'
                    />
                    {errors.fatherName && <div>{errors.fatherName}</div>}
                </div>
                {/* mother name */}
                <div>
                    <input
                        type="text"
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        placeholder="Mother's Name"
                        className='border-2 rounded-md'
                    />
                    {errors.motherName && <div>{errors.motherName}</div>}
                </div>
                {/* occupation 1*/}
                <div>
                    <input
                        type="text"
                        id="occupation1"
                        name="occupation1"
                        value={formData.occupation1}
                        onChange={handleChange}
                        placeholder="Occupation"
                        className='border-2 rounded-md'
                    />
                    {errors.occupation1 && <div>{errors.occupation1}</div>}
                </div>
                {/* occupation 2*/}
                <div>
                    <input
                        type="text"
                        id="occupation2"
                        name="occupation2"
                        value={formData.occupation2}
                        onChange={handleChange}
                        placeholder="Occupation"
                        className='border-2 rounded-md'
                    />
                    {errors.occupation2 && <div>{errors.occupation2}</div>}
                </div>
                {/* qualification 1*/}
                <div>
                    <input
                        type="text"
                        id="qualification1"
                        name="qualification1"
                        value={formData.qualification1}
                        onChange={handleChange}
                        placeholder="Qualification"
                        className='border-2 rounded-md'
                    />
                    {errors.qualification1 && <div>{errors.qualification1}</div>}
                </div>
                {/* qualification 2*/}
                <div>
                    <input
                        type="text"
                        id="qualification2"
                        name="qualification2"
                        value={formData.qualification2}
                        onChange={handleChange}
                        placeholder="Qualification"
                        className='border-2 rounded-md'
                    />
                    {errors.qualification2 && <div>{errors.qualification2}</div>}
                </div>
                {/* phNumber 1*/}
                <div>
                    <input
                        type="tel"
                        id="phNumber1"
                        name="phNumber1"
                        value={formData.phNumber1}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className='border-2 rounded-md'
                    />
                    {errors.phNumber1 && <div>{errors.phNumber1}</div>}
                </div>
                {/* phNumber 2*/}
                <div>
                    <input
                        type="tel"
                        id="phNumber2"
                        name="phNumber2"
                        value={formData.phNumber2}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className='border-2 rounded-md'
                    />
                    {errors.phNumber2 && <div>{errors.phNumber2}</div>}
                </div>
                {/* address */}
                <div>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className='border-2 rounded-md'
                    />
                    {errors.address && <div>{errors.address}</div>}
                </div>
                {/* city */}
                <div>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className='border-2 rounded-md'
                    />
                    {errors.city && <div>{errors.city}</div>}
                </div>
                {/* pin code */}
                <div>
                    <input
                        type="number"
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Pin Code"
                        className='border-2 rounded-md'
                    />
                    {errors.pinCode && <div>{errors.pinCode}</div>}
                </div>
                {/* aadhaar/voter */}
                <div>
                    <input
                        type="radio"
                        id="aadhaar"
                        name="idType"
                        value="aadhaar"
                        checked={formData.idType === "aadhaar"}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    />
                    <label htmlFor="aadhaar">Aadhaar</label>
                    <input
                        type="radio"
                        id="voter"
                        name="idType"
                        value="voter"
                        checked={formData.idType === "voter"}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    />
                    <label htmlFor="voter">Voter ID</label>
                </div>
                {errors.idType && <div>{errors.idType}</div>}
                {/* File Input for idType */}
                <div>
                    <label htmlFor="idTypeFile">Upload File:   </label>
                    <input
                        type="file"
                        id="idTypeFile"
                        name="idTypeFile"
                        onChange={(e) => handleFileChange('idType', e)}
                        className='border-2 rounded-md'
                    />
                    {errors.idTypeFile && <div>{errors.idTypeFile}</div>}
                </div>
                {/* studentAadhaar/birth */}
                <div>
                    <input
                        type="radio"
                        id="studentAadhaar"
                        name="idType2"
                        value="studentAadhaar"
                        checked={formData.idType2 === "studentAadhaar"}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    />
                    <label htmlFor="studentAadhaar">Student Aadhaar Card</label>
                    <input
                        type="radio"
                        id="birth"
                        name="idType2"
                        value="birth"
                        checked={formData.idType2 === "birth"}
                        onChange={handleChange}
                        className='border-2 rounded-md'
                    />
                    <label htmlFor="birth">Student Birth Certificate</label>
                </div>
                {errors.idType2 && <div>{errors.idType2}</div>}
                {/* File Input for idType2 */}
                <div>
                    <label htmlFor="idType2File">Upload File:   </label>
                    <input
                        type="file"
                        id="idType2File"
                        name="idType2File"
                        onChange={(e) => handleFileChange('idType2', e)}
                        className='border-2 rounded-md'
                    />
                    {errors.idType2File && <div>{errors.idType2File}</div>}
                </div>  
                {/* allergies */}
                <div>
                    <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="Any Allergies"
                        className='border-2 rounded-md'
                    />
                    {errors.allergies && <div>{errors.allergies}</div>}
                </div>
                {/* disabilities */}
                <div>
                    <input
                        type="text"
                        id="disabilities"
                        name="disabilities"
                        value={formData.disabilities}
                        onChange={handleChange}
                        placeholder="Any Disabilities"
                        className='border-2 rounded-md'
                    />
                    {errors.disabilities && <div>{errors.disabilities}</div>}
                </div>
                {/* medical */}
                <div>
                    <input
                        type="text"
                        id="medical"
                        name="medical"
                        value={formData.medical}
                        onChange={handleChange}
                        placeholder="Any medical issues"
                        className='border-2 rounded-md'
                    />
                    {errors.medical && <div>{errors.medical}</div>}
                </div>
                {/* dosage */}
                <div>
                    <input
                        type="text"
                        id="dosage"
                        name="dosage"
                        value={formData.dosage}
                        onChange={handleChange}
                        placeholder="Mention Medicine and Medical Dosage"
                        className='border-2 rounded-md'
                    />
                    {errors.dosage && <div>{errors.dosage}</div>}
                </div>

                {/* father image */}
                <div>
                    <label htmlFor="fatherImg">Father's Image:</label>
                    <input
                        type="file"
                        id="fatherImg"
                        name="fatherImg"
                        onChange={handleFileChange}
                        className='border-2 rounded-md'
                    />
                    {errors.fatherImg && <div>{errors.fatherImg}</div>}
                </div>
                {/* mother image */}
                <div>
                    <label htmlFor="motherImg">Mother's Image:</label>
                    <input
                        type="file"
                        id="motherImg"
                        name="motherImg"
                        onChange={handleFileChange}
                        className='border-2 rounded-md'
                    />
                    {errors.motherImg && <div>{errors.motherImg}</div>}
                </div>




                <button type="submit" disabled={isSubmitting} className='bg-blue-600 my-4 mx-2 py-2 px-8 rounded-lg font-semibold text-xl'>
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