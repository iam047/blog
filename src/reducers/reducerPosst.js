import { ADD_POST, DELL_POST,CHANGE_POST } from '../constants';
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
        ]
    }),
    [DELL_POST] : (state, action) => ({
        ...state, posts: [...state.posts.filter(post =>
            post.id !== action.id
        )]
    }),
    [CHANGE_POST] : (state, action) => ({
        ...state, posts: [...state.posts.map(post => post.id === action.id
            ? {...post, title: action.title,
                description: action.description,
                image: action.image,
                createdAt: Date.now() } : post)]
    })



})




























// const reducerPost = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             return {
//                 ...state,
//                 posts: [
//                     ...state.posts,
//                     {
//                         id: Date.now().toString(),
//                         title: action.title,
//                         description: action.description,
//                         image: action.image,
//                         createdAt: Date.now(),
//                         updatedAt: '',
//
//                     },
//                 ],
//             };
//         case DELL_POST:
//             return {
//                 ...state, posts: [...state.posts.filter(post =>
//                     post.id !== action.id
//                 )]
//             };
//         case CHANGE_POST :
//             return{
//                 ...state, posts: [...state.posts.map(post => post.id === action.id
//                     ? {...post, title: action.title,
//                         description: action.description,
//                         image: action.image,
//                         createdAt: Date.now() } : post)]
//             };
//         default:
//             return state
//     }
// };
//
// export default reducerPost