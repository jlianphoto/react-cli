import {GETDEFAULTSTORE} from './action-type';

let defaultState = {
  defaultMerchant: {},
  aaa:[]
}

export const defaultStore = (state = defaultState, action) => {

  switch(action.type){
    case GETDEFAULTSTORE: 
      return {...state, ...action}
    default: 
      return state;
  }
}