import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Register from './pages/Register';

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === '/register'; // Ocultar Header e Footer no Register

  return (
    <div className="font-sans">
      {!hideLayout && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
