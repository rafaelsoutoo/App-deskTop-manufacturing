import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../screens/Home';




const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};

export default AppRoutes;