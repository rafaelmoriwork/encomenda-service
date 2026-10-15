# Encomenda Service

Microserviço responsável pelo gerenciamento de encomendas, parte de um projeto de estudos de um TMS (Transportation Management System) em microserviços.

Este serviço é orquestrado pelo projeto de infraestrutura de containers [gestao-encomendas-infra](https://github.com/rafaelmoriwork/gestao-encomendas-infra), onde também está a explicação completa sobre o sistema e como subir todos os serviços.

## Configuração

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Preencha as variáveis de conexão com o banco de dados:

| Variável      | Descrição                     |
| ------------- | ----------------------------- |
| `DB_HOST`     | Host do banco de dados        |
| `DB_PORT`     | Porta do banco de dados       |
| `DB_USERNAME` | Usuário do banco de dados     |
| `DB_PASSWORD` | Senha do banco de dados       |
| `DB_DATABASE` | Nome do banco de dados        |

Opcionalmente, `PORT` define a porta da aplicação (padrão: `3000`).

## Documentação da API

A documentação em Swagger fica disponível em `/docs` com a aplicação em execução, por exemplo: http://localhost:3000/docs
