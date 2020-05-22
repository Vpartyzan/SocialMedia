const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                side: 'TO',
                message: state.newMessageText
            };
    
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        
        default:
            return state;
    };
};

export const addMessageActionCreator = () => ({type: 'SEND-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
});

export default dialogsReducer;