import { ADD_POST, DELETE_POST,CHANGE_POST,VALUE_SEARCH, SORT_DATE } from '../constants';
import { reducerHelper } from './reducerHelper';
import { initialState } from './initialState';

export default reducerHelper(initialState, {
    [ADD_POST] : (state, action) => ({
        ...state,
        posts: [
            ...state.posts,
            {
                id: Date.now().toString(),
                title: action.title,
                description: action.description,
                image: action.image,
                createdAt: Date.now(),
                updatedAt: '',
            },
        ],
        searchValue:'',
    }),
    [DELETE_POST] : (state, action) => ({
        ...state, posts: [...state.posts.filter(post =>
        post.id !== action.id)]
    }),
    [CHANGE_POST] : (state, action) => ({
        ...state, posts: [...state.posts.map(post => post.id === action.id ? {...post,
        title: action.title, description: action.description, image: action.image,
        createdAt: Date.now()} : post)]
    }),
    [VALUE_SEARCH] : (state, action) => ({
        ...state, posts: [...state.posts], searchValue: action.value
    }),
    [SORT_DATE] : (state) => ({
        ...state, posts: [...state.posts.sort( (a, b) => a.createdAt > b.createdAt? a.createdAt: b.createdAt)]
    }),
})