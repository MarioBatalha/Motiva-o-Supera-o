const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Company', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    }) 

    it('Should be able to create a new company', async () => {
        const response = await request(app)
        .post('/company')
        .send({ 
            firstname:'Luimar',
            nickname: 'Silva',
            username: 'Kuenda Digital',
            email: 'kuenda@teste.com',
            password: '123456',
            checkPassword: '123456',
            country: 'Angola'
        });
        expect(response.body).toHaveProperty('username');
        expect(response.body.username);
    });
})