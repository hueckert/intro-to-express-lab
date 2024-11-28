// Import Express
const express = require('express')





// Create an Express app
const app = express()




// Define routes here (we'll add them soon)

app.get('/greetings/:username',  (req, res) => {
    res.send(`<h1>How you do'n ${req.params.username}.`)
})

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
  
    if (isNaN(number)) {
      return res.send("You must specify a number.");
    }
  
    const randomRoll = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${randomRoll}.`);
  });

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  
