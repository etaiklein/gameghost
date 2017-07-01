import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import ContactForm from 'components/ContactForm'

export default class Index extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "lavender", padding: "30px"}}>
        <h1>
          Contact us
        </h1>
        <ContactForm />
      </div>
    )
  }
}
