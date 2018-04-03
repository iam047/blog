import { ADD_POST,DELL_POST,CHANGE_POST} from '../constants';

export const addPost = ({title, description, image}) => {
    return {type: ADD_POST, title, description, image}
};
export const dellPost = id => {
    return { type: DELL_POST, id }
};

export const changePost = (id, title, description, image) => {
    return { type: CHANGE_POST, id, title, description, image}
};
