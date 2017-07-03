import React from 'react'
import {baseValLarge, Item, ItemsContainer} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "lavender"}}>
        <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
          Services
        </h1>
        <ItemsContainer>
          <Item 
            imgSrc={require('assets/other/finn-jake.jpg')}
            title="Adventure Time!!"
            subtitle="great for beginners of any age!"
            price="15$ / person / hour"
            highlights={[
              "Choose from 8 pre-made characters", 
              "Hidden agendas and secret roles", 
              "In-game puzzles and side quests",
            ]}
          >
          Step into the world of Adventure Time to solve puzzles, beat up bad guys, and save the day! 
          <br/> <br/>
          Characters, dice, music, maps, and an epic story will all be provided by your host.
          </Item>
          <Item 
            imgSrc={require('assets/D_D/d_d.jpg')}
            title="Tabletop Games"
            subtitle="your choice of Roleplaying Game"
            price="15$ / person / hour"
            highlights={[
              "Spirit of the Century: A 20s pulp epic", 
              "Dresden Files: Urban wizard fantasy",
              "Epyllion: Baby rebellious dragons",
              "Ten Candles: A candle-lit horror",
              "... and more!",
            ]}
          >
          Pick from our list of roleplaying games. Every one's a winner!
          </Item>
          <Item 
            imgSrc={require('assets/Fiasco/Fiasco.jpg')}
            title="(trust us) Special"
            subtitle="You bring the party, we'll choose the game"
            price="12$ / person / hour"
            highlights={[
              "A new adventure guaranteed!", 
              "No decision making involved",
              "A great gift for any gamer",
            ]}
          >
          We pick a game for you, you have fun, everyone wins! All materials and instructions provided. 
          <br/> <br/>

          "It's kind of like your friend taking you to a movie, but not letting you watch the previews first."
          </Item>
          <Item 
            imgSrc={require('assets/Murder Mystery /tables_Mystery.jpg')}
            title="Murder Mystery"
            subtitle="an epic game over four courses"
            price="20$ / person / hour + food costs"
            highlights={[
              "Choose from 8 pre-made characters", 
              "Hidden agendas and secret roles", 
              "In-game puzzles and side quests",
            ]}
          >
          Every course of this meal, something puts a fork in your plan. Can you solve the mystery while fulfilling your own hidden agenda?
          <br/> <br/>
            All materials included for an incredible dinner party.
          </Item>
          <Item 
            imgSrc={require('assets/other/gamephoto.jpeg')}
            title="Custom Adventure"
            subtitle="A bespoke experience"
            price="25$ / person / hour + addons"
            highlights={[
              "Create something totally unique!",
              "Great for Bachelor/Bachelorette parties, Corporate team building, and Birthday surprises", 
              "Lights, Sounds, and Catered Food addons", 
            ]}
          >
          Our published game designers will work with you to build an adventure from the ground up!
          </Item>
        </ItemsContainer>
      </div>
    )
  }
}
