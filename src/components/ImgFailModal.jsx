import React,{useState} from "react";
import styled from "styled-components";
import SorryImg from '../images/SorryImg.png';

const ModalContainer = styled.div`
    width: 324px;
    height: 239px;
    background: #ffffff;
    box-shadow: 5px 5px 5px #c9c9c9;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ModalTitle = styled.div`
    color: #D62C4D;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
`
const FailInfoContainer = styled.div`
    width: 270px;
    height: 94px;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
`
const SorryIcon  = styled.img`
    margin: 5px;
`
const ImgFailText = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: start;
`
const CancelButton = styled.div`
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
function ImageFailModal (isFailModalOpen, closeImgFailModal) {

    return(
        <ModalContainer style={{display: isFailModalOpen? "block" : "none"}}>
            <ModalTitle>이미지 처리에 실패했습니다. </ModalTitle>
            <FailInfoContainer>
                <SorryIcon src={SorryImg}></SorryIcon>
                <ImgFailText>해당 이미지는<br/>네컷 사진에 포함되지 않아요</ImgFailText>
            </FailInfoContainer>
                <CancelButton onClick={closeImgFailModal}>확인</CancelButton>
        </ModalContainer>
    )
}

export default ImageFailModal