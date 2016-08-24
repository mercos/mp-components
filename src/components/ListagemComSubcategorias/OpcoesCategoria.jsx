import React from 'react'

export default class OpcoesCategoria extends React.Component {

    render() {
        let visibilidade = this.props.exibir ? 'visible' : 'hidden'

        return (
            <span style={{visibility: visibilidade}}>OpcoesCategoria</span>
        )
    }
}
