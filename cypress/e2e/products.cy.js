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
		
		cy.get('div[id="option-label-size-157-item-172"]')
			.should('be.visible')
			.click()
		//Escolher produto com cor
		cy.get('div[id="option-label-color-93-item-57"]')
			.should('be.visible')
			.click()
	})
}) 