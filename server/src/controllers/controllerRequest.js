const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('request').count();

        const request = await connection('request')
        .join('company', 'company_id', '=', 'request.company_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'request.*',
            'company.id',
            'company.username']);

        res.header('X-Total-Count', count['count(*)'])

        return res.json(request)
    }, 

    async create(req, res) {
        try {
            const {  projectName, category, lifetime, description, budget, promotionalCode } = req.body;

            const company_id = req.headers.authorization; 

             const [id] = await connection('request').insert({
                    projectName,
                    category,
                    lifetime,
                    description,
                    budget,
                    promotionalCode,
                    company_id,
                });

        return res.json({ id });

        } catch (error) {
            return res.status(400).send({ error: 'Error in task request '})
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        const company_id = req.headers.authorization;

        const request = await connection('request')
        .where('id', id)
        .select('company_id')
        .first();

        if(request.company_id !== company_id) {
            return res.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('request')
        .where('id', id)
        .delete();
        
        return res.status(204).send();
    }
}