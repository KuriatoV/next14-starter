import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thourhgts Agency.</h1>
                <p className={styles.description}>
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsum
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn more</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image
                        className={styles.brand}
                        src="/brands.png"
                        alt=""
                        fill
                    />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
            </div>
        </div>
    );
};

export default Home;
