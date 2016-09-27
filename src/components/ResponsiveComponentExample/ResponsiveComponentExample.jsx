import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { applyContainerQuery } from 'react-container-query/dist/react-container-query.min'
import styles from './ResponsiveComponentExample.scss'

class ResponsiveComponentExampleBase extends Component {
  render() {
    return (
      <div style={{ width: this.props.width }}>
        <div className={classnames(styles.box, this.props.containerQuery)}>the box</div>
      </div>
    );
  }
}

ResponsiveComponentExampleBase.propTypes = {
  containerQuery: PropTypes.object,
  width: PropTypes.number,
}

const query = {}

query[styles.boxSm] = {
  minWidth: 320,
  maxWidth: 599,
}

query[styles.boxMd] = {
  minWidth: 600,
  maxWidth: 1023,
}

query[styles.boxLg] = {
  minWidth: 1024,
}

const ResponsiveComponentExample = applyContainerQuery(ResponsiveComponentExampleBase, query)

export default ResponsiveComponentExample
