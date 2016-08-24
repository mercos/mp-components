import React from 'react'
import styles from './OpcoesCategoria.scss'

export default class OpcoesCategoria extends React.Component {

  render() {
    const visibilidade = this.props.exibir ? 'visible' : 'hidden'

    return (
      <span className={styles.opcoesWrapper} style={{ visibility: visibilidade }}>
        <span className={styles.criar}>
          Criar subcategoria
        </span>

        <span className={styles.editar}>
          Editar
        </span>

        <span className={styles.excluir}>
          Excluir
        </span>
      </span>
    )
  }
}

OpcoesCategoria.propTypes = {
  exibir: React.PropTypes.bool,
}
