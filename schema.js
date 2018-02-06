const schemaString = `
  type Query {
    centers: [Center]
    center(id: Int): Center
    professional(id: Int): Professional
    professionalByService(id: Int): [Professional]
  }

  type Center {
    id: Int!
    name: String!
    services: [Service]
    professionals: [Professional]
  }

  type Service {
      id: Int!
      description: String!
      professionals: [Professional]
  }

  type Professional {
      id: Int!
      fullName: String
      description: String
      cmp: String
      image: [Image]
      availables: [Availables]
  }

  type Image {
      url: String
  }

  type Availables {
      id: Int!
      dates: [Date]
  }

  type Date {
      day: String
      hours: [String]
  }
  
`;
module.exports = schemaString;
