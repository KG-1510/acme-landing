import type { IFeaturesContent, INavbarLinks, IStatsContent } from './interfaces';
import {
  HiLockClosed,
  HiMiniPaintBrush,
  HiMiniUserGroup,
  HiMiniRocketLaunch,
} from 'react-icons/hi2';

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
