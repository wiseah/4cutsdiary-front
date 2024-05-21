import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import AlbumImg from '../images/AlbumImg.png'
import DiaryImg from '../images/DiaryImg.png'
import AddImg from '../images/AddButton.png'
import Modal from "../components/Add";

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 600px;
  display: flex;
  flex-direction:column;
  align-items: center;
 
`
const MainContainer = styled.div`
  background: #ffffff;
  height: 434px;
  width:340px;
  border-radius: 0px 0px 10px 10px;
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const TitleContainer = styled.div`
  margin-top:20px;
  background: #F48B9F;
  height:33px;
  width:340px;
  border-radius:10px 10px 0px 0px;
`
const BoxTitle = styled.div`
  padding-top:5px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: Bold;
`
const DataCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96px;
  padding-bottom: 10px;
  grid-column: span 1;
  cursor: pointer;
`

const AlbumIcon = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
`
const AlbumName = styled.div`
  font-size: 14px;
  font-weight: 600px;`

const DiaryIcon = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
`
const DiaryName = styled.div`
  font-size: 14px;
  font-weight: 600px;`

const AddButton = styled.img`
  margin-top: 10px;
  margin-bottom: 15px;
`
const AddText = styled.div`
font-size: 14px;
font-weight: 600px;`

function Test() {
  const [showModal, setShowModal] = useState(false);
  //추가부분
  const [nickname, setNickname] = useState(''); 
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setNickname(currentUser.nickname);
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = ()=> setShowModal(false);

    return (
    <Background>
      <TitleContainer>
        <BoxTitle>
          [{nickname}]의 네컷 일기 모음
        </BoxTitle>
      </TitleContainer>
      <MainContainer>
       <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>(여/남)친 ♡</AlbumName>
        </DataCell>
        <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>남는건사진뿐</AlbumName>
        </DataCell>
        <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>멋사</AlbumName>
        </DataCell>
        <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>앨범 4</AlbumName>
        </DataCell>
        <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>앨범 5</AlbumName>
        </DataCell>
        <DataCell>
          <AlbumIcon src={AlbumImg}></AlbumIcon>
          <AlbumName>앨범 6</AlbumName>
        </DataCell>

        <DataCell>
          <DiaryIcon src={DiaryImg}></DiaryIcon>
          <DiaryName>멋쟁이사자처럼</DiaryName>
        </DataCell>
        <DataCell>
          <DiaryIcon src={DiaryImg}></DiaryIcon>
          <DiaryName>12기</DiaryName>
        </DataCell>

        <DataCell>
          <AddButton src={AddImg} onClick={openModal} />
          <AddText>추가하기</AddText>
          <Modal isOpen={showModal} closeModal={closeModal} />
        </DataCell>
        
      </MainContainer>
    </Background>

  )
}

export default Test
