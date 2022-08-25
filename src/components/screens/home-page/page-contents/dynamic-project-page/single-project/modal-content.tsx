import React, { FC, ReactNode, useCallback } from 'react';

import { Button } from 'components/ui/button';
import { FlexContainer } from 'components/ui/flex-container';
import { Items } from 'components/ui/items';
import { BodyText, NormalText } from 'components/ui/typography';

import { ISingleProject } from './single-project';

interface IModalContent extends ISingleProject {
  closeModal: () => void;
}

const ModalContent: FC<IModalContent> = ({ data, closeModal }) => {
  const renderProjectPreviewSection = useCallback((condition: boolean): ReactNode => {
    let curEl: ReactNode;

    if (condition) {
      curEl = <h2>show me the carousel</h2>;
    } else {
      curEl = (
        <NormalText fontSize='normal' intent='primary' intentPrimary={false} alignment='center'>
          at this moment, this project preview is currently unavailable
        </NormalText>
      );
    }

    return (
      <>
        <BodyText fontSize='normal'>Preview</BodyText>
        {curEl}
      </>
    );
  }, []);

  const renderDescriptionSection = useCallback((): ReactNode => {
    return (
      <>
        <BodyText>Description</BodyText>
        <NormalText intent='primary' intentPrimary={false}>
          {data.shortDescription}
        </NormalText>
      </>
    );
  }, [data.shortDescription]);

  const renderRepoSection = useCallback((condition: boolean): ReactNode => {
    if (!condition) {
      return <BodyText>Repository is unavailable</BodyText>;
    }

    return <BodyText>Repository</BodyText>;
  }, []);

  const renderDemoSection = useCallback((condition: boolean): ReactNode => {
    if (!condition) {
      return <BodyText>Demo site is unavailable</BodyText>;
    }
    return <h2>Demo</h2>;
  }, []);

  return (
    <>
      <div>{renderProjectPreviewSection(!!data.projectPreview.length)}</div>
      <div style={{ margin: '1rem 0' }}>{renderDescriptionSection()}</div>
      <FlexContainer justifyBetween style={{ margin: '1rem 0' }}>
        {renderRepoSection(!!data.repository)}
        {renderDemoSection(!!data.demo?.length)}
      </FlexContainer>
      <div style={{ margin: '1rem 0' }}>
        <BodyText>Tags</BodyText>
        <FlexContainer style={{ flexWrap: 'wrap' }}>
          {data.techStack.map((v, i) => (
            <Items key={i}>
              <NormalText fontSize='small'>{v}</NormalText>
            </Items>
          ))}
        </FlexContainer>
      </div>
      <FlexContainer justifyRight style={{ marginTop: '1rem' }}>
        <Button intent='secondary' intentPrimary={false} onClick={closeModal}>
          <BodyText>Close</BodyText>
        </Button>
      </FlexContainer>
    </>
  );
};

export default ModalContent;
