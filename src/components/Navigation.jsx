import styles from '../styles/Navigation.module.css'

const Navigation = () =>{
    return (
        <nav className={styles.Navigation}>
            <div className="brand">
                <img src="https://github.com/WareBar/FoodApp-React/blob/master/public/CookBookBrand.png" alt="" />
            </div>

            <button className={styles.slidebtn}>
                <p>///</p>
            </button>
        </nav>
    )
}

export default Navigation;