import React, { FC } from 'react';

import { FlexContainer } from 'components/ui/flex-container';
import { BodyText } from 'components/ui/typography';

import { IBasePageFooter } from '../helpers';

const PageFooter: FC<IBasePageFooter> = (props) => {
  return (
    <FlexContainer justifyCenter>
      <div>
        <BodyText>
          Page {props.currentNumber} of {props.totalNumber}
        </BodyText>
      </div>
    </FlexContainer>
  );
};

export default PageFooter;
