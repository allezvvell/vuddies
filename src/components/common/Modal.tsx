import styled from 'styled-components';
import Button from './Button';
import mediaQuery from '@components/styles/responsive';

interface Props {
  children: React.ReactNode;
  onClick(): void;
}

const Modal = ({ children, onClick }: Props) => {
  return (
    <>
      <SDim />
      <SModal>
        <SModalHeader>알림</SModalHeader>
        <SModalBody>{children}</SModalBody>
        <SModalFooter>
          <Button onClick={onClick} $border="none" $fontSize="medium">
            확인
          </Button>
        </SModalFooter>
      </SModal>
    </>
  );
};

export default Modal;

const SDim = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SModal = styled.div`
  overflow: hidden;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1200;
  min-width: 300px;
  max-width: 600px;
  background-color: var(--bg-color-modal);
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;

const SModalHeader = styled.header`
  padding: 12px 0;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;

const SModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72px;
  padding-bottom: 12px;
`;

const SModalFooter = styled.footer`
  display: grid;
  height: 44px;
`;
