import queryString from 'query-string';

import { ADD_USERS } from '../constants/actions';
import { fetchData } from '../util/fetchUtil';
import { rootUrl, searchUsers } from '../constants/gitHubApi';


const addUsers = (data) => {

    let fetchUrl = rootUrl + searchUsers +
                  '&' + queryString.stringify({})

    try {
        fetchData()
    } catch (e) {

    }


    dispatch({
       type: ADD_USERS,
       payload: data,
     });
}


export const getUsers = () => (dispatch) => {

}
