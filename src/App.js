import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Details from './pages/Home/Details/Details';
import Footer from './pages/Footer/Footer';
import Form1 from './pages/Order/Form1/Form1';
import Form2 from './pages/Order/Form2/Form2';
import Form3 from './pages/Order/Form3/Form3';

function App() {
  
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/form1" element={<Form1/>}></Route>
      <Route path="/details" element={<Details/>}></Route>
      <Route path='/form2' element={<Form2></Form2>}></Route>
      <Route path='/form3' element={<Form3></Form3>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
