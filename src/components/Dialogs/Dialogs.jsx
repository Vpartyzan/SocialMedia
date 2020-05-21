import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);    
    let messageElements = props.state.messages.map ( m => {
                                                        if (m.side === 'FROM') {
                                                           return <Message class={s.sendFrom} message={m.message} />
                                                        } else if (m.side === 'TO') {
                                                           return <Message class={s.sendTo} message={m.message} />
                                                        }                                                       
                                                    });

    let newDialogElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newDialogElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };   

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>                
                {dialogsElements}
            </div>            
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.text}>
                <textarea onChange={onMessageChange} ref={newDialogElement} value={props.state.newMessageText}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;