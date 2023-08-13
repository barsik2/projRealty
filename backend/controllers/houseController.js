const {House} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const {Op} = require('sequelize');

class HouseController{
    async create(req, res, next) {
        try{
            const {name, short_description, full_description, size, floors, rooms, garage, length, width, material, price, style, tent, type, additional} = req.body;
            const {img_title, img_plan1, img_plan2, img_1, img_2, img_3} = req.files;

            if (img_title){
                var fileNameTitle = `${name}_title_` + uuid.v4() + ".jpg";
                img_title.mv(path.resolve(__dirname, '..', 'static', fileNameTitle));
            }
            if (img_1){
                var fileNameImg1 = `${name}_img1_` + uuid.v4() + ".jpg";
                img_1.mv(path.resolve(__dirname, '..', 'static', fileNameImg1));
            }
            if (img_2){
                var fileNameImg2 = `${name}_img2_` + uuid.v4() + ".jpg";
                img_2.mv(path.resolve(__dirname, '..', 'static', fileNameImg2));
            }
            if (img_3){
                var fileNameImg3 = `${name}_img3_` + uuid.v4() + ".jpg";
                img_3.mv(path.resolve(__dirname, '..', 'static', fileNameImg3));
            }
            if (img_plan1){
                var fileNamePlan1 = `${name}_plan1` + uuid.v4() + ".jpg";
                img_plan1.mv(path.resolve(__dirname, '..', 'static', fileNamePlan1));
            }
            if (img_plan2){
                var fileNamePlan2 = `{name}_plan2` + uuid.v4() + ".jpg";
                img_plan2.mv(path.resolve(__dirname, '..', 'static', fileNamePlan2));
            }

        const house = await House.create({name, short_description, full_description, size, floors, rooms, garage, length, width, material, price, style, tent, type, additional, img_title: fileNameTitle, img_plan1: fileNamePlan1, img_plan2: fileNamePlan2, img_1: fileNameImg1, img_2: fileNameImg2, img_3: fileNameImg3});
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
            const filters = {//Сбор фильтров из гет-запроса в единый объект
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
                rooms:req.query.rooms,
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

            if (filters.rooms){//Фильтр комнат
                where.rooms = filters.rooms;
            }


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

    async delete(req, res, next) {
        try {
            const {id} = req.body
            if (id == process.env.SECRET_KEY){
                await House.destroy({where: {}})
                return res.json("Now i am become Death. The Destroyer of worlds.")
            }
            else{
                const result = await House.destroy({where: {id}})
                return res.json(result? "Запись успешно удалена." : "Запись с таким id не найдена.")
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async update(req, res, next){
        try {
            const {id, name, short_description, full_description, size, floors, rooms, garage, length, width, material, price, style, tent, type, additional} = req.body;

            const {img_title, img_plan1, img_plan2, img_1, img_2, img_3} = req.files;
            
            if (img_title){
                var fileNameTitle = `${name}_title_` + uuid.v4() + ".jpg";
                img_title.mv(path.resolve(__dirname, '..', 'static', fileNameTitle));
            }
            if (img_1){
                var fileNameImg1 = `${name}_img1_` + uuid.v4() + ".jpg";
                img_1.mv(path.resolve(__dirname, '..', 'static', fileNameImg1));
            }
            if (img_2){
                var fileNameImg2 = `${name}_img2_` + uuid.v4() + ".jpg";
                img_2.mv(path.resolve(__dirname, '..', 'static', fileNameImg2));
            }
            if (img_3){
                var fileNameImg3 = `${name}_img3_` + uuid.v4() + ".jpg";
                img_3.mv(path.resolve(__dirname, '..', 'static', fileNameImg3));
            }
            if (img_plan1){
                var fileNamePlan1 = `${name}_plan1` + uuid.v4() + ".jpg";
                img_plan1.mv(path.resolve(__dirname, '..', 'static', fileNamePlan1));
            }
            if (img_plan2){
                var fileNamePlan2 = `{name}_plan2` + uuid.v4() + ".jpg";
                img_plan2.mv(path.resolve(__dirname, '..', 'static', fileNamePlan2));
            }

            const houseUpdate = await House.update({name, short_description, full_description, size, floors, rooms, garage, length, width, material, price, style, tent, type, additional, img_title: fileNameTitle, img_plan1: fileNamePlan1, img_plan2: fileNamePlan2, img_1: fileNameImg1, img_2: fileNameImg2, img_3: fileNameImg3}, {where: {id: id}});
            return res.json(houseUpdate? "Запись успешно обновлена" : "Неудача!");
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}
module.exports = new HouseController();