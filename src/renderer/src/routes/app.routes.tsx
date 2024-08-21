import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Header } from '@renderer/components/Header';

export function AppRoutes () {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};
