import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useZxing } from "react-zxing";

const Header = styled.div`
  background-color: #3B3B3B;
  color: #ffffff;
  height: 100px;
  padding: 30px;
`;
const Text1 = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Text2 = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const Container = styled.div`
  /* width: 390px; */
  height: calc(100vh - 340px);
`;
const Footer = styled.div`
  background-color: #3B3B3B;
  color: #ffffff;
  height: 120px;
  padding: 30px;
  z-index: 1000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text3 = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  display: flex;
`;

const QRCodeScanner = () => {
  const [qrLink, setQrLink] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!qrLink) return;

    const getImage = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/4cutimage?url=${qrLink}`);
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          sessionStorage.setItem("image", url);
          navigate('/maindiarytest');
        }
      } catch {
        console.error("오류 발생");
      }
    };
    getImage();
  }, [qrLink, navigate]);

  const { ref } = useZxing({
    onDecodeResult(qrInfo) {
      setQrLink(qrInfo.getText());
    },
  });

  return (
    <>
      <Header>
        <Text1>네컷일기</Text1>
        <Text2>QR 스캔중...</Text2>
      </Header>
      <Container>        
        <video ref={ref} />
        <p>
          <span>Last result:</span>
          <span>{qrLink}</span>
        </p>
      </Container>
      <Footer>
        <Text3>알맞은 위치에 QR코드를 스캔해주세요.</Text3>
      </Footer>
    </>
  );
};

export default QRCodeScanner;
