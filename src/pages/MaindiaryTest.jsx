import React from 'react'
import styled from 'styled-components';
import PictureImg from '../images/PictureImg.png'


const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 1500px;  // 변경된 부분
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Text = styled.div`
  text-align: right ;
  margin-right: 25px;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;

`;
const SubText = styled.div`
  text-align: left;
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`;

const TextContainer = styled.div`
background-color: #ffffff;
  width:326px;
  height:45px;
  margin-left: 1px;
  border-radius: 10px 10px 10px 10px;
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





const LoginContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:500px;
  margin-left: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`


const LoginButton = styled.button`
  width: 290px;
  height: 32px;
  border-radius: 30px;
  background-color: #D62C4D;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-top: 200px;
  border: none;
`


  


function MaindiaryTest() {
  return (
    <div>
    <LoginContainer>
       <Background>
        <Text>
          추억 생성하기
        </Text>
        <br />
        <br />
        <SubText>
        우리의 추억 이름은?
        <br />
        <TextContainer>
        </TextContainer>
        <br />
        추억이 기록된 장소
        <br />
        <TextContainer>
        </TextContainer>
        <br />
        우리의 순간이 기록된 시간
        <TextContainer>
        </TextContainer>
        </SubText>
        

        <SubText>
        일기 쓰기
        </SubText>
        <PictureImage src={PictureImg}
                      style={{width:'320px', height:'485px'}}
        ></PictureImage>
        <LoginContainer>
          <LoginButton>
            일기 저장
          </LoginButton>
        </LoginContainer>
     </Background>
    </LoginContainer>
    </div>
  )
}

export default MaindiaryTest