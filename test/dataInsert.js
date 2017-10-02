const mocha = require('mocha');
const { expect } = require('chai');
const { normalizeInts } = require('../src/searchAndInsert');

describe('Unit tests for methods that play a part in fighter search and data persistence', () => {
    it('Tests correct execution of normalizeInts', () => {
        const mockSearchResult = {
             wins: {
                total: 0,
                knockouts: 'string',
                submissions: 0,
                decisions: 0,
                others: 0
            },
            losses: {
                total: 0,
                knockouts: 'string',
                submissions: 0,
                decisions: 0,
                others: 0
            },
            strikes: {
                attempted: 0,
                successful: 0,
                standing: 0,
                clinch: 0,
                ground: 0
            },
            takedowns: {
                attempted: 0,
                successful: 0,
                submissions: 0,
                passes: 'string',
                sweeps: 0
            },
        }

        const returnedFromMethod = normalizeInts(mockSearchResult);
            
        expect(returnedFromMethod.wins).to.deep.equal({
            total: 0,
            knockouts: 0,
            submissions: 0,
            decisions: 0,
            others: 0
        });
        expect(returnedFromMethod.losses).to.deep.equal({
            total: 0,
            knockouts: 0,
            submissions: 0,
            decisions: 0,
            others: 0
        });
        expect(returnedFromMethod.strikes).to.deep.equal({
            attempted: 0,
            successful: 0,
            standing: 0,
            clinch: 0,
            ground: 0
        });
        expect(returnedFromMethod.takedowns).to.deep.equal({
            attempted: 0,
            successful: 0,
            submissions: 0,
            passes: 0,
            sweeps: 0
        });

    });
});