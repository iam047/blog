import { ADD_POST, DELL_POST,CHANGE_POST } from '../constants';

const initialState = {
    posts: [{
            id: 1,
            user: "Alex",
            userAvatar : "http://www.imagesyoulike.com/images/h/32x24/h0466.jpg",
            title: "My Post",
            description: "A document is a written, drawn, presented, or memorialized representation of thought.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIdYh8P61DSTlijYR8hD9OGk4JrSpZU99cN3xFKpH_f_bNAOs',
            createdAt: Date.now(),
            updatedAt: ''
    },
    {
        id: 2,
        user: "Igor",
        userAvatar : "https://avatars.mds.yandex.net/get-pdb/70729/4309e06a-0696-4ecd-80e4-42d8f4c12729/s800",
        title: "My",
        description: "A document",
        image: 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
        createdAt: Date.now(),
        updatedAt: '',
    }
]
};

///@todo add redux logger

const reducerPost = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
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
        };
        case DELL_POST:
            return {
                ...state, posts: [...state.posts.filter(post =>
                    post.id !== action.id
                )]
            };
        case CHANGE_POST :
            return{
                ...state, posts: [...state.posts.map(post => post.id === action.id
                    ? {...post, title: action.title,
                        description: action.description,
                        image: action.image,
                        createdAt: Date.now() } : post)]
            };
        default:
            return state
    }
};

export default reducerPost