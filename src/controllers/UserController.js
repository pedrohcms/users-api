const User = require('../models/User');

module.exports = {
    async find(request, response) {
        const { id } = request.params;
        
        const user = await User.findByPk(id);

        if (!user) {
            return response.sendStatus(404);
        }

        return response.status(200).json(user);
    },

    async index(request, response) {
        const users = await User.findAll();

        return response.status(200).json(users)
    },

    async store(request, response) {
        const { name, email, password } = request.body;
        
        const user = await User.create({ name, email, password });

        return response.status(201).json(user);
    },

    async update(request, response) {
        const { id } = request.params;
        
        const { name, email, password } = request.body;
        
        const user = await User.findByPk(id);

        if(!user) {
            return response.sendStatus(404);
        }

        await user.update({ name, email, password });

        return response.status(200).json(user);
    },

    async delete(request, response) {
        const { id } = request.params;

        let user = await User.findByPk(id);
    
        if (!user) {
            return response.sendStatus(404);
        }

        await user.destroy();
        user = await User.findByPk(id);

        if (!user) {
            return response.sendStatus(200);
        } else {
            return response.sendStatus(500);
        }
    }
}