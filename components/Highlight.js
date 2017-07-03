import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import {baseValLarge} from '../components/Item'

export default class Highlights extends React.Component {
  
  static propTypes = {
    highlights: PropTypes.arrayOf(PropTypes.string),
    altText: PropTypes.string,
  }

  renderHighlights(style) {
    const highlights = [];
    for (const highlight of this.props.highlights){
      highlights.push(<li style={style}>{highlight}</li>)
    }
    return highlights;
  }

  render() {
    const styles = {
      highlights: {
        margin: `${1 * baseValLarge}px 0`,
        background: "Black",
        padding: `${2 *baseValLarge}px ${baseValLarge}px ${2 * baseValLarge}px 0`,
      },
      highlightText: {
        marginBottom: `${baseValLarge}px`, 
        color: "white",
        textAlign: "center",
      },
      highlightItem: {
        color: "white",
      },
      list: {
        marginBottom: 0
      },
      highlightStyle: {
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        color: "white",
        margin: `0 ${baseValLarge}px`, 
      },
    }

    return (
      <div style={styles.highlights}>
        <h4 style={styles.highlightText}>
          {this.props.altText ? this.props.altText : "HIGHLIGHTS"}
        </h4>
        <ul style={styles.list}>
          {this.renderHighlights(styles.highlightStyle)}
        </ul>
      </div>
    )
  }
}
