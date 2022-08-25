export interface IProfile {
  foreName: string;
  surName: string;
  fullName: string;

  title: string;

  phone: string;
  email: string;

  citizen: string;

  socialMedia: {
    [V: string]: {
      name: V;
      url: string;
    };
  };

  languages: {
    [V: string]: {
      name: V;
      status: string;
    };
  };

  experiencesProgrammingLanguages: string[];

  behaviorStacks: string[];
}

export interface IProject {
  name: string; // project name
  relatedTo?: string; // company name or self pace or freelance
  shortDescription: string; // description that relate to the project
  role: string;

  period: {
    startDate: Date | string;
    endDate?: Date | string;
  };

  highlightAchievements: {
    name: string;
    description: string;
    icons?: ReactNode;
  }[];

  projectPreview: {
    name: string;
    description?: string;
    type: string;
    src: string;
  }[]; // will pop-out the modal of preview img / video

  repository:
    | {
        isOpenSource: boolean;
        provider: string; //github or gitlab or etc
        url: string;
      }
    | undefined;

  demo: string | undefined;

  responsibility: string[];

  techStack: string[];
}

export interface IWorkDetail {
  isOpenForOpportunities: boolean;
  experiences: IWorkExperiences[];
}

export interface IWorkExperiences {
  companyName: string;
  isOnGoing: boolean;
  role: string;
  companyLogo: string;

  startDate: Date | string;
  endDate?: Date | string;

  responsibility: string[];
}
