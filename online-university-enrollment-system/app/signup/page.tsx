// 'use client'
// import {useState} from "react";
//
// const SignUp = () => {
//     const [userType, setUserType] = useState('student');
//
//     const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUserType(event.target.value);
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default SignUp;


// 'use client'
// import { useState } from "react";
//
// const SignUp = () => {
//     const [userType, setUserType] = useState('student');
//
//     const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setUserType(event.target.value);
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">User Type</label>
//                     <select
//                         value={userType}
//                         onChange={handleUserTypeChange}
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                     >
//                         <option value="admin-pages">Admin</option>
//                         <option value="parent">Parent</option>
//                         <option value="student">Student</option>
//                     </select>
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
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default SignUp;



// 'use client'
// import React, { useState } from "react";
// import { useRouter } from 'next/navigation'
//
// const SignUp = () => {
//     const [userType, setUserType] = useState('student');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//
//     const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setUserType(event.target.value);
//     };
//
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//
//         // Simulate user registration logic
//         console.log("User Registered:", { userType, email, password });
//
//         // Redirect based on user type
//         if (userType === 'admin-pages') {
//             router.push('/admin-pages'); // Redirect to admin-pages pages
//         } else if (userType === 'student') {
//             router.push('/student'); // Redirect to student pages
//         } else {
//             router.push('/'); // Default redirect
//         }
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">User Type</label>
//                     <select
//                         value={userType}
//                         onChange={handleUserTypeChange}
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                     >
//                         <option value="admin-pages">Admin</option>
//                         <option value="parent">Parent</option>
//                         <option value="student">Student</option>
//                     </select>
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
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
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default SignUp;




// components/SignUp.tsx
// 'use client'
// import React, { useState } from "react";
// import { useRouter } from 'next/navigation'
//
// const SignUp: React.FC = () => {
//     const [userType, setUserType] = useState('student');
//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//
//     const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setUserType(event.target.value);
//     };
//
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//
//         // Simulate storing user data in local storage
//         localStorage.setItem('userRole', userType);
//         console.log("User Registered:", { userType, fullName, username, email, password });
//
//         // Redirect based on user type
//         if (userType === 'admin-pages') {
//             router.push('/admin-pages'); // Redirect to admin-pages pages
//         } else if (userType === 'student') {
//             router.push('/student'); // Redirect to student pages
//         } else {
//             router.push('/'); // Default redirect
//         }
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-sky-300">
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">User Type</label>
//                     <select
//                         value={userType}
//                         onChange={handleUserTypeChange}
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                     >
//                         <option value="admin-pages">Admin</option>
//                         <option value="parent">Parent</option>
//                         <option value="student">Student</option>
//                     </select>
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                     <input
//                         type="text"
//                         value={fullName}
//                         onChange={(e) => setFullName(e.target.value)}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your full name"
//                     />
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Username</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your username"
//                     />
//                 </div>
//
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
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
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="border border-gray-300 rounded-lg p-2 w-full"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//
//                 <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };
//
// export default SignUp;



// components/SignUp.tsx
'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

const SignUp: React.FC = () => {
    const [userType, setUserType] = useState('student');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Simulate storing user data in local storage
        localStorage.setItem('userRole', userType);
        console.log("User Registered:", { userType, fullName, username, email, password });

        // Redirect to login page after successful registration
        router.push('/signin');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-sky-300">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">User Type</label>
                    <select
                        value={userType}
                        onChange={handleUserTypeChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    >
                        <option value="admin">Admin</option>
                        <option value="parent">Parent</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        placeholder="Enter your username"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;