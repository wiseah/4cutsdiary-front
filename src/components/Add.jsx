//2-1.모달

import React, { useState } from 'react'
import styled from 'styled-components';
import GalleryImg from "../images/GalleryImg.png"
import ScanImg from "../images/ScanImg.png"
import AlbumImg from '../images/AlbumImg.png'
import AlbumAddModal from './AlbumAddModal'
import { useNavigate } from 'react-router-dom';

const ModalContainer = styled.div`
  width: 324px;
  height: 311px;
  background: #ffffff;
  box-shadow: 5px 5px 5px #c9c9c9;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ModalTitle = styled.div`
  color: #D62C4D;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`
const CenterContainer = styled.div`
  height:190px;
  width: 290px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
`
const LeftAddContainer = styled.div`
  width:120px;
  height:173px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right:15px;
  justify-content: space-between;
`
const RightAddContainer= styled.div`
  border: black 2px solid;
  width: 120px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:5px;

  &:hover {
    background-color: #e7e7e7;
  }
`
const AddingContainer = styled.div`
  width: 125px;
  height:75px;
  border: black 2px solid;
  border-radius:5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: #e7e7e7;
  }
`
const GalleryIcon = styled.img`
  margin-left: 12px;
`
const ScanIcon = styled.img`
  margin-left:8px;
`
const AlbumIcon = styled.img`
  margin-top: 30px;
  margin-bottom:10px;
`
const IconText = styled.div`
  width:55px;
  height: 30px;
  font-size:13px;
  font-weight: bold;
  white-space: pre-line;
  margin-left:3px;
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

function Add({ isOpen, closeModal }) {
  const navigate = useNavigate();

  const [showAlbumAddModal, setShowAlbumAddModal] = useState(false);

  const openAlbumAddModal = () => setShowAlbumAddModal(true);
  const closeAlbumAddModal = () => setShowAlbumAddModal(false);

  return (
    <>
      <ModalContainer style={{ display: isOpen ? 'block' : 'none' }}>
        <ModalTitle>무엇을 추가할까요?</ModalTitle>
        <CenterContainer>
          <LeftAddContainer>
            <AddingContainer onClick={() => navigate('/scan')}>
              <ScanIcon src={ScanImg} />
              <IconText>{`스캔해서\n추가하기`}</IconText>
            </AddingContainer>
            <AddingContainer>
              <GalleryIcon src={GalleryImg} />
              <IconText>{`직접\n추가하기`}</IconText>
            </AddingContainer>
          </LeftAddContainer>
          <RightAddContainer onClick={openAlbumAddModal}>
            <AlbumIcon src={AlbumImg} />
            <IconText>앨범추가</IconText>
          </RightAddContainer>
        </CenterContainer>
        <CancelButton onClick={closeModal}>취소</CancelButton>
      </ModalContainer>
      <AlbumAddModal isAlbumModalOpen={showAlbumAddModal} closeAlbumModal={closeAlbumAddModal} />
    </>
  );
}

export default Add
