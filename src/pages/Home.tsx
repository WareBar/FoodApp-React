import splashImage from '../assets/splash.png'; // Import the image directly
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
    return (
        <div 
            className="w-full h-150 bg-cover aspect-video flex items-center justify-between px-20" 
            style={{ backgroundImage: `url(${splashImage})` }}
        >

            <h2 className='mt-20 text-white flex flex-col gap-10 mada-font h-fit w-2xl'>
                <span className='font-medium text-5xl'>WareBar Recipe’s</span>
                <span>Your next delicious adventure starts here. Dive into a world of flavors and find the perfect recipe to inspire your next meal.</span>
            </h2>

            {/* containinig socials */}
            <p className='text-white flex flex-col items-center'>
                <span className='socials'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </span>
                <span className='socials'>
                    <FontAwesomeIcon icon={faTwitter}/>
                    </span>
                <span className='socials'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </span>
            </p>

        </div>
    )
}

export default Home