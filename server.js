// Import Express
const express = require('express')





// Create an Express app
const app = express()




// Define routes here (we'll add them soon)

app.get('/greetings/:username',  (req, res) => {
    res.send(`<h1>How you do'n ${req.params.username}.`)
})

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  