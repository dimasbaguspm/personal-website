import React, { FC } from 'react';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, NormalText } from 'components/ui/typography';
import { IProfile } from 'types/global';

interface IMoreAboutMe {
  socialMedia: IProfile['socialMedia'];
}

const MoreAboutMe: FC<IMoreAboutMe> = ({ socialMedia }) => {
  return (
    <>
      <BodyText fontWeight='bold' style={{ margin: '5% 0' }}>
        More of about me
      </BodyText>
      <FlexContainer style={{ flexWrap: 'wrap' }} directionColumn>
        {Object.values(socialMedia).map((v) => (
          <NormalText
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            fontWeight='bold'
            fontSize='small'
            key={v.name}
            onClick={() => window.open(v.url)}>
            {v.name}
          </NormalText>
        ))}
      </FlexContainer>
    </>
  );
};

export default MoreAboutMe;
