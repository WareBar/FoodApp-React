import fruit from '../assets/category/fruit.png'; // Import the image directly
import meat from '../assets/category/meat.png'
import vegetable from '../assets/category/vegetable.png'
import seafood from '../assets/category/seafood.png'
import breafast from '../assets/category/breakfast.png'



interface ItemCardProps{
    name:string;
    icon: string
}

const ItemCard: React.FC<ItemCardProps> = ({name, icon}) => {
    return (
        <div className=" w-fit max-w-7xl relative text-center">
            <img src={icon} alt="fruit" className='z-10 relative'/>
            <div className="bg-white w-12 h-12 rounded-full absolute top-[25%] left-[15%] z-5"></div>
            {/* <img src={fruit} alt="fruit" className=''/> */}
            <p className=''>{name}</p>
        </div>
    )
}


const Category = () => {
    return (
        <div className="text-white w-fit text-center mx-auto my-10">
            <p className='mb-5'>CATEGORY</p>

            {/* container for icons */}
            <div className=" flex items-end gap-5">
                <ItemCard name='Fruit' icon={fruit}/>
                <ItemCard name='Seafood' icon={seafood}/>
                <ItemCard name='Vegetable' icon={vegetable}/>
                <ItemCard name='Meat' icon={meat}/>
                <ItemCard name='Breakfast' icon={breafast}/>

            </div>


        </div>
    )
}


export default Category;