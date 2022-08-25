import React, { FC } from 'react';

import { IProfile } from 'types/global';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, NormalText } from 'components/ui/typography';
import { Items } from 'components/ui/items';

interface ITechStack {
  behaviorStacks: IProfile['behaviorStacks'];
}

const TechStack: FC<ITechStack> = ({ behaviorStacks }) => {
  return (
    <>
      <BodyText fontWeight='bold' style={{ margin: '5% 0' }}>
        Tech Stacks
      </BodyText>
      <FlexContainer style={{ flexWrap: 'wrap' }}>
        {behaviorStacks.map((v, i) => (
          <Items key={i}>
            <NormalText fontSize='small'>{v}</NormalText>
          </Items>
        ))}
      </FlexContainer>
    </>
  );
};

export default TechStack;
