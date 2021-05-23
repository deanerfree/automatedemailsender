import { useState } from 'react'
const Form = () => {
  const [recipient, setRecipient] = useState('')
  const [sender, setSender] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  const sendEmail = () => {
    fetch(
      `http://localhost:4000/mail?recipient=${recipient}&sender=${sender}&topic=${subject}&text=${text}`,
    ).catch((error) => {
      console.log(`Error: ${error}`)
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <form onSubmit={submitHandler}>
      <div classsubject="emailContainer">
        <label>RECIPIENT EMAIL:</label>
        <input
          onChange={(e) => {
            setRecipient(e.target.value)
          }}
        ></input>
        <label>EMAIL:</label>
        <input
          onChange={(e) => {
            setSender(e.target.value)
          }}
        ></input>
        <label>SUBJECT:</label>
        <input
          onChange={(e) => {
            setSubject(e.target.value)
          }}
        ></input>
        <label>MESSAGE:</label>
        <input
          onChange={(e) => {
            setText(e.target.value)
          }}
        ></input>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form
