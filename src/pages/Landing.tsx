import Home from './Home'
import Navigation from "../components/Navigation"
import Category from '../components/Category'
import RecipiesOfDay from '../components/RecipiesOfDay'
const Landing = () => {
    const apiKey = 'ce18c0f227d6445d85ae9cc38ac166ea'

    return (
        <div className="">
            <Navigation/>
            <Home/>
            <Category/>
            <RecipiesOfDay apiKey={apiKey}/>
            
        </div>
    )
}

export default Landing;