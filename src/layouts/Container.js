import React from 'react'
import PropTypes from 'prop-types'

// Wrapper component with fixed width
const Container = ({ children, className, ...props }) => (
  <div className={`container ${className}`} {...props}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}

export default Container
