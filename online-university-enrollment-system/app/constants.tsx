import { Icon } from '@iconify/react';

import { SideNavItem } from './types';
import {FaBook, FaBuilding, FaEnvelope, FaMoneyBillWave, FaTachometerAlt, FaUsers} from "react-icons/fa";
import {GiTeacher} from "react-icons/gi";


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaTachometerAlt className="mr-2" />,
  },

  {
    title: 'Manage Students',
    path: '/students',
    icon: <FaBook className="mr-2" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Student", path: "/dashboard/students/addstudent"},
      { title: 'Enrollment', path: '/dashboard/students/enrollments'},
      { title: 'Student List', path: '/dashboard/students/liststudent'},
      { title: 'View Student', path: '/dashboard/students/viewstudent'},
    ],
  },
  {
    title: 'Manage Lecturers',
    path: '/finance-management',
    icon: <GiTeacher className="mr-2" />,
      submenu: true,
      subMenuItems: [
          { title: "Add Lecturer", path: "dashboard/lecturers/addlecturer"},
          { title: 'View Lecturer', path: 'dashboard/lecturers/viewlecturer'},
          { title: 'List Lecturer', path: 'dashboard/lecturers/listlecturer'},
      ],
  },

   {
    title: 'Manage Courses',
    path: '/dashboard',
    icon: <GiTeacher className="mr-2" />,
       submenu: true,
       subMenuItems: [
           { title: "Add Course", path: "dashboard/courses/addcourse"},
           { title: 'View Course', path: 'dashboard/courses/viewcourse'},
           { title: 'List Courses', path: 'dashboard/courses/listcourse'},
       ],
  },


  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
