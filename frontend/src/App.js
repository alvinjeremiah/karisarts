import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./component/layout/Header/Header.js";
import About from './component/layout/About/About';
import Contact from './component/layout/Contact/Contact';
import Footer from './component/layout/Footer/Footer';
import Login from './component/User/LoginSignup.js';
import Home from "./component/Home/Home.js"

function App() {
  return <Router>
    <Header/>
    <Home/>
    <Footer/>
  </Router>
  
}

export default App;
