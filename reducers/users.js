
import { ADD_USERS } from '../constants/actions';


export default function tasks(state = [], action){

  if (action.type === ADD_USERS) {
    return [
      ...state,
      action.payload
    ];
  }

  return state;
}
