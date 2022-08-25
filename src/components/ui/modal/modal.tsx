import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { getIntentColor } from 'utils/theming';
import { HorizontalLine } from '../line-breaker';
import { SubTitle } from '../typography';

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
  onModalClose: () => void;
  title?: string;
}

const ModalWrapper: FC<Partial<IModalProps>> = ({ children, isOpen, onModalClose, title, ...rest }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalBg onClick={onModalClose} />
      <ElModalContentBg {...rest}>
        {title && (
          <>
            <SubTitle>{title}</SubTitle>
            <HorizontalLine style={{ marginBottom: '1rem' }} />
          </>
        )}
        {children}
      </ElModalContentBg>
    </>
  );
};

export default ModalWrapper;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${getIntentColor('low')};
  opacity: 50%;
  z-index: 100;
`;

const ElModalContentBg = styled.div`
  width: 40%;
  height: auto;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${getIntentColor('low', false)};
  padding: 2rem;
  z-index: 101;

  ${SubTitle} {
    margin-bottom: 15px;
  }
`;
