import React from 'react';
// import queryString from 'query-string';

import { User } from '../User/User.jsx';


/**
* Styles.
*/
import { searchButtonStyle, usersBlockStyle, userItemStyle } from './UserFind.css';




const searchButtonName = 'search';




class UserFind extends React.Component {

  constructor(props){
    super(props);

    this.searchUserOnClick = this.searchUserOnClick.bind(this);
  }

  searchUserOnClick(event){

    console.log('Typed', this.searchName.value);

    this.props.userActions.getUsers(this.searchName.value);
  }



  render(){
    return(
      <div>

        <input type="text" ref={(input) => { this.searchName = input }} placeholder='Search user name' />
        <button className={searchButtonStyle} onClick={this.searchUserOnClick}>{searchButtonName}</button>
        <div className={usersBlockStyle}>
            {this.props.users[0] ? this.props.users[0].map((user, index, arr) => {

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

}


export default UserFind;
