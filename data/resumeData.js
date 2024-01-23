import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

module.exports = [
 {
  id: 1,
  title: 'Experience',
  icon: <MdOutlineBusinessCenter />,
  items: [
   {
    id: 1,
    date: '2021-2024',
    title: 'Lead Frontend Engineer',
    place: 'PayiQ',
    bg: '#FFF4F4',
   },

   {
    id: 2,
    date: '2019 - 2021',
    title: 'Frontend Engineer',
    place: 'Sway Medical',
    bg: '#FFF1FB',
   },
   {
    id: 3,
    date: '2018 - 2018',
    title: 'Web Developer',
    place: 'Fastback Digital',
    bg: '#FFF4F4',
   },
   {
    id: 3,
    date: '2016 - 2018',
    title: 'IT Support',
    place: 'Ethos Group',
    bg: '#FFF4F4',
   },
  ],
 },
 {
  id: 2,
  title: 'Education',
  icon: <MdOutlineSchool />,
  items: [
   {
    id: 1,
    date: '2010 - 2014',
    title: 'Bachelors of Science',
    place: 'Stephen F Austin State University',
    bg: '#EEF5FA',
   },
  ],
 },
 {
  id: 3,
  title: 'Awards',
  icon: <FaAward />,
  items: [
   {
    id: 1,
    date: '2015-2017',
    title: '  Graphic Designer',
    place: 'Web Graphy, Los Angeles, CA',
    bg: '#FCF4FF',
   },

   {
    id: 2,
    date: '2014 - 2015',
    title: 'Jr. Web Developer',
    place: 'Creative Gigs.',
    bg: '#FCF9F2',
   },

   {
    id: 3,
    date: '2015-2017',
    title: 'Best Freelancer',
    place: 'Fiver & Upwork Level 2 & Top Rated',
    bg: '#FCF4FF',
   },
  ],
 },
];
