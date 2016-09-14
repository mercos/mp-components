import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './VerticalCard.scss'

const VerticalCard = (props) => {
  const classes = cx(
    props.className,
    styles.verticalCard
  )

  return (
    <div
      {...props}
      className={classes}
    >
      <div className={styles.topContent}>{props.topContent}</div>
      <div className={styles.bottomContent}>{props.bottomContent}</div>
    </div>
  )
}

VerticalCard.propTypes = {
  topContent: PropTypes.any.isRequired,
  bottomContent: PropTypes.any.isRequired,
}

export default VerticalCard
