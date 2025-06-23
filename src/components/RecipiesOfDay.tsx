import { useEffect, useState } from "react"
import RecipyCard from "./RecipyCard"

interface RecipeListProps{
    apiKey:string
}


const RecipiesOfDay: React.FC<RecipeListProps> = ({apiKey}) => {
    const [recipies, setRecipies] = useState([])

    useEffect(()=>{
        async function fetchRecipies(){
            const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=4&apiKey=ce18c0f227d6445d85ae9cc38ac166ea`)
            const data = await res.json()
            if (data.status === 'failure'){
                alert(data.message)
                console.log(data.message)
            }
            else{
                setRecipies(data.results)
                console.log(data.results)
            }
        }
        fetchRecipies()
    },[apiKey])




    return (
        <div className="text-white mx-auto w-fit my-29">

            <p className="text-2xl my-5">Recipies of the Day!</p>


            {/* container of list */}
            <div className="flex gap-10">
                {recipies.map((recipy)=>(
                    <RecipyCard id={recipy.id} title={recipy.title} image={recipy.image}/>
                ))}
            </div>


        </div>
    )
}


export default RecipiesOfDay