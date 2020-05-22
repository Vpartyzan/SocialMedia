import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
                {id: 1, side: 'FROM', message: 'Hi'},
                {id: 2, side: 'TO', message: 'Hello'},
                {id: 3, side: 'FROM', message: 'How are you?'},
                {id: 4, side: 'TO', message: 'Yo!'}
            ],
            newMessageText: "",
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Victor'},
                {id: 3, name: 'Tomas'}
            ],
        },
        sidebar: {},       
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        
    }
};

export default store;
window.store = store;