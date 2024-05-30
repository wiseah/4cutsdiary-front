import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import { BsCameraFill } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const Content = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 100vh;
    box-shadow: 0px 0px 32px #0000002f;
    background-color: #ffffff;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 16px 20px;
`;

const TitleText = styled.div`
    display: flex;
    align-items: center;
    padding-left: 14px;
    cursor: pointer;
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
`;

const IntroButton = styled.button`
    background: none;
    border: none;
    color: #F48B9F;
    font-weight: 400;
    font-size: 14px;
    font-family: Inter;
    cursor: pointer;
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
    width: 100%;
    height: 160px;
    padding-top: 30px;
    gap: 16px;
    background-color: #4D3338;
    font-weight: 400;
    font-size: 18px;
    box-shadow: 0px -15px 25px 0px rgba(0, 0, 0, 0.04);
`;

const ServiceName = styled.div`
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`;

const Leader = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;

    div {
        margin-top: 4px; // 간격 조정을 위해 추가
    }
`;

const Follower = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;

    div {
        margin-top: 4px; // 간격 조정을 위해 추가
    }
`;

const Team = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
`;

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Mobile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = Cookies.get("accessToken");
        setIsLoggedIn(!!token);
    }, [location]);

    const handleLogOut = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <>
            <Container>
                <Content>
                    <Header>
                        <TitleText onClick={() => navigate('/')}>
                            <BsCameraFill size="28px" style={{ marginRight: '10px', color: '#F48B9F'}}/>
                            <Title>네컷일기</Title>
                        </TitleText>
                        <TitleButtons>
                            <IntroButton onClick={() => navigate('/feature')}>
                                기능소개
                            </IntroButton>
                            {
                                isLoggedIn && (
                                    <IntroButton onClick={() => handleLogOut()}>
                                        로그아웃
                                    </IntroButton>
                                )
                            }
                        </TitleButtons>
                    </Header>
                    <Outlet />
                    <Footer>
                        <ServiceName>
                            네컷일기
                        </ServiceName>
                        <Member>
                            <Leader>
                                <div>총괄/백엔드 팀장: 이수혁</div>
                                <div>프론트엔드 팀장: 김현아</div>
                            </Leader>
                            <Follower>
                                <div>백엔드: 고선민, 류동현</div>
                                <div>프론트: 김규린, 조윤해</div>
                            </Follower>
                        </Member>
                        <Team>
                            <TeamText>
                                <BiCopyright size="14px" style={{ marginRight: '2px', color: '#FFFFFF', marginBottom: '1px'}}/>
                                한국외국어대학교 멋쟁이사자처럼 미니프로젝트 2팀 
                            </TeamText>
                        </Team>
                    </Footer> 
                </Content>
            </Container>
        </>
    );
};

export default Mobile;
