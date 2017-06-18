import React from 'react'

export default class ContactForm extends React.Component {
  render() {
    return (
      <form 
        action="https://formspree.io/gameghostnyc@gmail.com" 
        method="POST"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        onSubmit={console.log("submit")}
      >
        <label>
          Email:
          <input type="email" name="_replyto" style={{margin: "0 20px 0 10px"}}/>
        </label>
      </form>
    )
  }
}