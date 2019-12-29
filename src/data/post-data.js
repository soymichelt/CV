import { getDb } from './firestore'

const getPostsQuery = () => {
    const db = getDb()
    return db.collection('posts')
}

export const getPostByIdQuery = (postId) => {
    return getPostsQuery().doc(postId)
}

export const getPosts = async () => {
    const snapshots = await getPostsQuery().get()
    const postsArray = []
    snapshots.forEach(post => {
        postsArray.push({
            id: post.id,
            ...post.data(),
        });
    });
    return postsArray
}

export const addPost = async (postData) => {
    await getPostsQuery().add(postData)
}

export const updatePost = async (postId, postData) => {
    await getPostByIdQuery(postId).update(postData)
}

export const deletePost = async (postId) => {
    await getPostByIdQuery(postId).delete()
}