import {  Routes, Route, HashRouter } from 'react-router-dom';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';



const AuthRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </HashRouter>
    );
};

export default AuthRoutes;