import productPage from "./productPage";

class MainPage {

    Locators = {

        /* cypress'te elementleri özelliklerine (attribute) göre seçmek daha güvenli bir yol olarak önerilmektedir.
        Detaylı bilgi için: https://docs.cypress.io/guides/references/best-practices#How-It-Works 
        */
        searchBar: '[placeholder="Aramak istediğiniz ürünü yazınız"]',
        searchBTN: '.search button svg',
        autoCompleteListItem: '.autocomplete-suggestion a[href*="/urun"]'

    } 

    searchAndGoToProduct(product){
        cy.get(this.Locators.searchBar).should('be.visible').click().type(product);
        cy.get(this.Locators.autoCompleteListItem).should('be.visible').click();
        cy.get(productPage.Locators.addToCartBTN).should('be.visible');
    }

}

export default new MainPage();