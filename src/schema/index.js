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
        place_feedback_summary: PlaceFeedbackSummary!
        addresses: [Address!]!
        opening_hours: OpeningHours!
    }

    type PlaceFeedbackSummary {
        positive_recommendation_percentage: Int!
    }

    type Address {
        where: Where!
    }

    type Where {
        geography: Geography!
    }

    type Geography {
        location: Location!
    }

    type Location {
        latlon: String!
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
