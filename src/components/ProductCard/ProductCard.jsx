import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import classnames from 'classnames'
import { applyContainerQuery } from 'react-container-query'
import styles from './ProductCard.scss'
import ProductImage from '../ProductImage/ProductImage.jsx'
import ProductDescription from '../ProductDescription/ProductDescription.jsx'

class ProductCardBase extends Component {
  render() {
    return (
      <div className={cx(styles.productCardContainer, this.props.containerQuery)} style={{ width: this.props.width }}>
        <ProductImage imageURL={ this.props.imageURL }/>
        <ProductDescription name={ this.props.name } code={ this.props.code } unitOfMeasure={ this.props.unitOfMeasure }/>
      </div>
    )
  }
}

ProductCardBase.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  unitOfMeasure: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  width: PropTypes.number,
  containerQuery: PropTypes.object,
}

let query = {}

query[styles.productCardDesktop] = {
  minWidth: 320,
}

const ProductCard = applyContainerQuery(ProductCardBase, query)

export default ProductCard
