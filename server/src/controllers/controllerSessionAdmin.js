const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { username, password } = req.body;

        const admin = await connection('admin')
        .where('username', username)
        .andWhere('password', password)
        .select('name', 'password')
        .first();

        if(!admin) {
            return response.status(400).json({ error: 'No admin found'})
        }
        return res.json(admin)
    }
}