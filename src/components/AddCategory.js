import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((categories) => [inputValue,...categories,])
    }

    return (
        <form onSubmit={handleSubmit} id='addCategory'>
            <input
                type="text"
                value={ inputValue }
                onChange={(e)=> setInputValue(e.target.value)}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;