import { FC } from 'react';
import { Outlet } from '../../node_modules/react-router-dom/dist/index';
import Header from '../components/Header';

const Layout:FC = () => {
    return <div className="min-h-screen bg-slate-900 font-roboto text-white">
        <Header />
        <div className="container">
            <Outlet />
        </div>
    </div>
}
  
export default Layout
  