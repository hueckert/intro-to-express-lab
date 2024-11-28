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

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get("/collectibles/:index", (req, res) => {
    if (req.params.index >= 0 && req.params.index < collectibles.length) {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For $${collectibles[req.params.index].price}, it can be yours! `)
    } else {
        res.send(`This item is not yet in stock. Check back soon!`)
    }
})


// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  
