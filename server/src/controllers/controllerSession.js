const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
       try {
        const { username, password } = req.body;

        const company = await connection('company')
        .where('username', username)
        .andWhere('password', password)
        .select('username')
        .first();

        if(!company) {
            return res.status(400).json({ error: 'No company found'})
        }

       return res.json(company);
       } catch (err) {
        return res.status(400).json({ error: 'No company found'})
       }
    }
}