import React from 'react'

export default class ContactForm extends React.Component {
  render() {
    return (
      <form 
        action="https://formspree.io/gameghostnyc@gmail.com" 
        method="POST"
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email:</label>
        <input type="email" name="_replyto" style={{margin: "20px"}}/>
        <label>Subject:</label>
        <select name="Subject" style={{margin: "20px"}}>
            <option value="Book an RPG">Book an RPG</option>
            <option value="Become a GameGhost">Become a GameGhost</option>
            <option value="Partnerships">Partnerships</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
        </select>
        <label>Body:</label>
        <textarea name="Body" style={{margin: "20px"}}/>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}