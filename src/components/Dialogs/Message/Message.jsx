import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={props.class}>{props.message}</div>
    )
}

export default Message;