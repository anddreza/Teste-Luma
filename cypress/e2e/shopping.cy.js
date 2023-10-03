import login from '../fixtures/login.json'
import ProductPage from '../support/pages/ProductPage'
import ShoppingPage from '../support/pages/ShoppingPage'

describe('finalizar compra', () => {
	it('finalizar compra com um item adicionado', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillWomen()
		ProductPage.addElementWomen()
		ProductPage.submit()

		cy.wait(5000)
		ShoppingPage.submitProgress()

	})
	
  })