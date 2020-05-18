let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: '4' },
            { id: 2, message: "It's my first post", likesCount: '25' }
        ],
        newPostText: "",
        
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Yo!'}
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Tomas'}
        ],
    },
    sideBar: {},       
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;