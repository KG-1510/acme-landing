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
}