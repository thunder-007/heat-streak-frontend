import './App.css';
import HomePage from "./components/HomePage";
import IndexPage from "./components/IndexPage";
import AuthValidate from "./components/AuthValidate";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path={"/auth/github"} element={<AuthValidate/>}/>
                    <Route path={"/home"} element={<HomePage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
