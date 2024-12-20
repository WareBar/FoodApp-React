import styles from '../styles/Navigation.module.css'

const Navigation = () =>{
    return (
        <nav className={styles.Navigation}>
            <div className={styles.brand}>
                <img src="./CookBookBrand.png" alt="brand product" />
                <h1 className={styles.title}>WareBar's CookBook</h1>
            </div>

            <input type="button" value="///" />

        </nav>
    )
}

export default Navigation;