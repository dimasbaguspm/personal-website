import React, { FC } from 'react';

import dayjs from 'dayjs';

import { IProject } from 'types/global';

import { useModal } from 'hooks/use-modal/use-modal';

import { Button } from 'components/ui/button';
import { FlexContainer } from 'components/ui/flex-container';
import { BodyText, NormalText } from 'components/ui/typography';
import { Items } from 'components/ui/items';

import ModalContent from './modal-content';

export interface ISingleProject {
  data: IProject;
}

const SingleProject: FC<ISingleProject> = ({ data }) => {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      <FlexContainer>
        <div style={{ marginRight: '1.5%' }}>
          <BodyText>•</BodyText>
        </div>
        <div style={{ width: '-webkit-fill-available' }}>
          <div>
            <FlexContainer alignCenter>
              <BodyText fontWeight='bold'>{data.name}</BodyText>
              {data.relatedTo && (
                <BodyText fontWeight='thin' style={{ marginLeft: '1%' }}>
                  - Related with {data.relatedTo}
                </BodyText>
              )}
            </FlexContainer>
            <FlexContainer>
              <NormalText fontWeight='thin' intent='secondary'>
                {data.role}
              </NormalText>
              <NormalText fontWeight='thin' intent='secondary' style={{ marginLeft: '0.5%' }}>
                | Start: {dayjs(data.period.startDate).format('DD/MM/YYYY')}{' '}
                {data.period.endDate ? (
                  <>- Finished on {dayjs(data.period.endDate).format('DD/MM/YYYY')}</>
                ) : (
                  '(On going)'
                )}
              </NormalText>
            </FlexContainer>
          </div>

          {/* my tasks */}
          <div style={{ marginTop: '1%' }}>
            <BodyText>Tasks:</BodyText>
            <FlexContainer directionColumn>
              {data.responsibility.map((v, i) => (
                <FlexContainer key={i}>
                  <NormalText>-</NormalText>
                  <NormalText style={{ marginLeft: '1%' }} intent='primary' intentPrimary={false}>
                    {v}
                  </NormalText>
                </FlexContainer>
              ))}
            </FlexContainer>
          </div>

          <div style={{ marginTop: '1%' }}>
            <FlexContainer justifyBetween alignEnd>
              <div style={{ width: '70%' }}>
                <BodyText>Stacks</BodyText>
                <FlexContainer style={{ flexWrap: 'wrap' }}>
                  {data.techStack.map((v, i) => (
                    <Items key={i}>
                      <NormalText fontSize='small'>{v}</NormalText>
                    </Items>
                  ))}
                </FlexContainer>
              </div>
              <div>
                <Button intent='secondary' intentPrimary={false} onClick={openModal}>
                  <BodyText fontSize='small'>More Details</BodyText>
                </Button>
              </div>
            </FlexContainer>
          </div>
        </div>
      </FlexContainer>

      <Modal title={data.name}>
        <ModalContent {...{ data, closeModal }} />
      </Modal>
    </>
  );
};

export default SingleProject;
