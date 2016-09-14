import React, { PropTypes } from 'react'
import cx from 'classnames'
import styles from './HorizontalCard.scss'

const HorizontalCard = (props) => {
  const classes = cx(
    props.className,
    styles.horizontalCard
  )

  return (
    <div
      {...props}
      className={classes}
    >
      <div className={styles.leftContent}>{props.leftContent}</div>
      <div className={styles.rightContent}>{props.rightContent}</div>
    </div>
  )
}

export default HorizontalCard
