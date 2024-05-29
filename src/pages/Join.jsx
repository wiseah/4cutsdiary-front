import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import { BsPerson } from "react-icons/bs";
import join from '../APIs/post/join';

const Background = styled.div`
  background-color: #FCE6F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  min-height: calc(100vh - (190px + 72px));
`;
const Text = styled.div`
  color: #D62C4D;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const JoinContainer = styled.div`
  width: 326px;
  height: 236px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 5px #0000002f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Box = styled.div`
  border-radius: 5px;
  border: 1px solid #E5E5E5;
  width: 290px;
  height: 32px;
`;
const Text1 = styled.div`
  color: #93394A;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
`;
const JoinButton = styled.button`
  width: 290px;
  height: 32px;
  background-color: #F48B9F;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  font-weight: 600;
`;

function Join() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleJoinClick = async () => {
    // // 로컬스토리지에서 기존 데이터를 가져옴
    // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // // 새로운 유저 객체를 만듦
    // const newUser = { id, password, nickname };

    // // 새로운 유저 객체를 기존 데이터에 추가
    // existingUsers.push(newUser);

    // // 업데이트된 배열을 로컬스토리지에 저장
    // localStorage.setItem('users', JSON.stringify(existingUsers));

    try{
      const response = await join(id, password, nickname)
      console.log(response)
      // alert('회원가입이 완료되었습니다!');
      navigate('/');
    } catch {
      alert('회원가입에 실패했습니다.')
    }
    
  };

  return (
    <Background>
      <Text>
        간단한 회원가입으로<br />
        나만의 다이어리를 꾸미세요!
      </Text>
      <JoinContainer>
        <div>
          <Box>
            <TextInput
              value={id}
              onInput={(event) => setId(event.target.value)}
              placeholder="아이디를 입력해주세요"
            />
          </Box>
          <Box>
            <TextInput
              value={password}
              onInput={(event) => setPassword(event.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
          </Box>
        </div>
        <div>
          <Text1>
            선택사항
          </Text1>
          <Box>
            <TextInput
              value={nickname}
              onInput={(event) => setNickname(event.target.value)}
              placeholder="닉네임을 입력해주세요"
            />
          </Box>
        </div>
        <JoinButton onClick={handleJoinClick}>
          회원가입
        </JoinButton>
      </JoinContainer>
    </Background>
  );
}

export default Join;
