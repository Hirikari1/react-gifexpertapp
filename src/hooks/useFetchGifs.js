//todos los hooks comienzan con "use"

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    });


    useEffect(() => {

        getGifs(category).then(imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })

            }, 3000);
        })

    }, [category])

    return state; //{data:[arreglo],loading:true}

}
    /*
useEffect(() => {
getGifs(category).then(imgs => setImages(imgs));
}, [category])//component did mount, hace que solo se ejecute el componente solo 1 vez cuando es renderizado,esto se volvera a renderizar si solo si la categoria se cambia
*/
