import { useEffect, useState } from "react"
import styles from '../styles/Seach.module.css'

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const KEY = 'aa538488bd584e5dbfde6ed1fce8c20f'

const Search = ({setFoodData}) =>{
    const [query, setQuery] = useState('Pizza');

    useEffect(()=>{
        async function fetchFood(){
            const result = await fetch(`${URL}?query=${query}&apiKey=${KEY}`)
            const data = await result.json()
            if (data.status === 'failure'){
                alert(data.message)
            }
            else{
                console.log(data)
                setFoodData(data.results)
            }
        }

        fetchFood()
        
    },[query])

    const Querying = (e) =>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    return (
        <div className={styles.Search}>
            <input type="search" placeholder="Search Food"
            onChange={(e)=>Querying(e)}
            />
        </div>
    )
}

export default Search;