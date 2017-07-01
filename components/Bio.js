import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const styles = function(baseval, imgSrc){ return {
  container: {
    minWidth: `${30 * baseval}px`,
    margin: `${2 * baseval}px`,
    overflow: "hidden",
    flex: 1,
    flexDirection: "column",
  },
  service: {
    border: "1px solid black",
  },
  miniservice: {
    border: "1px solid black",
    minWidth: `${30 * baseval}px`,
    width: `${30 * baseval}px`,
    maxWidth: `${30 * baseval}px`,
    overflow: "hidden",
    margin: `${2 * baseval}px`,
    flex: 1,
    flexDirection: "column",
  },
  topBlock: {
    height: `${30 * baseval}px`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
    backgroundImage: `url(${imgSrc})`,
  },
  subtitle: {
    fontSize: `${2 * baseval}px`,
    marginBottom: `${baseval}px`,
    textTransform: "lowercase",
    fontWeight: "bold",
    color: "black",
  },
  bottomBlock: {
    padding: `${3 * baseval}px`,
    backgroundColor: "white",
  },
  highlights: {
    margin: `${2 * baseval}px 0`,
    background: "Black",
    padding: `${2.5 * baseval}px ${3 * baseval}px ${baseval}px`,

  },
  highlightText: {
    marginBottom: `${baseval}px`, 
    color: "white"
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
    fontSize: `${2 * baseval}px`,
    lineHeight: `${3 * baseval}px`,
  },
  prefix: {
    marginTop: `${3 * baseval}px`
  }
}};

export class Bio extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    serviceStyle: PropTypes.object,
  }

  renderHighlights(style) {
    const highlights = [];
    for (const highlight of this.props.highlights){
      highlights.push(<li style={style}>{highlight}</li>)
    }
    return highlights;
  }


  render() {
    const styl = styles(14, this.props.imgSrc);
    const container = {...styl.container, ...this.props.serviceStyle};

    return (
      <div style={container}>
        <div style={styl.service}>
          <div style={styl.topBlock}>
          </div>
          <div style={styl.bottomBlock}>
            <h2> {this.props.name} </h2>
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <div style={styl.text}>
              {this.props.children}
            </div>
            {this.props.highlights && <div style={styl.highlights}>
              <h5 style={styl.highlightText}>HIGHLIGHTS</h5>
              <ul style={styl.list}>
                {this.renderHighlights(styl.highlightStyle)}
              </ul>
            </div>}
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Request this GM >></Link>
          </div>
        </div>
      </div>
    )
  }
}


export class MiniBio extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
  }

  render() {
    const styl = styles(8, this.props.imgSrc);

    return (
        <div style={styl.miniservice}>
          <Link to={prefixLink(this.props.link)}>
            <div style={styl.topBlock}>
            </div>
          </Link>
          <div style={styl.bottomBlock}>
            <h2> {this.props.name} </h2>
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Book Now >></Link>
          </div>
        </div>
      )
    }
}

export class BiosContainer extends React.Component {
    
  render() {
    const styles = {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "row wrap",
      }
    };

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}