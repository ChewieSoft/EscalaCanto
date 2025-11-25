import prisma from '../../prisma/cliente';
class artistaController {
    // Mostrar lista de artistas
    async index(req, res) {
        try {
            const artistasBuscados = await prisma.artistas.findMany({
                select: {
                    id: true,
                    nome: true
                }
            });
            return res.status(200).json(artistasBuscados);
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar artistas' });
        }
    }

    // Mostrar detalhes de um artista
    async show(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de artista não enviado'})
            }

            const artistaBuscado = await prisma.artistas.findUnique({ 
                where: { id } ,
                select: {
                    id: true,
                    nome: true
            }});

            // Verifica se o artista existe
            if (!artistaBuscado) {
                return res.status(404).json({ errors: ['O artista não foi encontrado ou não existe'] });
            }

            return res.status(200).json(artistaBuscado);
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar artista' });
        }
    }

    // Criar um novo artista
    async create(req, res) {
        try {
            const { nome } = req.body;

            // Verifica se o nome foi enviado
            if (!nome) {
                return res.status(400).json({ errors: 'Nome do artista é obrigatório' });
            }

            const artistaExistente = await prisma.artistas.findUnique({ where: { nome } });

            // Verifica se já existe um artista com o mesmo nome
            if (artistaExistente) {
                return res.status(409).json({ errors: 'Já existe um artista com esse nome' });
            }

            const novoArtista = await prisma.artistas.create({ data: { nome }});
            const artistaCriado = await prisma.artistas.findUnique({ 
                where: { id: novoArtista.id },
                select: {
                    id: true,
                    nome: true
                }
            });
            return res.status(201).json({msg: "Artista criado com sucesso",
                                        artistaCriado});
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao criar artista' });
        }
    }

    // Atualizar um artista existente
    async update(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de artista não enviado'})
            }

            const artistaExistente = await prisma.artistas.findUnique({ where: { id } });

            // Verifica se já existe um artista com o mesmo nome
            if (!artistaExistente) {
                return res.status(409).json({ errors: 'Artista com esse ID não existe ou não foi encontrado' });
            }

            const { nome } = req.body;

            // Verifica se o nome foi enviado
            if (!nome) {
                return res.status(400).json({ errors: 'Nome do artista é obrigatório' });
            }

            const artistaEditado = await prisma.artistas.update({ 
                where: { id },
                data: { nome }});
            const artistaNovoEditado = await prisma.artistas.findUnique({ 
                where: { id: artistaEditado.id },
                select: {
                    id: true,
                    nome: true
                }
            });
            return res.status(201).json({msg: "Artista editado com sucesso",
                                        artistaNovoEditado});
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao editar artista' });
        }
    }

    // Deletar um artista
    async delete(req, res) {
        try {
            const { id } = req.params;
            
            // Verifica se o id foi enviado
            if (!id) {
                return res.status(400).json({errors: 'ID de artista não enviado'})
            }

            const artistaDeletado = await prisma.artistas.findUnique({ 
                where: { id },
                select: {
                    id: true,
                    nome: true
            }});

            // Verifica se o artista existe
            if (!artistaDeletado) {
                return res.status(404).json({ errors: ['O artista não foi encontrado ou não existe'] });
            }

            await prisma.artistas.delete({ where: { id } });
            return res.status(200).json({msg: "Artista deletado com sucesso",
                                        artistaDeletado});
        } catch (error) {
            return res.status(500).json({ errors: 'Erro ao buscar artista' });
        }
    }
}

export default new artistaController();