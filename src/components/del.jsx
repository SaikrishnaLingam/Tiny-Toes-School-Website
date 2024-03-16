import React from "react";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

function App() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-1/2 grid grid-cols-2">
                    <Formik
                        initialValues={{
                            student_name: '',
                            age: '',
                            gender: '',
                            fathers_name: '',
                            mothers_name: '',
                            occupation1: '',
                            occupation2: '',
                            qualification1: '',
                            qualification2: '',
                            contact_number1: '',
                            contact_number2: '',
                            address: '',
                            city: '',
                            pincode: ''
                        }}
                        validationSchema={Yup.object({
                            student_name: Yup.string()
                                .required('Required'),
                            age: Yup.number()
                                .required('Required')
                                .positive('Age must be a positive number'),
                            gender: Yup.string()
                                .required('Required'),
                            fathers_name: Yup.string()
                                .required('Required'),
                            mothers_name: Yup.string()
                                .required('Required'),
                            occupation1: Yup.string()
                                .required('Required'),
                            occupation2: Yup.string()
                                .required('Required'),
                            qualification1: Yup.string()
                                .required('Required'),
                            qualification2: Yup.string()
                                .required('Required'),
                            contact_number1: Yup.string()
                                .required('Required'),
                            contact_number2: Yup.string()
                                .required('Required'),
                            address: Yup.string()
                                .required('Required'),
                            city: Yup.string()
                                .required('Required'),
                            pincode: Yup.string()
                                .required('Required')
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isValid, handleSubmit }) => (<form>
                            <div className="relative flex flex-col w-full mb-6">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="student_name"
                                >
                                    Name of Student<span>*</span>
                                </label>
                                <Field
                                    name="student_name"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 text-gray-700 w-full pr-10"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-row w-full mb-6">
                                <div className="relative flex flex-col mr-4 w-1/2 mb-3">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="age"
                                    >
                                        Age<span>*</span>
                                    </label>
                                    <Field
                                        type="number"
                                        name="age"
                                        className="appearance-none rounded-md relative block px-3 py-2 text-gray-700 w-full pr-10"
                                        placeholder="18"
                                    />
                                </div>
                                <div className="relative flex flex-col w-1/2 mb-3">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="gender"
                                    >
                                        Gender<span>*</span>
                                    </label>
                                    <Field
                                        as="select"
                                        name="gender"
                                        className="appearance-none rounded-md relative block px-3 py-2 text-gray-700 w-full pr-10"
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <div className="relative flex flex-col w-full mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="fathers_name"
                                    >
                                        Father's Name<span>*</span>
                                    </label>
                                    <Field
                                        name="fathers_name"
                                        type="text"
                                        className="appearance-none rounded-md relative block px-3 py-2 text-gray-700 w-full pr-10"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="relative flex flex-col w-full mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="mothers_name"
                                    >
                                        Mother's Name<span>*</span>
                                    </label>
                                    <Field
                                        name="mothers_name"
                                        type="text"
                                        className="appearance-none rounded-md relative block px-3 py-2 text-gray-700 w-full pr-10"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                            </div>
                            {/* <div>
                                <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="occupation1"
                                    >
                                        Occupation 1<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="occupation1"
                                        type="text"
                                        className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                        placeholder="Occupation 1"
                                    />
                                </div>

                                <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                    <label
                                        className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                        htmlFor="occupation2"
                                    >
                                        Occupation 2<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="occupation2"
                                        type="text"
                                        className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                        placeholder="Occupation 2"
                                    />
                                </div>
                            </div>


                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="qualification1"
                                >
                                    Qualification 1<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="qualification1"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Qualification 1"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="qualification2"
                                >
                                    Qualification 2<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="qualification2"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Qualification 2"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="contact_number1"
                                >
                                    Contact Number 1<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="contact_number1"
                                    type="tel"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Contact Number 1"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="contact_number2"
                                >
                                    Contact Number 2<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="contact_number2"
                                    type="tel"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Contact Number 2"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="address"
                                >
                                    Address<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="address"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Address"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="city"
                                >
                                    City<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="city"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="City"
                                />
                            </div>

                            <div className="relative flex flex-col w-full mb-6 focus-within:border-blue-500">
                                <label
                                    className="block uppercase tracking-wide text-xs font-bold text-gray-700 mb-2"
                                    htmlFor="pincode"
                                >
                                    Pincode<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="pincode"
                                    type="text"
                                    className="appearance-none rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700 w-full pr-10"
                                    placeholder="Pincode"
                                />
                            </div> */}

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                disabled={!isValid}
                                onClick={() => {
                                    if (!isValid) {
                                        alert('Fill in the required fields');
                                    } else {
                                        handleSubmit();
                                    }
                                }}
                            >
                                Submit
                            </button>

                        </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default App;
