import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navabar';
import Home from './pages/Home'
import About from './pages/About'
import Eotc from "./pages/Eotc";
import Gallery from "./pages/Gallery";
import Monastery from "./pages/Monastery";
import Top5 from "./pages/Top5";
import Church from './pages/Church';
import Footer from './pages/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Eotc" element={<Eotc />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Monastery" element={<Monastery />} />
          <Route path="/Top5" element={<Top5 />} />
          <Route path='/Church' element={<Church/>}/>
        </Routes>
        <h2>header</h2>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
