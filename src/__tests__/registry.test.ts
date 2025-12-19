/**
 * FID Registry Tests
 * 
 * Verify that the FID constants match the official LNMP protocol registry
 */

import { FID, FID_NAMES, Fid, FidKey } from '../registry';

describe('FID Registry', () => {
    describe('FID Constants', () => {
        it('should export FID constant object', () => {
            expect(FID).toBeDefined();
            expect(typeof FID).toBe('object');
        });

        it('should have core FIDs (0-1023)', () => {
            expect(FID.ENTITY_ID).toBe(1);
            expect(FID.TIMESTAMP).toBe(2);
            expect(FID.VERSION).toBe(3);
            expect(FID.SEQUENCE).toBe(4);
            expect(FID.SOURCE).toBe(5);
            expect(FID.IS_ACTIVE).toBe(7);
            expect(FID.USER_ID).toBe(12);
            expect(FID.NAME).toBe(20);
            expect(FID.PRIORITY).toBe(32);
            expect(FID.SCORE).toBe(41);
        });

        it('should have trace IDs (80-99)', () => {
            expect(FID.TRACE_ID).toBe(80);
            expect(FID.SPAN_ID).toBe(81);
            expect(FID.PARENT_SPAN_ID).toBe(82);
            expect(FID.SERVICE_NAME).toBe(84);
        });

        it('should have timestamp precision FIDs (100-119)', () => {
            expect(FID.TIMESTAMP_NS).toBe(100);
            expect(FID.DURATION_MS).toBe(101);
            expect(FID.CREATED_AT).toBe(105);
            expect(FID.UPDATED_AT).toBe(106);
        });

        it('should have spatial FIDs (256-279)', () => {
            expect(FID.POSITION).toBe(256);
            expect(FID.ROTATION).toBe(257);
            expect(FID.VELOCITY).toBe(258);
            expect(FID.QUATERNION).toBe(260);
        });

        it('should have geo/location FIDs (280-299)', () => {
            expect(FID.LATITUDE).toBe(280);
            expect(FID.LONGITUDE).toBe(281);
            expect(FID.ALTITUDE).toBe(282);
            expect(FID.HEADING).toBe(283);
        });

        it('should have network/HTTP FIDs (300-349)', () => {
            expect(FID.URL).toBe(300);
            expect(FID.HOSTNAME).toBe(301);
            expect(FID.PORT).toBe(302);
            expect(FID.HTTP_METHOD).toBe(304);
            expect(FID.HTTP_STATUS_CODE).toBe(305);
        });

        it('should have embedding FIDs (512-767)', () => {
            expect(FID.EMBEDDING).toBe(512);
            expect(FID.EMBEDDING_MODEL).toBe(513);
            expect(FID.EMBEDDING_DIM).toBe(514);
        });

        it('should have robotics FIDs (520-560)', () => {
            expect(FID.ANGULAR_VELOCITY).toBe(520);
            expect(FID.JOINT_POSITIONS).toBe(524);
            expect(FID.WAYPOINTS).toBe(528);
        });

        it('should have sensor FIDs (768+)', () => {
            expect(FID.TEMPERATURE).toBe(768);
            expect(FID.HUMIDITY).toBe(769);
            expect(FID.PRESSURE).toBe(770);
            expect(FID.BATTERY_LEVEL).toBe(771);
        });

        it('should have messaging FIDs (1024+)', () => {
            expect(FID.MESSAGE_KIND).toBe(1024);
            expect(FID.TTL).toBe(1025);
            expect(FID.QOS_PRIORITY).toBe(1026);
        });

        it('should have ML/LLM FIDs (1100+)', () => {
            expect(FID.MODEL_ID).toBe(1100);
            expect(FID.PROMPT).toBe(1111);
            expect(FID.COMPLETION).toBe(1112);
            expect(FID.LLM_TEMPERATURE).toBe(1113);
        });

        it('should have all FID values as numbers', () => {
            Object.values(FID).forEach(value => {
                expect(typeof value).toBe('number');
                expect(value).toBeGreaterThanOrEqual(0);
                expect(value).toBeLessThanOrEqual(65535);
            });
        });

        it('should have no duplicate FID values', () => {
            const values = Object.values(FID);
            const uniqueValues = new Set(values);
            expect(uniqueValues.size).toBe(values.length);
        });

        it('should have uppercase snake_case keys', () => {
            Object.keys(FID).forEach(key => {
                expect(key).toMatch(/^[A-Z0-9_]+$/);
            });
        });
    });

    describe('FID_NAMES Reverse Lookup', () => {
        it('should export FID_NAMES object', () => {
            expect(FID_NAMES).toBeDefined();
            expect(typeof FID_NAMES).toBe('object');
        });

        it('should provide reverse lookup for core FIDs', () => {
            expect(FID_NAMES[1]).toBe('entity_id');
            expect(FID_NAMES[2]).toBe('timestamp');
            expect(FID_NAMES[12]).toBe('user_id');
            expect(FID_NAMES[20]).toBe('name');
        });

        it('should have lowercase snake_case values', () => {
            Object.values(FID_NAMES).forEach(name => {
                expect(typeof name).toBe('string');
                expect(name).toMatch(/^[a-z0-9_]+$/);
            });
        });

        it('should map to corresponding FID constants', () => {
            expect(FID_NAMES[FID.USER_ID]).toBe('user_id');
            expect(FID_NAMES[FID.TIMESTAMP]).toBe('timestamp');
            expect(FID_NAMES[FID.EMBEDDING]).toBe('embedding');
            expect(FID_NAMES[FID.POSITION]).toBe('position');
        });

        it('should have same number of entries as FID', () => {
            expect(Object.keys(FID_NAMES).length).toBe(Object.keys(FID).length);
        });
    });

    describe('Type Exports', () => {
        it('should export Fid type', () => {
            const fid: Fid = 12;
            expect(typeof fid).toBe('number');
        });

        it('should export FidKey type', () => {
            const key: FidKey = 'USER_ID';
            expect(FID[key]).toBe(12);
        });
    });

    describe('Registry Coverage', () => {
        it('should cover all FID ranges', () => {
            const values = Object.values(FID);

            // Core range (0-1023)
            const coreCount = values.filter(v => v >= 0 && v <= 1023).length;
            expect(coreCount).toBeGreaterThan(0);

            // Standard range (1024-16383)
            const standardCount = values.filter(v => v >= 1024 && v <= 16383).length;
            expect(standardCount).toBeGreaterThan(0);
        });

        it('should have reasonable registry size', () => {
            const count = Object.keys(FID).length;
            expect(count).toBeGreaterThan(100); // At least 100+ FIDs
            expect(count).toBeLessThan(500); // But not overly bloated
        });
    });

    describe('Usage Examples', () => {
        it('should work with type-safe field creation', () => {
            const userIdField = {
                fid: FID.USER_ID,
                value: 12345
            };

            expect(userIdField.fid).toBe(12);
            expect(userIdField.value).toBe(12345);
        });

        it('should support reverse lookup for debugging', () => {
            const fid = FID.TIMESTAMP;
            const name = FID_NAMES[fid];

            expect(name).toBe('timestamp');
        });

        it('should work with all data domains', () => {
            // Identity
            expect(FID.ENTITY_ID).toBeDefined();

            // Spatial
            expect(FID.POSITION).toBeDefined();
            expect(FID.VELOCITY).toBeDefined();

            // ML/AI
            expect(FID.EMBEDDING).toBeDefined();
            expect(FID.PROMPT).toBeDefined();

            // IoT
            expect(FID.TEMPERATURE).toBeDefined();
            expect(FID.BATTERY_LEVEL).toBeDefined();

            // Networking
            expect(FID.MESSAGE_KIND).toBeDefined();
            expect(FID.TTL).toBeDefined();
        });
    });
});
