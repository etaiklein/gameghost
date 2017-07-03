import React from 'react'
import {baseValLarge, Item, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
          <h1> 
            About our Game Masters 
          </h1>
          <p>
            Our team draws on experience in events management, 
            theatrical production, game design, and hospitality 
            to help make your game event a success. 
          </p>
        </div>
        <ItemsContainer>
            <Item 
              imgSrc={require('assets/GameMasters/Sharang.jpg')}
              subtitle="published game designer, artist, scientist, and engineer"
              name="Sharang"
              link="/contact/"
              tall={true}
            >
              <p>
                Sharang Biswas is a published game designer, writer and artist based in NYC. 
                He has made games independently and at organisations such as the Metropolitan Museum of Art and Tiltfactor laboratory. 
                His game criticism and analysis has appeared in publications such as ZAM and Kill Screen.

                <br/> <br/> 
                He is one of the two designers of Mad Science Foundation, and a contributor to Buffalo and Awkward Moment.
                <br/> <br/> 
                <a href={"https://twitter.com/sharangbiswas"}>@SharangBiswas</a>
              </p>
            </Item>
            <Item 
              imgSrc={require('assets/GameMasters/Chris2.jpg')}
              subtitle="loves exploring new systems and building worlds"
              name="Chris"
              link="/contact/"
              tall={true}
            > 
              <p>
              Chris loves exploring new systems and building worlds, characters, and mysteries for their players. They have worked extensively with Cthulhutech and Call of Cthulhu while having also worked with Dungeons and Dragons 5 edition, Apocalypse World, Mobile Frame Zero: Firebrands, and Fiasco. 
              <br/> <br/> 
              They enjoy working with all age groups.
              </p>
            </Item>
            <Item 
              imgSrc={require('assets/GameMasters/Nick.jpg')}
              subtitle="directs and designs interactive experiences"
              name="Nick"
              link="/contact/"
              tall={true}
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
            <Item 
              imgSrc={require('assets/GameMasters/tai.png')}
              subtitle="Loves cartoons and comics. He once 3d-printed his own brain"
              name="Tai"
              link="/contact/"
              tall={true}
            >
              <p>Computer Programmer by day, Super Nerd by night. Tai is a lifelong lover of scifi, board games, and mythology. 
              <br/> <br/> He loves playing ukulele, eating spicy foods, and growing plants. He once 3d-printed his own brain.</p>
            </Item>
        </ItemsContainer>
      </div>
    )
  }
}
