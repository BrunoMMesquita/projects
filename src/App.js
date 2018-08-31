import React, { Component } from 'react';
import './App.css';


import Botao from './Botao';
class App extends Component {
  constructor() {
    super();
    this.state = {
      htmlTitle: "Cadastro de usuarios",
      usuarios: [],
      key: ""

    };

  }

  _adicionarUsuario(form) {
    form.preventDefault();
    let usuarios = this.state.usuarios;
    let key = this.state.key;
    var messager = "";
    if (key == "" && key != "0"){
      usuarios.push({ nome: form.target[0].value, email: form.target[1].value, cpf: form.target[2].value, telefone: form.target[3].value })
      messager = "Incluido com sucesso";
    }
    else{
      usuarios[key].nome = form.target[0].value;
      usuarios[key].email = form.target[1].value;
      usuarios[key].cpf = form.target[2].value;
      usuarios[key].telefone = form.target[3].value;
      console.log(usuarios);
      key = "";
      messager = "Alterado com sucesso";
    }
    
    this.setState({
      usuarios:usuarios,
      key: key
    });

    console.log(this.state);

    alert(messager);

    document.getElementById('formCadastro').reset();

  }

  _ExcluirUsuario(key){
    console.log(key);
    let usuario = this.state.usuarios;
    usuario.splice(key, 1);
    this.setState({usuarios:usuario});
  }

_getData(nome, cpf, email, telefone, key){
  document.getElementById("txtNome").value = nome;
  document.getElementById("txtEmail").value = email;
  document.getElementById("txtCpf").value = cpf;
  document.getElementById("txtTelefone").value = telefone;
  this.state.key = key;
  this.setState({
    key:key
  });
}

  render() {
    return (
      <div className="App">
      <h1>{this.state.htmlTitle}</h1>
        <form id="formCadastro" onSubmit={this._adicionarUsuario.bind(this)}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
            
            <input name="nome" id="txtNome" className="form-control" type="text" placeholder="Digite o Nome" required />
              </div>
              <div className="col-md-3">
              <input name="email" id="txtEmail" className="form-control"  type="text" placeholder="Digite o E-mail " required />
              </div>
              <div className="col-md-3">
              <input name="cpf" id="txtCpf" className="form-control"  type="text" placeholder="Digite o CPF" required />
              </div>
              <div className="col-md-3">
              <input name="telefone" id="txtTelefone" className="form-control"  type="text" placeholder="Digite o Telefone" required />
              </div>
              <div className="col-md-1">
             <Botao/>
              </div>
        </div>
       
            <div >
    
           

            </div>
          </div>
        </form>
      
      <div className="content">
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
                <td><a href="#" onClick={() => this._ExcluirUsuario(key)}>Excluir</a> </td>
               <td><a href="#" onClick={() => this._getData(usuario.nome, usuario.cpf, usuario.email, usuario.telefone, key)}  >Editar</a></td> 
               
              </tr>
         
            )
          })
          }
    </tbody>
      
        </table>
      </div>
 
      </div>


    );
  }
}

export default App;
