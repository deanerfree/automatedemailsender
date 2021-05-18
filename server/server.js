const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
const port = process.env.PORT
app.listen(port, () => console.log(`server is listening on port: ${port}`))
