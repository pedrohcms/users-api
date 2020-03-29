const User = require('../models/User');

const { create } =  require('../utils/jwt');

module.exports = {
    async login(request, response) {
        const { email, password } = request.body;

        const user = await User.findOne({
            where: {
                email,
                password
            }
        });

        if (!user) {
            return response.sendStatus(404);
        }

        const token = create({ id: user.id });

        return response.status(200).json({ token });
    }
}