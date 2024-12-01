import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import React from "react";
import Header from "@/app/ui/header/Header";

const AdminLayout = ({children, role}: { children: React.ReactNode, role?: string }) => {
    return (
        <div className="flex h-screen bg-gray-100">
           <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/*<Header />*/}
                {/*<main className="flex-grow p-6 overflow-auto">*/}
                {/*    {children}*/}
                {/*</main>*/}
            </div>
        </div>
    );
};

export default AdminLayout;




