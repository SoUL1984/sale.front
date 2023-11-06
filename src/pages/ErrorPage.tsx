import { FC } from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';
import img from '../assets/404.jpg';

const ErrorPage:FC = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 font-roboto text-white">
            <img src={img} alt="img" className='' />
            <Link to={'/'} className='rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600'>
                Back
            </Link>
        </div>
    );
}
  
export default ErrorPage
  