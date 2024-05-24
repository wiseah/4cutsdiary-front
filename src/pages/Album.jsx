import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddImg from '../images/AddImg.png';
import Modal from "../components/InternalModal";
import AlbumForm from '../components/AlbumForm';
import { useNavigate, useParams } from 'react-router-dom';

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
  const [items, setItems] = useState([
    { type: 'diary', name: '공주 1', id: 1 },
    { type: 'diary', name: '공주 2', id: 2 },
    { type: 'diary', name: '공주 3', id: 3 },
    { type: 'diary', name: '곱등이와 인생네컷', id: 4 },
    { type: 'diary', name: '디자인 너무 힘드러', id: 5 }
  ]);

  const navigate = useNavigate();
  const { albumId } = useParams();

  // 앨범명과 일치하는 앨범을 찾습니다.
  const album = items.find(item => item.type === 'album' && item.id === parseInt(albumId));
  // const [nickname, setNickname] = useState('');

  // useEffect(() => {
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser) {
  //     setNickname(currentUser.nickname);
  //   }
  // }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addDiary = (name) => {
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { type: 'diary', name, id: newId }]);
    closeModal();
  };

  const handleClick = (type, id) => {
    if (type === 'album') {
      navigate(`/album/${id}`);
    } else if (type === 'diary') {
      navigate(`/maindiarycheck/${id}`);
    }
  };

  return (
    <Background>
      <TitleContainer>
        <BoxTitle>{album ? album.name : '앨범'}</BoxTitle>
      </TitleContainer>
      <MainContainer>
        {items.map((item, index) => (
          <AlbumForm key={index} type={item.type} name={item.name} index={item.id} onClick={handleClick} />
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
