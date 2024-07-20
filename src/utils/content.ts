import type {
  IFeaturesContent,
  INavbarLinks,
  IPricingContent,
  ISocialLinks,
  IStatsContent,
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
