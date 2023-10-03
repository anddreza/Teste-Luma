import data from '../fixtures/register.json'
import RegisterPage from '../support/pages/RegisterPage'

import { faker } from '@faker-js/faker';


describe('cadastrar novo usuário', () => {
	it('deve poder cadastrar novo usuário', () => {
		//foi optado por deixar fixo a massa de teste, mas também poderia ser usado a biblioteca faker, porém para não poluir o banco com vários registros foi necessário tomar essa decisão 
		const user = data.new_costumer
		RegisterPage.doLogin(user)

	})

	it('criando novos usuários com a biblioteca faker', () => {

		RegisterPage.go()
		const password = faker.internet.password()
		const user = {
			firstname: "Maria",
			lastname: faker.internet.userName(),
			email: faker.internet.email(),
			password: password,
			confirm_password: password
		}

		RegisterPage.fill(user)
		RegisterPage.pass(user)
		RegisterPage.submit()
	})

	it('deve clicar no botão de Create and Account sem nenhum campo preenchido', () => {

		const user = data.empty_all
		RegisterPage.go()
		RegisterPage.fill(user)
		RegisterPage.submit()
		cy.wait(3000)

	//DE FORMA AUTOMATIZADA APARECE OUTRA MENSAGEM DE ALERT
		cy.contains('div[class="page messages"]', 'The password needs at least 8 characters. Create a new password and try again.')
			.should('be.visible')

	})

	//deve tentar cadastrar um usuário com uma senha abaixo de 8 digitos
	it('não deve cadastrar com senha abaixo de 8 digitos', () => {
		
		const user = data.empty_password
		RegisterPage.doLogin(user)

		cy.get('div[class="mage-error"]')
			.should('be.visible')
			.should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')

	})
	
	//deve tentar cadastrar um usuario com numero de 1 a 8 
	it('não deve cadastrar com senha weak digitando de 1 a 8', () => {

		const user = data.empty_password_eight
		RegisterPage.doLogin(user)

		cy.get('div[id="password-error"]')
			.should('be.visible')
			.should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')

	})
	
	//cadastrar com ABCDEFGHI
	it('não deve cadastrar com somente letras maiusculas', () => {

		const user = data.empty_password_capital_letter
		RegisterPage.doLogin(user)

		cy.get('div[id="password-error"]')
			.should('be.visible')
			.should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
	})
}) 