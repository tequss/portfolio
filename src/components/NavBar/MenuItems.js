import Landing from '../Pages/Landingpage';
import AboutMe from '../Pages/AboutMe';
import { Link } from 'react-router-dom';

export const MenuItems = [
    {
        title: 'Home',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'O mnie',
        url: '/aboutme',
        cName: 'nav-links'
    },
    {
        title: 'Projekty',
        url: "/projects",
        cName: 'nav-links'
    },
    {
        title: 'Kontakt',
        url: "/contactme",
        cName: 'nav-links'
    },

]