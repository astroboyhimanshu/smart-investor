// investmentInterfaces.ts
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
