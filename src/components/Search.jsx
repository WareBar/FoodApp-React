import { useEffect, useState } from "react"
import styles from '../styles/Seach.module.css'

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const KEY = '8f01c50cdb9f46b6bdb00a2bdf5d65a5'

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
        
    },[])

    const Querying = (e) =>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    return (
        <div className={styles.Search}>
            <p>♦</p>
            <input type="search" placeholder="Search Food"
            onChange={(e)=>Querying(e)}
            />
        </div>
    )
}

export default Search;