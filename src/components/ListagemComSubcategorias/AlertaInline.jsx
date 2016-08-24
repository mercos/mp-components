import React from 'react'

export default class AlertaInline extends React.Component {
  render() {
    return (
      <div>
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
