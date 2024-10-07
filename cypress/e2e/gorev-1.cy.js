/*
    Kullanılan dış kaynaklar: 
    - test sonuç raporları için cypress-mochawesome-reporter aracı kullanılmıştır. (https://www.npmjs.com/package/cypress-mochawesome-reporter)
*/

import mainPage from "../support/pages/mainPage";

const screenTypes = ['macbook-16', 'ipad-2', 'iphone-xr', [414, 846]];

describe("Görev 1 - Test Otomasyonu Çalışması", () => {
    beforeEach(() => {
        cy.visit('/') //baseUrl'i aç (https://testcase.myideasoft.com/)
    })

    screenTypes.forEach((screen) => {
        it(`${screen} ekran boyutunda arama işlemi ile ürüne gidilip sepete ekleme işleminin doğrulanması`, () => {
            if(Cypress._.isArray(screen)){
                cy.viewport(screen[0], screen[1])
            } else {
                cy.viewport(screen)
            }
            
            mainPage.searchProduct('Ürün');
        })
    })
})


