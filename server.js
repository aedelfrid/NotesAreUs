const express = require('express')
const routes = require('./controllers')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
})