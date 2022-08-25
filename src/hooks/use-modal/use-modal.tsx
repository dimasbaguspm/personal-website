import React, { FC, useCallback, useState } from 'react';

import ModalWrapper, { IModalProps } from 'components/ui/modal/modal';
import { Portal } from 'hooks/use-portal/use-portal';

export const useModal = (elementId?: string) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const portalId = elementId ?? 'modal-root';

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const ModalEl: FC<Partial<IModalProps>> = ({
    onModalClose = closeModal,
    isOpen = isModalOpen,
    children,
    ...props
  }) => {
    return (
      <Portal id={portalId}>
        <ModalWrapper {...{ ...props, onModalClose, isOpen }}>{children}</ModalWrapper>
      </Portal>
    );
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    Modal: ModalEl,
  };
};
