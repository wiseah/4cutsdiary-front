import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddImg from '../images/AddButton.png';
import Add from "../components/Add";
import AlbumForm from "../components/AlbumForm";
import { useNavigate } from 'react-router-dom';
import getAlbumInfo from '../APIs/get/getAlbumInfo';
import DiaryForm from '../components/DiaryForm';

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
  const [albums, setAlbums] = useState([]);
  const [diaries, setDiaries] = useState([]);

  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {(
    setNickname(sessionStorage.getItem("userName")));

    // 초기 앨범 정보를 가져오는 API 호출
    const fetchAlbumInfo = async () => {
      try {
        const albumData = await getAlbumInfo();
        console.log("앨범 데이터:", albumData); // 응답 데이터를 콘솔에 출력
        setAlbums(albumData.albums);
        setDiaries(albumData.diaries);
      } catch (error) {
        console.log("앨범 정보를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchAlbumInfo();
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleClick = (id) => {
    navigate(`/album/${id}`);
  };

  const handleClickDiary = (id) => {
    navigate(`/maindiarycheck/${id}`);
  }; 
  
  return (
    <Background>
      <TitleContainer>
        <BoxTitle>{nickname}의 네컷 일기 모음</BoxTitle>
      </TitleContainer>
      <MainContainer>
        {albums.map(album => (
          <AlbumForm key={album.albumId} name={album.albumName} onClick={() => handleClick(album.id)} />
        ))}
        {diaries.map(diary => (
          <DiaryForm key={diary.id} name={diary.title} onClick={() => handleClickDiary(diary.id)} />
        ))}
        <AddButtonContainer onClick={openModal}>
          <AddButton src={AddImg} />
          <AddText>추가하기</AddText>
        </AddButtonContainer>
      </MainContainer>
      <Add isOpen={showModal} closeModal={closeModal} />
    </Background>
  );
}

export default Main;
