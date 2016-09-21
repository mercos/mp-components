import React, { PropTypes } from 'react'
import styles from './Card.scss'

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Card
