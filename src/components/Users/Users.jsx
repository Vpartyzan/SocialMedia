import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            { id: 1, photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/10/17/10/3613124/f133cf3f7049a7f22f34a194c990d6b52d745657.png',
                followed: false, fullName: 'Neo', status: 'the One', location: {city: 'NY', country: 'USA'}},
            { id: 2, photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/10/17/10/3613124/f133cf3f7049a7f22f34a194c990d6b52d745657.png',
                followed: true, fullName: 'Max', status: 'Learn JS', location: {city: 'Minsk', country: 'Belarus'}},
            { id: 3, photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/10/17/10/3613124/f133cf3f7049a7f22f34a194c990d6b52d745657.png',
                followed: true, fullName: 'Taras', status: 'in Matrix', location: {city: 'Kiev', country: 'Ukraine'}},
            { id: 4, photoUrl: 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/10/17/10/3613124/f133cf3f7049a7f22f34a194c990d6b52d745657.png',
                followed: false, fullName: 'Grzegorz', status: 'in Matrix', location: {city: 'Krakow', country: 'Poland'}}
        ]);
    };

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id)} }>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;