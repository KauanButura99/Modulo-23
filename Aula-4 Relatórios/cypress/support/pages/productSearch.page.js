/// <reference types="cypress" />
export const productSearchPage = {
  get autocompleteInput() { return cy.get('#tbay-header .tbay-search') },
  get productList() { return cy.get(`.ui-menu-item:not([class^="list-header"]) > a`), { forrce: true } },
  search(product) {
    this.autocompleteInput.type(product)
  }
}