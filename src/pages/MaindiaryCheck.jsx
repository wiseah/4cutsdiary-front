import React from 'react'
import styled from 'styled-components';
import PictureImg from '../images/PictureImg.png'
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

`

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
  text-align: center ;
  margin-right: 10px;
  color: #D62C4D;
  font-size: 30px;
  font-weight: 600;
`;

const Text = styled.div`
  text-align: right ;
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
`

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
`


const PictureImage = styled.img`
  margin-top: 25px;
`
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
`

const SmallShadowBox = styled(ShadowBox)`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`
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
`

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
`
const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  resize: none; /* Prevent resizing */
  padding: 10px;
`;


  


function MaindiaryCheck() {
  return (
      <Background>
        <WhiteContainer>
        <Header>
          <BackIcon />
          <Text>
          추억 생성하기
          </Text>
        </Header>
        <br />
        <MainText>
         공주 나간다
        </MainText>
        <br />
        <SubText>
        추억이 기록된 장소
        <br />
        <TextContainer>
        <input 
         type="text"
         name="memoryName"
         maxLength="30"
         size="40"
         placeholder="모현사거리"
         style={{ marginLeft: '30px',marginTop:'14px', border:'none',background:'transparent',outline:'none',fontSize:'15px'}}
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
              marginLeft: '20px',
              marginTop: '14px', 
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: '15px'
            }}
          />
         </label>
        </form>
        </TimeContainer>
        <br />
        우리의 추억
        </SubText>
        <PictureImage src={PictureImg}
                      style={{width:'320px', height:'485px'}}
        ></PictureImage>
        <SmallShadowBox>
        <StyledTextarea
            name="memoryDetail"
            placeholder={`오늘은 정말 특별한 날이었다! 
나랑 제니가 인생네컷 가게에 갔다 왔다. 
제니랑 나, 우리 둘다 카메라 앞에서 포즈를 취하면서 너무나도 신나고 즐거운 시간을 보냈다!
어떤 포즈를 취해야 할지 고민했는데, 제니가 엄청 웃긴 표정을 짓길래 나도 모르게 따라 했다!
정말 재미있는 추억을 만들었단 생각이 들어서 너무 좋았다. 
제니랑 나, 앞으로도 이런 즐거운 추억을 많이 만들고 싶다!`}
style={{marginRight:'10px',fontSize:'12.5px'}} />
        </SmallShadowBox>
        </WhiteContainer>
        <HorizontalImageContainer>
          <LeftButton>
            홈
          </LeftButton>
          <RightButton>
            앨범
          </RightButton>
          </HorizontalImageContainer>
     </Background>
  )
}

export default MaindiaryCheck