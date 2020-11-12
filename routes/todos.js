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

router.get('/forteachers', (req, res) => {
    res.render('forteachers', {
        title: 'Для учителей'
    })
})

router.get('/forparents', (req, res) => {
    res.render('forparents', {
        title: 'Для родителей'
    })
})

router.get('/media', (req, res) => {
    res.render('media', {
        title: 'Медиа'
    })
})

router.get('/achievements', (req, res) => {
    res.render('achievements', {
        title: 'Достижения'
    })
})

module.exports = router