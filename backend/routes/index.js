const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const houseRouter = require('./houseRouter');
const orderRouter = require('./orderRouter');

router.use('/user', userRouter);
router.use('/house', houseRouter);
router.use('/order', orderRouter);
router.use('/', (req,res)=>{
    res.sendFile('index.html')
})

module.exports = router;