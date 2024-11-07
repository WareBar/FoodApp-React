const ItemList = ({food, isLoading}) =>{
    return (
        <div>
            {isLoading? 'Ingredients...':
            
            food.extendedIngredients.map((ingredientItem)=>(
                <div>
                    <img key={ingredientItem.id} src={`https://img.spoonacular.com/ingredients_100x100/${ingredientItem.image}`} alt="" />
                    <h3>{ingredientItem.name}</h3>
                    <pre>{ingredientItem.original}</pre>
                </div>
            ))
            }
        </div>
    )
}

export default ItemList;