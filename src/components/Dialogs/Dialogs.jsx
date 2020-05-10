import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsElem}
            </div>            
            <div className={s.messages}>
                {props.messageElem}
            </div>
        </div>
    )
}

export default Dialogs;