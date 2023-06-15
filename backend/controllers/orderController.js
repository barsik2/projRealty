const {Order} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController{
    async create(req, res, next) {
        try{
            const {fullname, number, email, house_id} = req.body;
            const order = await Order.create({fullname, number, email, house_id});
            return res.json(order);
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        let orders = await Order.findAndCountAll();
        return res.json(orders);
    }
    async getOne(req, res) {
        const {id} = req.params;
        let orderById = await Order.findOne({where: {id}})
        return res.json(orderById);
    }
}
module.exports = new OrderController();