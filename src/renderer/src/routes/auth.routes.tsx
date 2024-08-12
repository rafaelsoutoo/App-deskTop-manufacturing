import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';



const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default AuthRoutes;