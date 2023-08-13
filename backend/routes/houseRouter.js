const Router = require('express');
const router = new Router();
const houseController = require('../controllers/houseController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', /*checkRole('ADMIN'),*/ houseController.create)
router.get('/', houseController.getAll);
router.get('/filters', houseController.getFilter);
router.get('/:id', houseController.getOne);
router.post('/delete', houseController.delete)
router.post('/update', houseController.update)//Разница между созданием, сюда дополнительно нужно кидать id дома

module.exports = router;