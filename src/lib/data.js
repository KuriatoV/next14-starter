// temp data
// const users = [
//     {
//         id: 1,
//         name: 'John',
//     },
//     {
//         id: 2,
//         name: 'Jane',
//     },
//     {
//         id: 3,
//         name: 'Lolipop',
//     },
// ];

import { Post, User } from './models';
import { connectToDb } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

// const posts = [
//     { id: 1, title: 'Post 1', body: 'some post info', userId: 1 },
//     { id: 2, title: 'Post 2', body: 'some blabla', userId: 2 },
//     { id: 3, title: 'Post 3', body: 'attention ', userId: 3 },
//     { id: 4, title: 'Post 4', body: 'boring info', userId: 1 },
// ];

export const getPosts = async () => {
    noStore();
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        throw new Error('Failed to fetch posts!');
    }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug: slug });
        return post;
    } catch (err) {
        throw new Error(`Failed to fetch post with slug ${slug}!`);
    }
};
export const getUser = async (id) => {
    noStore();

    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw new Error(`Failed to fetch user with id ${id}!`);
    }
};
export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        throw new Error(`Failed to fetch users !`);
    }
};
