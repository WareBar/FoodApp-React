import searchStyles from '../styles/Seach.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const URL = 'https://api.spoonacular.com/food/videos/'
const KEY = '9ec1fcccf4ef490bac5d131a74aba43c'

const SearchVideo = ({setFoodVideos, KEY, isLoading}) => {
    const [query, setQuery] = useState('chicken')
    
    useEffect(()=>{
        async function fetchFoodVideo(){
            // const result = await fetch(`${URL}search?query=${query}&number=10&apiKey=${KEY}`)
            // const result = await fetch('https://api.spoonacular.com/food/videos/search?query='+query+'&number=10$apiKey='+KEY)
            const result = await fetch(`${URL}search?query=${query}&number=10&apiKey=${KEY}`)
            console.log(KEY)
            const data = await result.json()
            if (data.status === 'failure'){
                alert(data.message)
            }
            else{
                console.log(data)
                setFoodVideos(data)
                isLoading(false)
            }
        }
        fetchFoodVideo()
    },[query])

    const Querying = (e) =>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }
    
    return (
        <div className={searchStyles.Search}>
            <FontAwesomeIcon className={searchStyles.fontIcon} icon={faMagnifyingGlass}/>
            <input type="search" placeholder="Search Food"
            onChange={(e)=>Querying(e)}  
            />
        </div>
    )
}

const FoodVideoItem = ({vidThumbnail, vidTitle, vidLength, vidViews, vidRatings, vidYoutubeId}) => {
    // const youTubeUrl = `https://www.youtube.com/watch?v=${vidYoutubeId}`
    const youTubeUrl = `https://www.youtube.com/embed/${vidYoutubeId}?si=xT1slzXvCUJhAo_X`
    return (
        <div>
            <div>
            <iframe width="560" height="315" src={youTubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </div>
    )
}


const FoodVideoList = ({loading, isLoading}) => {
    const [foodVideos, setFoodVideos] = useState({});
    return (
        <div>
            <SearchVideo setFoodVideos={setFoodVideos} KEY={KEY} isLoading={isLoading}/>
            {loading? <p>Loading Videos...</p>:
            
            
            <div className="FoodVideoList">
                {foodVideos.videos.map((video)=>(
                    <FoodVideoItem key={video.title} vidThumbnail={video.thumbnail} vidTitle={video.title} vidLength={video.length} vidViews={video.views} vidRatings={video.ratings} vidYoutubeId={video.youTubeId} />
                ))}
            </div>
            }
        </div>
    )
}

export default FoodVideoList;