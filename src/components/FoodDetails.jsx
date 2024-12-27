import { useEffect, useState } from "react";
import styles from '../styles/FoodDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faAppleAlt, faArrowLeftLong, faStar, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const FoodDetails = ({foodId, foodData}) =>{
    const KEY = 'aa538488bd584e5dbfde6ed1fce8c20f';
    const [food, setFood] = useState({});
    const [foodDescription, setFoodDescription] = useState();
    const [loading, isLoading] =useState(true);

    useEffect(()=>{
        async function fetchFood(){
            const result = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+KEY)
            const data = await result.json()
            console.log(data)
            setFood(data)
            setFoodDescription(data.summary.replace(/<(.|\n)*?>/g, ''))
            isLoading(false)
        }

        fetchFood()

    },[foodId])

    return (
        <div className={styles.Details}>
            <h1>{food.title}</h1>
            <Link className={styles.link} to="/Foods">
                <FontAwesomeIcon className={styles.backBtn} icon={faArrowLeftLong}/> Go Back
            </Link>
            <div className={styles.info}>
                <div className={styles.top}>
                    <div className={styles.right}>
                        <div className={styles.banner}>
                            <img src={food.image} alt={food.title} />                    
                        </div>
                        <div className={styles.meta_info}>
                            <p>
                            
                                <span><FontAwesomeIcon className="fontIcon" icon={faClock}/> : {food.readyInMinutes} minutes</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faUtensils}/> : {food.servings} servings</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faAppleAlt}/> : {food.vegetarian? 'Vegetarian':'Non-Vegetarian'}</span>
                                {/* <span>{food.vegetarian? 'VEGE':'NOT VEGE'}</span> */}
                                <span>
                                    <FontAwesomeIcon className="fontIcon" icon={faHandHoldingDollar}/> :
                                    {food.pricePerServing} per serving</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faStar}/>: {food.spoonacularScore.toFixed(2)} Score</span>
                            </p>
                        </div>
                    </div>

                    <hr />

                    <div className="left">
                        <h2>Recipe Ingredients</h2>
                        <div className={styles.Ingredients}>
                            {loading? <p>Loading...</p>:
                            
                            food.extendedIngredients.map((item)=>(
                                <div className={styles.IngredientsItem}>
                                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} />
                                    <p className={styles.IngredientsName}>
                                        {item.name}
                                        <span className={styles.IngredientsOrig}>{item.original}</span>
                                    </p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>

                {/* places the tags associated with the dish */}
                <pre>Tags:</pre>
                <div className={styles.dishTypes}>
                    {loading? <p>Loading...</p>:
                    
                    food.dishTypes.map((tags)=>(
                        <div className={styles.tagsCard}>
                            <img src="./CookBookBrand.png" alt="" />
                            <p>{tags}</p>
                        </div>
                    ))

                    }
                </div>

                <div className={styles.bottom}>
                    <div className="instructions">
                        <ol className={styles.instructionsContainer}>
                            {loading? <li>Loading...</li>:
                            
                            food.analyzedInstructions[0].steps.map((item)=>(
                                <li>{item.step}</li>
                            )
                            )}
                        </ol>
                        
                    </div>
                </div>

                <div className={styles.descriptions}>
                    <h3>{food.title}'s' Description</h3>
                    <p>
                        {foodDescription}
                    </p>
                </div>

            </div>


        </div>
    )
}

export default FoodDetails;