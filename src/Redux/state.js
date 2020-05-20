const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber () {
        console.log('state changed');
    },
    
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },    
    
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }    
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) =>  ({
        type: 'UPDATE-NEW-POST-TEXT', 
        newText: text,
    });



export default store;
window.store = store;