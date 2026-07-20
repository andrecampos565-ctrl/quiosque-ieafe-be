// Conexão com banco de dados IEAFE BE

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./ieafe.db', (err) => {

    if (err) {
        console.log("Erro no banco:", err);
    } else {
        console.log("Banco IEAFE BE conectado!");
    }

});

module.exports = db;
