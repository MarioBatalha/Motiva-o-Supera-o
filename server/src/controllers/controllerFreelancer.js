const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
    const freelancer = await connection('freelancer').select('*')

    return res.json(freelancer)
    },

    async create(req, res) {
    try {
        const { firstName, nickName,  email, password, checkPassword, degree, country, phone } = req.body;

        await connection('freelancer').insert({
            firstName,
            nickName,
            email,
            password,
            checkPassword,
            degree,
            country,
            phone,
        })

        return res.json()
    } catch (error) {
        return res.status(400).send({ error: 'freelancer registration failed'})
    }
  }
}  
