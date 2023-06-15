const {House} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const {Op} = require('sequelize');

class HouseController{
    async create(req, res, next) {
        try{
            const {name, short_description, full_description, size, floors, rooms, garage, lenght, width, material, price, style} = req.body;
            const {img_title, img_1, img_2, img_3, img_plan} = req.files;
            let fileNameTitle = `title name:${name}` + uuid.v4() + ".jpg";
            img_title.mv(path.resolve(__dirname, '..', 'static/img/db', fileNameTitle));
            let fileName1 = `img1 name:${name}` + uuid.v4() + ".jpg";
            img_1.mv(path.resolve(__dirname, '..', 'static/img/db', fileName1));
            let fileName2 = `img2 name:${name}` + uuid.v4() + ".jpg";
            img_2.mv(path.resolve(__dirname, '..', 'static/img/db', fileName2));
            let fileName3 = `img3 name:${name}` + uuid.v4() + ".jpg";
            img_3.mv(path.resolve(__dirname, '..', 'static/img/db', fileName3));
            let fileNamePlan = `plan name:${name}` + uuid.v4() + ".jpg";
            img_plan.mv(path.resolve(__dirname, '..', 'static/img/db', fileNamePlan));
            const house = await House.create({name, short_description, full_description, size, floors, rooms, garage, lenght, width, material, price, style, img_title: fileNameTitle, img_plan: fileNamePlan, img_1: fileName1, img_2: fileName2, img_3: fileName3});
            return res.json(house);
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        /*let {limit, page} = req.query;

        page = page || 1; //Страница. Если не указана по дефолту 1
        limit = limit || 20; //Количество элементов по дефолту 20
        let offset = page * limit - limit //пропуск, вычисляется автоматически
        //Код, что база не грузила сразу весь контент. На фронте надо будет сделать пагинацию.
        //Пример запроса 2 страницы по 10 элементов: /api/house/limit=10&page=2
        */
        let houses = await House.findAndCountAll(/*{limit, offset}*/);//findAndCountAll добавляет в начало JSON-а ключ count, в котором указано сколько всего записей в базе данных
        return res.json(houses);
        
    }
    async getFilter(req, res) {
        try{
            const filters = {//Сбор фильтров из гет-запроса
                size: {
                    min:req.query.size_min,
                    max:req.query.size_max
                },
                price: {
                    min:req.query.price_min,
                    max:req.query.price_max
                },
                garage:req.query.garage,
                floors:req.query.floors,
                tent:req.query.tent,
                style:req.query.style,
                type:req.query.type,
                material:req.query.material,
            }

            const where = {};//Собираем объект фильтра
            
            ////////////////////////////////////////          ФИЛЬТРЫ          //////////////////////////////////////


            if (filters.size.min && filters.size.max) {//Фильтр площади
                where.size = {
                  [Op.between]: [filters.size.min, filters.size.max],
            };
              } else if (filters.size.min) {
                where.size = {
                  [Op.gte]: filters.size.min,
                };
              } else if (filters.size.max) {
                where.size = {
                  [Op.lte]: filters.size.max,
                };
              }
            
            
            if (filters.price.min && filters.price.max) {//Фильтр стоимости
                where.price = {
                [Op.between]: [filters.price.min, filters.price.max],
            };
            } else if (filters.price.min) {
                where.price = {
                [Op.gte]: filters.price.min,
                };
            } else if (filters.price.max) {
                where.price = {
                [Op.lte]: filters.price.max,
                };
            }


            if (filters.garage){//фильтр гаражей
                if (filters.garage == "true"){
                    where.garage = {[Op.gt]:0}
                }
                else{
                    where.garage = filters.garage
                }
            }


            if (filters.floors){//Фильтр этажей
                where.floors = filters.floors;
            }

            if (filters.tent){//Фильтр навеса
                where.tent = filters.tent;
            }
        
            if (filters.style){//Фильтр стилистики
                where.style = filters.style;
            }

            if (filters.type){//Фильтр назначения
                where.type = filters.type;
            }

            /*if (filters.material){
                where.material = [Op.iLike]: `%${filters.material}%`;
            }*/


            ////////////////////////////////////////       КОНЕЦ ФИЛЬТРОВ            ///////////////////////////////////////////////


            let housesFiltered = await House.findAndCountAll({where})//Вывод по условию where
            return res.json(housesFiltered)
        } catch(e){
            console.log(e);
        }
    }
    async getOne(req, res) {
        try{
            const {id} = req.params;
            let houseById = await House.findOne({where: {id}})
            return res.json(houseById);
        }catch(e){
            console.log(e)
        }
    }
}
module.exports = new HouseController();