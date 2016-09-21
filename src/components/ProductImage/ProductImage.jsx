import React, { PropTypes } from 'react'
import styles from './ProductImage.scss'

const ProductImage = ({ imageURL }) => {

  let imageTag = <span>Sem foto</span>
  if (imageURL) {
    imageTag = <img src={imageURL} alt="dica do conteúdo" />
  }

  return (
    <div className={styles.productImageContainer}>
      {imageTag}
    </div>
  )
}

ProductImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
}

export default ProductImage
