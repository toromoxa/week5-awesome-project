import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() { 

  return (
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>   
  );
}

export default App;
