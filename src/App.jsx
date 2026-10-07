import Home from './pages/Home/index.jsx'
import Project from './pages/Projects/index.jsx'
import Certificate from './pages/Certificates/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O <GlobalStyles/> foi removido daqui de dentro */}
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificate />} />   
        <Route path="/projetos" element={<Project />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
