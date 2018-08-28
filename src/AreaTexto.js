import React, { Component } from 'react';
import Botao from './Botao';
class AreaTexto extends Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-2">
            
            <input name="nome" className="form-control" type="text" placeholder="Digite o Nome" />
              </div>
              <div className="col-md-3">
              <input name="email" className="form-control"  type="text" placeholder="Digite o E-mail " />
              </div>
              <div className="col-md-3">
              <input name="cpf" className="form-control"  type="text" placeholder="Digite o CPF" />
              </div>
              <div className="col-md-3">
              <input name="telefone" className="form-control"  type="text" placeholder="Digite o Telefone" />
              </div>
              <div className="col-md-1">
             <Botao/>
              </div>
        </div>
       
            <div >
    
           

            </div>
          </div>
        )
    }
}

export default AreaTexto