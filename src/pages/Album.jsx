import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddImg from '../images/AddImg.png';
import Modal from "../components/InternalModal";
import AlbumForm from '../components/AlbumForm';
import { useNavigate, useParams } from 'react-router-dom';
import DiaryForm from '../components/DiaryForm';
import getInnerAlbum from '../APIs/get/getInnerAlbum';

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  background: #F48B9F;
  height: 33px;
  width: 340px;
  border-radius: 10px 10px 0px 0px;
`;

const MainContainer = styled.div`
  background: #ffffff;
  width: 340px;
  border-radius: 0px 0px 10px 10px;
  padding: 24px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  cursor: pointer;
  margin: 10px;
`;

const AddButton = styled.img`
  width: 69px;
  height: 69px;
`;

const SubText = styled.div`
  text-align: center;
  color: #4D3338;
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

function Album() {
  const [showModal, setShowModal] = useState(false);
  const [diaries, setDiaries] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const navigate = useNavigate();
  const { albumId } = useParams();

  useEffect(() => {
    const fetchAlbumInfo = async () => {
      try {
        const albumData = await getInnerAlbum(albumId);
        console.log("앨범 데이터:", albumData);
        setDiaries(albumData.diaries);
        setAlbumName(albumData.albumName);
      } catch (error) {
        console.log("앨범 정보를 가져오는 데 실패했습니다:", error);
      }
    };
    fetchAlbumInfo();
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleClickDiary = (id) => {
    navigate(`/maindiarycheck/${id}`);
  }; 


  return (
    <Background>
      <TitleContainer>
        <BoxTitle>{`${albumName} 앨범`}</BoxTitle>
      </TitleContainer>
      <MainContainer>
        {diaries.map(diary => (
          <DiaryForm key={diary.id} name={diary.title} onClick={() => handleClickDiary(diary.id)} />
        ))}
        <AddButtonContainer onClick={openModal}>
          <AddButton src={AddImg} />
          <SubText>추가하기</SubText>
        </AddButtonContainer>
      </MainContainer>
      <Modal isOpen={showModal} closeModal={closeModal} />
    </Background>
  );
}

export default Album;
