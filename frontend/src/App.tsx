import './App.css'
import ToolPage from './pages/ToolPage';
import AboutPage from './pages/AboutPage';
import BestPracticePage from './pages/BestPracticePage';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tool" element={<ToolPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/best-practices" element={<BestPracticePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
