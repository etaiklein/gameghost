import React from 'react'
import AboutUs from './aboutUs'
import AboutGM from './aboutGM'
import {baseValLarge} from '../components/Item'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{padding: `0 ${2 * baseValLarge}px 1px`, backgroundColor: "lightgray", marginBottom: `${2 * baseValLarge}px`}}>
          <AboutUs />
        </div>
        <div style={{backgroundColor: "lavender", marginBottom: `${2 * baseValLarge}px`}}>
          <AboutGM />
        </div>
      </div>
    )
  }
}
