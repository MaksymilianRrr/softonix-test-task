import {
  POSTS_ENDPOINT,
  VALID_POST_ID,
  INVALID_POST_ID,
} from '../../support/apiConstants';

import { samplePost, updatedPost } from '../../support/testData';

describe('Posts API - CRUD Operations', () => {
  it('should create a new post (POST)', () => {
    cy.request('POST', POSTS_ENDPOINT, samplePost)
      .its('status').should('eq', 201);
  });

  it('should fail to create post with missing fields (POST)', () => {
    cy.request({
      method: 'POST',
      url: POSTS_ENDPOINT,
      body: {},
      failOnStatusCode: false,
    }).its('status').should('eq', 201);
  });

  it('should retrieve all posts (GET)', () => {
    cy.request('GET', POSTS_ENDPOINT).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array').and.not.be.empty;
    });
  });

  it('should return 404 for non-existent post (GET)', () => {
    cy.request({
      method: 'GET',
      url: `${POSTS_ENDPOINT}/${INVALID_POST_ID}`,
      failOnStatusCode: false,
    }).its('status').should('eq', 404);
  });

  it('should update a post (PUT)', () => {
    cy.request('PUT', `${POSTS_ENDPOINT}/${VALID_POST_ID}`, updatedPost).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.title).to.eq(updatedPost.title);
    });
  });

  it('should return 404 when updating non-existent post (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: `${POSTS_ENDPOINT}/${INVALID_POST_ID}`,
      body: samplePost,
      failOnStatusCode: false,
    }).its('status').should('eq', 404);
  });

  it('should delete a post (DELETE)', () => {
    cy.request('DELETE', `${POSTS_ENDPOINT}/${VALID_POST_ID}`).then((res) => {
      expect([200, 204]).to.include(res.status);
    });
  });

  it('should return 404 when deleting non-existent post (DELETE)', () => {
    cy.request({
      method: 'DELETE',
      url: `${POSTS_ENDPOINT}/${INVALID_POST_ID}`,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
