const { printSchema } = require('graphql');

const schemaBuild = require('./index');

describe('ensure static schema snapshot', () => {
    const schema = printSchema(schemaBuild);

    test('it should contain types', () => {
        expect(schema).toContain('type Query');
        expect(schema).toContain('type Place');
        expect(schema).toContain('type OpeningHours');
        expect(schema).toContain('type Days');
        expect(schema).toContain('type OpeningHoursRange');
        expect(schema).toContain('enum AvailabilityType');
    });

    test('it should not contain unregistered types', () => {
        expect(schema).not.toContain('type UndefinedType');
    });
});