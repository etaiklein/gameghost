import React from 'react'
import {baseValLarge, MiniItem, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
          Our Game Masters
        </h1>
        <ItemsContainer>
          <MiniItem 
            imgSrc={require('assets/GameMasters/Sharang.jpg')}
            subtitle="published game designer, artist, scientist, and engineer"
            name="Sharang"
            link="/about/"
            tall={true}
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/Chris2.jpg')}
            subtitle="loves exploring new systems and building worlds"
            name="Chris"
            link="/about/"
            tall={true}
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/Nick.jpg')}
            subtitle="directs and designs interactive experiences"
            name="Nick"
            link="/about/"
            tall={true}
          />
          <MiniItem 
            imgSrc={require('assets/GameMasters/tai.png')}
            subtitle="Loves cartoons and comics. He once 3d-printed his own brain"
            name="Tai"
            link="/about/"
            tall={true}
          />
        </ItemsContainer>
      </div>
    )
  }
}
