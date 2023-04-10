import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, deleteCategory }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (

        <>
                
            
            {
                !isLoading && 
                
                    <> 
                        <div className="subtitle"> <button id="GifGridButton" onClick={()=> deleteCategory(category)}> Borrar </button>
                        <h3> {category} </h3>
                    </div>

                <div className="card-grid">
                    
                    {
                        images.map( ( image ) => (
                            <GifItem 
                                key={ image.id } 
                                { ...image }
                            />
                        ))
                    }
                
                
                </div>

            </>
            
            }
        </>

    )
}