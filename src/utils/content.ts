import type {
  IBlogContent,
  IFeaturesContent,
  INavbarLinks,
  IPricingContent,
  ISocialLinks,
  IStatsContent,
  ITeamContent,
} from './interfaces';
import {
  HiLockClosed,
  HiMiniPaintBrush,
  HiMiniUserGroup,
  HiMiniRocketLaunch,
} from 'react-icons/hi2';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const navbarLinks: INavbarLinks[] = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Features',
    url: '/features',
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'Get in Touch',
    url: '/contact',
  },
];

export const featuresContent: IFeaturesContent[] = [
  {
    name: 'Faster than you think',
    description:
      'Loads even without an internet connection, allows you to jot down thoughts as fast as you think.',
    icon: HiMiniRocketLaunch,
  },
  {
    name: 'Share and collaborate',
    description:
      'Do not work in silos, share your notes, collaborate with people in real-time with just a click.',
    icon: HiMiniUserGroup,
  },
  {
    name: 'Rich-text support',
    description:
      'Images, texts, videos, voice notes, bold, italics, or underline, this notes app seamlessly integrates it all.',
    icon: HiMiniPaintBrush,
  },
  {
    name: 'Advanced security',
    description:
      'Protect your notes with robust security features such as end-to-end encryption, biometric authentication, and password protection. Nobody, not even Acme can read your notes.',
    icon: HiLockClosed,
  },
];

export const statsContent: IStatsContent[] = [
  { id: 1, name: 'Notes created everyday', value: '4 million' },
  { id: 2, name: 'New users annually', value: '27,000' },
  { id: 3, name: 'Countries reached', value: '87' },
];

export const pricingCardsContent: IPricingContent[] = [
  {
    id: 1,
    title: 'Basic',
    subtitle: 'The most used pricing plan (for obvious reasons)',
    price: '₹0',
    priceSubScript: '',
    priceSubText: 'No credit card required!',
    isPopular: false,
    features: [
      {
        featureName: 'Collaborative Workspace',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Unlimited file uploads',
        isFeatureEnabled: false,
      },
      {
        featureName: 'Audit Log',
        isFeatureEnabled: false,
      },
      {
        featureName: 'Customer Success Manager',
        isFeatureEnabled: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Plus',
    subtitle: 'The most popular pricing plan, totally recommended for mid-sized workforce',
    price: '₹2,500',
    priceSubScript: '/ month',
    priceSubText: 'Credit card only',
    isPopular: true,
    features: [
      {
        featureName: 'Collaborative Workspace',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Unlimited file uploads',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Audit Log',
        isFeatureEnabled: false,
      },
      {
        featureName: 'Customer Success Manager',
        isFeatureEnabled: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Enterprise',
    subtitle: 'The plan for the big sized teams, over 100 users',
    price: '₹14,000',
    priceSubScript: '/ month',
    priceSubText: 'Contact sales for offers!',
    isPopular: false,
    features: [
      {
        featureName: 'Collaborative Workspace',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Unlimited file uploads',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Audit Log',
        isFeatureEnabled: true,
      },
      {
        featureName: 'Customer Success Manager',
        isFeatureEnabled: true,
      },
    ],
  },
];

export const footerLinks: INavbarLinks[] = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Team',
    url: '/team',
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export const socialLinks: ISocialLinks[] = [
  {
    url: 'https://www.facebook.com/atlanhq/',
    icon: FaFacebook,
  },
  {
    url: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    url: 'https://www.linkedin.com/company/atlan-hq/',
    icon: FaLinkedin,
  },
  {
    url: 'https://x.com/AtlanHQ',
    icon: FaXTwitter,
  },
  {
    url: 'https://github.dev/KG-1510',
    icon: FaGithub,
  },
];

export const blogContent: IBlogContent[] = [
  {
    id: 1,
    title: 'Boost Your Productivity with Gen AI',
    href: '/signup',
    description:
      'Learn how with the autofill feature of ChatGPT 4o you can be faster in making notes',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Enhance Your SEO Strategy',
    href: '/signup',
    description:
      'Use the power of Search Enginer Optimization techniques to create content that generates more traction and better revenue for the organization',
    date: 'Apr 5, 2024',
    datetime: '2024-04-05',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Jane Smith',
      role: 'SEO Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Mastering Social Media Marketing',
    href: '#',
    description:
      'With the ever growing demand of better marketing, Social Media is the perfect place as a starter to write good content and generate organic users',
    date: 'May 10, 2024',
    datetime: '2024-05-10',
    category: { title: 'Social Media', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Social Media Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export const teamContent: ITeamContent[] = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Kushagra Gupta',
    role: 'Frontend Web Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEn8vf1JyLTyQ/profile-displayphoto-shrink_400_400/0/1702993015869?e=1726704000&v=beta&t=ylPzsWdB6nKSHcgASObKkYkz_YyqQvKcrLovErJUl9Y',
  },
  {
    name: 'Jane Doe',
    role: 'Designer',
    imageUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Mary Jane',
    role: 'QA',
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];
