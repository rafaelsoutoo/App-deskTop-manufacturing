import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from './App'
import './index.css';
import AuthRoutes from "./routes/auth.routes";
import AppRoutes from './routes/app.routes';

const isAuthenticated:number = 1;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {isAuthenticated === 1 ? <AuthRoutes /> : <AppRoutes />}
  </React.StrictMode>
)
