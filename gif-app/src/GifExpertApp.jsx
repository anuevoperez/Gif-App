import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    
    const deleteCategory = ( category ) => {
        const filteredCategories= categories.filter(element=>element!=category);
        setCategories(filteredCategories)
    }
    return (

        <>

          <div id="title">
            <h1> Gif's App </h1>
          </div>
    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                        deleteCategory= { deleteCategory }
                         />
                ))
            }




        </>
    )
}