import React from 'react'
import MailingList from 'components/MailingList'
import MiniServices from './miniservices'
import MiniAboutGM from './miniaboutGM'
import AboutUs from './aboutUs'
import Contact from './contact'
import {baseValLarge} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: "lavender", padding: "0 30px 1px", marginBottom: "20px"}}>
          <AboutUs />
        </div>
        <div style={{backgroundColor: "lightgray", padding: "0 30px 1px", marginBottom: "20px"}}>
          <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
            Join our mailing list!
          </h1>
          <MailingList />
        </div>
        <div style={{backgroundColor: "lavender", padding: "0 30px 1px", marginBottom: "20px"}}>
          <MiniServices />
        </div>
        <div style={{backgroundColor: "lightgray", padding: "0 30px 1px", marginBottom: "20px"}}>
          <MiniAboutGM />
        </div>
        <div style={{backgroundColor: "lavender", padding: "0 30px 1px", marginBottom: "20px"}}>
          <Contact />
        </div>
      </div>
    )
  }
}