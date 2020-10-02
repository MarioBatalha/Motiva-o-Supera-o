const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const freelancer_id = req.headers.authorization;

        const freelancer = await connection('freelancer')
        .where('freelancer_id', freelancer_id)
        .select('*');

        return res.json(freelancer)
    }
}