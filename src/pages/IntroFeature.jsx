import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsEmojiLaughingFill } from 'react-icons/bs';



const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  /* height: 1134px;  // 변경된 부분 */
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
  min-height: calc(100vh - (190px + 72px));
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
const Buttondiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
`;

const CreateButton = styled.button`
    width: 329px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #D62C4D;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.1s;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;



function IntroFeature() {
  const navigate = useNavigate();

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
      <Buttondiv>
        <CreateButton
            onClick={() =>
                navigate('/')
            }
        >
            <BsEmojiLaughingFill
                size="24px"
                style={{ marginRight: '10px' }}
            />
            추억 기록하러 가기!!
        </CreateButton>
      </Buttondiv>
      
    </Background>
  )
}

export default IntroFeature
