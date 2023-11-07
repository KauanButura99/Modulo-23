export const productSearchPage = {
  get autocomplteInput() { return cy.get('#tbay-header .tbay-search') },
  get productList() { return cy.get(`.ui-menu-item:not([class^="list-header"]) > a`) },
  search(product) {
    this.autocomplteInput.type(product)
  }
}