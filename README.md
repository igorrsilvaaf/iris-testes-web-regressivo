# Projeto de Automação de Testes - Iris Produtividade

O objetivo deste projeto é garantir a qualidade e estabilidade da aplicação Iris Produtividade através de testes automatizados robustos, de fácil manutenção e com relatórios detalhados. Os testes abrangem cenários críticos de negócio, fluxo de autenticação, navegação, funcionalidades principais e validação de mensagens de erro.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) (E2E Testing)
- JavaScript (ES6+)
- Mocha (estrutura dos testes)
- JUnit Reporter (relatórios de execução)
- Faker-br (geração de dados fake)

## Estrutura do Projeto

```
cypress/
  ├── e2e/                # Especificações dos testes E2E
  ├── fixtures/           # Massa de dados (ex: users.json)
  ├── support/            # Page Objects, comandos customizados e utilitários
  ├── config/             # Configurações de ambientes
  └── reports/            # Relatórios de execução (gerado após testes)
```

## Pré-requisitos

- Node.js >= 14.x
- npm >= 6.x
- Git

## Instalação

1. Clone este repositório:
   ```sh
   git clone <url-do-repo>
   cd testes-iris-cypress
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Renomeie `.env.example` para `.env` e ajuste os valores conforme seu ambiente.

## Executando os Testes

### Abrir o Cypress em modo interativo:
```sh
npm run cy:open
```

### Executar todos os testes em modo headless:
```sh
npm run cy:test
```

### Executar testes para ambiente desktop ou responsivo:
```sh
npm run test:desk      # Desktop
npm run test:responsive # Mobile
```

> **Dica:** Consulte o arquivo `package.json` para mais scripts de execução e opções de ambiente.

## Relatórios

- Os testes geram relatórios em formato JUnit XML na pasta `results/`.
- Para integração com CI/CD, utilize os arquivos gerados para análise de resultados.

## Boas Práticas

- Mantenha os testes organizados por funcionalidade.
- Utilize Page Objects para facilitar manutenção e reuso de código.
- Prefira seletores estáveis (ex: `data-testid`).
- Sempre limpe cookies e local storage entre testes para evitar dependências de estado.
