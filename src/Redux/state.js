
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: '4' },
            { id: 2, message: "It's my first post", likesCount: '25' }
        ],
        
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello'}
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Tomas'}
        ],
    }       
}

export default state;