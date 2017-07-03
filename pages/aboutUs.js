import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Highlight from '../components/highlight'
import {baseValLarge} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
          <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
            About GameGhost
          </h1>
        <p>
        We specialize in&nbsp;
        <a href={"https://en.wikipedia.org/wiki/Tabletop_role-playing_game"}>roleplaying games</a>
        ,&nbsp;
        <a href={"https://en.wikipedia.org/wiki/Storytelling_game"}>storytelling games</a>
        , and
        <a href={"https://en.wikipedia.org/wiki/Murder_mystery_game"}> other </a>
        &nbsp;
        <a href={"https://en.wikipedia.org/wiki/Tabletop_game"}>non-digital</a>
        &nbsp;
        <a href={"https://en.wikipedia.org/wiki/Board_game"}>games</a>
        &nbsp;for anyone from beginners to experienced gamers.
        <br/> <br/> 
        <Highlight altText="We provide:" highlights={[
          "A range of non-digital games to choose from",
          "All supplies you’ll need to pick up and play",
          "An experienced game host to guide your guests",
          "Surprises, suspense, drama, and delight",
        ]}/>
        <br/>
        You host the party: we’ll host the game.
        </p>
      </div>
    )
  }
}
