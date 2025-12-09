import { parse_lnmp } from './wasm';
import type { LnmpRecord } from './types';

export class Parser {
    private input: string;

    constructor(input: string) {
        this.input = input;
    }

    /**
     * Parse LNMP text format to record
     */
    parseRecord(): LnmpRecord {
        return parse_lnmp(this.input);
    }
}
