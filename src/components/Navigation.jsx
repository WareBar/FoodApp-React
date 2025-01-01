import styles from '../styles/Navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navigation = () =>{
    const [sideBar, showSideBar] = useState(false);

    return (
        <nav className={styles.Navigation}>
            <div className={styles.brand}>
                <img src="./CookBookBrand.png" alt="brand product" />
                <h1 className={styles.title}>WareBar's CookBook</h1>
            </div>


            
            <i onClick={()=>{
                showSideBar(!sideBar)
                console.log(sideBar)
            }}>
                <FontAwesomeIcon className={styles.menuBtn} icon={faBars}/>
            </i>
            

            <div className={
                sideBar? styles.sideBar: `${styles.sideBar} ${styles.sideBar_Active}`
            }>
                <p>SIDE BAR</p>
            </div>

        
        </nav>
    )
}

export default Navigation;