import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src="https://www.careergro.com/images/usa-img.jpg" />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
    );
}

export default ProfileInfo;