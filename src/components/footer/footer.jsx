import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>somelogo </div>
            <div className={styles.text}>Bla bla bla all rights reserved</div>
        </div>
    );
};
export default Footer;
