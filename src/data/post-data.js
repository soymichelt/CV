import { getDb } from './firestore'

export const getPostByIdQuery = (postId) => {
    const db = getDb()
    return db.collection('posts').doc(postId)
}