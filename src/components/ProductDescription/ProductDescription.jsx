import React, { PropTypes } from 'react'
import styles from './ProductDescription.scss'

const ProductDescription = ({ name, code, unitOfMeasure }) => {

  return (
    <div className={styles.productDescriptionContainer}>
      <p className={styles.normalText}>{name}</p>
      <p className={styles.mutedText}>{code}</p>
      <p className={styles.unidadeText}>{unitOfMeasure}</p>
    </div>
  )
}

ProductDescription.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  unitOfMeasure: PropTypes.string.isRequired,
}

export default ProductDescription
