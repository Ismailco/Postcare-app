// This file and the constants folder are used
// to store all the static data and text used in the application
// for easy access and modification in the future.

const AppName = 'Postcare';
const user = JSON.parse(localStorage.getItem('user'));
const userName = user ? `${user.first_name} ${user.last_name}` : '';

const navLinks = [
  {
    id: 1,
    name: 'Sign in',
    path: '/login',
  },
  {
    id: 2,
    name: 'Get started',
    path: '/signup',
  },
];

const navigationLinks = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: 2,
    name: 'Profile',
    path: '/profile',
  },
  {
    id: 3,
    name: 'Messanger',
    path: '/messanger',
  },
  {
    id: 4,
    name: 'To-Do List',
    path: '/todo',
  },
];

const footerLinksOne = [
  {
    id: 1,
    name: 'Company',
    path: '/company',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 4,
    name: 'Careers',
    path: '/careers',
  },
  {
    id: 5,
    name: 'Referral Program',
    path: '/referral',
  },
  {
    id: 6,
    name: 'Community',
    path: '/community',
  },
];

const footerLinksTwo = [
  {
    id: 1,
    name: 'Support',
    path: '/support',
  },
  {
    id: 2,
    name: 'Help Center',
    path: '/help',
  },
  {
    id: 3,
    name: 'FAQ',
    path: '/faq',
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 5,
    name: 'Press',
    path: '/press',
  },
  {
    id: 6,
    name: 'Status',
    path: '/status',
  },
];

const footerLinksThree = [
  {
    id: 1,
    name: 'Terms of Service',
    path: '/terms',
  },
  {
    id: 2,
    name: 'Privacy Policy',
    path: '/privacy',
  },
  {
    id: 3,
    name: 'Security',
    path: '/security',
  },
  {
    id: 4,
    name: 'Sitemap',
    path: '/sitemap',
  },
];

const copyRightText = `© ${new Date().getFullYear()} ${AppName}. All rights reserved.`;

// API Constants
// API url
const url = 'https://nft.urbandesignsco.com/api/';

// HTTP 401
const UNAUTHORIZED = 'Session expired. Please login';

// HTTP 404
const NOT_FOUND = 'The requested resource was not found';

// HTTP 500
const SERVER_ERROR = 'Something has gone wrong, please try again';

// HTTP 503
const SERVICE_UNAVAILABLE = 'Service unavailable. Please try again later';

export {
  AppName,
  user,
  userName,
  navLinks,
  navigationLinks,
  footerLinksOne,
  footerLinksTwo,
  footerLinksThree,
  copyRightText,
  url,
  // API Constants
  UNAUTHORIZED,
  NOT_FOUND,
  SERVER_ERROR,
  SERVICE_UNAVAILABLE,
};
