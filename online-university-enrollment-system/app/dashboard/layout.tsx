// import Sidebar from "@/app/components/ui-pages/sidebar/sidebar";
// import React from "react";
//
//
// const AdminLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <div className="flex h-screen overflow-hidden">
//             {/* Sidebar */}
//             <Sidebar />
//             {/* Main Content */}
//             <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
//                 {/* Top Navbar */}
//                 {/*<Navbar />*/}
//                 <main className="flex-grow">
//
//
//                        {children}
//
//                 </main>
//             </div>
//         </div>
//     );
// };
//
// export default AdminLayout;







const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Optional Navbar */}
                {/* Uncomment the Navbar component below if needed */}
                {/* <Navbar /> */}
                <main className="flex-grow p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

// import React from "react";
// import Sidebar from "@/app/components/ui-dashboard/sidebar/sidebar";
//
// const AdminLayout = ({ children, role }: { children: React.ReactNode; role: 'Admin' | 'Instructor' | 'Student' }) => {
//     return (
//         <div className="flex h-screen overflow-hidden">
//             {/* Sidebar */}
//             <Sidebar role={role} />
//             {/* Main Content */}
//             <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
//                 <main className="flex-grow p-6">{children}</main>
//             </div>
//         </div>
//     );
// };
//
// export default AdminLayout;


