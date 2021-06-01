import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; no se usa ya que no se puede mutar una constante mejor usar Hooks*/
    const [categories, setCategories] = useState(['Samurai X']);

    /* const handleAdd = () => {
        setCategories([...categories, 'HxH']);
        setCategories(cats => [...cats, 'HxH']);
    }
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />


            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>
        </>
    )
}
