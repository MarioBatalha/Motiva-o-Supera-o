const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const company_username = req.headers.authorization;

            const request = await connection('request')
            .where('company_username', company_username)
            .select('*');

            return res.json(request)
        } catch (error) {
            res.status(400).send({ error: 'Error in task list'})
        }
    }
}