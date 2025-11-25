import prisma from '../../prisma/cliente';

const { randomInt } = require('crypto');
const bcrypt = require('bcryptjs');

class integranteController {
    // Mostrar lista de integrantes
    async index(req, res) {
        try {
            const integrantesBuscados = await prisma.integrantes.findMany({
                select: {
                    id: true,
                    nome: true,
                    doc_id: true,
                    email: true,
                    senha: true
                }
            });
            return res.status(200).json(integrantesBuscados);
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar integrantes' });
        }
    }

    // Mostrar detalhes de um integrante
    async show(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de integrante não enviado'})
            }

            const integranteBuscado = await prisma.integrantes.findUnique({ 
                where: { id } ,
                select: {
                    id: true,
                    nome: true,
                    doc_id: true,
                    email: true,
                    senha: true
            }});

            // Verifica se o integrante existe
            if (!integranteBuscado) {
                return res.status(404).json({ errors: ['O integrante não foi encontrado ou não existe'] });
            }

            return res.status(200).json(integranteBuscado);
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar integrante' });
        }
    }

    // Criar um novo integrante
    async create(req, res) {
        try {
            const { nome, doc_id, email, senha } = req.body;

            // Verifica se o nome foi enviado
            if (!nome || !doc_id || !email || !senha) {
                return res.status(400).json({ errors: 'Dados não enviados' });
            }

            const integranteExistente = await prisma.integrantes.findUnique({ where: { doc_id } });

            // Verifica se já existe um integrante com o mesmo nome
            if (integranteExistente) {
                return res.status(409).json({ errors: 'Já existe um integrante com esse doc_id' });
            }
            
            // Hash da senha antes de salvar
            const randomSalt = randomInt(10, 16);
            const passwordHash = await bcrypt.hash(senha, randomSalt);

            const novoIntegrante = await prisma.integrantes.create({ 
                data: { nome, doc_id, email, senha: passwordHash }
            });
            const integranteCriado = await prisma.integrantes.findUnique({ 
                where: { id: novoIntegrante.id },
                select: {
                    id: true,
                    nome: true,
                    doc_id: true,
                    email: true,
                    senha: true
                }
            });
            return res.status(201).json({msg: "Integrante criado com sucesso",
                                        integranteCriado});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ errors: 'Erro ao criar integrante' });
        }
    }

    // Atualizar um integrante existente
    async update(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de integrante não enviado'})
            }

            const integranteExistente = await prisma.integrantes.findUnique({ where: { id } });

            // Verifica se já existe um integrante com o mesmo nome
            if (!integranteExistente) {
                return res.status(409).json({ errors: 'Integrante com esse ID não existe ou não foi encontrado' });
            }

            const { nome, doc_id, email, senha } = req.body;

            // Verifica se o nome foi enviado
            if (Object.keys(req.body).length === 0){
                return res.status(400).json({ errors: 'Nenhum dado enviado' });
            }

            // Se a senha for fornecida, hash ela antes de atualizar
            if (senha) {
                const randomSalt = await randomInt(10, 16);
                req.body.senha = await bcrypt.hash(senha, randomSalt);
            }
            const integranteEditado = await prisma.integrantes.update({ 
                where: { id },
                data: req.body});
            const integranteNovoEditado = await prisma.integrantes.findUnique({ 
                where: { id: integranteEditado.id },
                select: {
                    id: true,
                    nome: true,
                    doc_id: true,
                    email: true,
                    senha: true
                }
            });
            return res.status(201).json({msg: "Integrante editado com sucesso",
                                        integranteNovoEditado});
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao editar integrante' });
        }
    }

    // Deletar um integrante
    async delete(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de integrante não enviado'})
            }

            const integranteDeletado = await prisma.integrantes.findUnique({ 
                where: { id },
                select: {
                    id: true,
                    nome: true,
                    doc_id: true,
                    email: true,
                    senha: true
            }});

            // Verifica se o integrante existe
            if (!integranteDeletado) {
                return res.status(404).json({ errors: ['O integrante não foi encontrado ou não existe'] });
            }

            await prisma.integrantes.delete({ where: { id } });
            return res.status(200).json({msg: "Integrante deletado com sucesso",
                                        integranteDeletado});
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar integrante' });
        }
    }
}

export default new integranteController();