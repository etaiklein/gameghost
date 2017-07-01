import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import {MiniService, ServicesContainer} from '../components/Service'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Services
        </h1>
        <ServicesContainer>
          <MiniService 
            imgSrc={require('assets/other/finn-jake.jpg')}
            title="Adventure Time!!"
            subtitle="great for beginners of any age!"
            price="15$ / person / hour"
            link="/services/"
          >
          </MiniService>
          <MiniService 
            imgSrc={require('assets/D_D/d_d.jpg')}
            title="Tabletop Games"
            subtitle="your choice of Roleplaying Game"
            price="15$ / person / hour"
            link="/services/"
          >
          </MiniService>
          <MiniService 
            imgSrc={require('assets/Fiasco/Fiasco.jpg')}
            title="(trust us) Special"
            subtitle="You bring the party, we'll choose a game"
            price="12$ / person / hour"
            link="/services/"
          >
          </MiniService>
          <MiniService 
            imgSrc={require('assets/Murder Mystery /tables_Mystery.jpg')}
            title="Murder Mystery"
            subtitle="an epic game over four courses"
            price="20$ / person / hour + food costs"
            link="/services/"
          >
          </MiniService>
        </ServicesContainer>
      </div>
    )
  }
}
