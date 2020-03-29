const User = require('../models/User');
const { hash } = require('../utils/encryption');
const { create } =  require('../utils/jwt');

module.exports = {
    async login(request, response) {
        const { email } = request.body;
        let { password } = request.body;

        password = hash('sha256', password, 'hex');            

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