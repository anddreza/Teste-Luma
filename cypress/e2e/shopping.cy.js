import login from '../fixtures/login.json'
import ProductPage from '../support/pages/ProductPage'
import ShoppingPage from '../support/pages/ShoppingPage'

describe('finalizar compra', () => {
	it('finalizar compra com item(ns) adicionado(s)', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillWomen()
		ProductPage.addElementWomen()
		ProductPage.submit()

		cy.wait(5000)
		ShoppingPage.submitProgress()

	})

	it('remover item adicionado', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillWomen()
		ProductPage.addElementWomen()
		ProductPage.submit()
		ShoppingPage.go()

		cy.get('a[class="action action-delete"]')
			.click()

	})

	it.only('adicionar mais itens a somente um item', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillWomen()
		ProductPage.addElementWomen()
		ProductPage.submit()
		ShoppingPage.go()

		cy.get('input[class="input-text qty"]')
			.clear()
			.type("2")
	})
	
  })