import Add from "./pages/Add";
import Intro from "./pages/Intro";
import Join from "./pages/Join";
import Main from "./pages/Main";
import Sitemap from "./pages/Sitemap";


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
]

export default routes;