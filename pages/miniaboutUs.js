import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import {baseValLarge, MiniItem, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
          <Link to={prefixLink("/about/")}>
              About GameGhost
          </Link>
        </h1>
        <p>GameGhost brings roleplaying games, interactive storytelling, and other non-digital games to your home. 
        We provide an experienced host who will guide your guests through the gameplay experience. 
        <br/> <br/>
        You host the party: we'll host the game</p>
      </div>
    )
  }
}
