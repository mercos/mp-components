import React from 'react'
import OpcoesCategoria from './OpcoesCategoria.jsx'

export default class Categoria extends React.Component {

    constructor(props) {
        super(props)

        this.state = {exibirOpcoes: false}

        this.handlerMouseOver = () => this.exibirOpcoesCategoria()
        this.handlerMouseOut = () => this.esconderOpcoesCategoria()
    }

    exibirOpcoesCategoria() {
        this.setState({exibirOpcoes: true})
    }

    esconderOpcoesCategoria() {
        this.setState({exibirOpcoes: false})
    }

    obterSubcategoria(nivelAtual) {
        return this.props.subCategorias.map((subcategoria) => {
            return (
                <Categoria
                    key={subcategoria.id}
                    nome={subcategoria.nome}
                    nivel={nivelAtual + 1}
                    subCategorias={subcategoria.subcategorias}
                />
            )
        })
    }

    render() {
        let classeCategoria = `categoria-nivel-${this.props.nivel}`
        return (
            <div className={classeCategoria}>
                <div onMouseOver={this.handlerMouseOver} onMouseOut={this.handlerMouseOut}>
                    <span>{this.props.nome}</span>
                    <span>{this.props.nivel}</span>
                    <OpcoesCategoria exibir={this.state.exibirOpcoes}/>
                </div>
                {this.obterSubcategoria(this.props.nivel)}
            </div>
        )
    }

}

Categoria.defaultProps = {
    nome: '',
    nivel: 1,
    subCategorias: []
}

Categoria.propTypes = {
    nome: React.PropTypes.string,
    nivel: React.PropTypes.number,
    subCategorias: React.PropTypes.array
}
