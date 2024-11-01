import styles from '../components_styles/container.module.css'

const Container = ( {children} ) => {
    return (
        <div className={styles.Container}>{children}</div>
    )
}

export default Container;