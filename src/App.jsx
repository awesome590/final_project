import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Nav/>
            <Home/>
            <Footer/>
        </Router>
    )
}

export default App
