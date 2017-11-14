import React from 'react';
// import queryString from 'query-string';

import { User } from '../User/User.jsx';


/**
* Styles.
*/
import { searchButtonStyle, usersBlockStyle, userItemStyle } from './UserFind.css';




const searchButtonName = 'search';



export const UserFind = ({ users, userActions, searchName }) => {


  const searchUserOnClick = (event) => {

    console.log('Typed', searchName.value);

    userActions.getUsers(searchName.value);
  }






  return(
    <div>

      <input type="text" ref={(input) => { searchName = input }} placeholder='Search user name' />
      <button className={searchButtonStyle} onClick={searchUserOnClick}>{searchButtonName}</button>
      <div className={usersBlockStyle}>
          {users[0] ? users[0].map((user, index, arr) => {

            return (
                      <div key={user.id.toString()} className={userItemStyle}>
                        <User
                          userAvatarUrl={user.avatarUrl}
                          userName={user.login}
                          key={user.id.toString()}
                        />
                      </div>
                  )
          }

          ) : null}

      </div>
    </div>
  );
}
