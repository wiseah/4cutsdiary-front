import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PictureImg from "../images/PictureImg.png";
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

const Text = styled.div`
  text-align: right ;
  margin-right: 10px;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
`;

const SubText = styled.div`
  text-align: left;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
`;

const TextContainer = styled.div`
  background-color: #FCE6F1;
  width:326px;
  height:45px;
  margin-left: 1px;
  margin-top:10px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:45px;
  margin-left: 1px;
  margin-top:10px;
  border-radius: 10px 10px 10px 10px;
  border-width : 2px;
  border-style: solid;
  border-color:#D62C4D;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PictureImage = styled.img`
  margin-top: 25px;
`;
//const IntroImage1 = styled.img`
//  margin-top: 25px;
//`

const ShadowBox = styled.div`
width: 310px;
height: 250px;
border-radius: 10px 10px 10px 10px;
margin: 20px;
padding: 10px;
background-color: white;
border-width : 1px;
border-style: solid;
border-left-width:5px ;
border-color:#D62C4D;
`;

const SmallShadowBox = styled(ShadowBox)`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const RedButton = styled.button`
  width: 290px;
  height: 45px;
  border-radius: 30px;
  background-color: #D62C4D;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 45px;
  border: none;
`;

function MaindiaryTest() {
  const [uploadImage, setUploadImage] = useState();

  useEffect(() => {
    var image = sessionStorage.getItem('image');
    setUploadImage(image);
    sessionStorage.removeItem('image');
  }, []);

  return (
    <Background>
      <WhiteContainer>
        <Header>
          <BackIcon />
          <Text>추억 생성하기</Text>
        </Header>
        <br />
        <br />
        <SubText>
          우리의 추억 이름은?
          <br />
          <TextContainer>
            <input
              type="text"
              name="memoryName"
              maxLength="30"
              size="40"
              placeholder="추억 이름을 작성해주세요"
              style={{
                marginLeft: "30px",
                marginTop: "14px",
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "15px",
              }}
            />
          </TextContainer>
          <br />
          추억이 기록된 장소
          <br />
          <TextContainer>
            <input
              type="text"
              name="memoryName"
              maxLength="30"
              size="40"
              placeholder="장소 명을 기록해주세요"
              style={{
                marginLeft: "30px",
                marginTop: "14px",
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "15px",
              }}
            />
          </TextContainer>
          <br />
          우리의 순간이 기록된 시간
          <TimeContainer>
            <form>
              <label>
                <input
                  type="datetime-local"
                  placeholder="2024-05-21T21:30"
                  name="memoryName"
                  maxLength="30"
                  size="40"
                  style={{
                    marginLeft: "20px",
                    marginTop: "14px",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />
              </label>
            </form>
          </TimeContainer>
          <br />
          일기 쓰기
        </SubText>
        <PictureImage
          src={uploadImage || PictureImg}
          style={{ width: "320px", height: "485px" }}
        ></PictureImage>
        <SmallShadowBox>
          <input
            type="text"
            name="memoryName"
            maxLength="30"
            size="40"
            placeholder="추억을 상세하게 기록해보세요!"
            style={{
              marginLeft: "10px",
              marginTop: "10px",
              border: "none",
              background: "transparent",
              outline: "none",
              fontSize: "15px",
            }}
          />
        </SmallShadowBox>
      </WhiteContainer>
      <RedButton>일기 저장</RedButton>
    </Background>
  );
}

export default MaindiaryTest;
