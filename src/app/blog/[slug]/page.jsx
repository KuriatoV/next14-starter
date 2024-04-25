import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

// const getData = async ({ slug }) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${slug}`,
//         {
//             cache: 'no-store',
//         }
//     ).then();
//     if (!res.ok) {
//         throw new Error('something went wrong');
//     }
//     return res.json();
// };
const SinglePostPage = async ({ params }) => {
    const post = await getPost(params.slug);

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
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        width={50}
                        height={50}
                        src="https://images.pexels.com/photos/1701200/pexels-photo-1701200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post?.userId} />
                        </Suspense>
                    )}
                </div>
                <div className={styles.content}>{post?.body}</div>
            </div>
        </div>
    );
};
export default SinglePostPage;
