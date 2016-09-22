import React, { PropTypes } from 'react'
import styles from './ProductImage.scss'

const ProductImage = ({ imageURL }) => {
  const obterImageTag = (url) => {
    let imageTag = <span>Sem foto</span>
    if (url) {
      imageTag = <img src={url} className={styles.productImage} alt="dica do conteúdo" />
    }
    return imageTag
  }

  return (
    <div className={styles.productImageContainer}>
      {obterImageTag(imageURL)}
    </div>
  )
}

ProductImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
}

export default ProductImage
