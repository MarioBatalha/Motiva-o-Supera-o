const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const company_id = req.headers.authorization;

            const request = await connection('request')
            .where('company_id', company_id)
            .select('*');

            return res.json(request)
        } catch (error) {
            res.status(400).send({ error: 'Error in task list'})
        }
    }
}