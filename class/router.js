const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index')
})
router.get('/about', (req, res, next) => {
    res.render('about')
})
router.get('/:page/', (req, res, next) => {
    res.render('page')
})

module.exports = router