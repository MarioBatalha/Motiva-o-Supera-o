const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');


module.exports = {
    async index(req, res) {
    const admin = await connection('admin').select('*')

    return res.json(admin);
    },

    async create(req, res) {
        const { username, email, cargo} = req.body;

    const password = generateUniqueId();

    await connection('admin').insert({
        id,
        username,
        email,
        cargo,
        password
    })

      return res.json()
    }
}
