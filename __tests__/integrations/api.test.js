const Product = require('../../src/models/Product');

describe("CRUD", () => {
    /*beforeAll(async () => {
        Product.sync({logging: false});
    });*/ // run this code snippet before running the tests below. then comment it again

    it("Deverá criar um produto no banco de dados", async () => {
        
        const response = await Product.create({
            title: 'Moto G6 Power',
            description: '64GB'
        });

        expect(response.title).not.toBeNull();
        expect(response.title).toBeDefined();
    });

    it("Deverá trazer todos os produto no banco de dados", async () => {
        
        const response = await Product.findAll();
    
        expect(response.title).not.toBeNull();
        expect(response).toBeDefined();
    });

    it("Deverá trazer somente um produto do banco de dados", async () => {
        
        const response = await Product.findByPk(1);
    
        //console.log(response);
        if (response) {
            expect(response.title).not.toBeNull();
            expect(response.title).toBeDefined();
        } else {
            console.log('Falhou!!!');
        }
    });

    it("Deverá atualizar um produto no banco de dados", async () => {
        
        const result = await Product.findByPk(2);
        if(result != null) {
            const response = await result.update(
                { 
                    title: 'Samsung Galaxy S12',
                    description: '128GB'
                }, 
                {
                where: {
                    id: 2
                }
            });
            expect(response.title).not.toBeNull();
            expect(response.title).toBeDefined();
        } else {
            console.log('Ocorreu um erro ao atualizar o registro.');
        }
    });


    it("Deverá deletar um produto no banco de dados", async () => {
        
        const response = await Product.destroy({
            where: {
                id: 6
            }
        });
        if (response !== 0) {
            expect(response.title).not.toBeNull();
        } else {
            console.log('Não foi possível deletar esse registro solicitado!');
        }
    });
});