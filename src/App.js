import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
// import Panel from "./pages/Panel";
import Bichim from "./pages/bichim/Bichim";
import KunlikChiqim  from './pages/kunlikChiqim/KunlikChiqim';
import Oyliklar from './pages/oyliklar/Oyliklar';
import Qadoqlash from "./pages/qadoqlash/Qadoqlash"; 
import Registration from './pages/registration/Registration'
import Settings from './pages/Settings/Settings';
import TashqiXarajatlar from './pages/tashqiXarajatlar/TashqiXarajatlar';
import Tikish from './pages/tikish/Tikish'
import Toquv from './pages/toquv/Toquv';
import UmumiyMalumotlar from './pages/umumiy/Umumiy';
import Error from './pages/error/Error';
import Home from './pages/home/Home';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="home" element={<Home />}>
          <Route index element={<UmumiyMalumotlar />} />
          <Route path='/home/size' element={<Bichim/>}/>
          <Route path="/home/dailyoutput" element={<KunlikChiqim />} />
          <Route path="/home/salaries" element={<Oyliklar />} />
          <Route path='/home/packaging' element={<Qadoqlash />} />
          <Route path='/home/registration' element={<Registration />} />
          <Route path='/home/settings' element={<Settings />} />
          <Route path="/home/outgoings" element={<TashqiXarajatlar/>} />
          <Route path="/home/sewing" element={<Tikish/>} />
          <Route path="/home/crochet" element={<Toquv/>} />
         </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;