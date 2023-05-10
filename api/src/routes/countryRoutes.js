const {Router} = require('express');
const router = Router();
const {getHome, getByName, getById} =require('../controllers/controllers');

router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            const getName = await getByName(name)
            res.status(200).send(getName)
        } else {
            const api = await getHome()
            res.status(200).send(api)
        }

    } catch (error) {
        res.status(404).send(error)
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let getId = await getById(id)
        res.status(200).send(getId)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;