import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import ListagemComSubcategoria from '../src/components/ListagemComSubcategorias/ListagemComSubcategorias.jsx'

const dadosDefault = [
    {id: 1, nome:'Categoria'},
    {id: 2, nome:'Categoria 2', subcategorias:[
        {id: 3, nome:'Subcategoria 2-1', subcategorias:[
            {id: 4, nome:'Subcategoria 2-1-1'}
        ]},
        {id: 5, nome:'Categoria 2-2'},
    ]}
]

const semSubcategorias = [
    {id: 1, nome:'Categoria'}
]

const rootCategoriasComSubcategoria = [
    {id: 1, nome:'Categoria', subcategorias:[
        {id: 2, nome:'Subcategoria 1'}
    ]}
]

const rootCategoriasCom2NiveisSubcategoria = [
    {id: 1, nome:'Categoria', subcategorias:[
        {id: 2, nome:'Subcategoria 1', subcategorias:[
            {id: 3, nome:'Subcategoria 1-1'}
        ]}
    ]}
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
