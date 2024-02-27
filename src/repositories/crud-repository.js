const { Logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    // Creating the data
    async create(model){
        try {
            const response = await this.model.create(model);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo: create");
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where : {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo: destroy");
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the crud repo: get");
        }
    }

    async getAll(){
        try{
            const response = await this.model.findAll();
            return response
        } catch(error){
            Logger.error("Something went wrong in the crud repo : findAll");
        }
    }

    async update(id, data){ // data -> {col: value, ....}
        try{
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch(error){
            Logger.error("Something went wrong in the crud repo : update");
        }
    }
}

module.exports = CrudRepository;