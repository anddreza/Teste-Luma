class LoginPage{

	go(){
		cy.visit('https://magento2-demo.magebit.com/customer/account/login')

	}

	fill(user){

		if(user.email){
			cy.get('input[id="email"]').type(user.email)
		}
		
		if(user.password){
			cy.get('input[name="login[password]"]').type(user.password)
		}
		

	/* 	user.email ? cy.get('#email').type(user.email) : cy.log('empty email')
		user.password ? cy.get('password').type(user.password) : cy.log('empty password') */

	}

	submit() {
		cy.contains('button', 'Sign In')
			.click()
	}

}

export default new LoginPage()