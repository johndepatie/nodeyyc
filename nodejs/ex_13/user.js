const express = require('express')
const router = express.Router()

router.get('/', function (req, res){
    res.send("Please log to get a user")
})

router.get('/new', function (req, res){
    res.send("Here is a form to create user")
})

router.post('/', function (req, res){
    res.send("Please log to create a user")
})

router.put('/', function (req, res){
    res.send("Please log to update a user")
})

router.delete('/', function (req, res){
    res.send("Please log to delete a user")
})

module.exports = router