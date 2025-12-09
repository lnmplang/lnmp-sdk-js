
import { Parser } from '../parser';

describe('LNMP Package Smoke Test', () => {
    it('should explicitly export Parser class', () => {
        expect(Parser).toBeDefined();
    });

    it('should be able to instantiate Parser', () => {
        const parser = new Parser("F1:i=1");
        expect(parser).toBeDefined();
    });
});
