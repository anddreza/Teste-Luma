class ProductPage{
	go(){
		//tela interativa, devemos seguir e verificar urls, essa função foi criada somente para registro
	}

	fillWomen(){
		cy.contains('a[class="level-top ui-corner-all"]', 'Women')
			.should('be.visible')
			.click()
	}

	addElementWomen(){
		//Escolher produto Hot Sellers -> Radiant Tee
		cy.contains('div[class="product-item-info"]', 'Radiant Tee')
			.should('be.visible')
			.click()
		//Escolher produto com tamanho
		cy.get('div[id="option-label-size-157-item-171"]')
			.should('be.visible')
			.click()
		//Escolher produto com cor
		cy.get('div[id="option-label-color-93-item-50"]')
			.should('be.visible')
			.click()
	}

	fillTops(){
		cy.visit('https://magento2-demo.magebit.com/women/tops-women.html')

		cy.get('div[id="product-item-info_1052"]')
			.should('be.visible')
			.click()

		//produto com tamanho
		cy.get('div[id="option-label-size-157-item-172"]')
			.should('be.visible')
			.click()
		//Escolher produto com cor
		cy.get('div[id="option-label-color-93-item-57"]')
			.should('be.visible')
			.click()
	}

	fillBottoms(){
		cy.visit('https://magento2-demo.magebit.com/women/bottoms-women.html')

		cy.get('div[id="product-item-info_1848"]')
			.click()
		
		cy.get('div[id="option-label-size-157-item-175"]')
			.click()
		
		cy.get('div[id="option-label-color-93-item-50"]')
			.click()
	}

	fillBags(){
		cy.visit('https://magento2-demo.magebit.com/gear/bags.html')
		cy.get('div[id="product-item-info_6"]')
			.click()
	}

	submit(){
		//Adicionar ao carrinho 	
		cy.contains('button', 'Add to Cart')
			.click() 
	}
}

export default new ProductPage()