import { ADD_POST, DELETE_POST, CHANGE_POST, VALUE_SEARCH, SORT_DATE } from '../constants';

export const addPost = ({ title, description, image }) => {
    return { type: ADD_POST, title, description, image }
};
export const deletePost = id => {
    return { type: DELETE_POST, id }
};

export const changePost = ({ id, title, description, image }) => {
    return { type: CHANGE_POST, id, title, description, image }
};
export const valueSearch = value => {
    return { type: VALUE_SEARCH, value }
};

export const sortDate = () => {
    return { type: SORT_DATE }
};