import { error } from "console";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.sqlite", (err) => {
    if (err) {
        console.error("Erro ao conectar ao Banco de Dados", error.message);
    } else {
        console.log("Conectado ao Banco de Dados");
    }
});

export default db;
