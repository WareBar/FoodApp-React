import { useState, useEffect } from 'react';

const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch'
const apiKey = '88affbb53dcf4de199c109f524a999e5'


const Search = () => {
// always use effectHooks inside of a component, and never outside
// useEffects Hooks are used when we want a component to sync with an external API so that whenever components changes, the data changes always
// useEffect Hooks are similar to JS addEventListener
// as they both allow you to react to changes or events and trigger specific actions or function


    const [query, setQuery] = useState('Pizza');

    // the await keyword waits for the response of a function before it can be accessed
    // the async keyword on the other hand allows simultaneous calling of a function

    useEffect(()=>{
        async function fetchFood(){
            // fetch is a js built-in function that collects a data based on passed url API
            const res = await fetch(`${apiUrl}?query=${query}&apiKey=${apiKey}`)
            const data = await res.json()
            console.log(data)
        }
        fetchFood()

    },[query])

    return (
        <div className="Search">
            <input type="text" id="searchBox"
            onChange={(e)=>setQuery(e.target.value)}
            />
        </div>
    )
}

export default Search;