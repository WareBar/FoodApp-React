import { useEffect, useState } from "react";
import styles from '../styles/FoodNutritionFacts.module.css'


const FoodNutritionFacts = ({foodId, KEY, pricePerServing}) => {
    const [foodNutritions, setFoodNutritions] = useState([]);
    const [loading, isLoading] = useState(true);


    useEffect(()=>{
        async function fetchNutritions(){
            console.log(foodId+'|'+KEY)
            const fetchedFoodNutrition = await fetch('https://api.spoonacular.com/recipes/'+foodId+'/nutritionWidget.json?apiKey='+KEY)
            const fetchedInfo = await fetchedFoodNutrition.json()
            console.log(fetchedInfo)

            if (fetchedInfo.status === 'failure'){
                alert(fetchedInfo.message)
            }
            else{
                setFoodNutritions(fetchedInfo)
                isLoading(false)
            }
        }

        fetchNutritions()

    },[foodId])




    return (
        <div className={styles.NutritionFacts}>
            <div className={styles.container}>
                {/*
                container of the upper part
                which holds the information about the amount of ingredients and nutrients
                
                */}
                <div className={styles.nutrients}>
                    <div className={styles.foodBanner}>
                        <img src="./dish.png" alt="food" />   
                    </div>

                    <div className={styles.banner}>
                        <img src="./foodImage.png" alt="" />

                        {loading? <p>LOADING?</p>:
                        <p className={styles.banner_content}>
                            <span className={styles.serving}>{foodNutritions.weightPerServing.amount}{foodNutritions.weightPerServing.unit} Serving size per plate</span>
                            <span className={styles.calories}>
                                <b>Calories {foodNutritions.calories}</b>
                            </span>

                            <span className={styles.fat}>
                                <b>Fat Cal {foodNutritions.fat}</b>
                            </span>

                            <span className={styles.note}>*Percent Daily Values(DV are based on a 2,000 Calorie Diet)</span>
                        </p>
                        }
                    </div>


                    <div className={styles.nutritionInfoContainer}>
                        <div className={styles.nutritionInfoHeader}>
                            <h1>Nutrition Facts</h1>
                            <img src="./CookBookBrand.png" alt="" />
                        </div>
                        <div className={styles.nutritionInfo}>
                            <p className={styles.amountServing}>Amount Per Serving: ${pricePerServing}</p>
                            <p>
                                {loading? <p>Loading...</p>:
                                
                                foodNutritions.nutrients.map((entity)=>(
                                    <span className={styles.nutrition}>              
                                        <span className="nutritionName">{entity.name}</span>
                                        <span className="nutritionAmount">{entity.amount} {entity.unit}</span>
                                        {/* <span className="nutritionDaileyNeeds">{entity.percentOfDailyNeeds} %</span> */}
                                    </span>
                                ))
                                
                                }
                            </p>
                        </div>
                    </div>
                </div>
                {/* 
                container of the bottom part
                holds the vitamin general percent
                */}
                <div className={styles.vitaminPercent}>
                    <p>VITAMINS</p>
                </div>
            </div>
        </div>
    )
}

export default FoodNutritionFacts;


