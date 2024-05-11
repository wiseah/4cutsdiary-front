import React from 'react'
import styled from 'styled-components';
import IntroImg1 from '../images/IntroImg1.png'
import IntroImg2 from '../images/IntroImg2.png'
import LoginBoxImg from '../images/LoginBoxImg.png'
import KakaoLogo from '../images/KakaoLogo.png'

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 1034px;  // 변경된 부분
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Text = styled.div`
  color: #D62C4D;
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;

`;
const SubText = styled.div`
  text-align: center;
  color: #4D3338;
  font-size: 14px;
  font-weight: 500;
  margin-top: 25px;
`;

const IntroImage1 = styled.img`
  margin-top: 25px;
`
const IntroImage2 = styled.img`
  margin-top: 25px;
`
const LoginContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:236px;
  margin-top: 25px;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const LoginBoxImage = styled.img`
  margin-top: 5px;

`
// const Id = styled.

const LoginButton = styled.button`
  width: 290px;
  height: 32px;
  border-radius: 5px;
  background-color: #F48B9F;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-top: 12px;
  border: none;
`
const KakaoLoginButton = styled.button`
  width: 290px;
  height: 32px;
  border-radius: 5px;
  background-color: #FFEB00;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 17px;
  font-weight: 700;
  margin-top: 12px;
  border: none;
`
const LoginText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`
const KakaoLogoImg = styled.img`
  
`

function Intro() {
  return (
    <Background>
        <Text>
          네컷일기로 추억을 저장하세요
        </Text>
        <SubText>
        이미지에 그 순간을 기록하여
        <br />
        나의 이쁜 다이어리를 쉽게 만들고 공유해봐요!
        </SubText>
        <IntroImage1 src={IntroImg1}/>
        <Text>
          작성한 일기는 친구와 바로 공유 가능해요
        </Text>
        <IntroImage2 src={IntroImg2}></IntroImage2>
        <Text>
          간단한 로그인으로 지금 바로 시작해보세요!
        </Text>
        <LoginContainer>
          <LoginBoxImage src={LoginBoxImg}>
            {/* <Id>
              아이디
            </Id> */}
    

          </LoginBoxImage>
          <LoginButton>
            로그인
          </LoginButton>
          <KakaoLoginButton>
            <KakaoLogoImg src={KakaoLogo}/>
            <LoginText>
              카카오로 시작하기 
            </LoginText>
          </KakaoLoginButton>
        </LoginContainer>
    </Background>
  )
}

export default Intro
