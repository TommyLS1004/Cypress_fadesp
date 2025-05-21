describe('Testes de API - /Books', () => {
    const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books'
  
    it('deve listar todos os livros (GET)', () => {
      cy.request('GET', baseUrl).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.be.greaterThan(0)
      })
    })
  
    it('deve criar um novo livro (POST)', () => {
      const book = {
        id: 9999,
        title: 'Livro de Teste',
        description: 'Criado via Cypress',
        pageCount: 123,
        excerpt: 'Trecho do livro...',
        publishDate: new Date().toISOString()
      }
  
      cy.request('POST', baseUrl, book).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq(book.title)
      })
    })
  
    it('deve atualizar um livro existente (PUT)', () => {
      const updatedBook = {
        id: 1,
        title: 'Livro Atualizado',
        description: 'Descrição atualizada',
        pageCount: 222,
        excerpt: 'Trecho atualizado...',
        publishDate: new Date().toISOString()
      }
  
      cy.request('PUT', `${baseUrl}/1`, updatedBook).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq('Livro Atualizado')
      })
    })
  
    it('deve excluir um livro existente (DELETE)', () => {
      // Primeiro cria um novo livro para deletar
      const bookToDelete = {
        id: 9998,
        title: 'Livro a ser deletado',
        description: 'Será removido',
        pageCount: 100,
        excerpt: '...',
        publishDate: new Date().toISOString()
      }
  
      cy.request('POST', baseUrl, bookToDelete).then(() => {
        cy.request('DELETE', `${baseUrl}/${bookToDelete.id}`).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })
  