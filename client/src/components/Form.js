import { useState } from 'react'
const Form = () => {
  const [recipient, setRecipient] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async () => {
    await fetch(
      `http://localhost:4000/send-email?recipient=${recipient}&sender=${email}&subject=${subject}&name=${name}&message=${message}`,
    )
      .then((res) => res.json())
      .then((data) => console.log('sent success', data))
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="emailContainer">
        <label>RECIPIENT EMAIL:</label>
        <input
          onChange={(e) => {
            setRecipient(e.target.value)
          }}
        ></input>
        <label>EMAIL:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        ></input>
        <label>SUBJECT:</label>
        <input
          onChange={(e) => {
            setSubject(e.target.value)
          }}
        ></input>
        <label>NAME:</label>
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
        ></input>
        <label>MESSAGE:</label>
        <input
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        ></input>
      </div>
    </form>
  )
}

export default Form
