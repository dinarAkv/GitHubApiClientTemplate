import { ADD_USERS } from '../constants/actions';
import users from '../reducers/users';
import { rootUrl, searchUsers } from '../constants/gitHubApi';


const userObj1 = {
  login: 'petya',
  avatarUrl: rootUrl + searchUsers + '?' + 'q=petya',
  id: 1
}

const userObj2 = {
  login: 'vasya',
  avatarUrl: rootUrl + searchUsers + '?' + 'q=vasya',
  id: 2
}



describe('Tests reducer to add users', () => {
  it('should return initial state for users.', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ' + ADD_USERS + ' reducer.', ()=> {

    expect(
      users([], {
        type: ADD_USERS,
        payload: userObj1
      })
    ).toEqual([userObj1])

    expect(
      users([userObj1], {
        type: ADD_USERS,
        payload: userObj2
      })
    ).toEqual([userObj2])

  })
})
