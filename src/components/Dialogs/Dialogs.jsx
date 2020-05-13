import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);    
    let messageElements = props.state.messages.map ( function(m) {
                                                        if (m.id % 2 !== 0) {
                                                           return <Message class={s.sendFrom} message={m.message} />
                                                        } else {
                                                           return <Message class={s.sendTo} message={m.message} />
                                                        }                                                       
                                                    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>                
                {dialogsElements}
            </div>            
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;