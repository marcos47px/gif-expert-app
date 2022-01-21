// rafc
import React from 'react';
import { useFetchGifs } from '../hooks/useFecthGifs';
import {GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {    

    const { data:images, loading } = useFetchGifs( category );
     
    return (
        <>
            <h3 className="animate__animated animate__falsh">{category}</h3> 
            { loading && <p>Loading</p>}
            <div className="cardGrid">                       
                
                {
                    images.map( img =>(
                        <GifGridItem
                            key={ img.id }
                            {...img }
                        />
                    ))
                }
                
            </div>
        </>       
    
    )

};
