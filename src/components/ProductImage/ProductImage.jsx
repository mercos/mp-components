import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './ProductImage.scss'

const getImageTag = (url) => {
  let imageTag = <span>Sem foto</span>
  if (url) {
    imageTag = <img src={url} className={styles.productImage} alt="dica do conteúdo" />
  }
  return imageTag
}

const getStyle = (height, width) => {
  let style;

  if (height && width) {
    style = { width, height }
  } else if (height) {
    style = { height, width: 'none' }
  } else if (width) {
    style = { height: 'none', width }
  }

  return style
}

const ProductImage = ({ imageURL, isHorizontal, height, width }) => {
  const responsiveClasses = (isHorizontal) ? styles.smallImageContainer : ''

  return (
    <div className={cx(styles.productImageContainer, responsiveClasses)} style={getStyle(height, width)}>
      {getImageTag(imageURL)}
    </div>
  )
}

ProductImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  isHorizontal: PropTypes.boolean,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default ProductImage
