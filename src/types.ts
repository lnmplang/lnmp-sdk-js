// WASM bindings do not export strict types, so we define them here.
export type FieldId = number;
export type LnmpValue = any;
export type LnmpField = any;
export type LnmpRecord = any;
export type LnmpEnvelope = any;
export type EnvelopeMetadata = any;
export type VectorDelta = any;
export type QuantScheme = any;
export type QuantizedVector = any;

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

export type RoutingDecision = string;

export type SpatialFrame = any;
export type NetMessage = any;
export type ContextProfile = any;
