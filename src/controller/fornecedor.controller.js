import fornecedorService from "../services/fornecedor.service.js";

async function createFornecedorController(req, res) {
    const novoFornecedor = req.body;
    try {
        const fornecedor = await fornecedorService.createFornecedorService(novoFornecedor);
        res.status(201).json(fornecedor);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllFornecedoresController(req, res) {
    try {
        const fornecedores = await fornecedorService.findAllFornecedoresService();
        res.status(200).send({ fornecedores });
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function findFornecedorByIdController(req, res) {
    const { id } = req.params;
    try {
        const fornecedor = await fornecedorService.findFornecedorByIdService(id);
        res.status(200).send({ fornecedor });
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function updateFornecedorController(req, res) {
    const { id } = req.params;
    const fornecedorAtualizado = req.body;

    try {
        const fornecedor = await fornecedorService.updateFornecedorService(id, fornecedorAtualizado);
        res.status(200).send({ fornecedor });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function deleteFornecedorController(req, res) {
    const { id } = req.params;
    try {
        const mensagemretorno = await fornecedorService.deleteFornecedorService(id);
        res.status(200).send({ mensagemretorno });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default {
    createFornecedorController,
    findAllFornecedoresController,
    findFornecedorByIdController,
    updateFornecedorController,
    deleteFornecedorController,
}

