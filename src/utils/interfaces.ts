export interface INavbarLinks {
  title: string;
  url: string;
}

export interface IFeaturesContent {
  name: string;
  description: string;
  icon: JSX.ElementType;
}

export interface IStatsContent {
  id: number;
  name: string;
  value: string;
}

export interface IPriceFeature {
  featureName: string;
  isFeatureEnabled: boolean;
}
export interface IPricingContent {
  id: number;
  title: string;
  subtitle: string;
  priceSubText: string;
  priceSubScript: string;
  price: string;
  isPopular: boolean;
  features: IPriceFeature[];
}

export interface ISocialLinks {
  url: string;
  icon: JSX.ElementType;
  title: string;
}

export interface IBlogContent {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
}

export interface ITeamContent {
  name: string;
  role: string;
  imageUrl: string;
}
