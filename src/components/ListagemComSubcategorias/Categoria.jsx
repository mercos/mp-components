import React from 'react'
import OpcoesCategoria from './OpcoesCategoria.jsx'
import InlineAlert from '../InlineAlert'
import styles from './Categoria.scss'

export default class Categoria extends React.Component {

  constructor(props) {
    super(props)

    this.state = { exibirOpcoes: false, excluindoLinha: false }

    this.handlerMouseOver = () => this.exibirOpcoesCategoria()
    this.handlerMouseOut = () => this.esconderOpcoesCategoria()
    this.handleCriar = () => this.handlerCriar()
    this.handleEditar = () => this.handlerEditar()
    this.handleExcluir = () => this.handlerExcluir()
    this.handleConfirmarExclusao = () => this.handlerConfirmarExclusao()
    this.handleCancelarExclusao = () => this.handlerCancelarExclusao()
  }

  render() {
    return (
      <div className={styles.categoriaContainer}>
        {this.obterLinha()}
        {this.obterSubcategorias(this.props.nivel)}
      </div>
    )
  }

  exibirOpcoesCategoria() {
    this.setState({ exibirOpcoes: true })
  }

  esconderOpcoesCategoria() {
    this.setState({ exibirOpcoes: false })
  }

  obterLinha() {
    if (this.state.excluindoLinha === true) {
      return (
        <InlineAlert context="error">
          <span>
            Tem certeza que deseja excluir '{this.props.nome}'? <a href="">SIM</a> | <a href="">NÃO</a>
          </span>
        </InlineAlert>
      )
    }
    let categoriaStyle = styles[`categoriaNivel${this.props.nivel}`]
    return (
      <div
        className={categoriaStyle}
        onMouseOver={this.handlerMouseOver}
        onMouseOut={this.handlerMouseOut}
      >
        <span className={styles.labelCategoria}>{this.props.nome}</span>
        <OpcoesCategoria
          handlerCriar={this.handleCriar}
          handlerEditar={this.handleEditar}
          handlerExcluir={this.handleExcluir}
          exibir={this.state.exibirOpcoes}
        />
      </div>
    )
  }

  obterSubcategorias(nivelAtual) {
    return this.props.subCategorias.map((subcategoria) =>
      <Categoria
        key={subcategoria.id}
        nome={subcategoria.nome}
        nivel={nivelAtual + 1}
        subCategorias={subcategoria.subcategorias}
      />
    )
  }

  handlerCriar() {
    console.log('Criou')
  }

  handlerEditar() {
    console.log('Editou')
  }

  handlerExcluir() {
    this.setState(
      { excluindoLinha: true }
    )
  }

  handlerConfirmarExclusao() {
    this.setState(
      { excluindoLinha: false }
    )

    console.log('Excluiu linha')
  }

  handlerCancelarExclusao() {
    this.setState(
      { excluindoLinha: false }
    )

    console.log('Cancelou exclusão da linha')
  }

}

Categoria.defaultProps = {
  nome: '',
  nivel: 1,
  subCategorias: [],
}

Categoria.propTypes = {
  nome: React.PropTypes.string,
  nivel: React.PropTypes.number,
  subCategorias: React.PropTypes.array,
}
