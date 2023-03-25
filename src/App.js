import './App.css';
import HomePage from "./Pages/HomePage";
import IndexPage from "./Pages/IndexPage";
import AuthValidate from "./components/AuthValidate";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import InstructionsPage from './Pages/InstructionsPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <Router>
            <NavBar />

                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/about" element = {<AboutPage/>}/>
                    <Route path="/contact" element = {<ContactPage/>}/>
                    <Route path="/instruction" element = {<InstructionsPage/>}/>
                    <Route path={"/auth/github"} element={<AuthValidate/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
