var expect = chai.expect;

describe('Card object tests', function() {
  var card;

  beforeEach(function() {
    card = new Card('spades', 'jack');
  });

  describe('constructor', function() {

    it('card should exist', function() {
      expect(card).to.be.ok;
    });

    it('card should have rank property', function() {
      expect(card).to.have.property('rank');
    });

    it('card should have suit property', function() {
      expect(card).to.have.property('suit');
    });

    it('card suit property matches beforeEach', function() {
      expect(card.suit).to.equal('spades');
    });

    it('card rank property matches beforeEach', function() {
      expect(card.rank).to.equal('jack');
    });

  });
});
