import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.messages.map ( m => {
                                                        if (m.side === 'FROM') {
                                                           return <Message class={s.sendFrom} key={m.id} message={m.message} />
                                                        } else if (m.side === 'TO') {
                                                           return <Message class={s.sendTo} key={m.id} message={m.message} />
                                                        }                                                       
                                                    });

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (m) => {
        let text = m.target.value;
        props.updateNewMessageTextActionCreator(text);
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
                <textarea onChange={onMessageChange} value={state.newMessageText}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;