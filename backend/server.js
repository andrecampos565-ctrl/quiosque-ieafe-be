// Backend do Quiosque IEAFE BE

const express = require('express');

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

});
app.post('/visitante', (req, res) => {

    const visitante = req.body;

    console.log("Novo visitante:", visitante);

    res.json({
        mensagem: "Visitante cadastrado com sucesso!",
        dados: visitante
    });

});
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
