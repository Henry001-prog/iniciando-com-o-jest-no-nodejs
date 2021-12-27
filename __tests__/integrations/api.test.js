const Product = require('../../src/models/Product');
const app = require('../../src/server');
const request = require('supertest');

describe("CRUD", () => {
    /*beforeAll(async () => {
        Product.sync({logging: false});
    });*/ // run this code snippet before running the tests below. then comment it again

    it("Deverá criar um produto no banco de dados", async () => {
        const product = {
            title: 'LG K10',
            description: '64GB'
        };

        const response = await request(app)
                               .post('/api/product')
                               .send(product);

        expect(response.status).toBe(200);
    });

    it("Deverá trazer todos os produto no banco de dados", async () => {
        
        const response = await request(app)
                               .get('/api/product');
    
        expect(response.status).toBe(200);
    });

    it("Deverá trazer somente um produto do banco de dados", async () => {
        
        const response = await request(app)
                               .get('/api/product/1');
        expect(response.status).toBe(200);
    });

    it("Deverá atualizar um produto no banco de dados", async () => {
        
        const response = await request(app)
                            .put('/api/product/2')
                            .send({ 
                                    title: 'Samsung Galaxy 10',
                                    description: '128GB'
                                }, 
                                {
                                where: {
                                    id: 2
                                }
                            });
        expect(response.status).toBe(200);
    });
    
    it("Deverá deletar um produto no banco de dados", async () => {
        
        const response = await request(app)
                               .delete('/api/product/18');

        expect(response.status).toBe(200);
    });
});