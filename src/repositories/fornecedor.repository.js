import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS fornecedores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cnpj TEXT NOT NULL UNIQUE,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
    )
`);

function createFornecedorRepository(novoFornecedor) {
    return new Promise((resolve, reject) => {

        const { cnpj, nome, email } = novoFornecedor;

        db.run(
            `INSERT INTO fornecedores (cnpj, nome, email) VALUES (?, ?, ?)`,
            [cnpj, nome, email],
            function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, ...novoFornecedor });
            }
        );
    });
}

function findAllFornecedoresRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM fornecedores`, [], (err, rows) => {
            if (err) {
                return reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function findFornecedorByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM fornecedores WHERE id = ?`, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function updateFornecedorRepository(id, fornecedorAtualizado) {
    return new Promise((resolve, reject) => {
        const { cnpj, nome, email } = fornecedorAtualizado;
        db.run(
            `UPDATE fornecedores SET cnpj = ?, nome = ?, email = ? WHERE id = ?`,
            [cnpj, nome, email, id],
            (err) => {
                if (err) {
                    return reject(err);
                } else {
                    resolve({ id, ...fornecedorAtualizado });
                }
            }
        );
    });
}

async function deleteFornecedorRepository(id) {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM fornecedores WHERE id = ?`, [id],
            err => {
                if (err) {
                    return reject(err);
                } else {
                    resolve({ message: `Fornecedor com id ${id} deletado com sucesso.` });
                }
            });
    });
}

export default {
    createFornecedorRepository,
    findAllFornecedoresRepository,
    findFornecedorByIdRepository,
    updateFornecedorRepository,
    deleteFornecedorRepository,
};

