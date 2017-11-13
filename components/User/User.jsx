import React from 'react';

import { userConatainerStyle, imgStyle, nameStyle } from './User.css';




export const User = props => {


  return(
    <div className={userConatainerStyle}>
      <img src={props.userAvatarUrl} className={imgStyle} />
      <div className={nameStyle}>{props.userName}</div>
    </div>
  );

}
