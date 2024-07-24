import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Blog from './pages/Blog.jsx'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
