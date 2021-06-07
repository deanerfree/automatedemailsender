const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const sgMail = require('@sendgrid/mail')
const app = express()

dotenv.config()
app.use(cors())

sgMail.setApiKey(process.env.API_KEY)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/mail', (req, res) => {
  const { recipient, sender, topic, text } = req.query
  console.log('recipient', recipient, typeof recipient)
  console.log('sender', sender)
  console.log('subject', topic)
  console.log('text', text)

  const msg = {
    to: recipient,
    from: 'kurtiscoding@gmail.com',
    subject: topic,
    text: text,
  }
  console.log('This is the msg', msg)
  sgMail.send(msg, function (err, info) {
    if (err) {
      console.error('email not sent', err)
    } else {
      console.log(info, 'Success')
    }
  })
})

const port = process.env.PORT
app.listen(port, () => console.log(`server is listening on port: ${port}`))
