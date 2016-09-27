import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './ProductImage.scss'

const ProductImage = ({ imageURL, isHorizontal }) => {
  const responsiveClasses = (isHorizontal) ? styles.smallImageContainer : ''

  const getImageTag = (url) => {
    let imageTag = <span>Sem foto</span>
    if (url) {
      imageTag = <img src={url} className={styles.productImage} alt="dica do conteúdo" />
    }
    return imageTag
  }

  return (
    <div className={cx(styles.productImageContainer, responsiveClasses)}>
      {getImageTag(imageURL)}
    </div>
  )
}

ProductImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  isHorizontal: PropTypes.boolean,
}

export default ProductImage
