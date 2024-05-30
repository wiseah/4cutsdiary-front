import React from 'react';
import styled from 'styled-components';
import AlbumImg from '../images/GoBack.png';
import { useNavigate } from 'react-router-dom';

const AlbumformContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96px;
  padding-bottom: 10px;
  grid-column: span 1;
  cursor: pointer;
`;

const AlbumIcon = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const AlbumName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const GoBackForm = () => {
  const navigate = useNavigate();

  return (
    <AlbumformContainer onClick={() => navigate("/")}>
      <AlbumIcon src={AlbumImg} />
      <AlbumName>뒤로가기</AlbumName>
    </AlbumformContainer>
  );
}

export default GoBackForm;
