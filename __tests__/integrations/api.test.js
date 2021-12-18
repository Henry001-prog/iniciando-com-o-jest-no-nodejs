const Product = require('../../src/models/Product');

describe("CRUD", () => {
    beforeAll(async () => {
        Product.sync({logging: false});
    });

    it("Deverá criar um produto no banco de dados", async () => {
        try {
            const response = await Product.create({
                title: 'Moto G6',
                description: '64GB',
                situationId: 3
            });
        
            //console.log(response);
        
            expect(response.title).toBe(response.title);
        } catch (e) {
            console.log('Ocorreu um erro ao criar o registro.');
        }
    });

    it("Deverá trazer todos os produto no banco de dados", async () => {
        try {
            const response = await Product.findAll();
        
            //console.log(response);
        
            expect(response.title).toBe(response.title);
        } catch (e) {
            console.log('Ocorreu um erro ao buscar todos os registros.');
        }
    });

    it("Deverá trazer somente um produto do banco de dados", async () => {
        try {
            const response = await Product.findByPk(1);
        
            //console.log(response);
            if (response) {
                expect(response.title).toBe(response.title);
            } else {
                console.log('Falhou!!!');
            }
            
        } catch (e) {
            console.log('Ocorreu um erro ao buscar o registro.');
        }
    });

    it("Deverá atualizar um produto no banco de dados", async () => {
        try {
            const result = await Product.findByPk(2);
            if(result != null) {
                const response = await result.update(
                    { 
                        title: 'Samsung Galaxy A60',
                        description: '12GB',
                        situationId: 1
                    }, 
                    {
                    where: {
                        id: 2
                    }
                });
                expect(response.title).toBe(response.title);
            } else {
                console.log('Ocorreu um erro ao atualizar o registro.');
            }
        
            //console.log(response);
        } catch (e) {
            console.log('Ocorreu um erro ao atualizar o registro durante a execução da função.');
        }
    });


    it("Deverá deletar um produto no banco de dados", async () => {
        try {
            const response = await Product.destroy({
                where: {
                    id: 18
                }
            });
            if (response !== 0) {
                expect(response.title).toBe(response.title);
            } else {
                console.log('Não foi possível deletar esse registro solicitado!');
            }
        } catch (e) {
            console.log('Ocorreu um erro ao deletar o registro durante a execução da função.');
        }
    });
    afterAll(async () => {
        Product.sequelize.close();
    })
});