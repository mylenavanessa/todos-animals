import { Creators } from './Duck'
import api from '../services/api'

export function dispatchFetchAnimals() {
    return async dispatch => {
        dispatch(Creators.fetchAnimals())
        try {
            const { data: animals } = await api.get('/animals')
            dispatch(Creators.fetchAnimalsSuccess(animals, 'Busca feita com sucesso'))
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
            dispatch(Creators.addAnimalSuccess('Animal adicionado com sucesso'))
        }catch(e) {
            dispatch(Creators.addAnimalError('Não foi possivel adicionar animal'))
        }
    }
}

export function dispatchEditAnimal(animal) {
    return async dispatch => {
        dispatch(Creators.editAnimal())
        try {
            await api.put(`/animals/${animal.id}`, animal)
            dispatch(Creators.editAnimalSuccess('Animal editado com sucesso'))
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
            dispatch(Creators.removeAnimalSuccess('Animal removido com sucesso'))
        }catch(e) {
            dispatch(Creators.removeAnimalError('Erro ao remover animal'))
        }
    }
}