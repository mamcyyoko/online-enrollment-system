'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <aside className="bg-blue-800 text-white w-64 min-h-screen">
            <div className="p-4">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <nav className="mt-10">
                <ul>
                    <li>
                        <Link href="/admin" className="block py-2 px-4 hover:bg-blue-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/enrollments" className="block py-2 px-4 hover:bg-blue-700">
                            Enrollments
                        </Link>
                    </li>

                    {/* Manage Lecturer */}
                    <li>
                        <button
                            onClick={() => toggleMenu('lecturer')}
                            className="block w-full text-left py-2 px-4 hover:bg-blue-700"
                        >
                            Manage Lecturer
                        </button>
                        {openMenu === 'lecturer' && (
                            <ul className="pl-6">
                                <li>
                                    <Link href="/dashboard/lecturers/" className="block py-1 px-4 hover:bg-blue-700">
                                        Add Lecturer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/lecturers" className="block py-1 px-4 hover:bg-blue-700">
                                        View Lecturer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/lecturers" className="block py-1 px-4 hover:bg-blue-700">
                                        List Lecturer
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Manage Students */}
                    <li>
                        <button
                            onClick={() => toggleMenu('students')}
                            className="block w-full text-left py-2 px-4 hover:bg-blue-700"
                        >
                            Manage Students
                        </button>
                        {openMenu === 'students' && (
                            <ul className="pl-6">
                                <li>
                                    <Link href="/dashboard/students" className="block py-1 px-4 hover:bg-blue-700">
                                        Add Student
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/students" className="block py-1 px-4 hover:bg-blue-700">
                                        View Student
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/students" className="block py-1 px-4 hover:bg-blue-700">
                                        List Students
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Manage Courses */}
                    <li>
                        <button
                            onClick={() => toggleMenu('courses')}
                            className="block w-full text-left py-2 px-4 hover:bg-blue-700"
                        >
                            Manage Courses
                        </button>
                        {openMenu === 'courses' && (
                            <ul className="pl-6">
                                <li>
                                    <Link href="/dashboard/courses" className="block py-1 px-4 hover:bg-blue-700">
                                        Add Course
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/courses" className="block py-1 px-4 hover:bg-blue-700">
                                        View Course
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/courses" className="block py-1 px-4 hover:bg-blue-700">
                                        List Courses
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Manage Users */}
                    <li>
                        <button
                            onClick={() => toggleMenu('users')}
                            className="block w-full text-left py-2 px-4 hover:bg-blue-700"
                        >
                            Manage Users
                        </button>
                        {openMenu === 'users' && (
                            <ul className="pl-6">
                                <li>
                                    <Link href="/dashboard/users/add" className="block py-1 px-4 hover:bg-blue-700">
                                        Add New User
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/users/signin" className="block py-1 px-4 hover:bg-blue-700">
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/users/signout" className="block py-1 px-4 hover:bg-blue-700">
                                        Sign Out
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* My Profile */}
                    <li>
                        <Link href="/app/students/profile" className="block py-2 px-4 hover:bg-blue-700">
                            My Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
