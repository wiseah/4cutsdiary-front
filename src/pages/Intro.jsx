import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TextInput from '../components/TextInput';
import PasswordEyeButton from '../components/PasswordEyeButton.jsx';
import InputErrorText from '../components/InputErrorText.jsx';
import login from '../APIs/post/login.js';
import Cookies from 'js-cookie';
import getUserInfo from '../APIs/get/getUserInfo.js';

const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 1134px;  // 변경된 부분
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
  font-size: 16px;
  font-weight: 600;
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
  height:280px;
  margin-top: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const LoginImage = styled.div`
  margin-top: 10px;
  width: 310px;
  height:114px;
  background-image: url('/images/LoginBoxImg.png');
  background-size: cover;
  background-position: center;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 290px;
    height: 104px;
    margin-top: 6px;
    margin-left: 30px;
    /* gap: 13px; */
`;

const Line = styled.div`
  width:253px;
  height:3px;

  border-radius:15%;
  background-color: #ffffff;
`

const LoginButton = styled.button`
  width: 290px;
  height: 43.5px;
  border-radius: 5px;
  background-color: #F48B9F;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-top: 16px;
  border: none;
  cursor: pointer;
`
const KakaoLoginButton = styled.img`
  width: 290px;
  margin-top: 10px;
`
const RegisterText = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top: 14px;
  width: 280px;
`
const Join = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
const Find = styled.div`
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
`

function Intro() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [fieldHidden, setFieldHidden] = useState(true);

  useEffect(()=> {
    const isLoggedIn = Cookies.get("accessToken")
    if (!isLoggedIn) {
      return;
    }

    navigate("/main");
  }, [])

  const handleLoginClick = async () => {
    try{
      const response = await login(id,password);
      const accessToken = response.accessToken;
      const refreshToken = response.refreshToken;
      Cookies.set('accessToken', `Coffee ${accessToken}`, { expires: 7 }); 
      Cookies.set('refreshToken', `Coffee ${refreshToken}`, { expires: 7 });
      const userInfo = await getUserInfo();
      sessionStorage.setItem("userName", userInfo.userName);
      navigate('/main');
    } catch {
        setErrorText('아이디 또는 비밀번호가 잘못되었습니다.');
        alert('로그인에 실패했습니다.');
    }
    
  };

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
      <IntroImage1 src='/images/IntroImg1.png' />
      <Text>
        작성한 일기는 친구와 바로 공유 가능해요
      </Text>
      <IntroImage2 src='/images/IntroImg2.png'></IntroImage2>
      <Text>
        간단한 로그인으로 지금 바로 시작해보세요!
      </Text>
      <LoginContainer>
        <LoginImage>
          <Form>
            <TextInput
              value={id}
              onInput={(event) => setId(event.target.value)}
              placeholder="아이디"
            />
            <Line />
            <TextInput
              value={password}
              onInput={(event) => {
                setPassword(event.target.value);
                setErrorText('');
              }}
              placeholder="비밀번호"
              additionalItem={
                <PasswordEyeButton
                  value={fieldHidden}
                  onClick={() => setFieldHidden((state) => !state)}
                />
              }
              textHidden={fieldHidden}
            />
          </Form>
          <InputErrorText text={errorText} />
        </LoginImage>
        <LoginButton onClick={handleLoginClick}>
          로그인
        </LoginButton>
          <KakaoLoginButton src='/images/KakaoLogo.png'>
          </KakaoLoginButton>
          <RegisterText>
            <Join onClick={() => navigate('/join')}>회원가입</Join>
            <Find onClick={() => navigate('/finduser')}>아이디/비밀번호 찾기</Find>
          </RegisterText>
        </LoginContainer>
    </Background>
  )
}

export default Intro
