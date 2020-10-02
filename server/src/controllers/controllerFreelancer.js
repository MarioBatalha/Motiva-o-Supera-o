const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
    const freelancer = await connection('freelancer').select('*')

    return res.json(freelancer)
    },

    async create(req, res) {
    try {
        const { username, email, password, checkPassword, degree, residence, phone } = req.body;

        await connection('freelancer').insert({
            username,
            email,
            password,
            checkPassword,
            degree,
            residence,
            phone,
        })

        return res.json()
    } catch (error) {
        return res.status(400).send({ error: 'freelancer registration failed'})
    }
  }
}  
