const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const company_username = req.headers.authorization;
        const company_password = req.headers.authorization;

        const company = await connection('company ')
        .where('company_name', company_username)
        andWhere('company_password', company_password)
        .select('*');

        return res.json(company)
    }
}