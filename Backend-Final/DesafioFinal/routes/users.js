const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const auth = require('../middlewares/auth');
router.use(express.json());
router.use(express.urlencoded({extended:true})); 

router.post('/login', usersController.login);
router.post('/', usersController.post);
router.get('/get', auth.authToken, usersController.get);


module.exports = router; 