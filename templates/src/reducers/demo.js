import { LOAD_DATA, LOAD_DATA_ERROR } from '../actions/type'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_DATA:
      return {...state}
    case LOAD_DATA_ERROR:
      return state
    default:
      return state
  }
}

export default reducer