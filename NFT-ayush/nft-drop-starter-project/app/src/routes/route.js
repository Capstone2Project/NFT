import React from 'react';
const About = React.lazy(() => import("../component/about"));
const Home = React.lazy(() => import("../component/home"));
const Login = React.lazy(() => import("../component/login"));

export const routes = [
    {
        key: 1,
        title: 'home',
        path: '/home',
        exact: true,
        component: Home,
        isPrivate: true
    },
    {
        key: 2,
        title: 'about us',
        path: '/about',
        exact: true,
        component: About,
        isPrivate: true
    },
    {
        key: 3,
        title: 'login',
        path: '/login',
        exact: true,
        isPrivate: false,
        component: Login,
    }
]