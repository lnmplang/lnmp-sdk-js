// Re-export types from WASM bindings
export type { LnmpRecord, LnmpField, LnmpValue, FieldId } from '@lnmp/wasm-bindings';

// Additional TypeScript-specific utility types
export type ValueType =
    | 'Int'
    | 'Float'
    | 'Bool'
    | 'String'
    | 'StringArray'
    | 'IntArray'
    | 'FloatArray'
    | 'BoolArray'
    | 'NestedRecord'
    | 'NestedArray'
    | 'Embedding'
    | 'EmbeddingDelta'
    | 'QuantizedEmbedding';
