import fornecedorRepository from "../repositories/fornecedor.repository.js";


async function createFornecedorService(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);

    if (!fornecedor) {
        throw new Error('Erro ao criar novo fornecedor!');
    }

    return fornecedor;
}

async function findAllFornecedoresService() {
    const fornecedores = await fornecedorRepository.findAllFornecedoresRepository();
    return fornecedores;
}

async function findFornecedorByIdService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);
    if (!fornecedor) {
        throw new Error('Fornecedor não encontrado!');
    }
    return fornecedor;
}

async function updateFornecedorService(id, fornecedorAtualizado) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);
    if (!fornecedor) {
        throw new Error('Fornecedor não encontrado!');
    }

    const fornecedorAtualizadoResult = await fornecedorRepository.updateFornecedorRepository(id, fornecedorAtualizado);
    if (!fornecedorAtualizadoResult) {
        throw new Error('Erro ao atualizar o fornecedor!');
    }
    return fornecedorAtualizadoResult;
}

async function deleteFornecedorService(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);
    if (!fornecedor) {
        throw new Error('Fornecedor não encontrado!');
    }
    const mensagemretorno = await fornecedorRepository.deleteFornecedorRepository(id);
    if (!mensagemretorno) {
        throw new Error('Erro ao deletar o fornecedor!');
    }
    return mensagemretorno;
}
export default {
    createFornecedorService,
    findAllFornecedoresService,
    findFornecedorByIdService,
    updateFornecedorService,
    deleteFornecedorService,
}
