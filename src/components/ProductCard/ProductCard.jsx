import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { applyContainerQuery } from 'react-container-query/dist/react-container-query.min'
import styles from './ProductCard.scss'
import ProductImage from '../ProductImage/ProductImage.jsx'
import ProductDescription from '../ProductDescription/ProductDescription.jsx'

class ProductCardBase extends Component {
  render() {
    let isHorizontal = this.props.containerQuery[styles.productCardHorizontal]
    return (
      <div className={cx(styles.productCardContainer, this.props.containerQuery)} style={{ width: this.props.width }}>
        <ProductImage
          isHorizontal={ isHorizontal }
          imageURL={ this.props.imageURL }
        />
        <ProductDescription
          name={ this.props.name }
          code={ this.props.code }
          unitOfMeasure={ this.props.unitOfMeasure }
        />
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

const query = {}

query[styles.productCardHorizontal] = {
  minWidth: 320,
}

const ProductCard = applyContainerQuery(ProductCardBase, query)

export default ProductCard
