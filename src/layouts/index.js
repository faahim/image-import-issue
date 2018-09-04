import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/app.scss'

const Layout = ({ children, data }) => (
  <div className="app_root">
    <Helmet
      title="Gimme Image"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.object,
  }).isRequired,
}

export default Layout