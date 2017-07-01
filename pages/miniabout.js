import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import {MiniItem, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          About GameGhost
        </h1>
        <p>GameGhost brings roleplaying games, interactive storytelling, and other non-digital games to your home. We provide an experienced host who will guide your guests through the gameplay experience. You host the party: we'll host the game</p>

        <h1>
          About our Game Masters
        </h1>
        <ItemsContainer>
          <MiniItem 
            imgSrc={require('assets/GameMasters/tai.png')}
            subtitle="Loves cartoons and comics. He once 3d-printed his own brain"
            name="Tai"
            link="/about/"
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/Sharang.jpg')}
            subtitle="published game designer, artist, and scientist"
            name="Sharang"
            link="/about/"
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/Chris2.jpg')}
            subtitle="hardcore gamer of all kinds. Magic the Gathering enthusiast"
            name="Chris"
            link="/about/"
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/Nick.jpg')}
            subtitle="theater nerd, board games, and beer. Gifted with gab."
            name="Nick"
            link="/about/"
          />
        </ItemsContainer>
      </div>
    )
  }
}
