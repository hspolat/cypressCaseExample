# Çalışma Hakkında

- Bu çalışma, e ticaret platformunda bir ürünün aratılarak detayına gidilmesi, sepete eklenmesi ve sepete eklendiğinin doğrulanmasını sağlayan bir otomasyondur. 
- Bu çalışma Page Object Model yaklaşımı ile yazılmıştır.
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress "https://docs.cypress.io/guides/overview/why-cypress açmak için ctrl-klik")  ile kodlanan bu otomasyon ile;
    - Farklı tarayıcılarda test koşulabilir. 
    - Farklı ekran boyutlarında test koşulabilir.  (responsive - desktop, tablet, mobile) 

## Nasıl Çalışır?

***Testleri çalıştırabilmek için bilgisayarınızda npm komut satırı aracı kurulu olmalıdır.***

1.  Projeyi bilgisayarınıza indirdikten sonra proje dizininde terminali açıp "npm run test" komutunu girebilirsiniz. 
2.  Bu komut, proje dizinindeki package.json içeriğinde yer alan "scripts" objesindeki "test" komutunu çalıştıracaktır.
3.  Bu komut otomasyonu headed ( arayüz olmadan ) modda çalıştırır. Test koşumundan sonra aşağıdakine benzer bir sonuç ile karşılaşmanız beklenir: <img src="cypress\fixtures\images\image.png" alt="20d1477ae8e5b533bab45b88eb169034.png" width="681" height="400">
4.  package.json içeriğinde yer alan "scripts" objesine farklı test komutları eklenmiştir. Bu komutlarla testi farklı tarayıcılar için de çalıştırabilirsiniz. Ayrıca test komutlarını özelleştirmek için [bu dokümandan](https://docs.cypress.io/guides/guides/command-line) faydalanabilirsiniz.

### Cypress GUI ile Arayüz Üzerinden Testin Çalıştırılması 
1. Arayüz ile testi çalıştırmak için proje dizininde açtığınız terminalde "npx cypress open" komutunu girin. Bu komut Cypress arayüzünü açacaktır.
2. Açılan pencerede E2E seçeneğini seçip ilerleyebilirsiniz.
3. Sonrasında hangi tarayıcı ile devam etmek istiyorsanız o tarayıcıyı seçin.
4. "Specs" penceresinin açıldığını göreceksiniz. Cypress burada proje dizinindeki .cy.js uzantılı spec dosyalarını listeler. Bu dosyalardan herhangi birine tıkladığınızda test kodlarınız çalışmaya başlayacaktır. 

## Test Sonuç Raporu

1.  Her koşumdan sonra cypress/reports dizini altında html dosya formatında aşağıdaki gibi yeni bir rapor oluşturulur:
    <img src="cypress\fixtures\images\htmlreport.png" alt="cypress\fixtures\images\htmlreport.png" width="713" height="251">
2.  Rapor oluşturmak için projede [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) aracından faydalanılmıştır.
