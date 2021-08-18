const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Validators', () => {
      beforeEach(() => Recipe.sync({ force: true }));
      describe('title', () => {
        it('should throw an error if title is null', (done) => {
          Recipe.create({summary:'Bife de carne cubierto con pan rallado'})
            .then(() => done(new Error('It requires a valid title')))
            .catch(() => done());
        });
        it('should work when its a valid title', () => {
          Recipe.create({ title: 'Milanesa a la napolitana', summary:'Bife de carne cubierto con pan rallado' });
        });
      });
      describe('summary', () => {
        it('should throw an error if summary is null', (done) => {
          Recipe.create({title: 'Milanesa a la napolitana'})
            .then(() => done(new Error('It requires a valid summary')))
            .catch(() => done());
        });
        it('should work when its a valid summary', () => {
          Recipe.create({title: 'Milanesa a la napolitana', summary:'Bife de carne cubierto con pan rallado'});
        });
      });
      describe('title value', () => {
        it('should throw an error if summary is not a String', (done) => {
          Recipe.create({title: [`milanesa`], summary:'Bife de carne cubierto con pan rallado'})
            .then(() => done(new Error('Title must be a String')))
            .catch(() => done());
        });
        it('should work when Title is a String', () => {
          Recipe.create({title: 'Milanesa a la napolitana', summary:'Bife de carne cubierto con pan rallado'});
        });
      });
      describe('summary value', () => {
        it('should throw an error if summary is not a String', (done) => {
          Recipe.create({title: 'Milanesa a la napolitana', summary: ['summary']})
            .then(() => done(new Error('Summary must be a String')))
            .catch(() => done());
        });
        it('should work when summary is a String', () => {
          Recipe.create({title: 'Milanesa a la napolitana', summary:'Bife de carne cubierto con pan rallado'});
        });
      })})})
