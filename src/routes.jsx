import Add from "./components/Add";  //윤해 수정 : add.jsx파일을 components파일로 옮김
import Album from "./pages/Album";
import FindUser from "./pages/FindUser";
import Intro from "./pages/Intro";
import Join from "./pages/Join";
import Main from "./pages/Main";
import MaindiaryTest from "./pages/MaindiaryTest";
import Sitemap from "./pages/Sitemap";
import Test from "./pages/Test";
import Reader from "./pages/Reader";
import QRCodeScanner from "./pages/Qrcode";
import MaindiaryCheck from "./pages/MaindiaryCheck";


const routes = [
    {
        path: '/',
        element: <Sitemap />,
    },
    {
        path: '/intro',
        element: <Intro />,
        name: '랜딩페이지(첫 페이지)'
    },
    {
        path: '/join',
        element: <Join />,
        name: '회원가입'
    },
    {
        path: '/main',
        element: <Main />,
        name: '메인 페이지'
    },
    // {
    //     path: '/add',
    //     element: <Add />,
    //     name: '메인페이지_추가하기 페이지'
    // },

    {
        path: '/maindiarytest',
        element : <MaindiaryTest />,
        name: '메인페이지_일기작성'
    },

    {
        path: '/maindiarycheck',
        element : <MaindiaryCheck />,
        name: '메인페이지_일기확인'
    },

    {
        path: '/album',
        element: <Album/>,
        name: '앨범내부'
    },

    {
        path: '/album/1',
        element: <Album/>,
        name: '앨범내부1'
    },

    {
        path: '/finduser',
        element: <FindUser />,
        name: '아이디/비밀번호 찾기 페이지'
    },
    {
        path: '/scan',
        element: <QRCodeScanner />,
        name: 'qr스캔'
    },
    {
        path: '/scan2',
        element: <Reader />,
        name: 'qr스캔2'
    },

    {
        path: '/test',
        element: <Test />,
        name: '테스트 페이지'
    },
]

export default routes;