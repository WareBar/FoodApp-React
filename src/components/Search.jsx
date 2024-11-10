import { useEffect, useState } from "react"

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const KEY = '05940b3f618749bcae5d955b0311f74a'

const Search = ({setFoodData}) =>{
    const [query, setQuery] = useState('Pizza');

    useEffect(()=>{
        async function fetchFood(){
            const result = await fetch(`${URL}?query=${query}&apiKey=${KEY}`)
            const data = await result.json()
            console.log(data)
            setFoodData(data)
        }

        fetchFood()
        
    },[query])

    const Querying = (e) =>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    return (
        <div>
            <input type="search"
            onChange={(e)=>Querying(e)}
            />
        </div>
    )
}

export default Search;