import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* Overview Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Total Students</h2>
                    <p className="text-3xl font-bold text-blue-600">1,230</p>
                    <p className="text-sm text-gray-600">Enrolled across all courses</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Total Courses</h2>
                    <p className="text-3xl font-bold text-green-600">45</p>
                    <p className="text-sm text-gray-600">Active and available</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Monthly Revenue</h2>
                    <p className="text-3xl font-bold text-purple-600">$12,500</p>
                    <p className="text-sm text-gray-600">From course enrollments</p>
                </div>
            </section>

            {/* Recent Activity */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                <div className="bg-white shadow rounded-lg p-4">
                    <ul className="divide-y divide-gray-200">
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">New student enrolled: John Doe</p>
                                <p className="text-sm text-gray-600">5 minutes ago</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">Course updated: "Advanced Physics"</p>
                                <p className="text-sm text-gray-600">1 hour ago</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <div>
                                <p className="text-gray-800 font-medium">Revenue report generated</p>
                                <p className="text-sm text-gray-600">Yesterday</p>
                            </div>
                            <button className="text-blue-600 hover:underline">View Details</button>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Manage Students Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Manage Students</h2>
                <div className="bg-white shadow rounded-lg p-4">
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="text-left text-gray-600">
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Email</th>
                            <th className="py-2 px-4">Enrolled Courses</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-t">
                            <td className="py-2 px-4">John Doe</td>
                            <td className="py-2 px-4">john.doe@example.com</td>
                            <td className="py-2 px-4">3</td>
                            <td className="py-2 px-4">
                                <button className="text-blue-600 hover:underline">Edit</button> |{' '}
                                <button className="text-red-600 hover:underline">Remove</button>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">Jane Smith</td>
                            <td className="py-2 px-4">jane.smith@example.com</td>
                            <td className="py-2 px-4">2</td>
                            <td className="py-2 px-4">
                                <button className="text-blue-600 hover:underline">Edit</button> |{' '}
                                <button className="text-red-600 hover:underline">Remove</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Manage Courses Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Manage Courses</h2>
                <div className="bg-white shadow rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Courses</h3>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Add New Course
                        </button>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        <li className="py-4 flex justify-between items-center">
                            <p className="text-gray-800">Intro to Programming</p>
                            <button className="text-blue-600 hover:underline">Edit</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <p className="text-gray-800">Advanced Physics</p>
                            <button className="text-blue-600 hover:underline">Edit</button>
                        </li>
                        <li className="py-4 flex justify-between items-center">
                            <p className="text-gray-800">History of Art</p>
                            <button className="text-blue-600 hover:underline">Edit</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
