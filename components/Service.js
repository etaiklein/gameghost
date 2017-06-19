import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export class Service extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    price: PropTypes.string,
    children: PropTypes.node.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }

  renderHighlights() {
    const style = {
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
      color: "white",
      fontSize: "16px",
      lineHeight: "28px",
    };
    const highlights = [];
    for (const highlight of this.props.highlights){
      highlights.push(<li style={style}>{highlight}</li>)
    }
    return highlights;
  }

  render() {
    const styles = {
      service: {
        border: "1px solid black",
        minWidth: "400px",
        width: "400px",
        maxWidth: "400px",
        overflow: "hidden",
        margin: "20px",
        flex: 1,
        flexDirection: "column",
      },
      topBlock: {
        height: "312px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backgroundImage: `url(${this.props.imgSrc})`,
      },
      topBlockText: {
        position: "absolute",
        height: "100%",
        width: "100%",
        padding: "80px 0",
        textAlign: "center",
        fontSize: "60px",
        lineHeight: "normal",
        textTransform: "uppercase",
        fontFamily: "'GothamBold',sans-serif",
        color: "#fff",
        textShadow: "3px 4px 30px black",
        background: "rgba(0, 0, 0, 0.5)",
      },
      text: {
        fontSize: "16px",
        lineHeight: "28px",
      },
      price: {
        fontSize: "20px",
        marginBottom: "7px",
        textTransform: "lowercase",
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: "20px",
        marginBottom: "7px",
        textTransform: "lowercase",
        fontWeight: "bold",
        color: "black",
      },
      bottomBlock: {
        padding: "25px"
      },
      highlights: {
        margin: "15px 0",
        background: "Black",
        padding: "20px 25px 5px",

      },
      highlightText: {
        marginBottom: "7px", 
        color: "white"
      },
      highlightItem: {
        color: "white",
      },
      list: {
        marginBottom: 0
      }
    };

    return (
      <div style={styles.service}>
        <div style={styles.topBlock}>
          <div style={styles.topBlockText}>
            {this.props.title}
            {!!this.props.price && <div style={styles.price}>{this.props.price}</div>}
          </div>
        </div>
        <div style={styles.bottomBlock}>
          {!!this.props.subtitle && <div style={styles.subtitle}>{this.props.subtitle}</div>}
          <div style={styles.text}>
            {this.props.children}
          </div>
          <div style={styles.highlights}>
            <h5 style={styles.highlightText}>HIGHLIGHTS</h5>
            <ul style={styles.list}>
              {this.renderHighlights()}
            </ul>
          </div>
          <Link style={{marginTop: "20px"}} to={prefixLink('/contact/')}>Book Now >></Link>
        </div>
      </div>
    )
  }
}


export class ServicesContainer extends React.Component {
  
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