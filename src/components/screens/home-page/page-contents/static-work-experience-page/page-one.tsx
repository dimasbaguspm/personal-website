import React, { FC } from 'react';

import { WORK_DETAIL } from 'constants/work-details';
import { PROFILE_INFORMATION } from 'constants/profile-information';

import PageHeader from '../../page-header';

import MoreAboutMe from './section/more-about-me';
import ProgrammingLanguages from './section/programming-languages';
import SpokenLanguages from './section/spoken-languages';
import TechStacks from './section/tech-stacks';
import ProfessionalExperience from './section/professional-experience';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText } from 'components/ui/typography';
import PageFooter from '../../page-footer';
import { IBasePageFooter } from '../../helpers';

import AboutMe from './section/about-me';
import useGetScreenResolution from 'hooks/use-get-screen-resolution';

interface IStaticWorkExperiencePage extends IBasePageFooter {}

const StaticWorkExperiencePage: FC<IStaticWorkExperiencePage> = ({ currentNumber, totalNumber }) => {
  const { experiencesProgrammingLanguages, behaviorStacks, languages, socialMedia } = PROFILE_INFORMATION;
  const { experiences } = WORK_DETAIL;

  const { isMobileScreen } = useGetScreenResolution();

  return (
    <FlexContainer directionColumn justifyBetween style={{ height: '100%' }}>
      <div>
        <PageHeader />
        <FlexContainer style={{ marginTop: '3.5%' }} directionColumn={isMobileScreen}>
          <div style={{ width: isMobileScreen ? '100%' : '65%', paddingRight: isMobileScreen ? '0' : '2%' }}>
            <div>
              <BodyText fontWeight='bold'>About Me</BodyText>
              <AboutMe style={{ marginTop: '2%' }} />
            </div>

            <div style={{ marginTop: '3%' }}>
              <BodyText fontWeight='bold' style={{ margin: '5% 0' }}>
                Professional Experiences
              </BodyText>

              <FlexContainer directionColumn style={{ marginTop: '3.5%' }}>
                {experiences.map((v) => (
                  <ProfessionalExperience key={v.companyName} details={v} />
                ))}
              </FlexContainer>
            </div>
          </div>

          <div style={{ width: isMobileScreen ? '100%' : '35%' }}>
            <FlexContainer directionColumn>
              <div>
                <ProgrammingLanguages {...{ experiencesProgrammingLanguages }} />
              </div>

              <div>
                <TechStacks {...{ behaviorStacks }} />
              </div>

              <div>
                <SpokenLanguages {...{ languages }} />
              </div>

              <div>
                <MoreAboutMe {...{ socialMedia }} />
              </div>
            </FlexContainer>
          </div>
        </FlexContainer>
      </div>

      <PageFooter {...{ currentNumber, totalNumber }} />
    </FlexContainer>
  );
};

export default StaticWorkExperiencePage;
