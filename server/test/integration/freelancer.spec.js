const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Freelancer', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    }) 

    it('Should be able to create a new freelancer', async () => {
        const response = await request(app)
        .post('/freelancer')
        .send({ 
            firstname:'Mario',
            nickname: 'Batalha',
            email: 'mario@teste.com',
            password: '123456',
            checkPassword: '123456',
            degree: 'Desenvolvimento de software',
            country: 'Angola',
            phone: '945169676'
        });
        expect(response.body).toHaveProperty('username');
        expect(response.body.username);
    });
})