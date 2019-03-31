import { LOAD_DATA, LOAD_DATA_ERROR } from './type'

export function loadData(){
  return (dispatch, getState) => {
    let url = ''
    _fetch(url, {
      method: 'get',
      headers: {}
    }).then(resJson => {
      if(resJson === 200){
        dispatch({
          type: LOAD_DATA
        })
      }else{
        dispatch({
          type: LOAD_DATA_ERROR
        })
      }
    })
  }
}