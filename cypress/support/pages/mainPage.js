class MainPage {

    Locators = {

        /* cypress'te elementleri özelliklerine (attribute) göre seçmek daha güvenli bir yol olarak önerilmektedir.
        Detaylı bilgi için: https://docs.cypress.io/guides/references/best-practices#How-It-Works 
        */
        searchBar: '[placeholder="Aramak istediğiniz ürünü yazınız"]',
        searchBTN: '.search button svg',

    } 

    searchProduct(product){
        cy.get(this.Locators.searchBar).should('be.visible').click().type(product);
        cy.get(this.Locators.searchBTN).should('be.visible').click();
        cy.url().should('include', '/arama')
    }

}

export default new MainPage();