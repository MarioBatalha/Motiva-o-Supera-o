const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('request').count();

        const request = await connection('request')
        .join('company', 'company.username', '=', 'request.company_username')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'request.*'
        ]);

        res.header('X-Total-Count', count['count(*)'])

        return res.json(request)
    }, 

    async create(req, res) {
        try {
            const { title, category, lifetime, description, budget, promotionalCode } = req.body;

            const company_username = req.headers.authorization; 

             const [id] = await connection('request').insert({
                    title,
                    category,
                    lifetime,
                    description,
                    budget,
                    promotionalCode,
                    company_username,
                });

        return res.json({ id });

        } catch (error) {
            return res.status(400).send({ error: 'Error in task request '})
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        const company_username = req.headers.authorization;

        const request = await connection('request')
        .where('id', id)
        .select('company_id')
        .first();

        if(request.company_username !== company_username) {
            return res.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('request')
        .where('id', id)
        .delete();
        
        return res.status(204).send();
    }
}