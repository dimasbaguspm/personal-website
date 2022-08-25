import React, { FC } from 'react';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, Title } from 'components/ui/typography';
import { PROFILE_INFORMATION } from 'constants/profile-information';

const PageHeader: FC = () => {
  const { fullName, title, phone, email, citizen } = PROFILE_INFORMATION;

  // TODO: implement onClick feature on each contact items
  const contact = [phone, email, citizen];

  return (
    <div>
      <Title intent='secondary'>{fullName}</Title>
      <BodyText fontWeight='thin' fontSize='normal'>
        {title}
      </BodyText>
      <FlexContainer>
        {contact.map((v, i) => (
          <BodyText fontWeight='thin' fontSize='normal' key={v} style={{ marginLeft: i !== 0 ? '0.25rem' : '0' }}>
            {v} {i !== contact.length - 1 && '•'}
          </BodyText>
        ))}
      </FlexContainer>
    </div>
  );
};

export default PageHeader;
