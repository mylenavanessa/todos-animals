import React, { Component } from 'react';
import * as dispatchers from '../redux/Dispatchers'
import { connect } from 'react-redux'

class Animals extends Component {
  state ={
    name: '',
    species: '',
    weight: '',
    age: '',
    edit: null
  }

  componentDidMount() {
    const { dispatchFetchAnimals } = this.props
    dispatchFetchAnimals()
  }

  async addAnimal (){
    const { dispatchAddAnimal, dispatchFetchAnimals, dispatchEditAnimal } = this.props
    const { name, species, weight, age, edit } = this.state
    if(edit){
      await dispatchEditAnimal({ ...edit, name, species, weight, age })
      dispatchFetchAnimals()
      this.setState({
        name: '',
        species: '',
        weight: '',
        age: '',
        edit: null
      })
    }else{
      await dispatchAddAnimal({ name, species, weight, age })
      dispatchFetchAnimals()
      this.setState({
        name: '',
        species: '',
        weight: '',
        age: '',
      })
    }
  }

  editAnimal(animal){
    this.setState({
      name: animal.name,
      species: animal.species,
      weight: animal.weight,
      age: animal.age,
      edit: animal
    })
  }

  async removeAnimal(id){
    const { dispatchRemoveAnimal, dispatchFetchAnimals } = this.props
    await dispatchRemoveAnimal(id)
    dispatchFetchAnimals()
  }

  render() {
    const { animals : { data }} = this.props
    const { name, species, weight, age, edit } = this.state
    return (
      <div>
        Nome: <input type="text" style={{marginRight: 20}} onChange={(e) => this.setState({name: e.target.value})} value={name} />
        Especie: <input type= "text" style={{marginRight: 20}} onChange={(e) => this.setState({species: e.target.value})} value={species} />  
        Peso: <input type="number" style={{marginRight: 20}} onChange={(e) => this.setState({weight: e.target.value})} value={weight}/>
        idade: <input type= "number" onChange={(e) => this.setState({age: e.target.value})} value={age} />
        <button style={{marginLeft: 40}} onClick={ () => this.addAnimal()}>{edit? 'Edit' : 'ADD'}</button>
        <table border= '1' style={{ marginTop: '30px'}}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especie</th>
              <th>Peso</th>
              <th>idade</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => 
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.species}</td>
                  <td>{item.weight}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => this.editAnimal(item)}>Edit</button>
                    <button onClick={() => this.removeAnimal(item.id)}>Remove</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animals : state.animals
})

const mapDispatchToProps = {
  ...dispatchers
}

export default connect(mapStateToProps, mapDispatchToProps)(Animals)
