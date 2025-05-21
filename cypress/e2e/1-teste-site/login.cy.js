
describe('Teste no site do WC Aquino', () => {
    beforeEach(() => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
  
    it('deve preencher campos de texto', () => {
      cy.get('#formNome').type('Thomas')
      cy.get('#formSobrenome').type('Tester')
    })
  
    it('deve selecionar uma opção no combo', () => {
      cy.get('#formEscolaridade').select('Superior')
    })
  
    it('deve marcar um checkbox', () => {
      cy.get('#formComidaPizza').check()
    })
    
  
    it('deve marcar um radio button', () => {
      cy.get('#formSexoMasc').check()
    })

    it('deve validar mensagem de erro ao submeter sem preencher o nome', () => {
        cy.get('#formCadastrar').click()
      
        cy.on('window:alert', (msg) => {
          expect(msg).to.equal('Nome eh obrigatorio')
        })
      })
      
      it('deve validar mensagem de erro ao submeter sem preencher o sobrenome', () => {
        cy.get('#formNome').type('Thomas')
        cy.get('#formCadastrar').click()
      
        cy.on('window:alert', (msg) => {
          expect(msg).to.equal('Sobrenome eh obrigatorio')
        })
      })
      
  
    it('deve submeter o formulário', () => {
      cy.get('#formNome').type('Thomas')
      cy.get('#formSobrenome').type('QA')
      cy.get('#formSexoMasc').check()
      cy.get('#formComidaPizza').check()
      cy.get('#formEscolaridade').select('Superior')
      cy.get('#formEsportes').select('Futebol')
      cy.get('#formCadastrar').click()
  
      cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
  })
  