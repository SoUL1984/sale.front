import { FC } from 'react';
import CategoryForm from './CategoryForm';

export const categoryLoader = async() => {
    const aCategory = await instance.get<ICategory[]>('/catagory');
    return data;
}

export const categoryAction = async({ request }) => {
    const data = {};
    return data;
}

const Category:FC = () => {
    return (
        <div className="mt-4 grid grid-cols-3 items-start gap-4">
            <div className="col-span-2 grid"><CategoryForm /></div>
            <div className="rounded-md bg-slate-800 p-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="text-md font-bold text-center uppercase">#</p>
                        <p className='bg-green-600 p-1 rounded-sm text-center mt-2'>1</p>
                    </div>
                    <div>
                        <p className="text-md font-bold text-center uppercase">Name category</p>
                        <p className='bg-green-600 p-1 rounded-sm text-center mt-2'>Титановое основание</p>
                    </div>
                    <div>
                        <p className="text-md font-bold text-center uppercase">Hidden</p>
                        <p className='bg-green-600 p-1 rounded-sm text-center mt-2'>1</p>
                    </div>
                </div>
            </div>
        </div>);
}
  
export default Category
  