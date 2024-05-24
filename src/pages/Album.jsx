import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddImg from '../images/AddImg.png';
import Modal from "../components/InternalModal";
import AlbumForm from '../components/AlbumForm';

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
//추가
const TitleContainer = styled.div`
  margin-top: 20px;
  background: #F48B9F;
  height: 33px;
  width: 340px;
  border-radius: 10px 10px 0px 0px;
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
const BoxTitle = styled.div`
  padding-top: 5px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
//여기까지 추가부분

const WhiteContainer = styled.div`
  background-color: #ffffff;
  width: 326px;
  height: 460px;
  margin-top: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumContainer = styled.div`
  background-color: #F48B9F;
  width: 100%;
  height: 32px;
  border-radius: 10px 10px 0px 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
`;

const HorizontalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
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
  const [diaries, setDiaries] = useState([
    { type: 'diary', name: '공주 1' },
    { type: 'diary', name: '공주 2' },
    { type: 'diary', name: '공주 3' },
    { type: 'diary', name: '곱등이와 인생네컷' },
    { type: 'diary', name: '디자인 너무 힘드러' }
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

  const addDiary = (name) => {
    setDiaries([...diaries, { type: 'diary', name }]);
    closeModal();
  };

  return (
    <Background>
      <TitleContainer>
        <BoxTitle>{nickname} 앨범</BoxTitle>
      </TitleContainer>
      <MainContainer>
        {diaries.map((diary, index) => (
          <AlbumForm key={index} type={diary.type} name={diary.name} />
        ))}
        <AddButtonContainer onClick={openModal}>
          <AddButton src={AddImg} />
          <SubText>추가하기</SubText>
        </AddButtonContainer>
      </MainContainer>
      <Modal isOpen={showModal} closeModal={closeModal} addDiary={addDiary} />
    </Background>
  );
}

export default Album;
