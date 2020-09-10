import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GridGiftList from "./GridGiftList";

function App() {

    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <div className='tw-container tw-pt-20 tw-mx-auto'>
            <h2 className='tw-text-xl tw-font-bold'>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <div className='tw-mt-10'>
                {categories && categories.map((category)=> {
                    return (
                        <li className='tw-list-none' key={category}>
                            <h4 className='tw-pb-8 tw-pt-8 tw-text-center'>{category}</h4>
                            <GridGiftList category={category} />
                        </li>
                    )
                })}
            </div>

        </div>
    );
}

export default App;
