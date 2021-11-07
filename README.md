# Iniciando o servidor

## Banco de dados

A princípio para rodar no modo dev é necessário inserir um usuário válido para acessar o mongo, assim como a base __baseapi__

Com o docker rodando basta executar os comandos a baixo:

    # conectar no docker
    docker exec -it ho-mongo bash

    # conectar a base de dados
    mongo -u ho_root -p

    # adiciona uma base de dados caso não exista
    use baseapi

    # adiciona usuário para acesso ao banco
    db.createUser({
        user: 'ho_baseapi',
        pwd: 'UTTEddFDlEahlnZOVmAhj8oO',
        roles: [ { role: 'readWrite', db: 'baseapi'} ],
        passwordDigestor: 'server'
    });

## Docker

Para iniciar o projeto é necessário ter o docker e o docker-compose instalado.

Instale as dependências rodando o comando:

```sh
npm install
```

Na primeira vez que iniciar o projeto é necessário gerar o build da imagem do node com o comando:

```sh
docker-compose up --build
```

Para rodar o projeto basta executar:

```sh
docker-compose up
```

Agora tudo deve estar ok, verifique as informações de conexão no arquivo `config/database`

Se tudo estiver ok a api e a documentação deve estar rodando nos endereços:<br />

**API**: <http://localhost:4444>

**Documentação de código**: <http://localhost:4444/docs>

**Documentação de endpoints**: <http://localhost:4444/swagger>

**Admin Mongo**: <http://localhost:8081>

## NGROK

Em alguns navegadores para acessar o swagger ou a documentação do código, será preciso rodar em modo https, para isso basta executar o ngrok

```bash
ngrok http 4444
```
