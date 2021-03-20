const { printSchema } = require('graphql');

const schemaBuild = require('./index');

describe('ensure static schema snapshot', () => {
    const schema = printSchema(schemaBuild);

    it('contains types', () => {
        expect(schema).toContain('type Query');
        expect(schema).toContain('type Place');
        expect(schema).toContain('type OpeningHours');
        expect(schema).toContain('type Days');
        expect(schema).toContain('type OpeningHoursRange');
        expect(schema).toContain('enum AvailabilityType');
    });

    it('does not contain unregistered types', () => {
        expect(schema).not.toContain('type UndefinedType');
    });
});
