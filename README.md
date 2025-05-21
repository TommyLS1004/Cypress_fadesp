# Testes Automatizados com Cypress - Site do WC Aquino

Este projeto contém testes automatizados utilizando o Cypress, com foco na prática de interações com componentes HTML, janelas de diálogo (`alert`, `confirm`, `prompt`) e testes de API no site de testes do fakerestapi.

📍 Site testado: [https://www.wcaquino.me/cypress/componentes.html](https://fakerestapi.azurewebsites.net/index.html)

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

### ✅ Casos de teste detalhados
1. **Preencher campos de texto**  
   - Preenche os campos `#formNome` e `#formSobrenome` com valores.

2. **Selecionar uma opção no combo**  
   - Seleciona a opção "Superior" no campo `#formEscolaridade`.

3. **Marcar um checkbox**  
   - Marca o checkbox `#formComidaPizza`.

4. **Marcar um radio button**  
   - Marca o radio button `#formSexoMasc`.

5. **Validar mensagem de erro ao submeter sem preencher o nome**  
   - Clica no botão `#formCadastrar` sem preencher o campo `#formNome` e valida o alerta com a mensagem "Nome eh obrigatorio".

6. **Validar mensagem de erro ao submeter sem preencher o sobrenome**  
   - Preenche o campo `#formNome`, clica no botão `#formCadastrar` e valida o alerta com a mensagem "Sobrenome eh obrigatorio".

7. **Simular prompt e cancelar no confirm**  
   - Simula um valor no `prompt`, cancela no `confirm` e valida o alerta final com a mensagem ":(".

8. **Simular prompt, confirmar valor e verificar o alert final**  
   - Simula um valor no `prompt`, confirma no `confirm` e valida o alerta final com a mensagem ":D".

9. **Submeter o formulário**  
   - Preenche todos os campos do formulário, submete e valida a mensagem "Cadastrado!" no resultado.

---

### ✅ Testes de API - `/Books`
1. **Listar todos os livros (GET)**  
   - Envia uma requisição `GET` para o endpoint `/Books`.
   - Valida que o status da resposta é `200`.
   - Verifica que o corpo da resposta contém uma lista de livros com tamanho maior que 0.

2. **Criar um novo livro (POST)**  
   - Envia uma requisição `POST` para o endpoint `/Books` com os dados de um novo livro.
   - Valida que o status da resposta é `200`.
   - Verifica que o título do livro retornado na resposta é igual ao título enviado.

3. **Atualizar um livro existente (PUT)**  
   - Envia uma requisição `PUT` para o endpoint `/Books/1` com os dados atualizados de um livro.
   - Valida que o status da resposta é `200`.
   - Verifica que o título do livro retornado na resposta é igual ao título atualizado enviado.

4. **Excluir um livro existente (DELETE)**  
   - Primeiro, cria um novo livro enviando uma requisição `POST` para o endpoint `/Books`.
   - Em seguida, envia uma requisição `DELETE` para o endpoint `/Books/{id}` com o ID do livro recém-criado.
   - Valida que o status da resposta é `200`.

---

## 📁 Estrutura do projeto

```
teste-cypress/
├── cypress/
│   └── e2e/
│       └── 1-teste-site
|           ├──2-teste-site-typescript
|              └── formulario.cy.ts
|       └── login.cy.js
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
- TypeScript
---

## ✍️ Autor

Desenvolvido por **Thomas** como teste para um processo seletivo automatizados com Cypress.

---

