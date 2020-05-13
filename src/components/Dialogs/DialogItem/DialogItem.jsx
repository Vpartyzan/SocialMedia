import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg" />
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;