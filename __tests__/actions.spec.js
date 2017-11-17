import configureStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import expect from 'expect'


import * as actions from '../actions/users';
import * as types from '../constants/actions';
import { ADD_USERS } from '../constants/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('Test actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('Test getUsers action.', () => {

    // Mock acquired from rest.
    const payload = { login: 'petya', avatar_url: 'https://github/url', id: 1 };
    const usersJson = JSON.stringify({items: [payload]});


    fetchMock
      .getOnce('https://api.github.com/search/users?q=petya', { body: usersJson, status: 201, headers: { 'content-type': 'application/json' } })



    const expectedPayload = [{ login: 'petya', avatarUrl: 'https://github/url', id: 1 }];
    const expectedActions = [{ type: ADD_USERS, payload: expectedPayload }];

    const store = mockStore({ users: [] })

    return store.dispatch(actions.getUsers('petya')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
