// Import Express
const express = require('express')





// Create an Express app
const app = express()


// 1. Be Polite, Greet the User

// Define routes here (we'll add them soon)

app.get('/greetings/:username',  (req, res) => {
    res.send(`<h1>How you do'n ${req.params.username}.`)
})

// 2. Rolling the Dice

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
  
    if (isNaN(number)) {
      return res.send("You must specify a number.");
    }
  
    const randomRoll = Math.floor(Math.random() * (number + 1));
    res.send(`You rolled a ${randomRoll}.`);
  });

  // 3. I Want THAT One!

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

// 4. Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// Route to filter shoes
app.get('/shoes', (req, res) => {
    const { minPrice, maxPrice, type } = req.query;
  
    let filteredShoes = shoes;
  
    // Filter by minimum price 
    if (minPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
    }
  
    // Filter by maximum price 
    if (maxPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
    }
  
    // Filter by type 
    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }
  
    res.send(filteredShoes);
  });

// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  
