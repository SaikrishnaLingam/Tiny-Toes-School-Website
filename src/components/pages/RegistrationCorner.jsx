//Form with whatsapp
import React, { useState } from 'react';
import axios from 'axios';
const YOUR_UPLOAD_PRESET = 'lingam';
const CLOUDINARY_BASE_URL = 'https://api.cloudinary.com/v1_1/';
const YOUR_CLOUDINARY_CLOUD_NAME = "df9eizepz";
const RegistrationCorner = () => {
    const initialFormData = {
        name: '',
        age: '',
        gender: '',
        fatherName: '',
        motherName: '',
        occupation1: '',
        occupation2: '',
        qualification1: '',
        qualification2: '',
        phNumber1: '',
        phNumber2: '',
        address: '',
        city: '',
        pinCode: '',
        fatherImg: null,
        motherImg: null,
        studentImg: null,
        idType: '',
        idType2: '',
        idTypeFile: null,
        idType2File: null,
        allergies: '',
        disabilities: '',
        medical: '',
        dosage: '',
    };

    const [formData, setFormData] = useState(initialFormData);
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

    const handleClear = () => {
        setFormData(initialFormData); // Reset form fields to initial state
        setErrors({}); // Clear any existing errors
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsSubmitting(true);
        // Basic validation

        // if (!formData.name) {
        //     setErrors((prevErrors) => ({ ...prevErrors, name: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.age) {
        //     setErrors((prevErrors) => ({ ...prevErrors, age: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.gender) {
        //     setErrors((prevErrors) => ({ ...prevErrors, gender: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.fatherName) {
        //     setErrors((prevErrors) => ({ ...prevErrors, fatherName: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.motherName) {
        //     setErrors((prevErrors) => ({ ...prevErrors, motherName: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }

        // if (!formData.phNumber1) {
        //     setErrors((prevErrors) => ({ ...prevErrors, phNumber1: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.phNumber2) {
        //     setErrors((prevErrors) => ({ ...prevErrors, phNumber2: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.address) {
        //     setErrors((prevErrors) => ({ ...prevErrors, address: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.city) {
        //     setErrors((prevErrors) => ({ ...prevErrors, city: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.pinCode) {
        //     setErrors((prevErrors) => ({ ...prevErrors, pinCode: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.studentImg) {
        //     setErrors((prevErrors) => ({ ...prevErrors, studentImg: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.idType) {
        //     setErrors((prevErrors) => ({ ...prevErrors, idType: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.idType2) {
        //     setErrors((prevErrors) => ({ ...prevErrors, idType2: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.idTypeFile) {
        //     setErrors((prevErrors) => ({ ...prevErrors, idTypeFile: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (!formData.idType2File) {
        //     setErrors((prevErrors) => ({ ...prevErrors, idType2File: 'Required' }));
        //     setIsSubmitting(false);
        //     return;
        // }

        const uploadedUrls = await Promise.all(
            Object.entries(formData).map(async ([fieldName, file]) => {
                if (file) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', 'lingam');

                    const response = await axios.post(
                        `${CLOUDINARY_BASE_URL}${YOUR_CLOUDINARY_CLOUD_NAME}/image/upload`,
                        formData
                    );

                    return response.data.secure_url; // Return the uploaded image URL
                } else {
                    return null; // If no file, return null
                }
            })
        );
        console.log(uploadedUrls);
        const data = {
            Id: Math.floor(Math.random() * 1000),
            Name: formData.name,
            Gender: formData.gender,
            Age: formData.age,
            FatherName: formData.fatherName,
            MotherName: formData.motherName,
            Occupation1: formData.occupation1,
            Occupation2: formData.occupation2,
            Qualification1: formData.qualification1,
            Qualification2: formData.qualification2,
            PhNumber1: formData.phNumber1,
            PhNumber2: formData.phNumber2,
            Address: formData.address,
            City: formData.city,
            PinCode: formData.pinCode,
            StudentImg: formData.uploadedUrls[0],
            IdType: formData.idType,
            IdTypeFile: formData.uploadedUrls[1],
            IdType2: formData.idType2,
            IdType2File: formData.uploadedUrls[2],
            Allergies: formData.allergies,
            Disabilities: formData.disabilities,
            Medical: formData.medical,
            Dosage: formData.dosage,
            FatherImg: formData.fatherImg ? uploadedUrls[3] : '',
            MotherImg: formData.motherImg ? uploadedUrls[4].name : '',

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
                setFormData(initialFormData); // Reset form fields after successful submission
            })
            .catch((error) => {
                console.error("Error submitting form data:", error);
                setIsSubmitting(false);
            });
    };
    const message = encodeURIComponent('Your WhatsApp message here');

    return (
        <div>
            <div className='bg-yellow-300 p-14'>
                <h1 className='text-4xl'>Choose TinyToes Play School, a haven founded in 2010, ensuring your child's growth with a nurturing environment, modern curriculum, and unwavering commitment to safety.</h1>
                <p className='italic text-bold text-3xl'>Enroll today for a flourishing tomorrow.</p>
            </div>

            <h1 className='text-2xl font-semibold py-4 text-center'>Registration Form</h1>

            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 md:gap-6 px-2 md:px-14'>
                {/* student image */}
                <div className='md:col-span-2'>
                    <label htmlFor="studentImg">Student's Image:</label>
                    <input
                        type="file"
                        id="studentImg"
                        name="studentImg"
                        onChange={(e) => handleFileChange('studentImg', e)} // Ensure 'e' is passed correctly
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                {/* age/gender */}
                <div className="flex">
                    <div className="w-1/2 pr-2">
                        <input
                            type='number'
                            id='age'
                            name='age'
                            value={formData.age}
                            onChange={handleChange}
                            placeholder='Age'
                            className='border-2 rounded-md w-full mt-0.5 py-1'
                        />
                        {errors.age && <div>{errors.age}</div>}
                    </div>
                    {/* gender */}
                    <div className="w-1/2 pl-2">
                        <select
                            id='gender'
                            name='gender'
                            value={formData.gender}
                            onChange={handleChange}
                            className='border-2 rounded-md w-full mt-0.5 py-1'
                        >
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                        {errors.gender && <div>{errors.gender}</div>}
                    </div>
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.phNumber2 && <div>{errors.phNumber2}</div>}
                </div>
                {/* address */}
                <div className='md:col-span-2 '>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className='border-2 rounded-md w-full'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.pinCode && <div>{errors.pinCode}</div>}
                </div>
                {/* aadhaar/voter */}
                <div className="flex justify-between">
                    <div className='flex flex-row items-center w-1/2'>
                        <input
                            type="radio"
                            id="aadhaar"
                            name="idType"
                            value="aadhaar"
                            checked={formData.idType === "aadhaar"}
                            onChange={handleChange}
                            className='border-2 rounded-md w-1/4 mt-0.5 py-1'
                        />
                        <label htmlFor="aadhaar" className='w-full'>Aadhaar</label>
                    </div>
                    <div className='flex flex-row items-center w-1/2'>
                        <input
                            type="radio"
                            id="voter"
                            name="idType"
                            value="voter"
                            checked={formData.idType === "voter"}
                            onChange={handleChange}
                            className='border-2 rounded-md w-1/4 mt-0.5 py-1'
                        />
                        <label htmlFor="voter" className='w-full'>Voter ID</label>
                    </div>
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.idTypeFile && <div>{errors.idTypeFile}</div>}
                </div>
                {/* studentAadhaar/birth */}
                <div className="flex justify-between">
                    <div className='flex flex-row items-center w-1/2'>
                        <input
                            type="radio"
                            id="studentAadhaar"
                            name="idType2"
                            value="studentAadhaar"
                            checked={formData.idType2 === "studentAadhaar"}
                            onChange={handleChange}
                            className='border-2 rounded-md w-1/4 mt-0.5 py-1'
                        />
                        <label htmlFor="studentAadhaar" className='w-full'>Student Aadhaar Card</label>
                    </div>
                    <div className='flex flex-row items-center w-1/2'>
                        <input
                            type="radio"
                            id="birth"
                            name="idType2"
                            value="birth"
                            checked={formData.idType2 === "birth"}
                            onChange={handleChange}
                            className='border-2 rounded-md w-1/4 mt-0.5 py-1'
                        />
                        <label htmlFor="birth" className='w-full'>Student Birth Certificate</label>
                    </div>
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.disabilities && <div>{errors.disabilities}</div>}
                </div>
                {/* medical */}
                <div className='md:col-span-2'>
                    <input
                        type="text"
                        id="medical"
                        name="medical"
                        value={formData.medical}
                        onChange={handleChange}
                        placeholder="Any medical issues"
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.medical && <div>{errors.medical}</div>}
                </div>
                {/* dosage */}
                <div className='md:col-span-2'>
                    <input
                        type="text"
                        id="dosage"
                        name="dosage"
                        value={formData.dosage}
                        onChange={handleChange}
                        placeholder="Mention Medicine and Medical Dosage"
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        onChange={(e) => handleFileChange('fatherImg', e)} // Ensure 'e' is passed correctly
                        className='border-2 rounded-md w-full mt-0.5 py-1'
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
                        onChange={(e) => handleFileChange('motherImg', e)} // Ensure 'e' is passed correctly
                        className='border-2 rounded-md w-full mt-0.5 py-1'
                    />
                    {errors.motherImg && <div>{errors.motherImg}</div>}
                </div>
                {/* Clear button */}
                <button type="button" onClick={handleClear} className='bg-gray-400 my-4 mx-2 py-2 px-8 rounded-md font-semibold text-xl'>Clear</button>
                {/* Submit button */}
                <a href={`whatsapp://send?text=${message}`} data-action="share/whatsapp/share">
                    <button type="submit" disabled={isSubmitting} className='bg-blue-600 my-4 mx-2 py-2 px-8 rounded-md font-semibold text-xl'>
                        Submit
                    </button>
                </a>
            </form >

            {
                formData.name && formData.age && (
                    <div>
                        <h2>Form Submission Data</h2>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                )
            }
        </div >
    );
};

export default RegistrationCorner;