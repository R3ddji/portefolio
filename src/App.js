import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Realisation from './Realisation/Realisation';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/realisation' element={<Realisation/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
