class ShoppingPage{

	go(){
		cy.visit('https://magento2-demo.magebit.com/checkout/cart/')
		cy.wait(5000)
	}


	submit(){
		cy.get('button[data-role="proceed-to-checkout"]')
			.should('be.visible')
			.click()
	}

	submitNext(){
		 cy.get(':nth-child(1) > :nth-child(1) > .radio')
			.click() 
		cy.contains('button', 'Next')
			.click()
	}

	submitPlaceOrder(){
		cy.contains('button', 'Place Order')
			.click()
	}

	sucessMessage(){
		cy.get('div[class="page-title-wrapper"]')
			.should('be.visible')
	}

	submitProgress(){
		this.go()
		this.submit()
		this.submitNext()
		this.submitPlaceOrder()
		this.sucessMessage()
	}

}

export default new ShoppingPage()