import React, { FC } from 'react';

import dayjs from 'dayjs';

import { IWorkExperiences } from 'types/global';

import { FlexContainer } from 'components/ui/flex-container';
import { ImageWrapper } from 'components/ui/image';
import { HorizontalLine } from 'components/ui/line-breaker';
import { BodyText, NormalText } from 'components/ui/typography';

interface IProfessionalExperience {
  details: IWorkExperiences;
}

const ProfessionalExperience: FC<IProfessionalExperience> = ({ details }) => {
  return (
    <div key={details.companyName}>
      <FlexContainer alignCenter>
        <FlexContainer alignCenter>
          <ImageWrapper alt={details.companyName} src={details.companyLogo} />
        </FlexContainer>
        <div style={{ marginLeft: '2.5%' }}>
          <BodyText>
            {details.companyName} • {details.role}
          </BodyText>
          <HorizontalLine />
          <div>
            <NormalText intent='primary' intentPrimary={false} fontWeight='thin'>
              Start from {dayjs(details.startDate).format('D MMMM YYYY')} -{' '}
              {details.isOnGoing ? 'present' : dayjs(details.endDate).format('D MMMM YYYY')}.
            </NormalText>
          </div>
        </div>
      </FlexContainer>
      <div style={{ marginTop: '3%' }}>
        <BodyText>Responsibilities:</BodyText>
        <FlexContainer directionColumn>
          {details.responsibility.map((v, i) => (
            <FlexContainer key={i}>
              <NormalText>•</NormalText>
              <NormalText style={{ marginLeft: '2%' }} intent='primary' intentPrimary={false}>
                {v}
              </NormalText>
            </FlexContainer>
          ))}
        </FlexContainer>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
