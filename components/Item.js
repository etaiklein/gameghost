import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Highlight from './Highlight'

export const baseValLarge = 14;
export const baseValSmall = 8;

const styles = function(baseval, imgSrc, tall){ return {
  container: {
    minWidth: `${17 * baseval}px`,
    maxWidth: `${34 * baseval}px`,
    margin: `${baseval}px 0`,
    overflow: "hidden",
    verticalAlign: "top",
  },
  item: {
    border: "1px solid black",
  },
  miniContainer: {
    border: "1px solid black",
    minWidth: `${30 * baseval}px`,
    width: `${30 * baseval}px`,
    maxWidth: `${30 * baseval}px`,
    overflow: "hidden",
    margin: `${2 * baseval}px`,
    display: "inline-block",
    textAlign: "left",
  },
  topBlock: {
    height: `${(tall ? 30 : 20) * baseval}px`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "relative",
    backgroundImage: `url(${imgSrc})`,
  },
  topBlockText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    paddingTop: `${6 * baseval}px`,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "'GothamBold',sans-serif",
    color: "#fff",
    textShadow: `3px 4px 30px black`,
    background: "rgba(0, 0, 0, 0.5)",
  },
  text: {},
  price: {
    marginBottom: `${baseval}px`,
    textTransform: "lowercase",
    fontWeight: "bold",
  },
  title: {
    textTransform: "uppercase",
    fontSize: `${2.8 * baseval}px`,
    lineHeight: `${3.2 * baseval}px`,
    margin: `0 ${baseval}px`,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: `${2.5 * baseval}px`,
    textTransform: "lowercase",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    backgroundColor: "lightgray",
    padding: `${baseval}px`
  },
  bottomBlock: {
    padding: `${2 * baseval}px`,
    backgroundColor: "white",
  },
  prefix: {
    marginTop: `${3 * baseval}px`,
  },
  name: {
    textAlign: "center",
    margin: `0 ${baseval}px ${baseval * 2}px`,
  }
}};

export class Item extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    itemStyle: PropTypes.object,
    baseval: PropTypes.number,
    tall: PropTypes.bool,
  }

  static defaultProps = {
    baseval: baseValLarge
  }

  render() {
    const styl = styles(this.props.baseval, this.props.imgSrc, this.props.tall);
    const container = {...styl.container, ...this.props.itemStyle};

    return (
      <div style={container}>
        <div style={styl.item}>
          <div style={styl.topBlock}>
            {(!!this.props.title || !!this.props.price) && 
              <div style={styl.topBlockText}>
                {!!this.props.title && <div style={styl.title}>{this.props.title}</div>}
                {!!this.props.price && <div style={styl.price}>{this.props.price}</div>}
              </div>
            }
          </div>
          <div style={styl.bottomBlock}>
            {!!this.props.name && <h2 style={styl.name}> {this.props.name} </h2>}
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <div style={styl.text}>
              {this.props.children}
            </div>
            {this.props.highlights && <Highlight highlights={this.props.highlights} />}
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Book Now >></Link>
          </div>
        </div>
      </div>
    )
  }
}


export class MiniItem extends React.Component {
  
  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
    baseval: PropTypes.number,
    tall: PropTypes.bool,
  }

  static defaultProps = {
    baseval: baseValSmall
  }

  render() {
    const styl = styles(this.props.baseval, this.props.imgSrc, this.props.tall);

    return (
        <div style={styl.miniContainer}>
          <Link to={prefixLink(this.props.link)}>
          <div style={styl.topBlock}>
            {(!!this.props.title || !!this.props.price) && 
              <div style={styl.topBlockText}>
                {!!this.props.title && <div style={styl.title}>{this.props.title}</div>}
                {!!this.props.price && <div style={styl.price}>{this.props.price}</div>}
              </div>
            }
          </div>
          </Link>
          <div style={styl.bottomBlock}>
            {!!this.props.name && <h2 style={styl.name}> {this.props.name} </h2>}
            {!!this.props.subtitle && <div style={styl.subtitle}>{this.props.subtitle}</div>}
            <Link style={styl.prefix} to={prefixLink('/contact/')}>Book Now >></Link>
          </div>
        </div>
      )
    }
}

export class ItemsContainer extends React.Component {
    
  render() {
    let styles = {
      container: {
        textAlign: "center",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
      }
    };

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}