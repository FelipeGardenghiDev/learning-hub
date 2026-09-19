<?php

// Código de conexão do php com o banco de dados sqlite via PDO
$pdo = new PDO('sqlite:./banco.db');

// Populando a tabela de entidades
$pdo->exec('INSERT INTO ENTIDADES (
                NOME, 
                RAZAO_SOCIAL, 
                TELEFONE, 
                TELEFONE_2, 
                EMAIL, 
                CPF, 
                CNPJ, 
                ENDERECO_RUA, 
                ENDERECO_NUMERO, 
                ENDERECO_COMPLEMENTO, 
                ENDERECO_REFERENCIA, 
                ENDERECO_CEP, 
                ENDERECO_BAIRRO, 
                ENDERECO_CIDADE, 
                ENDERECO_UF, 
                ENDERECO_PAIS, 
                TIPO_ENTIDADE, 
                CATEGORIA_ENTIDADE, 
                DATA_CADASTRO, 
                DATA_ATUALIZACAO
                ) 
            VALUES (
                "Cliente 1", 
                "", 
                "1139457697", 
                "11988888888", 
                "cliente1@email.com",
                "59471250697",
                "",
                "Rua do Cliente 1",
                "123",
                "Apto 1",
                "Próximo ao parque",
                "12345678",
                "Bairro do Cliente 1",
                "São Paulo",
                "SP",
                "Brasil",
                "Pessoa Física",
                "Cliente",
                DATE("now"),
                DATE("now")
                )'
);

$pdo->exec('INSERT INTO ENTIDADES (
    NOME, 
    RAZAO_SOCIAL, 
    TELEFONE, 
    TELEFONE_2, 
    EMAIL, 
    CPF, 
    CNPJ, 
    ENDERECO_RUA, 
    ENDERECO_NUMERO, 
    ENDERECO_COMPLEMENTO, 
    ENDERECO_REFERENCIA, 
    ENDERECO_CEP, 
    ENDERECO_BAIRRO, 
    ENDERECO_CIDADE, 
    ENDERECO_UF, 
    ENDERECO_PAIS, 
    TIPO_ENTIDADE, 
    CATEGORIA_ENTIDADE, 
    DATA_CADASTRO, 
    DATA_ATUALIZACAO
    ) 
VALUES (
    "Fornecedor 1", 
    "Razão Social Fornecedor 1", 
    "1139421569", 
    "", 
    "fornecedor1@email.com",
    "",
    "58675049000186",
    "Rua do Fornecedor 1",
    "5324",
    "Bloco B",
    "Do lado do museu",
    "15968405",
    "Bairro do Cliente 1",
    "Rio de Janeiro",
    "RJ",
    "Brasil",
    "Pessoa Jurídica",
    "Fornecedor",
    DATE("now"),
    DATE("now")
    )'
);