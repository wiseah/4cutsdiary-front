import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  gap: 30px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MaindiaryModalForUpload = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <h2>일기를 저장중입니다...</h2>
        <p>잠기만 기다려주세요</p>
      </ModalContainer>
    </ModalBackground>
  );
};

export default MaindiaryModalForUpload;
