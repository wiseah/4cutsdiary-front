//2.2 모달
import React, {useState} from 'react'
import styled from 'styled-components';
import AlbumImg from '../images/AlbumImg.png'
import AlbumNameInput from "../components/AlbumNameInput";

const ModalBackground = styled.div`
    width: 324px;
    height: 311px;
    background: #ffffff;
    box-shadow: 5px 5px 5px #c9c9c9;
    border-radius: 10px;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ModalContent = styled.div`
    width:300px;
    height: 300px;
    margin-left:10px;
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
const AlbumIcon = styled.img`
    margin : 40px;
`
const InputAlbumName = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 25px;
    border: 5px solid #f48b9f;
    margin-bottom: 10px;
    cursor: pointer;
`
const ButtonContainer = styled.div`
    width: 260px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const CancelButton = styled.div`
    width:120px;
    height: 25px;
    border-radius: 35px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    text-align: center;
    background: #f48b9f;
    padding-top: 10px;
`
const ConfirmButton = styled.div`
    width:120px;
    height: 25px;
    border-radius: 35px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    background: #d62c4d;
    text-align: center;
    padding-top: 10px;
`
function AlbumAddModal({ isAlbumModalOpen, closeAlbumModal }) {
    return (
      <ModalBackground style={{ display: isAlbumModalOpen ? 'block' : 'none' }}>
        <ModalContent>
          <ModalTitle>무엇을 추가할까요?</ModalTitle>
          <AlbumIcon src={AlbumImg} />
          <AlbumNameInput placeholder="앨범(폴더)명을 입력해주세요" />
          <ButtonContainer>
            <CancelButton onClick={closeAlbumModal}>취소</CancelButton>
            <ConfirmButton>확인</ConfirmButton>
          </ButtonContainer>
        </ModalContent>
      </ModalBackground>
    );
  }

export default AlbumAddModal
