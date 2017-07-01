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
    minWidth: `${28 * baseval}px`,
    width: `${28 * baseval}px`,
    maxWidth: `${28 * baseval}px`,
    overflow: "hidden",
    margin: `${2 * baseval}px`,
    flex: 1,
    flexDirection: "column",
  },
  topBlock: {
    height: `${22 * baseval}px`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    backgroundImage: `url(${imgSrc})`,
  },
  topBlockText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: `15% 0`,
    textAlign: "center",
    fontSize: `${4 * baseval}px`,
    lineHeight: "normal",
    textTransform: "uppercase",
    fontFamily: "'GothamBold',sans-serif",
    color: "#fff",
    textShadow: `3px 4px 30px black`,
    background: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: `${2 * baseval}px`,
    lineHeight: `${3.5 * baseval}px`,
  },
  price: {
    fontSize: `${2 * baseval}px`,
    marginBottom: `${baseval}px`,
    textTransform: "lowercase",
    fontWeight: "bold",
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

export class Service extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    price: PropTypes.string,
    children: PropTypes.node.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    containerStyle: PropTypes.object,
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
    const container = {...styl.container, ...this.props.containerStyle};
    return (
      <div style={container}>
        <div style={styl.service}>
          <div style={styl.topBlock}>
            <div style={styl.topBlockText}>
              {this.props.title}
              {!!this.props.price && <div style={styl.price}>{this.props.price}</div>}
            </div>
          </div>
          <div style={styl.bottomBlock}>
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <div style={styl.text}>
              {this.props.children}
            </div>
            <div style={styl.highlights}>
              <h5 style={styl.highlightText}>HIGHLIGHTS</h5>
              <ul style={styl.list}>
                {this.renderHighlights(styl.highlightStyle)}
              </ul>
            </div>
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Book Now >></Link>
          </div>
        </div>
      </div>
    )
  }
}


export class MiniService extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
  }

  render() {
    const styl = styles(9, this.props.imgSrc);

    return (
        <div style={styl.miniservice}>
          <Link to={prefixLink(this.props.link)}>
            <div style={styl.topBlock}>
              <div style={styl.topBlockText}>
                {this.props.title}
                {!!this.props.price && <div style={styl.price}>{this.props.price}</div>}
              </div>
            </div>
          </Link>
          <div style={styl.bottomBlock}>
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Book Now >></Link>
          </div>
        </div>
      )
    }
}

export class ServicesContainer extends React.Component {
    
  render() {
    let styles = {
      container: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }
    };

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}