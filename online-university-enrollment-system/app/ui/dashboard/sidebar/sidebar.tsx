"use client";

import React, { useState, useEffect } from "react";
import { SIDENAV_ITEMS } from "@/app/constants";
import { SideNavItem } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Sidebar = () => {
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    useEffect(() => {
        // Update CSS variable to control the sidebar width across the app
        document.documentElement.style.setProperty(
            "--sidebar-width",
            isSidebarHovered ? "15rem" : "4rem"
        );
    }, [isSidebarHovered]);

    return (
        <div
            className={`bg-[#38bdf8] flex flex-col fixed top-[60px] left-0 h-[100vh] border-r border-zinc-200 transition-all duration-300 ease-in-out z-20 ${
                isSidebarHovered ? "w-60" : "w-16"
            }`}
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
        >
            <div className="flex flex-col space-y-6 w-full">
                {/* Sidebar Items */}
                <div className="flex flex-col space-y-2 md:px-2">
                    {SIDENAV_ITEMS.map((item, idx) => (
                        <MenuItem key={idx} item={item} isSidebarHovered={isSidebarHovered} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

const MenuItem = ({
                      item,
                      isSidebarHovered,
                  }: {
    item: SideNavItem;
    isSidebarHovered: boolean;
}) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex items-center p-2 rounded-lg hover:bg-[#4e9fd1] w-full justify-center md:justify-start transition-all duration-300 ease-in-out ${
                            pathname.includes(item.path) ? "bg-[#4e9fd1]" : ""
                        } ${isSidebarHovered ? "justify-between" : "justify-center"}`}
                    >
                        <div className="flex items-center space-x-4">
                            {item.icon}
                            {isSidebarHovered && (
                                <span className="font-semibold text-base flex">{item.title}</span>
                            )}
                        </div>
                        {isSidebarHovered && (
                            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                                <Icon icon="lucide:chevron-down" width="24" height="24" />
                            </div>
                        )}
                    </button>
                    {subMenuOpen && isSidebarHovered && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => (
                                <Link
                                    key={idx}
                                    href={subItem.path}
                                    className={`${
                                        subItem.path === pathname ? "font-bold" : ""
                                    }`}
                                >
                                    <span>{subItem.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex items-center p-2 rounded-lg hover:bg-[#4e9fd1] transition-all duration-300 ease-in-out ${
                        pathname === item.path ? "bg-[#4e9fd1]" : ""
                    } ${isSidebarHovered ? "justify-start space-x-4" : "justify-center"}`}
                >
                    {item.icon}
                    {isSidebarHovered && (
                        <span className="font-semibold text-sm flex">{item.title}</span>
                    )}
                </Link>
            )}
        </div>
    );
};
