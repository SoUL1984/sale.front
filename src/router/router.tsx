import { createBrowserRouter } from '../../node_modules/react-router-dom/dist/index';
import Auth from '../pages/Auth';
import Category from '../pages/Category';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Layout from '../pages/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'auth',
                element: <Auth />
            }
        ]        
    }
])
