import * as Creators from './Actions'
import api from '../services/api'

export function dispatchFetchAnimals() {
    return async dispatch => {
        dispatch(Creators.fetchAnimals())
        try {
            const { data: animals } = await api.get('/animals')
            dispatch(Creators.fetchAnimalsSucess(animals, 'Busca feita com sucesso'))
        } catch (e) {
            dispatch(Creators.fetchAnimalsError("Não foi possivel buscar animais"))
        }
    }
}

export function dispatchAddAnimal(animal) {
    return async dispatch => {
        dispatch(Creators.addAnimal())
        try {
            await api.post('/animals', animal)
            dispatch(Creators.addAnimalSucess('Animal adicionado com sucesso'))
        }catch(e) {
            dispatch(Creators.addAnimalsError('Não foi possivel adicionar animal'))
        }
    }
}

export function dispatchEditAnimal(animal) {
    return async dispatch => {
        dispatch(Creators.editAnimal())
        try {
            await api.put(`/animals/${animal.id}`, animal)
            dispatch(Creators.editAnimalSucess('Animal editado com sucesso'))
        }catch(e) {
            dispatch(Creators.editAnimalError('Erro ao editar animal'))
        }
    }
}

export function dispatchRemoveAnimal(id) {
    return async dispatch => {
        dispatch(Creators.removeAnimal())
        try{
            await api.delete(`/animals/${id}`)
            dispatch(Creators.removeAnimalSucess('Animal removido com sucesso'))
        }catch(e) {
            dispatch(Creators.removeAnimalError('Erro ao remover animal'))
        }
    }
}