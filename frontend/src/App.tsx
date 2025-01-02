import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BestPracticePage from './pages/BestPracticePage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/best-practices" element={<BestPracticePage />} />
        </Routes>
      </Router>
      <Footer />
    </>
    
  )
}

export default App
