import { ADD_POST } from '../constants';

const initialState = [{
        id: Date.now().toString(),
        title: "My Post",
        description: "A document is a written, drawn, presented, or memorialized representation of thought.",
        images: 'https://media-service.appspot.com/site/images/xEP66r8I?crop=256',
        createdAt: Date.now(),
        updatedAt: '',
    }];

const reducPost = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return{
        ...state,
            posts: [
            ...state.posts,
            {
                id: Date.now().toString(),
                title: action.title,
                description: action.description,
                images: action.images,
                createdAt: action.createdAt,
                updatedAt: '',
            },
          ],
        };
        // case DELETE_ARTICLE:
        //     return state.filter(article =>
        //         article.id !== action.id
        //     );



        default:
            return state
    }
};

export default reducPost