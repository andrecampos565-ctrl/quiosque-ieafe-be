-- Banco de dados do Quiosque IEAFE BE

CREATE TABLE visitantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone VARCHAR(30),
    email VARCHAR(100),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pedidos_oracao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    pedido TEXT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_evento VARCHAR(100),
    data_evento DATE,
    descricao TEXT
);
-- Tabela de contribuições

CREATE TABLE contribuicoes (

    id INT PRIMARY KEY AUTO_INCREMENT,

    nome VARCHAR(100),

    tipo VARCHAR(50),

    valor DECIMAL(10,2),

    forma_pagamento VARCHAR(50),

    referencia VARCHAR(100),

    data_contribuicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
