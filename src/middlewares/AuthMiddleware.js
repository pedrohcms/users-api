const { verify } = require('../utils/jwt');

module.exports = (request, response, next) => {
    const [, token] = request.headers.authorization.split(' ');

    try {
        const id = verify(token); //Faz a verificação do token

        request.id = id;
    
        next();
    } catch (error) {
        return response.status(401).json({ error });
    }
}