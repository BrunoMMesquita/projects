import React, { Component } from 'react';
import './App.css';


import AreaTexto from './AreaTexto';
class App extends Component {
  constructor() {
    super();
    this.state = {
      htmlTitle: "Cadastro de usuarios",
      usuarios: [],

    };

  }

  _adicionarUsuario(form) {
    form.preventDefault();
    let usuarios = this.state.usuarios;
    usuarios.push({ nome: form.target[0].value, email: form.target[1].value, cpf: form.target[2].value, telefone: form.target[3].value })
    this.setState({
      usuarios:usuarios
    });

    console.log(this.state);

  }

  _ExcluirUsuario(key){
    console.log(key);
    let usuario = this.state.usuarios;
    usuario.splice(key, 1);
    this.setState({usuarios:usuario});
  }

  render() {
    return (
      <div className="App">
      <h1>{this.state.htmlTitle}</h1>
        <form id="formCadastro" onSubmit={this._adicionarUsuario.bind(this)}>
          <AreaTexto/>
        </form>
      
        <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>cpf</th>
            <th>telefone</th>
            <th>Ações</th>
    
          </tr>
          </thead>
          <tbody>
          {this.state.usuarios.map( (usuario, key) => {
            return(
              
                <tr key={key}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.cpf}</td>
                <td>{usuario.telefone}</td>
                <td><a href="#" onClick={() => this._ExcluirUsuario(key)}>X</a></td>
              </tr>
         
            )
          })
          }
    </tbody>
      
        </table>
      </div>


    );
  }
}

export default App;
