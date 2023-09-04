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
    date: '2022-2023',
    title: 'Lead Frontend Developer',
    place: 'PayiQ',
    bg: '#FFF4F4',
   },

   {
    id: 2,
    date: '2020 - 2022',
    title: 'Software Developer',
    place: 'PayiQ',
    bg: '#FFF1FB',
   },

   {
    id: 3,
    date: '2018 - 2020',
    title: 'Frontend Developer',
    place: 'Sway Medical',
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
    date: '2017-2021',
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
