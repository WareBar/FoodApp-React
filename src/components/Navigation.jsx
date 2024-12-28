import styles from '../styles/Navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () =>{
    return (
        <nav className={styles.Navigation}>
            <div className={styles.brand}>
                <img src="./CookBookBrand.png" alt="brand product" />
                <h1 className={styles.title}>WareBar's CookBook</h1>
            </div>


            
            <a href="hag.com" >
                <FontAwesomeIcon className={styles.menuBtn} icon={faBars}/>
            </a>

        </nav>
    )
}

export default Navigation;