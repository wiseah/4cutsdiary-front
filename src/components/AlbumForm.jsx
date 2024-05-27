import React from 'react';
import styled from 'styled-components';
import AlbumImg from '../images/AlbumImg.png';
import DiaryImg from '../images/DiaryImg.png';

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

const DiaryIcon = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DiaryName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const AlbumForm = ({ name, index, $onClick }) => (
  <AlbumformContainer onClick={() => $onClick()}>
    <AlbumIcon src={AlbumImg} />
    <AlbumName>{name}</AlbumName>
  </AlbumformContainer>
);

export default AlbumForm;
