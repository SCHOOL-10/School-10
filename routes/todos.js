const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

router.get('/forstudents', (req, res) => {
    res.render('forstudents', {
        title: 'Для учеников'
    })
})

module.exports = router