const express = require('express')
const oneLinerJoke = require('one-liner-joke');

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to my Joke application'))

app.get('/jokes', function (req, res){
    res.send("Here's a bunch of jokes:")
})

app.get('/joke', function (req, res){
    res.send(oneLinerJoke.getRandomJoke().body)
})

app.post('/joke', function (req, res){
    const jokes = oneLinerJoke.getAllJokesWithTag(req.body.tag)
    let punchlines = []

    for (joke of jokes){
        punchlines.push(joke.body)
    }

    res.send(punchlines);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))