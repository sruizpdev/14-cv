import React from "react"

const ContactForm = () => {
  return (
    <form action="https://formspree.io/mqkynbyp" method="POST">
      <input type="name" name="_name" placeholder="Name" />
      <input type="email" name="_replyto" placeholder="e-mail" />
      <textarea name="message" placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  )
}
export default ContactForm
