/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

if ( typeof window !== 'undefined') {
  function encode(data) {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
    }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name
      })
    }).then(() => navigate("/thank-you/")).catch(error => alert(error))
  }
}
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi there</h1>
      <form name="contact" data-netlify="true">
        <input type="hidden" name="index" value="index" />
        <p>
          <label>Name
            <input type="text" id="name" name="name" />
          </label>
        </p>
        <p>
          <label>Email
            <input type="text" id="email" name="email" />
          </label>
        </p>
        <p>
          <label>Message
            <textarea id="message" name="message"></textarea>
          </label>
        </p>
        <input type="file" accept='mp4' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
