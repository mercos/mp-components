import React from 'react'
import styles from './OpcoesCategoria.scss'

export default class OpcoesCategoria extends React.Component {

    render() {
        let visibilidade = this.props.exibir ? 'visible' : 'hidden'

        return (
            <span className={styles.opcoes} style={{visibility: visibilidade}}>OpcoesCategoria</span>
        )
    }
}
