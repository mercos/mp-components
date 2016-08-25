import React from 'react'
import styles from './AlertaInline.scss'

export default class AlertaInline extends React.Component {
  render() {
    return (
      <div className={styles.linhaAlerta}>
        Deseja excluir?
        <span onClick={this.props.handleConfirmar}> Sim</span> | <span onClick={this.props.handleCancelar}>Não</span>
      </div>
    )
  }
}

AlertaInline.propTypes = {
  handleConfirmar: React.PropTypes.func,
  handleCancelar: React.PropTypes.func,
}
