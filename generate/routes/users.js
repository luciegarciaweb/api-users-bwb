var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});





var users_controller= require('../controllers/usersController');

router.post('/verify', users_controller.verify_user);

router.get('/connected', users_controller.connected_user);


module.exports = router;
=======
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
>>>>>>> 02fa424500cc463c062c2a853327819cfd9811a7
