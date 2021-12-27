const express = require('express');

const Product = require('../models/Product');
const ProductStatus = require('../models/ProductStatus');

module.exports = {
    async createProduct(req, res, next) {
        try {
            const product = await Product.create(req.body);
            //console.log('Peguei: ', product);
            return res.json(product);
        } catch {
            res.status(500).json({
                error: 'Erro: usuário não cadastrado com sucesso!'
            });
            next();
        }
    },

    async showAllProducts(req, res, next) {
        try {
            const product = await Product.findAll({
                limit: 10
            });
            //console.log('Trouxe tudo: ', product);
            return res.json(product);
        } catch {
            res.status(500).json({
                error: 'Não foi possível trazer os registros solicitados!'
            });
            next();
        }
    },

    async showProduct(req, res, next) {
        try {
            const product = await Product.findByPk(
                req.params.id
            );
            //console.log('Um produto: ', product)
            if (product) {
                return res.json(product);
            } else {
                res.status(500).json({
                    error: 'Não foi possível encontrar o registro!'
                });
                next();
            }
        } catch {
            res.status(500).json({
                error: 'Não foi possível trazer o registro solicitado!'
            });
            next();
        }
    },

    async updateProduct(req, res, next) {
        try {
            const result = await Product.findByPk(req.params.id);
            if(result != null) {
                await Product.update(
                    { 
                        title: req.body.title,
                        description: req.body.description,
                        situationId: req.body.situationId,
                    }, 
                    {
                    where: {
                        id: req.params.id
                    }
                });
                const product = await Product.findByPk(
                    req.params.id
                );
                //console.log('Atualizou: ', product);
                return res.json(product);
            } else {
                res.status(500).json({
                    error: 'Não foi possível encontrar o registro solicitado!'
                });
                next();
            }
            
        } catch {
            res.status(500).json({
                error: 'Não foi possível atualizar o registro solicitado!'
            });
            next();
        }
    },

    async deleteProduct(req, res, next) {
        try {
            const response = await Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            //console.log('Deletado: ', response);
            if (response !== 0) {
                return res.json({
                    success: 'Registro deletado com sucesso!'
                });
            } else {
                res.status(500).json({
                    error: 'Não foi possível deletar esse registro solicitado!'
                });
            }
        } catch {
            res.status(500).json({
                error: 'Não foi possível deletar o registro solicitado!'
            });
            next();
        }
    }
};