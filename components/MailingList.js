import React from 'react'

export default class MailingList extends React.Component {
  render() {
    return (
      <form 
        action="https://formspree.io/gameghostnyc@gmail.com" 
        method="POST"
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 0,
          paddingBottom: "1.45rem",
        }}
      >
        <label>
          Email:
          <input type="email" name="_replyto" style={{margin: "0 20px 0 10px"}}/>
        </label>
      </form>
    )
  }
}