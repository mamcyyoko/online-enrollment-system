
import React from 'react';

const StudentDashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
            {/* Dashboard Overview Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Enrolled Courses</h2>
                    <p className="text-gray-600">View and manage the courses you're enrolled in.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        View Courses
                    </button>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Upcoming Deadlines</h2>
                    <p className="text-gray-600">Stay on top of your assignments and exams.</p>
                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        View Deadlines
                    </button>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
                    <p className="text-gray-600">Update your personal information.</p>
                    <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                        Edit Profile
                    </button>
                </div>
            </section>

            {/* Recent Activity Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                <div className="bg-white shadow rounded-lg p-4">
                    <ul className="divide-y divide-gray-200">
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">Completed "Math 101 Assignment 1"</p>
                                <p className="text-sm text-gray-600">2 days ago</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">Enrolled in "Science 102"</p>
                                <p className="text-sm text-gray-600">5 days ago</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">Updated Profile Information</p>
                                <p className="text-sm text-gray-600">1 week ago</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Enroll in New Page */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Enroll in a New Course</h2>
                <form className="bg-white shadow rounded-lg p-4">
                    <div className="mb-4">
                        <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
                            Select a Course
                        </label>
                        <select
                            id="course"
                            className="w-full border rounded-lg px-3 py-2"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose a course
                            </option>
                            <option value="math101">Math 101</option>
                            <option value="science102">Science 102</option>
                            <option value="history103">History 103</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Enroll Now
                    </button>
                </form>
            </section>
        </div>
    );
};

export default StudentDashboard;
