import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './ProductImage.scss'

const ProductImage = ({ imageURL, isHorizontal }) => {
  const modoExibicao = () => {
    return (isHorizontal) ? styles.smallImageContainer : ''
  }

  const obterImageTag = (url) => {
    let imageTag = <span>Sem foto</span>
    if (url) {
      imageTag = <img src={url} className={styles.productImage} alt="dica do conteúdo" />
    }
    return imageTag
  }

  return (
    <div className={cx(styles.productImageContainer, modoExibicao())}>
      {obterImageTag(imageURL)}
    </div>
  )
}

ProductImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  isHorizontal: PropTypes.boolean,
}

export default ProductImage
