import React from 'react'
import styles from './OpcoesCategoria.scss'

export default class OpcoesCategoria extends React.Component {

  render() {
    const visibilidade = this.props.exibir ? 'visible' : 'hidden'

    return (
      <span className={styles.opcoesWrapper} style={{ visibility: visibilidade }}>
        <span className={styles.opcao}>
          <span onClick={this.props.handlerCriar} className={styles.label}>Criar subcategoria</span>
        </span>

        <span className={styles.opcao}>
          <span onClick={this.props.handlerEditar} className={styles.label}>Editar</span>
        </span>

        <span className={styles.opcaoExcluir}>
          <span onClick={this.props.handlerExcluir} className={styles.label}>Excluir</span>
        </span>
      </span>
    )
  }
}

OpcoesCategoria.propTypes = {
  exibir: React.PropTypes.bool,
  handlerCriar: React.PropTypes.func,
  handlerEditar: React.PropTypes.func,
  handlerExcluir: React.PropTypes.func,
}
