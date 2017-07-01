import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: rhythm(1),
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1280,
              padding: `${rhythm(3/4)} ${rhythm(3 / 4)} 0`,
            }}
          >
            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between"}}>
              <h5 style={{ margin: 0 }}>
                <Link
                  to={prefixLink("/")}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  GameGhost
                </Link>
              </h5>
              <h5 style={{display: "flex", flexFlow: "row wrap", justifyContent: "flex-end"}}>
                <Link
                  to={prefixLink("/services/")}
                  style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  services
                </Link>
                <Link
                  to={prefixLink("/contact/")}
                  style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  contact
                </Link>
                <Link
                  to={prefixLink("/about/")}
                  style={{
                    color: "white",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  about
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1280,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
