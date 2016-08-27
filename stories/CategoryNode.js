import React, { Component } from 'react'
import {storiesOf} from '@kadira/storybook'
import CategoryNode from '../src/components/CategoryNode'

const SOME_SERVER_DATA = [
  {
    id: 1,
    nome: 'Smartphones',
    subcategorias: [
      { id: 2,
        nome: 'Apple',
        subcategorias: [
          { id: 3, nome: 'iPhone 6S' }
        ]
      },
      { id: 4,
        nome: 'Samsung',
        subcategorias: [
          { id: 6, nome: 'Galaxy 7' }
        ]
      }
    ]
  },
  { id: 5, nome: 'Laptops' }
]

class NestedCategoryNodesExample extends Component {
  render() {
    return (
      <div>{this.getCategories([], this.props.categories, 1)}</div>
    )
  }

  getCategories(categoriesOutput, categoriesInput, level) {
    categoriesInput.forEach(category => {
      categoriesOutput.push(this.getComponentFromData(category, level))

      if('subcategorias' in category && level < 3 && category.subcategorias.length > 0)
        this.getCategories(categoriesOutput, category.subcategorias, level + 1)
    })

    return categoriesOutput
  }

  getComponentFromData(category, level){
    return (
      <CategoryNode name={category.nome} level={level} key={category.id} />
    )
  }
}

storiesOf('CategoryNode', module)

  .add('single node', () => (
    <CategoryNode name="Root Node" level={1} />
  ))

  .add('nested', () => (
    <NestedCategoryNodesExample categories={SOME_SERVER_DATA} />
  ))
