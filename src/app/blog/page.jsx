import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: { revalidate: 10 },
//     }).then();
//     if (!res.ok) {
//         throw new Error('something went wrong');
//     }
//     return res.json();
// };

const BlogPage = async () => {
    const posts = await getPosts();
    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
export default BlogPage;
