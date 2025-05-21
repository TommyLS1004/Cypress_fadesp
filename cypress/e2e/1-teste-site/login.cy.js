
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

  it('deve simular prompt e cancelar no confirm', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('10')
      const confirmStub = cy.stub(win, 'confirm').returns(false)
      const alertStub = cy.stub(win, 'alert')
  
      cy.get('#prompt').click().then(() => {
        expect(confirmStub.getCall(0)).to.be.calledWith('Era 10?')
        expect(alertStub.getCall(0)).to.be.calledWith(':(')
      })
    })
  })
  it('deve simular prompt, confirmar valor e verificar o alert final', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('42') // Simula o valor digitado no prompt
  
      // Stub do confirm
      const confirmStub = cy.stub(win, 'confirm').returns(true)
      const alertStub = cy.stub(win, 'alert') // Captura qualquer alert
  
      // Clica no botão que ativa os diálogos
      cy.get('#prompt').click().then(() => {
        // Valida se o confirm recebeu a mensagem certa
        expect(confirmStub.getCall(0)).to.be.calledWith('Era 42?')
  
        // Valida se o alert final foi ":D"
        expect(alertStub.getCall(0)).to.be.calledWith(':D')
      })
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
  