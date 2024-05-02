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
    console.log(post);
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {post.img && (
                    <Image className={styles.img} src={post.img} alt="" fill />
                )}
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.container}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post?.userId} />
                        </Suspense>
                    )}
                    <div>
                        <span className={styles.detail}>Published</span>
                        <span className={styles.detailValue}>
                            {post?.createdAt?.toString().slice(4, 16) || '-'}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post?.desc}</div>
            </div>
        </div>
    );
};
export default SinglePostPage;
