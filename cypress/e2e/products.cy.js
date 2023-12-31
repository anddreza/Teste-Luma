import login from '../fixtures/login.json'
import ProductPage from '../support/pages/ProductPage'
describe('adicionar produto ao carrinho', () => {
	it('adicionar prod da tela Women ao carrinho', () => {
		const user = login.usuario
		cy.adminLogin()

		cy.wait(5000)

		ProductPage.fillWomen()
		ProductPage.addElementWomen()
		ProductPage.submit()
	})

	it('adicionar produto da tela de Tops ao carrinho', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillTops()
		ProductPage.submit()
	})

	//adicionar produtos de telas diferentes 
	it('adicionar produto Bottoms e Gear -> Bags', () => {
		const user = login.usuario
		cy.adminLogin()

		ProductPage.fillBottoms()
		ProductPage.submit()
		ProductPage.fillBags()
		ProductPage.submit()

	})
}) 