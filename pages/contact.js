import React from 'react'
import ContactForm from 'components/ContactForm'
import {baseValLarge} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "lavender", padding: "0 30px 1px"}}>
        <h1 style={{padding: `${2 * baseValLarge}px ${2 * baseValLarge}px 0`, textAlign: 'center'}}>
          Contact us
        </h1>
        <ContactForm />
      </div>
    )
  }
}
