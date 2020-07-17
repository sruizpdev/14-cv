import React from "react"
const ContactForm = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Send message" />
      </form>
    </>
  )
}

export default ContactForm
