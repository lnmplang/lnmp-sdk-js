/* tslint:disable */
/* eslint-disable */
export function dequantize_embedding(quantized_js: any): Float32Array;
export function network_decide(message_js: any, now_ms: number): string;
export function parse_checksum(hex: string): number;
export function spatial_encode_frame(frame_js: any): Uint8Array;
export function init(): void;
export function embedding_delta(base: Float32Array, updated: Float32Array): any;
export function envelope_unwrap(envelope_js: any): any;
export function encode_lnmp(record_js: any, canonical: boolean, type_hints: boolean): string;
export function quantize_embedding(vector: Float32Array, scheme_id: number): any;
export function transport_to_http(envelope_js: any): any;
export function sanitize_text(text: string): string;
export function format_checksum(checksum: number): string;
export function parse_lnmp(text: string): any;
export function lnmp_version(): string;
export function transport_from_http(headers_js: any): any;
export function llb_explain(record_js: any, dictionary_js: any): string;
export function network_importance(message_js: any, now_ms: number): number;
export function compute_checksum(fid: number, type_hint: string | null | undefined, value_js: any): number;
export function spatial_decode_frame(bytes: Uint8Array): any;
export function envelope_wrap(record_js: any, metadata_js: any): any;
export function sfe_score_context(envelope_js: any, now: bigint): any;
export function embedding_apply_delta(base: Float32Array, delta_js: any): Float32Array;
