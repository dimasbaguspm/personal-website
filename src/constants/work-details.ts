import { IWorkDetail, IWorkExperiences } from '../types/global';

import SSCompanyLogo from 'assets/image/company-software-seni.png';

const WORK_EXPERIENCES: IWorkExperiences[] = [
  {
    companyName: 'SoftwareSeni (AU)',
    isOnGoing: true,
    companyLogo: SSCompanyLogo,
    role: 'React.JS Developer',
    startDate: new Date('2021-12-6'),
    responsibility: [
      'Become Squad coordinator between SoftwareSeni and our foreign Project Manager',
      'Handle communications with clients from UK and Australia',
      'Collaborate with the team to create products with specified requirements',
    ],
  },
];

export const WORK_DETAIL: IWorkDetail = {
  isOpenForOpportunities: false,
  experiences: WORK_EXPERIENCES,
};
