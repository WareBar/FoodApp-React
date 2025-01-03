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


            
            

            <div className={
                sideBar? styles.sideBar: `${styles.sideBar} ${styles.sideBar_Active}`
            }>

                <div className={styles.fontIcon} onClick={()=>{
                    showSideBar(!sideBar)
                    console.log(sideBar)
                }}>
                    <FontAwesomeIcon className={styles.menuBtn} icon={faBars}/>
                </div>

                <div className={styles.sideBarContent}>
                    <div className={styles.sideBarBanner}>
                        <img src="./CookBookBrand.png" alt="" />
                        <h1 className={styles.title}>WareBar's CookBook</h1>
                    </div>

                    <ul>
                        <li>POPULAR FOOD</li>
                        <li>HEALTHY FOOD</li>
                        <li>VEGAN FOOD</li>
                    </ul>

                </div>
            </div>

        
        </nav>
    )
}

export default Navigation;