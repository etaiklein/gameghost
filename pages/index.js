import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import MailingList from 'components/MailingList'
import MiniServices from './miniservices'
import MiniAbout from './miniabout'
import Contact from './contact'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: "lightgray", padding: "30px", marginBottom: "20px"}}>
          <h1>
            Join our mailing list!
          </h1>
          <MailingList />
        </div>
        <div style={{backgroundColor: "lavender", padding: "30px", marginBottom: "20px"}}>
          <MiniServices />
        </div>
        <div style={{backgroundColor: "lightgray", padding: "30px", marginBottom: "20px"}}>
          <MiniAbout />
        </div>
        <div style={{backgroundColor: "lavender", padding: "30px", marginBottom: "20px"}}>
          <Contact />
        </div>
      </div>
    )
  }
}