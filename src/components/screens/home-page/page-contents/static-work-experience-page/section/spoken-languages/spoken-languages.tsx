import React, { FC } from 'react';

import { IProfile } from 'types/global';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, NormalText } from 'components/ui/typography';

interface ISpokenLanguages {
  languages: IProfile['languages'];
}

const SpokenLanguages: FC<ISpokenLanguages> = ({ languages }) => {
  return (
    <>
      <BodyText fontWeight='bold' style={{ margin: '5% 0' }}>
        Spoken Languages
      </BodyText>
      <FlexContainer directionColumn>
        {Object.values(languages).map((v) => (
          <NormalText fontSize='small' key={v.name}>
            {v.name} - {v.status}
          </NormalText>
        ))}
      </FlexContainer>
    </>
  );
};

export default SpokenLanguages;
