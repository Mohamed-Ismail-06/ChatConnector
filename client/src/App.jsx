import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/layout/Sidebar';
import ChatLayout from './components/layout/ChatLayout';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/sidebar" element={<Sidebar/>}/>
                <Route path="/chat" element={<ChatLayout />} />
            </Routes>
        </Router>
    )
}

export default App