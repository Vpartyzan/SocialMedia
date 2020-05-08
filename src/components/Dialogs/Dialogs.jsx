import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Alex" id="1" />
                <DialogItem name="Victor" id="2" />
                <DialogItem name="Tomas" id="3" />
            </div>            
            <div className={s.messages}>
                <Message textMessage="Hi" />
                <Message textMessage="How are you?" />
                <Message textMessage="Hello" />
            </div>
        </div>
    )
}

export default Dialogs;