import Add from "./pages/Add";
import Album from "./pages/Album";
import FindUser from "./pages/FindUser";
import Intro from "./pages/Intro";
import Join from "./pages/Join";
import Main from "./pages/Main";
import MaindiaryTest from "./pages/MaindiaryTest";
import Register from "./pages/Register";
import Sitemap from "./pages/Sitemap";
import Test from "./pages/Test";


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
    {
        path: '/add',
        element: <Add />,
        name: '메인페이지_추가하기 페이지'
    },
    {
        path: '/test',
        element: <Test />,
        name: '테스트 페이지'
    },

    {
        path: '/maindiarytest',
        element : <MaindiaryTest />,
        name: '메인페이지_일기작성'
    },

    {
        path: '/album',
        element: <Album/>,
        name: '앨범내부'
    },
    {
        path: '/finduser',
        element: <FindUser />,
        name: '아이디/비밀번호 찾기 페이지'
    },
]

export default routes;