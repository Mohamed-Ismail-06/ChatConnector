import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/loginPage/LoginPage"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/hello" element={<div>hello world</div>} />
            </Routes>
        </Router>
    )
}

export default App