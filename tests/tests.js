mocha.setup('bdd');
const { expect } = chai;

describe('This is a describe', function () {
    it('sample test that should pass', function () {
        expect(true).to.equal(true);
    });
    it('sample test that should fail', function () {
        expect(true).to.equal(false);
    });
});

mocha.run();