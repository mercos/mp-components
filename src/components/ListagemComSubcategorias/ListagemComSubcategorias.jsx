import React from 'react'
import Categoria from './Categoria.jsx'

export default class ListagemComSubcategorias extends React.Component {
  render() {
    return (
      <div>
        {this.props.categorias.map(categoria =>
          <Categoria
            key={categoria.id}
            nome={categoria.nome}
            nivel={categoria.nivel}
            subCategorias={categoria.subcategorias}
          />
        )}
      </div>
    )
  }
}

ListagemComSubcategorias.defaultProps = {
  categorias: [],
}

ListagemComSubcategorias.propTypes = {
  categorias: React.PropTypes.array,
}
