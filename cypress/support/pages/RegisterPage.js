
class RegisterPage{

	go(){
		cy.visit('https://magento2-demo.magebit.com/customer/account/create/')
	}
	fill(user){
	/* 	cy.get('input[id="firstname"]').as('firstname')
		cy.get('input[id="lastname"]').as('lastname')
		cy.get('input[id="email_address"]').as('email_address') */

		if(user.firstname){
			cy.get('input[id="firstname"]').type(user.firstname)
		}
		
		if(user.lastname){
			cy.get('input[id="lastname"]').type(user.lastname)
		}

		if(user.email){
			cy.get('input[id="email_address"]').type(user.email)
		}
	}

	pass(user){
		cy.get('input[id="password"]').type(user.password)
		cy.get('input[id="password-confirmation"]').type(user.confirm_password)
	}

	submit() {
		cy.contains('button', 'Create an Account')
			.click()
	}

	doLogin(user){
		this.go()
		this.fill(user)
		this.pass(user)
		this.submit()
	}
}	

export default new RegisterPage()
