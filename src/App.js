import Header from './Common/Header';
import './assets/css/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/Main';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';  
import Footer from './Common/Footer';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/contact_us" element={<ContactUs/>}></Route>
          <Route path="/about_us" element={<AboutUs/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
