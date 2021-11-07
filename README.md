# Iniciando o servidor

## Banco de dados

A princípio para rodar no modo dev é necessário inserir um usuário válido para acessar o mongo, assim como a base __ho-database__

Com o docker rodando execute os comandos abaixo:

```sh
# conecta no docker
docker exec -it ho-mongo bash

# conecta na base de dados
mongo -u ho_root -p

# adiciona uma base de dados caso não exista
use ho-database

# adiciona usuário para acesso ao banco
db.createUser({
    user: 'ho_baseapi',
    pwd: '562f71639f6c004e088193f3',
    roles: [ { role: 'readWrite', db: 'baseapi'} ],
    passwordDigestor: 'server'
});
```

## Docker

Para iniciar o projeto é necessário ter o docker e o docker-compose instalado.

Instale as dependências rodando o comando:

```sh
npm install
```

Na primeira vez que iniciar o projeto é necessário gerar o build do Dockerfile com o comando:

```sh
docker-compose up --build
```

Para rodar o projeto basta executar:

```sh
docker-compose up
```

Agora tudo deve estar ok, verifique as informações de conexão no arquivo `src/config/database`

Se tudo estiver ok a api e a documentação deve estar rodando nos endereços:

**API**: <http://localhost:4444>

**Documentação de endpoints**: <http://localhost:4444/swagger>

## NGROK

Em alguns navegadores para acessar o swagger ou a documentação do código, será preciso rodar em modo https, para isso basta executar o ngrok

```bash
ngrok http 4444
```
