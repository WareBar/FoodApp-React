import styles from '../components_styles/container.module.css'

const Container = ({ children }) => {
    return (
        <div className={styles.parentContainer}>
            <div>{ children }</div>
        </div>
    )
}


export default Container