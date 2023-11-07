/// <reference types="cypress" />
import { data } from '../fixtures/data.json';
import { homePage, productSearchPage } from "../support/Pages";

describe('Product Search', () => {

  before(() => {
    cy.intercept({
      method: "GET",
      url: "/wp-admin/admin-ajax.php",
      query: {
        term: 'Jacket'
      }
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: `${req.query.callback}(
          ${JSON.stringify(
            data.autocompleteSearchData
          )}
        )`
        }
      )
    }
    )
  });
  beforeEach(() => {
    cy.visit('/')
  });

  it('autocomplete product item should be return correctly', () => {
    homePage.searchMagnifier()
    productSearchPage.search('Jacket')
    productSearchPage.productList.first().should('have.attr', 'title', 'Typhon Performance Fleece-lined Jacket')
  });
});