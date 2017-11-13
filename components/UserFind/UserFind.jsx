import React from 'react';
import queryString from 'query-string';

import { User } from '../User/User.jsx';


/**
* Styles.
*/
import { usersBlockStyle } from './UserFind.css';


export const UserFind = props => {

  function ff(){
    console.log('Query string', queryString.stringify({name: 'Petya', age: 15,})); //
  }

  ff();


  return(
    <div>

      <input type="text" placeholder='Search user name' />
      <div className={usersBlockStyle}>
          <User
            userAvatarUrl='https://avatars3.githubusercontent.com/u/59207?v=4'
            userName='Tom'
          />
      </div>




    </div>
  );
}
