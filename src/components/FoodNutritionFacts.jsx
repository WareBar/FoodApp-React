import { useEffect, useState } from "react";

const FoodNutritionFacts = ({foodId, KEY}) => {
    const [foodNutritions, setFoodNutritions] = useState({});
    

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
            }
        }

        fetchNutritions()

    },[foodId])




    return (
        <div className="nutritionFacts">
            <div className="container">
                {/*
                container of the upper part
                which holds the information about the amount of ingredients and nutrients
                
                */}
                <div className="nutrients">
                    <div className="banner">
                        <img src="./foodImage.png" alt="" />
                        <p>
                            <span>{foodNutritions.weightPerServing}Serving size per plate</span>
                            <span><b>Calories</b></span>
                            <span><b>Fat Cal</b></span>
                            <span>*Percent Daily Values (DV are based on a 2,000 Calorie Diet)</span>
                        </p>
                    </div>
                    <div className="nutritionAmount"></div>
                </div>
                {/* 
                container of the bottom part
                holds the vitamin general percent
                */}
                <div className="vitaminPercent"></div>
            </div>
        </div>
    )
}

export default FoodNutritionFacts;


