import { ADD_POST } from '../constants';

export const addPost = (title, description, images, createdAt) => ({
    type: types.ADD_POST,
    createdAt,
    title,
    description,
    images,
});