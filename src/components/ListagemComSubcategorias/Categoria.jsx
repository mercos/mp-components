import React from 'react'
import OpcoesCategoria from './OpcoesCategoria.jsx'
import styles from './Categoria.scss'

export default class Categoria extends React.Component {

  constructor(props) {
    super(props)

    this.state = { exibirOpcoes: false }

    this.handlerMouseOver = () => this.exibirOpcoesCategoria()
    this.handlerMouseOut = () => this.esconderOpcoesCategoria()
  }

  exibirOpcoesCategoria() {
    this.setState({ exibirOpcoes: true })
  }

  esconderOpcoesCategoria() {
    this.setState({ exibirOpcoes: false })
  }

  obterSubcategoria(nivelAtual) {
    return this.props.subCategorias.map((subcategoria) =>
      <Categoria
        key={subcategoria.id}
        nome={subcategoria.nome}
        nivel={nivelAtual + 1}
        subCategorias={subcategoria.subcategorias}
      />
    )
  }

  render() {
    let categoriaStyle = styles.categoriaNivel1
    if (this.props.nivel === 2) {
      categoriaStyle = styles.categoriaNivel2
    } else if (this.props.nivel >= 3) {
      categoriaStyle = styles.categoriaNivel3
    }

    return (
      <div className={styles.categoriaContainer}>
        <div
          className={categoriaStyle}
          onMouseOver={this.handlerMouseOver}
          onMouseOut={this.handlerMouseOut}
        >
          <span className={styles.labelCategoria}>{this.props.nome}</span>
          <OpcoesCategoria exibir={this.state.exibirOpcoes} />
        </div>
        {this.obterSubcategoria(this.props.nivel)}
      </div>
    )
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
