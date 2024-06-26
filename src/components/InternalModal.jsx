import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import DirectImg from '../images/DirectImg.png'
import ScanAddImg from '../images/ScanAddImg.png'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
border: black 1px solid;
  width:324px;
  height: 311px;
  background: #ffffff;
  box-shadow: 5px 5px 5px #c9c9c9;
  border-radius: 10px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`
const Title = styled.div`
  color: #D62C4D;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`
const MiddleContainer = styled.div`
  height:190px;
  width: 290px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
`
const LeftContainer = styled.div`
  border: black 2px solid;
  width: 120px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:5px;

  &:hover {
    background-color: #e7e7e7; /* 더 진한 초록색 */
  }
`
const RightContainer= styled.div`
  border: black 2px solid;
  width: 120px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:5px;
  margin-left: 20px;

  &:hover {
    background-color: #e7e7e7; /* 더 진한 초록색 */
  }
`
const DirectImage = styled.img`
  margin-top: 40px;
  margin-bottom:10px;
`
const ScanAddImage = styled.img`
  margin-top: 40px;
  margin-bottom:10px;
`
const Text = styled.div`
  width:55px;
  height: 30px;
  font-size:13px;
  font-weight: bold;
  white-space: pre-line;
  margin-left:3px;
`
const DeleteButton = styled.div`
  width:290px;
  height:29px;
  background: #F48B9F;
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  margin-left: 17px;
  padding-top: 5px;
  font-weight: bold;
`
 
function InternalModal({isOpen, closeModal, children, addDiary}) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      sessionStorage.setItem('image',url);
      navigate('/maindiarytest');
    }
  }, [file])
  
  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

    return (
    
     <Container style={{display: isOpen? "block" : "none"}}>
        <Title>무엇을 추가할까요?</Title>
          <MiddleContainer>
            <LeftContainer onClick={()=>navigate('/scan')}>
              <ScanAddImage src={ScanAddImg}></ScanAddImage>
              <Text>{`스캔해서\n추가하기`}</Text>
            </LeftContainer>
            <RightContainer onClick={triggerFileInput}>
              <DirectImage src={DirectImg}></DirectImage>
              <Text>{`직접\n추가하기`}</Text>
            </RightContainer>
          </MiddleContainer>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
        <DeleteButton onClick={closeModal}>취소</DeleteButton>
        {children}
     </Container>
    )
  }
  
  export default InternalModal