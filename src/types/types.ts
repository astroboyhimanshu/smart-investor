export interface InvestmentFormData {
  income: number;
  riskTolerance: string;
  goal: string;
  timeHorizon: number;
}

export interface Investment {
  header: {
    title: string;
    description: string;
  };
  sections: Array<{
    title: string;
    items: Array<{
      imgSrc: string;
      imgAlt?: string;
      title: string;
      description: string;
    }>;
  }>;
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  finalThoughts: {
    title: string;
    description: string;
  };
}

export interface FeatureType {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  navigateTo: string;
  buttonText: string;
}
