import React from 'react';
import styled from 'styled-components';
import PictureImg from '../images/PictureImg.png';
import { IoIosArrowBack } from "react-icons/io";

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 1428px; 
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
  display: none;
  }
`;

const WhiteContainer = styled.div`
  background-color: #ffffff;
  width:360px;
  height:1280px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top : 20px;
`;

const BackIcon = styled(IoIosArrowBack)`
  color: #D62C4D;
  margin-right: 190px;
  font-size: 24px;
`;

const MainText = styled.div`
  text-align: center;
  margin-right: 10px;
  color: #D62C4D;
  font-size: 30px;
  font-weight: 600;
`;

const Text = styled.div`
  text-align: right;
  margin-right: 10px;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
`;

const SubText = styled.div`
  text-align: center;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  background-color: #FCE6F1;
  width:328px;
  height:45px;
  margin-top:10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const TimeContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:45px;
  margin-left: 1px;
  margin-top:10px;
  border-radius: 10px 10px 10px 10px;
  border-width: 2px;
  border-style: solid;
  border-color:#D62C4D;
  display: flex;
  align-items: center;
`;

const PictureImage = styled.img`
  margin-top: 25px;
  width: 320px;
  height: 485px;
`;

const ShadowBox = styled.div`
  width: 310px;
  height: 250px;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-left-width: 5px;
  border-color:#D62C4D;
`;

const SmallShadowBox = styled(ShadowBox)`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const HorizontalImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 30px;
  background-color: #D62C4D;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 25px;
  margin-right: 10px;
  border: none;
`;

const RightButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 30px;
  background-color: #D62C4D;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 25px;
  margin-left: 10px;
  border: none;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  padding: 10px;
  white-space: pre-wrap; /* Preserve whitespace and newlines */
`;

function MaindiaryCheck({ location, dateTime, memoryDetail }) {
  return (
    <Background>
      <WhiteContainer>
        <Header>
          <BackIcon />
          <Text>추억 생성하기</Text>
        </Header>
        <br />
        <MainText>공주 나간다</MainText>
        <br />
        <SubText>
          추억이 기록된 장소
          <br />
          <TextContainer>{location}</TextContainer>
          <br />
          우리의 순간이 기록된 시간
          <TimeContainer>{dateTime}</TimeContainer>
          <br />
          우리의 추억
        </SubText>
        <PictureImage src={PictureImg} />
        <SmallShadowBox>
          <StyledDiv>{memoryDetail}</StyledDiv>
        </SmallShadowBox>
      </WhiteContainer>
      <HorizontalImageContainer>
        <LeftButton>홈</LeftButton>
        <RightButton>앨범</RightButton>
      </HorizontalImageContainer>
    </Background>
  );
}

export default MaindiaryCheck;
