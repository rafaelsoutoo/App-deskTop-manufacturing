import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@renderer/screens/Home';




const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AuthRoutes;