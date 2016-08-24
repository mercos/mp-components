import React from 'react'
import styles from './OpcoesCategoria.scss'

export default class OpcoesCategoria extends React.Component {

  render() {
    const visibilidade = this.props.exibir ? 'visible' : 'hidden'

    return (
      <span className={styles.opcoesWrapper} style={{ visibility: visibilidade }}>
        <span className={styles.opcao}>
          <span className={styles.label}>Criar subcategoria</span>
        </span>

        <span className={styles.opcao}>
          <span className={styles.label}>Editar</span>
        </span>

        <span className={styles.opcaoExcluir}>
          <span className={styles.label}>Excluir</span>
        </span>
      </span>
    )
  }
}

OpcoesCategoria.propTypes = {
  exibir: React.PropTypes.bool,
}
