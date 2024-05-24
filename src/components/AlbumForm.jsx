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

const Albumform = ({ type, name, onClick }) => (
  <AlbumformContainer onClick={onClick}>
    {type === 'album' ? (
      <>
        <AlbumIcon src={AlbumImg} />
        <AlbumName>{name}</AlbumName>
      </>
    ) : type === 'diary' ? (
      <>
        <DiaryIcon src={DiaryImg} />
        <DiaryName>{name}</DiaryName>
      </>
    ) : null}
  </AlbumformContainer>
);

export default Albumform;
