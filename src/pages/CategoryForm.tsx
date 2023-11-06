import { FC } from 'react';
import { Form } from 'react-router-dom';

const CategoryForm:FC = () => {
    return (
        <div>
            <Form className="grid gap-2" method="post" action="/category">
                <label className="grid" htmlFor="nameCategory">
                    <span>Name category</span>
                    <input className="input" type="text" placeholder="Name category..." name="nameCategory" required/>
                </label>

                {/* Submit button */}
                <button className='btn btn-green max-w-fit'>Submit</button>
            </Form>
        </div>
    );
}
  
export default CategoryForm
  