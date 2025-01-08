import searchStyles from '../styles/Seach.module.css'
import styles from '../styles/FoodVideoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const URL = 'https://api.spoonacular.com/food/videos/'
const KEY = 'ce18c0f227d6445d85ae9cc38ac166ea'

const SearchVideo = ({setFoodVideos, KEY, isLoading}) => {
    const [query, setQuery] = useState('chicken');
    const [showVid, isShowVid] = useState(false)
    
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

const FoodVideoItem = ({vidThumbnail, vidTitle, vidShortTitle, vidLength, vidViews, vidRatings, vidYoutubeId}) => {
    const youTubeUrl = `https://www.youtube.com/embed/${vidYoutubeId}?si=xT1slzXvCUJhAo_X`;
    const [showVid, isShowVid] = useState(false);
    return (
        <div className={styles.FoodVideoItem}>

            {
                showVid?
                    <div className={showVid? styles.videoBgBlocker:''}>
                        <div className={styles.videoPlayer}>
                            <div className={styles.videoPlayerControls}>
                                <FontAwesomeIcon className={styles.exitBtn} icon={faCircleXmark} onClick={()=>{
                                isShowVid(false);
                            }}/>

                            </div>
                            <iframe className={styles.videoMedia} width="560" height="315" src={youTubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    :
                    <></>
            }



            <div className={styles.top} onClick={()=>{
                if(showVid===true){
                    console.log('another video is playing')
                }
                else if (showVid === false){
                    isShowVid(true);
                    console.log(`${showVid}: video is mounting`)
                }
            }}>
                <img src={vidThumbnail} alt={vidTitle} />
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <p>
                        <span className={styles.videoTitle}>{vidShortTitle}</span>
                        <span className={styles.videoViews}>{vidViews} views</span>
                    </p>
                </div>
                <div className={styles.right}>
                    <p>
                       {/* <span>Rating</span> */}
                       <span>{vidRatings.toFixed(2)}'s rating</span>
                       <span className={styles.ratingContainer}>
                            <div className={styles.starValue} data-rating={vidRatings.toFixed(2)}></div>
                            <div className={styles.starRating}></div>
                            <div className={styles.starRating}></div>
                            <div className={styles.starRating}></div>
                            <div className={styles.starRating}></div>
                            <div className={styles.starRating}></div>
                       </span>
                    </p>
                </div>
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
            
            
            <div className={styles.FoodVideoList}>
                {foodVideos.videos.map((video)=>(
                    <FoodVideoItem key={video.title} vidThumbnail={video.thumbnail} vidTitle={video.title} vidShortTitle={video.shortTitle} vidLength={video.length} vidViews={video.views} vidRatings={video.rating} vidYoutubeId={video.youTubeId} />
                ))}
            </div>
            }
        </div>
    )
}

export default FoodVideoList;