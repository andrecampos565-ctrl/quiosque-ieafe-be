// Backend do Quiosque IEAFE BE

const express = require('express');const db = require('./database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sistema Quiosque IEAFE BE funcionando!');
});

app.get('/visitantes', (req, res) => {
    res.json({
        mensagem: "Lista de visitantes"
    });
});

app.post('/oracao', (req, res) => {

    const pedido = req.body;

    res.json({
        mensagem: "Pedido de oração recebido!",
        dados: pedido
    });
app.post('/visitante', (req, res) => {

    const visitante = req.body;

    db.run(
        `INSERT INTO visitantes (nome, telefone, email)
        VALUES (?, ?, ?)`,
        [
            visitante.nome,
            visitante.telefone,
            visitante.email
        ],
        function(err){

            if(err){

                res.json({
                    mensagem: "Erro ao cadastrar visitante"
                });

            } else {

                res.json({
                    mensagem: "Visitante cadastrado com sucesso!"
                });

            }

        }
    );

});
});
app.get('/visitantes', (req, res) => {

    db.all(
        "SELECT * FROM visitantes ORDER BY data_cadastro DESC",
        [],
        (err, linhas) => {

            if(err){

                res.json({
                    erro: "Erro ao buscar visitantes"
                });

            } else {

                res.json(linhas);

            }

        }
    );

});
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
