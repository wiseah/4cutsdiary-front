import React, { useState } from "react";
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

const QRCodeScanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
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
          <span>{result}</span>
        </p>
      </Container>
      
    </>
  );
};
export default QRCodeScanner;