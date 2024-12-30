// wyszukiwanie w devtoolsach: tagname[wartość z atrybutem]
// #id, .class,


describe('MD4 + znajdź 5 elementów po: ', () => {

    beforeEach(()=>{
        cy.visit("https://fabrykatestow.pl/")
    })

    it('ID', () => {
        cy.log("ID: 'header-grid' is searching");
        cy.get('#header-grid');
        cy.log("ID: 'header-grid' was successfully found");

        cy.log("ID: 'menu-item-3992' is searching");
        cy.get('#menu-item-3992');
        cy.log("ID: 'menu-item-3992' was successfully found");

        cy.log("ID: 'content' is searching");
        cy.get('#content');
        cy.log("ID 'content' was successfully found");

        cy.log("ID: 'gallery-1' is searching");
        cy.get('#gallery-1');
        cy.log("ID: 'gallery-1'was successfully found");

        cy.log("ID: 'site-footer' is searching");
        cy.get('#site-footer');
        cy.log("ID: 'site-footer' was successfully found");

    })

    it('CLASS', () => {
        cy.get('.brand');
        cy.get('.elementor-icon-box-icon');
        cy.get('.elementor-image-gallery');
        cy.get('.elementor-widget-image');
        cy.get('.elementor-heading-title');
    })

    it('ATRYBUT', () => {
        cy.get('span[class="elementor-button-text"]');
        cy.get('a[data-elementor-open-lightbox="yes"]');
        cy.get('img[loading="lazy"]');
        cy.get('section[class="elementor-section elementor-top-section elementor-element elementor-element-52cd396 elementor-section-boxed elementor-section-height-default elementor-section-height-default"]');
        cy.get('button[type="submit"]');

    })

    it('TEKST', () => {
        cy.get('b').contains("Widzimy się?");
        cy.get('p').contains("OPINIE NA TEMAT SZKOLEŃ");
        cy.contains("Sprawdź nasze kursy");
        cy.contains("Regulamin");
        cy.get('strong').contains("100% wpłaconej kwoty.");
    })

})