import React, { PropTypes } from 'react'
import styles from './ProductCard.scss'
import ProductImage from '../ProductImage/ProductImage.jsx'
import ProductDescription from '../ProductDescription/ProductDescription.jsx'

const ProductCard = ({ name, code, unitOfMeasure, imageURL }) => (
  <div className={styles.productCardContainer}>
    <ProductImage imageURL={imageURL} />
    <hr className={styles.divider} />
    <ProductDescription name={name} code={code} unitOfMeasure={unitOfMeasure} />
  </div>
)

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  unitOfMeasure: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default ProductCard
