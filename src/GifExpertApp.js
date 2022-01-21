import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

// const categories = ['One Piece','Made in abyss', 'Demon Slayer']; //Solo para datos estáticos que nunca tienen pensado cambiar
    const [categories, setCategories] = useState(['Demon Slayer']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>    
                    
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))

                }
            </ol>
        </>
    )
}