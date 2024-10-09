class ProductPage {

    Locators = {
        addToCartBTN: '.add-to-cart-button',
        selectQty: '#qty-input', //'[name="qty-input"]'
        informationCart: '.shopping-information-cart .shopping-information-cart-inside'
    }

    addToCartAndCheckInformation(quantity) {
        cy.get(this.Locators.selectQty).select(quantity);

        cy.get(this.Locators.addToCartBTN)
            .should('be.visible')
            .click();

        cy.get(this.Locators.informationCart)
            .should('contain', 'SEPETİNİZE EKLENMİŞTİR')
            .and('be.visible')
    }
}

export default new ProductPage();