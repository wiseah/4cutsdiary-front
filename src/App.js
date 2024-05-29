import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes.jsx';
import Mobile from './styles/Mobile.js';
import QRCodeScanner from './pages/Qrcode.jsx';

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Mobile/>}>
              {elements}
            </Route>
            <Route path="/scan" element={<QRCodeScanner/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;