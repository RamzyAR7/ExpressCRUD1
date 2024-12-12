const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users.controllers')

router.post('/', usersController.createUsers)

router.get('/', usersController.getUsers)

router.get('/:id', usersController.getUsersById)

router.put('/:id', usersController.updateUsers)

router.delete('/:id', usersController.deleteUsers)



module.exports = router;
