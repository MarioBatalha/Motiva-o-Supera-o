const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { username, password } = req.body;

        const freela = await connection('freelancer')
        .where('username', username)
        .andWhere('password', password)
        .select('username', 'password')
        .first();

        if(!freela) {
            return response.status(400).json({ error: 'No freelancer found'})
        }
        return res.json(freela)
    }
}