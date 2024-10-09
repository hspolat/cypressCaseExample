class CartPage {

    Locators = {
        completeShoppingBTN: '#checkout-complete-shopping',
        emptyCartInformation: '.information-content',
        productQty: '.product-quantity input'
    }

    checkCartQuantityAndClear(quantity) {
        cy.get(this.Locators.productQty).should('include.value', quantity);
        this.clearCart();
    }

    openCartPage() {
        cy.visit('/sepet')
        cy.get(this.Locators.completeShoppingBTN).contains('ALIŞVERİŞİ TAMAMLA').should('be.visible')
    }

    clearCart() {
        cy.contains('button', 'Sepeti Boşalt').should('be.visible').click();
        cy.contains('button', 'Tamam').should('be.visible').click();
        cy.get(this.Locators.emptyCartInformation).contains('Alışveriş sepetinizde ürün bulunmamaktadır.').should('be.visible')
    }
}

export default new CartPage();