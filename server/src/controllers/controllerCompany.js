const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');


module.exports = {
    async index(req, res) {
    const company = await connection('company').select('*')

    if(!company){
        return res.status(401).send({ error: 'This company not exists'})
    }

    return res.json(company);
    },

    async create(req, res) {
       try {

        const { firstname, nickname, username, email, password, checkPassword, country } = req.body;
       
        const id = generateUniqueId();

        await connection('company').insert({
            firstname,
            nickname,
            username,
            email,
            password,
            checkPassword,
            country,
        })
        return res.json({ id })
        
       } catch (error) {
           return res.status(400).send({ error: 'company registration failed'})
       }
    }
  }   
