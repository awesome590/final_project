import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Nav/>
            <Home/>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <Footer/>
        </Router>
    )
}

export default App
