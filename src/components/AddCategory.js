import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue){
            return setError(true)
        }
        setCategories((categories) => [inputValue,...categories,])
    }

    return (
        <form onSubmit={handleSubmit} id='addCategory'>
            <div className=''>
              <input
                placeholder="Buscar..."
                type="text"
                className={`tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-rounded-lg tw-border tw-py-2 tw-px-2 tw-mb-3 tw-leading-tight ${error ? "tw-border-red-500" : ''}`}
                value={ inputValue }
                onChange={(e)=> setInputValue(e.target.value)}
              />
                {error && <p className="tw-text-red-500 tw-text-xs tw-italic">Busqueda vacía</p>}
            </div>
            <button form='addCategory'
                    type='submit'
                    className='tw-mt-6 tw-bg-blue-500 hover:tw-bg-blue-400 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-border-b-4 tw-border-blue-700 hover:tw-border-blue-500 tw-rounded'>
                Añádir serie
            </button>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;