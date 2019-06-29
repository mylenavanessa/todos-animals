const FETCH_ANIMALS = 'Animals/FETCH_ANIMALS'
const FETCH_ANIMALS_SUCCESS = 'Animals/FETCH_ANIMALS_SUCCESS'
const FETCH_ANIMALS_ERROR = 'Animals/FETCH_ANIMALS_ERROR'
const ADD_ANIMAL = 'Animals/ADD_ANIMAL'
const ADD_ANIMAL_SUCCESS = 'Animals/ADD_ANIMAL_SUCCESS'
const ADD_ANIMAL_ERROR = 'Animals/ADD_ANIMAL_ERROR'
const EDIT_ANIMAL = 'Animals/EDIT_ANIMAL'
const EDIT_ANIMAL_SUCCESS = 'Animals/EDIT_ANIMAL_SUCCESS'
const EDIT_ANIMAL_ERROR = 'Animals/EDIT_ANIMAL_ERROR'
const REMOVE_ANIMAL = 'Animals/REMOVE_ANIMAL'
const REMOVE_ANIMAL_SUCCESS = 'Animals/REMOVE_ANIMAL_SUCCESS'
const REMOVE_ANIMAL_ERROR = 'Animals/REMOVE_ANIMAL_ERROR'

export const Creators = {
	fetchAnimals:function (){
		return { type: FETCH_ANIMALS }
	},
		
	fetchAnimalsSuccess:function (animals, success){
		return {
			type: FETCH_ANIMALS_SUCCESS,
			payload: { animals, success }
		}
	},

	fetchAnimalsError:function (error){
		return {
			type: FETCH_ANIMALS_ERROR,
			payload: { error }
		}
	},

	addAnimal:function (){
		return { type: ADD_ANIMAL }
	},

	addAnimalSuccess:function (success){
		return { 
			type: ADD_ANIMAL_SUCCESS,
			payload: { success }
		}
	},

	addAnimalError:function (error){
		return {
			type: ADD_ANIMAL_ERROR,
			payload: { error }
		}
	},

	removeAnimal:function (){
		return{ type: REMOVE_ANIMAL }
	},

	removeAnimalSuccess:function (success){
		return{ 
			type: REMOVE_ANIMAL_SUCCESS, 
			payload: { success } 
		}
	},

	removeAnimalError:function (error){
		return{
			type: REMOVE_ANIMAL_ERROR,
			payload: { error }
		}
	},

	editAnimal:function (){
		return { type: EDIT_ANIMAL }
	},

	editAnimalSuccess:function (success){
		return { 
			type: EDIT_ANIMAL_SUCCESS,
			payload: { success }
		}
	},

	editAnimalError:function (error){
		return {
			type: EDIT_ANIMAL_ERROR,
			payload: { error }
		}
	}
}

const INITIAL_STATE ={
  data : [],
  loading: false,
  error: null,
  success: null
}

export default function AnimalsReducer (state = INITIAL_STATE, action){
	switch(action.type) {
    case FETCH_ANIMALS:
      return {...state, loading: true }
    case FETCH_ANIMALS_SUCCESS:
      return {data: action.payload.animals, loading: false, success: action.payload.success }
    case FETCH_ANIMALS_ERROR:
      return {...state, error: action.payload.error ,loading: false }
    case ADD_ANIMAL:
      return {...state, loading: true }
    case ADD_ANIMAL_SUCCESS:
      return {...state, success: action.payload.success, loading: false }
    case ADD_ANIMAL_ERROR:
      return {...state, error: action.payload.error, loading: false }
    case EDIT_ANIMAL:
      return {...state, loading: true }
    case EDIT_ANIMAL_SUCCESS:
      return {...state, success: action.payload.success, loading: false }
    case EDIT_ANIMAL_ERROR:
      return {...state, error: action.payload.error, loading: false }
    case REMOVE_ANIMAL:
      return {...state, loading: true }
    case REMOVE_ANIMAL_SUCCESS:
      return {...state, success: action.payload.success, loading: false }
    case REMOVE_ANIMAL_ERROR:
      return {...state, error: action.payload.error, loading: false }
    default:
      return state
  }
}