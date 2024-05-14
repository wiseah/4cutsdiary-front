import React from 'react'
import styled from 'styled-components';
import AlbumImg from '../images/DiaryImg.png'
import AddImg from '../images/AddImg.png'



const Background = styled.div`
  background: linear-gradient(
    to bottom,
    #FCE6F1 0%,
    #FCE6F1 45%,
    #FF9CAF 100%
  );
  height: 530px;  // 변경된 부분
  display: flex;
  flex-direction: column;
  align-items: center;

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
  font-weight: 600;
  margin-top: 5px;
`;


const WhiteContainer = styled.div`
  background-color: #ffffff;
  width:326px;
  height:460px;
  margin-top: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;


const HorizontalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  

`;

const AlbumImage = styled.img`
  width: 69px;
  height: 69px;
  margin-top :20px;
  margin-right: 20px;
  margin-left: 20px; /* 이미지 간격 설정 */
`;

const AddImage = styled.img`
width: 69px;
height: 69px;
margin-top:20px;
margin-right: 20px;
margin-left: 20px; /* 이미지 간격 설정 */
`;


const AlbumContainer = styled.div`
  background-color: #F48B9F;
  width:326px;
  height:32px;
  border-radius: 10px 10px 0px 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
  margin-top: 0;
  border: none;
`

  

function Album() {
    return (
      
    <Background>
       
      <WhiteContainer>
        <AlbumContainer>
            공주 앨범
          </AlbumContainer>

        <HorizontalImageContainer>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 1</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 2</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 3</SubText>
          </div>
        </HorizontalImageContainer>
        <br />

        <HorizontalImageContainer>
        <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 1</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 2</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>공주 3</SubText>
          </div>
        </HorizontalImageContainer>
        <br />

        <HorizontalImageContainer>
         <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>곱등이와 <br />인생네컷</SubText>
          </div>
          <div> 
          <AlbumImage src={AlbumImg}
          style={{width:'69px', height:'69px'}}>
          </AlbumImage>
          <br />
          <SubText>디자인 너무<br />힘드러</SubText>
          </div>
          <div>
          <AddImage src={AddImg}
          style={{width:'69px', height:'69px'}}>
          </AddImage>
          <br />
          <SubText>추가하기</SubText>
          </div>
        </HorizontalImageContainer>

      </WhiteContainer>
    </Background>
   
  
  )
}


export default Album