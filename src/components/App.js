import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GridGiftList from "./GridGiftList";

function App() {

    const [categories, setCategories] = useState([])

    return (
        <div className='tw-p-24'>
            <h2 className='tw-text-xl tw-font-bold'>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <div className='tw-mt-10'>
                {categories && categories.map((category)=> {
                    return (
                        <li className='tw-list-none' key={category}>
                            {category}
                            <GridGiftList category={category} />
                        </li>
                    )
                })}
            </div>
            <button form='addCategory'
                    type='submit'
                    className='tw-mt-6 tw-bg-blue-500 hover:tw-bg-blue-400 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-border-b-4 tw-border-blue-700 hover:tw-border-blue-500 tw-rounded'>
                Añádir serie
            </button>
        </div>
    );
}

export default App;
