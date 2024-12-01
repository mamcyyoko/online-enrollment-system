'use client'
import React, { useState } from 'react';

const EnrollmentForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        semester: '',
        year: '',
        campus: '',
        gender: '',
        academicYear: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Enrollment data:', formData);
        // You can add further logic to handle submission, e.g. sending to an API
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enrollment Form</h2>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="middleName">Middle Name</label>
                <input
                    type="text"
                    name="middleName"
                    id="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="semester">Semester</label>
                <select
                    name="semester"
                    id="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="year">Year</label>
                <select
                    name="year"
                    id="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="campus">Campus</label>
                <select
                    name="campus"
                    id="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Campus</option>
                    <option value="Yoni">Yoni</option>
                    <option value="Fatima">Fatima</option>
                    <option value="Lunsar">Lunsar</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="gender">Gender</label>
                <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="academicYear">Academic Year</label>
                <input
                    type="text"
                    name="academicYear"
                    id="academicYear"
                    value={formData.academicYear}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                    placeholder="e.g. 2023/2024"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Enroll
            </button>
        </form>
    );
};

export default EnrollmentForm;