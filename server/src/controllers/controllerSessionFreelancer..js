const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, password } = req.body;

        const freela = await connection('freelancer')
        .where('name', name)
        .andWhere('password', password)
        .select('name', 'password')
        .first();

        if(!freela) {
            return response.status(400).json({ error: 'No freelancer found'})
        }
        return res.json(freela)
    }
}