import React from "react";

const LecturerDashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Lecturer Dashboard</h1>

            {/* Quick Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-500 text-white rounded-lg p-4 shadow-md">
                    <h2 className="text-xl font-semibold">Courses</h2>
                    <p className="text-4xl font-bold mt-2">12</p>
                </div>
                <div className="bg-green-500 text-white rounded-lg p-4 shadow-md">
                    <h2 className="text-xl font-semibold">Students Enrolled</h2>
                    <p className="text-4xl font-bold mt-2">350</p>
                </div>
                <div className="bg-yellow-500 text-white rounded-lg p-4 shadow-md">
                    <h2 className="text-xl font-semibold">Assignments Pending</h2>
                    <p className="text-4xl font-bold mt-2">8</p>
                </div>
            </section>

            {/* Recent Activity Section */}
            <section className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
                <ul className="divide-y divide-gray-200">
                    <li className="py-4">
                        <h3 className="text-lg font-bold">Graded Assignment 5 for Course "Physics 101"</h3>
                        <p className="text-gray-500">2 hours ago</p>
                    </li>
                    <li className="py-4">
                        <h3 className="text-lg font-bold">Added new lecture notes for "Advanced Calculus"</h3>
                        <p className="text-gray-500">1 day ago</p>
                    </li>
                    <li className="py-4">
                        <h3 className="text-lg font-bold">Updated quiz for "Computer Science Fundamentals"</h3>
                        <p className="text-gray-500">3 days ago</p>
                    </li>
                </ul>
            </section>

            {/* Actions Section */}
            <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Manage Courses</h2>
                    <p className="text-gray-600">View and update course details.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                        View Courses
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-2">Review Assignments</h2>
                    <p className="text-gray-600">Grade and provide feedback for assignments.</p>
                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                        Review Assignments
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LecturerDashboard;
