import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZxing } from "react-zxing";
import styled from "styled-components";

const Header = styled.div`
  background-color: #3B3B3B;
  color: #ffffff;
  /* width: 390px; */
  height: 100px;
  padding: 30px;
`
const Text1 = styled.div`
  font-size:24px;
  font-weight: 700;
`
const Text2 = styled.div`
  font-size:40px;
  font-weight: 700;
`
const Container = styled.div`
  width: 390px;
  height: 390px;
`
const Footer = styled.div`
  background-color: #3B3B3B;
  color: #ffffff;
  /* width: 390px; */
  height: 120px;
  padding: 30px;
  z-index: 1000; /* 푸터의 z-index 값을 크게 설정합니다. */
  position: relative; /* 상대적인 위치 지정 */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
`
const Text3 = styled.div`
  font-size:20px;
  font-weight: 700;
  text-align: center;
  display: flex;
`

const Button =styled.button`
  background-color: #ffffff;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  margin-top: 20px;
`

const QRCodeScanner = () => {  
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  const navigate = useNavigate();

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
          <span>{result}</span>
        </p>
      </Container>
      <Footer>
        <Text3>알맞은 위치에 QR코드를 스캔해주세요.</Text3>
        <Button onClick={()=>navigate('/maindiarytest')}></Button>
      </Footer>
      
    </>
  );
};
export default QRCodeScanner;