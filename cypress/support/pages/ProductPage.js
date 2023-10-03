class ProductPage{
	go(){
		//tela interativa, devemos seguir e verificar onde devemos estar, essa função foi criada somente para registro
	}

	fillWomen(){
		cy.contains('a[class="level-top ui-corner-all"]', 'Women')
			.should('be.visible')
			.click()
	}

	fillTops(){
		cy.visit('https://magento2-demo.magebit.com/women/tops-women.html')

		cy.get('div[id="product-item-info_1052"]')
			.should('be.visible')
			.click()
	}

	submit(){
		//Adicionar ao carrinho 	
		cy.contains('button', 'Add to Cart')
			.click() 
	}
}

export default new ProductPage()