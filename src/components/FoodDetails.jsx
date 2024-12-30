import { useEffect, useState } from "react";
import styles from '../styles/FoodDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import FoodNutritionFacts from "./FoodNutritionFacts";

const FoodDetails = ({foodId, foodData}) =>{
    const KEY = '299d7031b4b048bdb30836bd459a9ab1'; 
    const [food, setFood] = useState({});
    const [foodDescription, setFoodDescription] = useState();
    const [loading, isLoading] =useState(true);
    const [seeDescription, setSeeDescription] = useState(false);

    //fetches data from API everytime the value of foodId changes
    useEffect(()=>{
        async function fetchFood(){
            console.log(foodId)
            // fetches basic information of the food
            const fetchedFoodBasicInfo = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/information?apiKey='+KEY)
            const foodInfo = await fetchedFoodBasicInfo.json()

            console.log(foodInfo)
            if (foodInfo.status === 'failure'){
                alert(foodInfo.message)
                
            }   
            else{
                setFood(foodInfo)
                setFoodDescription(foodInfo.summary.replace(/<(.|\n)*?>/g, ''))
                isLoading(false)
            }
        }

        fetchFood()

    },[foodId])

    return (
        <div className={styles.Details}>

            {seeDescription? 
            
                <div className={`${styles.description} ${styles.active}`}>

                    <div className={styles.topDescription}>
                        <h3>{food.title}</h3> 
                        <button className={styles.exitBtn} onClick={()=>setSeeDescription(false)}>
                            <FontAwesomeIcon className="fontIcon" icon={faCircleXmark}/>
                        </button>
                        
                    </div>
                    <hr />
                    <p>
                        {foodDescription}
                    </p>
                </div>:
                <></>
        
            }





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
                            
                                {/* <span><FontAwesomeIcon className="fontIcon" icon={faClock}/> : {food.readyInMinutes} minutes</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faUtensils}/> : {food.servings} servings</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faAppleAlt}/> : {food.vegetarian? 'Vegetarian':'Non-Vegetarian'}</span>
                                <span>
                                    <FontAwesomeIcon className="fontIcon" icon={faHandHoldingDollar}/> :
                                    {food.pricePerServing} per serving</span>
                                <span><FontAwesomeIcon className="fonticon" icon={faStar}/>: {food.spoonacularScore} Score</span> */}
                                
                                <span>
                                    <img className={styles.infoIcon} src="https://img.icons8.com/?size=100&id=kZYJCScZSxUH&format=png&color=000000" alt="Clock" />: {food.readyInMinutes} minutes
                                </span>
                                <span>
                                    <img className={styles.infoIcon} src="https://img.icons8.com/?size=100&id=43187&format=png&color=000000" alt="utensils" />: {food.servings} servings
                                </span>
                                <span>
                                    <img className={styles.infoIcon} src="https://img.icons8.com/?size=100&id=cpa3RyNsYJkU&format=png&color=000000" alt="vegetable" />: {food.vegetarian? 'Vegetarian':'Non-Vegetarian'}
                                </span>

                                <span>
                                    <img className={styles.infoIcon} src="https://img.icons8.com/?size=100&id=81980&format=png&color=000000" alt="score" />: {food.spoonacularScore}
                                </span>

                                <span>
                                    <img className={styles.infoIcon} src="https://img.icons8.com/?size=100&id=80372&format=png&color=000000" alt="money" />: {food.pricePerServing}
                                </span>

                                <span>
                                    <button className={styles.descriptionBtn} onClick={()=>setSeeDescription(true)}>See Descriptions</button>
                                </span>
                            </p>
                        </div>
                    </div>

                    <hr />

                    {/* Render the Ingredients */}
                    <div className="left">
                        <h2>Recipe Ingredients</h2>
                        <div className={styles.Ingredients}>
                            {/* determine if the promised data is delivered, if no, it shall display the text Loading... otherwise the content */}
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

                {/* Recipe's Instructions */}
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

                <FoodNutritionFacts foodId={foodId} KEY={KEY} />


            </div>


        </div>
    )
}

export default FoodDetails;