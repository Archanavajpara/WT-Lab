import Navbar from './component/navbar';
import Footer from './component/footer';
import Content from './component/content';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';


function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Conatct' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App2
