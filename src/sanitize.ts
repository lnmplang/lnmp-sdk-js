import { sanitize_text } from './wasm';

export class Sanitizer {
    /**
     * Sanitizes LNMP text input by normalizing whitespace and fixing quotes.
     */
    static sanitize(text: string): string {
        return sanitize_text(text);
    }
}
