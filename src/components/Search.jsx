import { useEffect, useState } from "react"
import styles from '../styles/Seach.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const KEY = '299d7031b4b048bdb30836bd459a9ab1'

const Search = ({setFoodData}) =>{
    const [query, setQuery] = useState('Curry');

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
            <FontAwesomeIcon className={styles.fontIcon} icon={faMagnifyingGlass}/>
            <input type="search" placeholder="Search Food"
            onChange={(e)=>Querying(e)}
            />
        </div>
    )
}

export default Search;