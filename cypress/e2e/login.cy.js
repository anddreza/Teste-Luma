import data from '../fixtures/login.json'
import LoginPage from '../support/pages/LoginPage'
describe('login', ()=> {
	//fixado um perfil 
	it('deve logar com qualquer perfil', () => {
		
		const user = data.usuario
		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()
		cy.wait(10000)

		//Welcome, Veronica Costello!
		cy.contains('span.logged-in', 'Welcome, '+user.name+'!')
			.should('be.visible')
			

	})

	it('não deve logar com senha incorreta', () => {

		const user = data.inv_pass

		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()

		cy.contains('div.messages', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
		    .should('be.visible')
	})

	it('não deve logar com email não cadastrado', () => {

		const user = data.email_not_found

		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()

		cy.contains('div.messages', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
		    .should('be.visible')
	})

	it('não deve logar com email incorreto', () => {

		const user = data.inv_email

		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()

		cy.wait(5000)
		 cy.get('div[id="email-error"]')
			.should('be.visible')
			.should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).') 
		    
	})

	it('não deve logar com email em branco', () => {

		const user = data.empty_email

		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()

		cy.contains('div.messages', 'A login and a password are required.')
		    .should('be.visible')
	})

	it('não deve logar com senha em branco', () => {

		const user = data.empty_pass

		LoginPage.go()
		LoginPage.fill(user)
		LoginPage.submit()

		cy.contains('div.messages', 'A login and a password are required.')
		    .should('be.visible')
	})



	
})