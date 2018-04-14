import * as distance from '../sources/distance.js';

import chai from 'chai';

const expect = chai.expect;

const sample = 4;

describe('#diagonal()', function () {

    it('should return the diagonal distance between two points', function () {

        expect(distance.diagonal([0, 0], [0, 0])).to.equal(0);

        expect(distance.diagonal([0, 0], [0, sample])).to.equal(sample);
        expect(distance.diagonal([0, 0], [sample, 0])).to.equal(sample);
        expect(distance.diagonal([0, 0], [0, -sample])).to.equal(sample);
        expect(distance.diagonal([0, 0], [-sample, 0])).to.equal(sample);

        expect(distance.diagonal([0, sample], [0, 0])).to.equal(sample);
        expect(distance.diagonal([sample, 0], [0, 0])).to.equal(sample);
        expect(distance.diagonal([0, -sample], [0, 0])).to.equal(sample);
        expect(distance.diagonal([-sample, 0], [0, 0])).to.equal(sample);

        expect(distance.diagonal([0, 0], [sample, sample])).to.equal(sample);
        expect(distance.diagonal([0, 0], [sample, -sample])).to.equal(sample);
        expect(distance.diagonal([0, 0], [-sample, -sample])).to.equal(sample);
        expect(distance.diagonal([0, 0], [-sample, sample])).to.equal(sample);

        expect(distance.diagonal([sample, sample], [0, 0])).to.equal(sample);
        expect(distance.diagonal([sample, -sample], [0, 0])).to.equal(sample);
        expect(distance.diagonal([-sample, -sample], [0, 0])).to.equal(sample);
        expect(distance.diagonal([-sample, sample], [0, 0])).to.equal(sample);
    });
});

describe('#euclidean()', function () {

    it('should return the euclidean distance between two points', function () {

        expect(distance.euclidean([0, 0], [0, 0])).to.equal(0);

        expect(distance.euclidean([0, 0], [0, sample])).to.equal(sample);
        expect(distance.euclidean([0, 0], [sample, 0])).to.equal(sample);
        expect(distance.euclidean([0, 0], [0, -sample])).to.equal(sample);
        expect(distance.euclidean([0, 0], [-sample, 0])).to.equal(sample);

        expect(distance.euclidean([0, sample], [0, 0])).to.equal(sample);
        expect(distance.euclidean([sample, 0], [0, 0])).to.equal(sample);
        expect(distance.euclidean([0, -sample], [0, 0])).to.equal(sample);
        expect(distance.euclidean([-sample, 0], [0, 0])).to.equal(sample);

        const hypothenuse = Math.sqrt(Math.pow(sample, 2) + Math.pow(sample, 2));

        expect(distance.euclidean([0, 0], [sample, sample])).to.equal(hypothenuse);
        expect(distance.euclidean([0, 0], [sample, -sample])).to.equal(hypothenuse);
        expect(distance.euclidean([0, 0], [-sample, -sample])).to.equal(hypothenuse);
        expect(distance.euclidean([0, 0], [-sample, sample])).to.equal(hypothenuse);

        expect(distance.euclidean([sample, sample], [0, 0])).to.equal(hypothenuse);
        expect(distance.euclidean([sample, -sample], [0, 0])).to.equal(hypothenuse);
        expect(distance.euclidean([-sample, -sample], [0, 0])).to.equal(hypothenuse);
        expect(distance.euclidean([-sample, sample], [0, 0])).to.equal(hypothenuse);
    });
});

describe('#manhattan()', function () {

    it('should return the manhattan distance between two points', function () {

        expect(distance.manhattan([0, 0], [0, 0])).to.equal(0);

        expect(distance.manhattan([0, 0], [0, sample])).to.equal(sample);
        expect(distance.manhattan([0, 0], [sample, 0])).to.equal(sample);
        expect(distance.manhattan([0, 0], [0, -sample])).to.equal(sample);
        expect(distance.manhattan([0, 0], [-sample, 0])).to.equal(sample);

        expect(distance.manhattan([0, sample], [0, 0])).to.equal(sample);
        expect(distance.manhattan([sample, 0], [0, 0])).to.equal(sample);
        expect(distance.manhattan([0, -sample], [0, 0])).to.equal(sample);
        expect(distance.manhattan([-sample, 0], [0, 0])).to.equal(sample);

        expect(distance.manhattan([0, 0], [sample, sample])).to.equal(sample + sample);
        expect(distance.manhattan([0, 0], [sample, -sample])).to.equal(sample + sample);
        expect(distance.manhattan([0, 0], [-sample, -sample])).to.equal(sample + sample);
        expect(distance.manhattan([0, 0], [-sample, sample])).to.equal(sample + sample);

        expect(distance.manhattan([sample, sample], [0, 0])).to.equal(sample + sample);
        expect(distance.manhattan([sample, -sample], [0, 0])).to.equal(sample + sample);
        expect(distance.manhattan([-sample, -sample], [0, 0])).to.equal(sample + sample);
        expect(distance.manhattan([-sample, sample], [0, 0])).to.equal(sample + sample);
    });
});
