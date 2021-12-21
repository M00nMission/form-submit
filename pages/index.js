/* eslint-disable */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi there</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor='name'>Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor='email'>Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
