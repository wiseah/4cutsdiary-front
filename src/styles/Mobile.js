import { Link,Outlet } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import { BsCameraFill } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    overflow: auto;
`;

const Content=styled.div`
    width:100%;
    max-width:390px;
    min-height:100vh;

    overflow:auto;
    box-shadow:0px 0px 32px #0000002f;
    background-color: #ffffff;

    padding-bottom: 260px; //footer높이만큼 패딩 줘야함. 그래야 내용 다보임.
`;

// 01.home Header
const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    height:40px;

    padding:16px 20px;
`;
const TitleText = styled.div`
    display: flex;
    align-items: center;
    padding-left: 14px;
`;
const Title = styled.div`
    color: #F48B9F;
    font-weight: 700;
    font-size: 20px;
    font-family: Inter;
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
`;

const TitleButtons = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    color: #F48B9F;
    font-weight: 400;
    font-size: 14px;
    font-family: Inter;
    /* width: 166px;
    height: 18px; */
`;
const IntroButton = styled.button`
    background: none;
    border: none;
    color: #F48B9F;
    font-weight: 400;
    font-size: 14px;
    font-family: Inter;
`;
const SuportImageListButton = styled.button`
    background: none;
    border: none;
    color: #F48B9F;
    font-weight: 400;
    font-size: 14px;
    font-family: Inter;
`;

const Footer = styled.div`
    position: fixed;
    max-width: 390px;
    min-width: 360px;
    width: 100%;
    height: 260px;
    bottom: 0;
    left: 50%;
    
    gap: 16px;
    transform: translateX(-50%);
    background-color: #4D3338;

    font-weight: 400;
    font-size: 18px;
    box-shadow: 0px -15px 25px 0px rgba(0, 0, 0, 0.04);
`;
const ServiceName = styled.div`
color: #ffffff;
font-size: 40px;
font-weight: 500;
margin-top: 16px;
text-align: center;
`;
const Member = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin-top: 10px;
`;
const Leader = styled.div`
color: #ffffff;
font-size: 12px;
font-weight: 500;
`;
const Follower = styled.div`
color: #ffffff;
font-size: 14px;
font-weight: 500;
`;

const Team = styled.div`
color: #ffffff;
font-size: 12px;
font-weight: 500;
margin-top: 14px;
text-align: center;
`;
const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Mobile=()=>{
    return(
        <>
            <Container>
                <Content>
                    <Header>
                        <TitleText>
                            <BsCameraFill size="28px" style={{ marginRight: '10px', color: '#F48B9F'}}/>
                            <Title>네컷일기</Title>
                        </TitleText>
                        <TitleButtons>
                            <IntroButton>
                                기능소개
                            </IntroButton>
                            |
                            <SuportImageListButton>
                                지원 이미지 목록
                            </SuportImageListButton>
                        </TitleButtons>
                    </Header>
                    <Outlet /> 
                </Content>
                <Footer>
                    <ServiceName>
                        네컷일기
                    </ServiceName>
                    <Member>
                        <Leader>
                            총괄/백엔드 팀장: 이수혁
                            <br />
                            프론트엔드 팀장: 김현아
                        </Leader>
                        <Follower>
                            백엔드: 고선민, 류동현
                            <br />
                            프론트: 김규린, 조윤해
                        </Follower>
                    </Member>
                    <Team>
                        <TeamText>
                           <BiCopyright size="14px" style={{ marginRight: '2px', color: '#FFFFFF', marginBottom: '1px'}}/>
                            한국외국어대학교 멋쟁이사자처럼 미니프로젝트 2팀 
                        </TeamText>
                        
                    </Team>
                </Footer>
            </Container>
        </>
    )
};

export default Mobile;