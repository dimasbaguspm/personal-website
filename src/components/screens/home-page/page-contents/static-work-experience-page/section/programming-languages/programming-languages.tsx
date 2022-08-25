import React, { FC } from 'react';

import { IProfile } from 'types/global';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, NormalText } from 'components/ui/typography';
import { Items } from 'components/ui/items';

interface IProgrammingLanguages {
  experiencesProgrammingLanguages: IProfile['experiencesProgrammingLanguages'];
}

const ProgrammingLanguages: FC<IProgrammingLanguages> = ({ experiencesProgrammingLanguages }) => {
  return (
    <>
      <BodyText fontWeight='bold' style={{ marginBottom: '5%' }}>
        Programming Languages
      </BodyText>
      <FlexContainer style={{ flexWrap: 'wrap' }}>
        {experiencesProgrammingLanguages.map((v, i) => (
          <Items key={i}>
            <NormalText fontSize='small'>{v}</NormalText>
          </Items>
        ))}
      </FlexContainer>
    </>
  );
};

export default ProgrammingLanguages;
