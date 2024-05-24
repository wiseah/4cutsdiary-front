// Main.js
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import AddImg from '../images/AddButton.png';
import Add from "../components/Add";
import AlbumForm from "../components/AlbumForm";

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  background: #ffffff;
  /* height: 434px; */
  width: 340px;
  border-radius: 0px 0px 10px 10px;
  padding: 24px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  background: #F48B9F;
  height: 33px;
  width: 340px;
  border-radius: 10px 10px 0px 0px;
`;

const BoxTitle = styled.div`
  padding-top: 5px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96px;
  padding-bottom: 10px;
  grid-column: span 1;
  cursor: pointer;
`;

const AddButton = styled.img`
  margin-top: 10px;
  margin-bottom: 15px;
`;

const AddText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [albums, setAlbums] = useState([
    { type: 'album', name: '(여/남)친 ♡' },
    { type: 'album', name: '남는건사진뿐' },
    { type: 'album', name: '멋사' },
    { type: 'album', name: '앨범 4' },
    { type: 'album', name: '앨범 5' },
    { type: 'album', name: '앨범 6' },
    { type: 'diary', name: '멋쟁이사자처럼' },
    { type: 'diary', name: '12기' }
  ]);

  const [nickname, setNickname] = useState(''); 
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setNickname(currentUser.nickname);
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addAlbum = (name) => {
    setAlbums([...albums, { type: 'album', name }]);
    closeModal();
  };

  return (
    <Background>
      <TitleContainer>
        <BoxTitle>{nickname}의 네컷 일기 모음</BoxTitle>
      </TitleContainer>
      <MainContainer>
        {albums.map((album, index) => (
          <AlbumForm key={index} type={album.type} name={album.name} />
        ))}
        <AddButtonContainer onClick={openModal}>
          <AddButton src={AddImg} />
          <AddText>추가하기</AddText>
        </AddButtonContainer>
      </MainContainer>
      <Add isOpen={showModal} closeModal={closeModal} addAlbum={addAlbum} />
    </Background>
  );
}

export default Main;
