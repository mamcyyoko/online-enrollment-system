'use client'

import React, { useState, useEffect } from "react";
import AdminLayout from "@/app/dashboard/layout";


const AdminDashboard: React.FC = () => {
    const userRole = 'Admin';

    return (
        <AdminLayout role={userRole}>
            <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
            <p>Your role is: {userRole}</p>
        </AdminLayout>
    );
};

export default AdminDashboard;