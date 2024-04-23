import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src="https://images.pexels.com/photos/1701200/pexels-photo-1701200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        width={50}
                        height={50}
                        src="https://images.pexels.com/photos/1701200/pexels-photo-1701200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>
                            Terry Jefferson
                        </span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quaerat perspiciatis labore tenetur. Ut laudantium
                    omnis dolore unde autem, eligendi assumenda nemo deleniti
                    temporibus dicta deserunt, optio officiis soluta
                    repudiandae?
                </div>
            </div>
        </div>
    );
};
export default SinglePostPage;
