# Desafio_webmotors

Este projeto consiste em um crud de anuncios de veiculos.

## Dependencias

- body-parser: "^1.19.0"
- cors: "^2.8.5"
- dotenv: "^10.0.0"
- express: "^4.17.1"
- mysql2: "^2.3.3-rc.0"
- sequelize: "^6.9.0"


## Routes

### post ("/announcement")

Cadastra novo aluno no banco de dados. O corpo da deve conter todos os campos do anuncio a ser cadastrado
- body
  { 
    marca,
    modelo,
    versao,
    ano,
    quilometragem,
    observacao
  })

### GET ("/announcement")

Retorna todos os itens cadastrados

### put ("/announcement:id")

Atualiza um cadastro no banco. exige um id passodo no endpont e o corpo da requisição deve conter a chave a ser modificada

- body
  { 
    marca: "Honda,
  })

### delete ("/announcement:id")

Delete im item do banco de acordo com id.