import { combineReducers } from 'redux'

const INITIAL_STATE ={
  data : [],
  loading: false,
  error: null,
  sucess: null
}

function AnimalsReducer (state = INITIAL_STATE, action){
  switch(action.type) {
    case 'FETCH_ANIMALS':
      return {...state, loading: true }
    case 'FETCH_ANIMALS_SUCESS':
      return {data: action.payload.animals, loading: false, sucess: action.payload.sucess }
    case 'FETCH_ANIMALS_ERROR':
      return {...state, error: action.payload.error ,loading: false }
    case 'ADD_ANIMAL':
      return {...state, loading: true }
    case 'ADD_ANIMAL_SUCESS':
      return {...state, sucess: action.payload.sucess, loading: false }
    case 'ADD_ANIMAL_ERROR':
      return {...state, error: action.payload.error, loading: false }
    case 'EDIT_ANIMAL':
      return {...state, loading: true }
    case 'EDIT_ANIMAL_SUCESS':
      return {...state, sucess: action.payload.sucess, loading: false }
    case 'EDIT_ANIMAL_ERROR':
      return {...state, error: action.payload.error, loading: false }
    case 'REMOVE_ANIMAL':
      return {...state, loading: true }
    case 'REMOVE_ANIMAL_SUCESS':
      return {...state, sucess: action.payload.sucess, loading: false }
    case 'REMOVE_ANIMAL_ERROR':
      return {...state, error: action.payload.error, loading: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  animals: AnimalsReducer,
}) 

export default rootReducer