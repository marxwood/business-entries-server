const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        places: [String!]!
        place(id: ID!): Place
    }

    type Place {
        displayed_what: String!
        displayed_where: String!
        opening_hours: OpeningHours!
    }

    type OpeningHours {
        days: Days!
        closed_on_hollidays: Boolean!
        open_by_arrangement: Boolean!
    }

    type Days {
        monday: [OpeningHoursRange]
        tuesday: [OpeningHoursRange]
        wednesday: [OpeningHoursRange]
        thursday: [OpeningHoursRange]
        friday: [OpeningHoursRange]
        saturday: [OpeningHoursRange]
        sunday: [OpeningHoursRange]
    }

    type OpeningHoursRange {
        start: String!
        end: String!
        type: AvailabilityType!
    }

    enum AvailabilityType {
        OPEN
        CLOSED
    }
`);

module.exports = schema;
