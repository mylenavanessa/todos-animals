export function fetchAnimals(){
  return { type: 'FETCH_ANIMALS '}
}

export function fetchAnimalsSucess(animals, sucess){
  return {
    type: 'FETCH_ANIMALS_SUCESS',
    payload: { animals, sucess }
  }
}

export function fetchAnimalsError(error){
  return {
    type: 'FETCH_ANIMALS_ERROR',
    payload: { error }
  }
}


export function addAnimal(){
  return { type: 'ADD_ANIMAL' }
}

export function addAnimalSucess(sucess){
  return { 
    type: 'ADD_ANIMAL_SUCESS',
    payload: { sucess }
  }
}

export function addAnimalError(error){
  return {
    type: 'ADD_ANIMAL_ERROR',
    payload: { error }
  }
}

export function removeAnimal(){
  return{ type: 'REMOVE_ANIMAL' }
}

export function removeAnimalSucess(sucess){
  return{ 
    type: 'REMOVE_ANIMAL_SUCESS', 
    payload: { sucess } 
  }
}

export function removeAnimalError(error){
  return{
    type: 'REMOVE_ANIMAL_ERROR',
    payload: { error }
  }
}

export function editAnimal(){
  return { type: 'EDIT_ANIMAL' }
}

export function editAnimalSucess(sucess){
  return { 
    type: 'EDIT_ANIMAL',
    payload: { sucess }
  }
}

export function editAnimalError(error){
  return {
    type: 'EDIT_ANIMAL',
    payload: { error }
  }
}