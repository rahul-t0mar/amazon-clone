import {formatCurrency} from '../scripts/utilities/money.js';

describe('Test Suite: Format Currency', ()=>{
    it('Converts cents into dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95')
    });
    it('Testing if it works with 0', ()=>{
        expect(formatCurrency(0)).toEqual('0.00')
    });
    it('Testing for rounding off', ()=>{
        expect(formatCurrency(2000.8)).toEqual('20.01')
    });
    it('Testing if it works with .5', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });
    it('Testing for round off if decimal is less than 5', ()=>{
        expect(formatCurrency(2000.1)).toEqual('20.00')
    });
});