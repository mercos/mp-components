import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ListagemComSubcategoria from
  '../src/components/ListagemComSubcategorias/ListagemComSubcategorias.jsx'

const dadosDefault = [
  { id: 1, nome: 'Tablets' },
  {
    id: 2,
    nome: 'Smartphones',
    subcategorias: [
      { id: 3,
        nome: 'Apple',
        subcategorias: [
          { id: 4, nome: 'iPhone 6S' },
        ],
      },
      { id: 5, nome: 'Samsung' },
    ],
  },
]

const semSubcategorias = [{ id: 1, nome: 'Tablets' }]

const rootCategoriasComSubcategoria = [
  {
    id: 1,
    nome: 'Smartphones',
    subcategorias: [
      { id: 2, nome: 'Apple' },
    ],
  },
]

const rootCategoriasCom2NiveisSubcategoria = [
  {
    id: 1,
    nome: 'Smartphones',
    subcategorias: [
      {
        id: 2,
        nome: 'Apple',
        subcategorias: [
          { id: 3, nome: 'iPhone 6S' },
        ],
      },
    ],
  },
]

storiesOf('Listagem com subcategoria', module)
  .add('Default', () => (
    <ListagemComSubcategoria categorias={dadosDefault} />
  ))
  .add('Sem subcategorias', () => (
    <ListagemComSubcategoria categorias={semSubcategorias} />
  ))
  .add('Com um nível de subcategoria', () => (
    <ListagemComSubcategoria categorias={rootCategoriasComSubcategoria} />
  ))
  .add('Com dois níveis de subcategorias', () => (
    <ListagemComSubcategoria categorias={rootCategoriasCom2NiveisSubcategoria} />
  ))
