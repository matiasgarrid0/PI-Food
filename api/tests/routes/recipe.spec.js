/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanea a la napolitana',
  summary: 'resumen'
};



describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    ).timeout(10000);
    it('res content type must be a json', () =>{  
        return agent.get('/recipes')
        .expect(200)
          .expect('Content-Type', /json/)
      }
    ).timeout(10000);
    // it('When name is equal to milanesa, it should get the recipe created  ', () =>{
    //   return agent.get('/recipes')
    //   .expect(200)
    //     .expect('Content-Type', /json/)
    //     .expect(req.body[0].summary).to.be.equal('resumen')
    // }
    // //   agent
    // //   .get('/recipes?name=milanesa')
    // //   .expect(200)
    // //   .expect('Content-Type', /json/)
    // //   .expect(res.body[0].summary).to.be.equal('resumen')
    // ).timeout(10000);
  });
});
