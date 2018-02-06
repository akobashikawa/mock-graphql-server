const schemaString = `
  type Query {
    Centers: [Center]
  }

  type Center {
    id: Int!
    name: String!
    Services: [Service]
  }

  type Service {
      id: Int!
      description: String!
      Professionals: [Professional]
  }

  type Professional {
      id: Int!
      fullName: String
      description: String
      cmp: String
      image: [Image]
      Availables: [Availables]
  }

  type Image {
      url: String
  }

  type Availables {
      id: Int!
      Dates: [Date]
  }

  type Date {
      day: String
      hours: [String]
  }
  
`;
module.exports = schemaString;
