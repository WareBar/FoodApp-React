interface RecipyProps{
    id: BigInteger,
    title: string
    image: string
}



const RecipyCard: React.FC<RecipyProps> = ({id, title, image}) => {
    return (
        <div 
        className=" w-2xs h-90 bg-cover rounded-md bg-center px-5"
        style={{ backgroundImage: `url(${image})` }}
        >


        <p className="flex flex-col justify-between h-full mada-font">
            <span className="flex flex-col">
                <span className="text-2xs">Price</span>
                <span className="text-2xl">{id}</span>
            </span>
            <span className="flex flex-col gap-3">
                <span className="flex flex-col gap-5">
                    <span className="text-2xl">{title}</span>
                    <span>Sauté crawfish, parsley, and green onion in butter until tender</span>                    
                </span>
                <span>
                    <span className="underline px-2 text-2xl">Start Now </span>
                    <span className="text-2xl"> &rarr;</span>
                </span>
            </span>
        </p>



        </div>
    )
}

export default RecipyCard