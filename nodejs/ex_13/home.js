const express = require('express')
const router = express.Router()

router.get('/home', function (req, res){
    res.send("This is my Home page using Express Router")
})

module.exports = router