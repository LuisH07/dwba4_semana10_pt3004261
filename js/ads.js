class Tabela extends React.Component{
  constructor(props){
    super(props)
    this.texto={
       disciplina:"Sistemas Operacionais", disciplina2:"Inglês", disciplina3:"Laboratório de Estruturas de Dados e Programação", disciplina4:"Introdução a Banco de Dados", carga:"66.7",carga2:"33.3", periodo:"Noturno"
    }
  }

  render(){
    return(
      <div>
        <h2> Componentes Curriculares </h2>
        <table id = "componentes">
          <tbody>
            <tr id = "header">
              <th><strong>DISCIPLINA</strong></th>
              <th><strong>CARGA</strong></th>
              <th><strong>PERIODO</strong></th>
            </tr>
            <tr id = "l1">
              <td>{this.texto.disciplina}</td>
              <td>{this.texto.carga}</td>
              <td>{this.texto.periodo}</td>
            </tr>
            <tr id = "l2">
              <td>{this.texto.disciplina2}</td>
              <td>{this.texto.carga2}</td>
              <td>{this.texto.periodo}</td>
            </tr>
            <tr id = "l3">
              <td>{this.texto.disciplina3}</td>
              <td>{this.texto.carga2}</td>
              <td>{this.texto.periodo}</td>
            </tr>
            <tr id = "l4">
              <td>{this.texto.disciplina4}</td>
              <td>{this.texto.carga}</td>
              <td>{this.texto.periodo}</td>
            </tr>
          </tbody>
        </table>
      </div>);
  } 
}

ReactDOM.render(<Tabela />, document.getElementById('tabela'));