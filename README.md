# Testes Automatizados com Cypress - Site do WC Aquino

Este projeto contém testes automatizados utilizando o Cypress, com foco na prática de interações com componentes HTML e janelas de diálogo (`alert`, `confirm`, `prompt`) no site de testes do professor Wagner Caetano.

📍 Site testado: [https://www.wcaquino.me/cypress/componentes.html](https://www.wcaquino.me/cypress/componentes.html)

---

## 🧪 O que foi testado?

### ✅ Campos de formulário
- Preenchimento de campos de texto (`input`)
- Seleção de opções em `select` simples e múltiplo
- Marcação de `checkbox` e `radio`

### ✅ Validações com alertas
- Verificação de mensagens de erro usando `window.alert`
- Validação do envio de formulário incompleto

### ✅ Seleção múltipla
- Seleção de múltiplas opções no campo "Esportes" com `select[multiple]`

### ✅ Diálogos JavaScript
- `alert`: validação de mensagens simples
- `confirm`: simulação de clique em "OK" e "Cancelar"
- `prompt`: simulação de entrada de texto no popup

---

## 📁 Estrutura do projeto

```
teste-cypress/
├── cypress/
│   └── e2e/
│       └── 1-teste-site
|           ├──2-teste-site-typescript
|              └── formulario.cy.ts
|           └── login.cy.js
├── cypress.config.js
├── node_modules/
├── package.json
└── README.md
```

---

## 🚀 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/teste-cypress.git
   cd teste-cypress
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress (modo interativo):
   ```bash
   npx cypress open
   ```

4. Execute os testes (modo headless):
   ```bash
   npx cypress run
   ```

---

## 📚 Tecnologias usadas

- [Cypress](https://www.cypress.io/) – Framework de testes end-to-end
- JavaScript ES6

---

## ✍️ Autor

Desenvolvido por **Thomas** como teste para um processo seletivo automatizados com Cypress.

---
-y
   ```

