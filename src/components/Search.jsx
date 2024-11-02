import { useState, useEffect } from 'react';
import styles from '../components_styles/search.module.css';


const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch'
const apiKey = 'ca08c680f7f34b32ab85b29476761c83'


const Search = ({ setFoodData} ) => {
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
            if (data.status === 'failure'){
                alert(data.message)
            }
            else{
                console.log(data)
                console.log(data.results);
                setFoodData(data.results)
            }
        }
        fetchFood()

    },[query])

    return (
        <div className={styles.Search}>
            <input type="text" id={styles.searchBox}
            onChange={(e)=>setQuery(e.target.value)}
            />
        </div>
    )
}

export default Search;