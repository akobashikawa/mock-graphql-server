const { MockList } = require('graphql-tools')
const casual = require('casual');
// https://github.com/boo1ean/casual

casual.define('hours_list', () => {
  return [
    '09:00', '09:20', '09:40',
    '12:00', '12:20', '12:40'
  ];
});

const mocks = {
  Center: () => ({
    name: casual.company_name
  }),
  Service: () => ({
    description: casual.words((n = 2))
  }),
  Professional: () => ({
    fullName: casual.full_name,
    cmp: casual.numerify("#####"),
    description: casual.description
  }),
  Image: () => ({
    url: 'http://lorempixel.com/400/400/people'
  }),
  Date: () => ({
    day: casual.date((format = "YYYY-MM-DD")),
    hours: casual.hours_list
  })
};

module.exports = mocks;