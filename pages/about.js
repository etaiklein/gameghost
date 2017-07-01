import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import {Item, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: "lightgray", padding: "30px", marginBottom: "20px"}}>
          <h1>
            About GameGhost
          </h1>
          <p>
          GameGhost brings roleplaying games, 
          interactive storytelling, and other non-digital games to your home. 
          We provide all supplies you’ll need to play, 
          along with an experienced host who will guide your guests 
          through the gameplay experience. 
          You host the party: we’ll host the game.
          <br/> <br/> 
          Our team draws on experience in events management, 
          theatrical production, game design, and hospitality 
          to help make your game event a success. 
          <br/> <br/> 
          We specialize in running roleplaying games, 
          storytelling games, and other non-digital games 
          for anyone from beginners to experienced gamers.</p>
        </div>
        <div style={{backgroundColor: "lavender", padding: "30px"}}>
          <h1>
            About our Game Masters
          </h1>
          <ItemsContainer>
              <Item 
                itemStyle={{backgroundColor: "lightgray", padding: "30px"}}
                imgSrc={require('assets/GameMasters/tai.png')}
                subtitle="once 3d-printed his own brain"
                name="Tai"
                link="/contact/"
              >
                <p>Computer Programmer by day, Super Nerd by night. Tai is a lifelong lover of scifi, board games, and mythology. 
                <br/> <br/> He loves playing ukulele, eating spicy foods, and growing plants. He once 3d-printed his own brain.</p>
              </Item>
              <Item 
                itemStyle={{backgroundColor: "lightgray", padding: "30px"}}
                imgSrc={require('assets/GameMasters/Sharang.jpg')}
                subtitle="published game designer, writer and artist"
                name="Sharang"
                link="/contact/"
              >
                <p>
                  Sharang Biswas is a published game designer, writer and artist based in NYC. 
                  He has made games independently and at organisations such as the Metropolitan Museum of Art and Tiltfactor laboratory. 
                  His game criticism and analysis has appeared in publications such as ZAM and Kill Screen.

                  <br/> <br/> 
                  He is one of the two designers of Mad Science Foundation, and a contributor to Buffalo and Awkward Moment.
                  <br/> <br/> 
                  <Link to={"https://twitter.com/sharangbiswas"}>@SharangBiswas</Link>
                </p>
              </Item>
              <Item 
                imgSrc={require('assets/GameMasters/Chris2.jpg')}
                itemStyle={{backgroundColor: "lightgray", padding: "30px"}}
                subtitle="loves exploring new systems and building worlds"
                name="Chris"
                link="/contact/"
              > 
                <p>
                Chris loves exploring new systems and building worlds, characters, and mysteries for their players. They have worked extensively with Cthulhutech and Call of Cthulhu while having also worked with Dungeons and Dragons 5 edition, Apocalypse World, Mobile Frame Zero: Firebrands, and Fiasco. 
                <br/> <br/> 
                They enjoy working with all age groups.
                </p>
              </Item>
              <Item 
                imgSrc={require('assets/GameMasters/Nick.jpg')}
                itemStyle={{backgroundColor: "lightgray", padding: "30px"}}
                subtitle="directs and designs interactive experiences"
                name="Nick"
                link="/contact/"
              >
                <p>
                Nick has designed and developed live games and interactive experiences with 
                Tiltfactor Laboratory, including interventions designed to effect social change, 
                combat gender bias, and crowd source the organization of archival images for 
                public institutions.
                <br/> <br/> 
                Nick is also a director of theater and live events. 
                Upcoming projects include Me Prometheus in New York Theater Festival: 
                Summerfest and You Either Know It Or You're Dead as part of Game Play at The Brick.
                </p>
              </Item>
          </ItemsContainer>
        </div>
      </div>
    )
  }
}
