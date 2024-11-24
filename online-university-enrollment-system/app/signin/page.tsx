// 'use client'
//
// import React, { useState } from 'react';
//
// const SignIn = () => {
//     const [userType, setUserType] = useState('student');
//
//     const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUserType(event.target.value);
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">User Type</label>
//                     <div className="flex space-x-4">
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="admin-pages"
//                                 checked={userType === 'admin-pages'}
//                                 onChange={handleUserTypeChange}
//                                 className="mr-2"
//                             />
//                             Admin
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="parent"
//                                 checked={userType === 'parent'}
//                                 onChange={handleUserTypeChange}
//                                 className="mr-2"
//                             />
//                             Parent
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 value="student"
//                                 checked={userType === 'student'}
//                                 onChange={handleUserTypeChange}
//                                 className="mr-2"
//                             />
//                             Student
//                         </label>
//                     </div>
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                         type="email"
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your email"
//                     />
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Password</label>
//                     <input
//                         type="password"
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                     Sign In
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default SignIn;



// 'use client'
// import { useState } from "react";
//
// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(event.target.value);
//     };
//
//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };
//
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         // Here you can add logic to handle login, such as API calls
//         console.log("Logging in with", { email, password });
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your email"
//                     />
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default Login;


'use client'
import React, { useState } from "react";

import { useRouter } from 'next/navigation'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Simulate login logic - In a real app, you would validate against a backend
        const userRole = localStorage.getItem('userRole'); // Get the role from local storage
        console.log("Logging in with", { email, password, role: userRole });

        if (userRole === 'admin-pages') {
            router.push('/dashboard/admin'); // Redirect to admin-pages pages
        } else if (userRole === 'student') {
            router.push('/dashboard/students'); // Redirect to student pages
        } else {
            console.error('Unknown role, redirecting to home');
            router.push('/'); // Default redirect
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-sky-300">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;